import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;

    // Validate required fields
    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: Implement actual email sending logic here
    // For now, we'll just log the submission and return success
    // You can integrate with:
    // - SendGrid
    // - Resend
    // - Nodemailer
    // - Your email service provider
    
    console.log("Contact form submission:", {
      name,
      phone,
      email,
      service,
      message,
      timestamp: new Date().toISOString(),
    });

    // In a production environment, you would send an email here
    // Example with a service like Resend:
    // await resend.emails.send({
    //   from: 'contact@yourdomain.com',
    //   to: 'bajeursen.liquorlicences@gmail.com',
    //   subject: `New Contact Form Submission from ${name}`,
    //   html: `<p>Name: ${name}</p><p>Phone: ${phone}</p><p>Email: ${email}</p><p>Service: ${service}</p><p>Message: ${message}</p>`,
    // });

    return NextResponse.json(
      { 
        success: true,
        message: "Thank you for your enquiry. We'll be in touch soon." 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process your request. Please try again later." },
      { status: 500 }
    );
  }
}

