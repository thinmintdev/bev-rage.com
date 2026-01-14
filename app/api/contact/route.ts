import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, date, time, headCount, eventType, additionalInfo } = body;

    // Validate required fields
    if (!name || !email || !phone || !date || !time || !headCount || !eventType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format the email content
    const emailHtml = `
      <h2>New Event Inquiry from ${name}</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="tel:${phone}">${phone}</a></td>
        </tr>
        ${company ? `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Company:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${company}</td>
        </tr>
        ` : ''}
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Event Date:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${date}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Event Time:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${time}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Head Count:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${headCount}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Event Type:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${eventType}</td>
        </tr>
        ${additionalInfo ? `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Additional Info:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${additionalInfo}</td>
        </tr>
        ` : ''}
      </table>
    `;

    const { data, error } = await resend.emails.send({
      from: 'Bev-Rage Website <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL || 'events@bevrage.com'],
      replyTo: email,
      subject: `New Event Inquiry: ${eventType} - ${name}`,
      html: emailHtml,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
