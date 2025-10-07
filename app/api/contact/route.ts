import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  name: string
  email: string
  company: string
  phone: string
  service: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const formData: ContactFormData = await request.json()
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email using Resend with styled HTML
    const { data, error } = await resend.emails.send({
      from: 'tony@cosmicjs.com',
      to: 'tony@cosmicjs.com',
      subject: `New Contact Form Submission from ${formData.name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contact Form Submission</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6;">
            <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f3f4f6;">
              <tr>
                <td align="center" style="padding: 40px 20px;">
                  <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    <!-- Header -->
                    <tr>
                      <td style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); padding: 40px 30px; border-radius: 16px 16px 0 0; text-align: center;">
                        <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                          New Contact Form Submission
                        </h1>
                        <p style="margin: 10px 0 0; color: #dbeafe; font-size: 16px;">
                          Professional Services Website
                        </p>
                      </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                      <td style="padding: 40px 30px;">
                        <p style="margin: 0 0 30px; color: #374151; font-size: 16px; line-height: 1.6;">
                          You have received a new contact form submission with the following details:
                        </p>
                        
                        <!-- Contact Details -->
                        <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                          <tr>
                            <td style="padding: 16px; background-color: #f9fafb; border-left: 4px solid #2563eb;">
                              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                <tr>
                                  <td style="padding: 8px 0;">
                                    <strong style="color: #1f2937; font-size: 14px; display: block; margin-bottom: 4px;">Full Name</strong>
                                    <span style="color: #374151; font-size: 16px;">${formData.name}</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="padding: 8px 0;">
                                    <strong style="color: #1f2937; font-size: 14px; display: block; margin-bottom: 4px;">Email Address</strong>
                                    <a href="mailto:${formData.email}" style="color: #2563eb; font-size: 16px; text-decoration: none;">${formData.email}</a>
                                  </td>
                                </tr>
                                ${formData.company ? `
                                <tr>
                                  <td style="padding: 8px 0;">
                                    <strong style="color: #1f2937; font-size: 14px; display: block; margin-bottom: 4px;">Company</strong>
                                    <span style="color: #374151; font-size: 16px;">${formData.company}</span>
                                  </td>
                                </tr>
                                ` : ''}
                                ${formData.phone ? `
                                <tr>
                                  <td style="padding: 8px 0;">
                                    <strong style="color: #1f2937; font-size: 14px; display: block; margin-bottom: 4px;">Phone Number</strong>
                                    <a href="tel:${formData.phone}" style="color: #2563eb; font-size: 16px; text-decoration: none;">${formData.phone}</a>
                                  </td>
                                </tr>
                                ` : ''}
                                ${formData.service ? `
                                <tr>
                                  <td style="padding: 8px 0;">
                                    <strong style="color: #1f2937; font-size: 14px; display: block; margin-bottom: 4px;">Service Interested In</strong>
                                    <span style="color: #374151; font-size: 16px;">${formData.service}</span>
                                  </td>
                                </tr>
                                ` : ''}
                              </table>
                            </td>
                          </tr>
                        </table>
                        
                        <!-- Message -->
                        <div style="margin-bottom: 30px;">
                          <strong style="color: #1f2937; font-size: 14px; display: block; margin-bottom: 12px;">Message</strong>
                          <div style="background-color: #f9fafb; border-left: 4px solid #2563eb; padding: 20px; border-radius: 0 8px 8px 0;">
                            <p style="margin: 0; color: #374151; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${formData.message}</p>
                          </div>
                        </div>
                        
                        <!-- Action Button -->
                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                          <tr>
                            <td align="center" style="padding: 20px 0;">
                              <a href="mailto:${formData.email}" style="display: inline-block; padding: 14px 32px; background-color: #2563eb; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px;">
                                Reply to ${formData.name}
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                      <td style="padding: 30px; background-color: #f9fafb; border-radius: 0 0 16px 16px; text-align: center; border-top: 1px solid #e5e7eb;">
                        <p style="margin: 0; color: #6b7280; font-size: 14px; line-height: 1.6;">
                          This email was sent from your Professional Services website contact form.
                        </p>
                        <p style="margin: 10px 0 0; color: #9ca3af; font-size: 12px;">
                          © ${new Date().getFullYear()} Professional Services Company. All rights reserved.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}