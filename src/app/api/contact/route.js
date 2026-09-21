import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, subject, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Server-side log for the message submission
    console.log(`[Contact Form Received] From: ${name} (${email}), Subject: ${subject || 'N/A'}`);
    console.log(`Message: ${message}`);

    return NextResponse.json({
      success: true,
      message: 'Message registered successfully',
    });
  } catch (error) {
    console.error('Error handling contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

