import fs from "fs";
import path from "path";

export interface MarkdownMetadata {
  [key: string]: string;
}

export interface MarkdownDoc {
  slug: string;
  title: string;
  metadata: MarkdownMetadata;
  content: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content");

export function getMarkdownContent(category: string, slug: string): MarkdownDoc | null {
  const filePath = path.join(CONTENT_DIR, category, `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const lines = fileContent.split("\n");
  
  const metadata: MarkdownMetadata = {};
  let contentStartIndex = 0;
  let title = "";

  // Parse Title (first H1)
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith("# ")) {
      title = line.replace("# ", "").trim();
      break; // Title found
    }
  }

  // Parse Metadata (lines before the first separator "---")
  let inMetadataSection = true;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line === "---") {
      contentStartIndex = i + 1;
      inMetadataSection = false;
      break;
    }

    // Skip empty lines and title
    if (!line || line.startsWith("# ")) continue;

    // Parse Key: Value (handling bolding like **Key:** Value)
    const match = line.match(/^\*\*?([a-zA-Z0-9\s]+):\*\*?\s*(.+)$/);
    if (match) {
      const key = match[1].trim();
      const value = match[2].trim();
      // Convert keys to camelCase or keep as is? Let's normalize slightly
      const normalizedKey = key.toLowerCase().replace(/\s+/g, "_");
      metadata[normalizedKey] = value;
    }
  }

  const content = lines.slice(contentStartIndex).join("\n").trim();

  return {
    slug,
    title,
    metadata,
    content,
  };
}

export function getAllSlugs(category: string): string[] {
  const dirPath = path.join(CONTENT_DIR, category);
  if (!fs.existsSync(dirPath)) return [];

  const files = fs.readdirSync(dirPath);
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(".md", ""));
}

