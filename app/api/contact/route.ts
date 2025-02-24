import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend for email sending
const resend = new Resend(process.env.RESEND_API_KEY);

// Email template for contact form submissions
const createEmailContent = (formData: any) => `
Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service Required: ${formData.service}
Message: ${formData.message}
`;

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'service', 'message'];
    for (const field of requiredFields) {
      if (!formData[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate phone number (strict validation for Indian numbers)
    const phoneRegex = /^(\+91|0|91)?[6789]\d{9}$/;
    if (!phoneRegex.test(formData.phone.replace(/[\s\-]/g, ''))) {
      return NextResponse.json(
        { error: 'Please enter a valid Indian mobile number (10 digits starting with 6-9)' },
        { status: 400 }
      );
    }

    // Send email notification
    await resend.emails.send({
      from: 'onboarding@resend.dev', // Default verified sender from Resend
      to: 'sainadh4335@gmail.com',
      subject: 'New Contact Form Submission',
      text: createEmailContent(formData),
    });

    // Store in database (you'll need to add your database logic here)
    // For example with Prisma:
    // await prisma.contact.create({
    //   data: formData
    // });

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
