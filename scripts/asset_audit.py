import json
import os
from pathlib import Path

try:
    from PIL import Image
except ImportError as exc:  # pragma: no cover - helper script
    raise SystemExit(
        "Pillow is required for asset auditing. Install via `pip install Pillow`."
    ) from exc


ASSET_DIR = Path("old site") / "Beverly LIQUOR LICENCE_files"
OUTPUT_PATH = Path("scripts") / "asset_audit.json"


def collect_assets() -> list[dict]:
    if not ASSET_DIR.exists():
        raise SystemExit(f"Asset directory not found: {ASSET_DIR}")

    assets: list[dict] = []
    for file_path in sorted(ASSET_DIR.iterdir()):
        if not file_path.is_file():
            continue
        ext = file_path.suffix.lower()
        if ext not in {".png", ".jpg", ".jpeg", ".svg"}:
            continue

        width = height = None
        if ext in {".png", ".jpg", ".jpeg"}:
            try:
                with Image.open(file_path) as img:
                    width, height = img.size
            except Exception:
                pass

        assets.append(
            {
                "file": file_path.name,
                "ext": ext,
                "size_kb": round(file_path.stat().st_size / 1024, 1),
                "width": width,
                "height": height,
            }
        )
    return assets


def main() -> None:
    assets = collect_assets()
    OUTPUT_PATH.write_text(json.dumps(assets, indent=2))
    print(f"Wrote {len(assets)} asset records to {OUTPUT_PATH}")


if __name__ == "__main__":
    main()

