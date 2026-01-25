import { NextResponse } from "next/server";
import { Resend } from "resend";

const FROM_EMAIL = "info@nathanreardon.com";
const SUBJECT = "R-Board Partnership Inquiry";
const EMAIL_REGEX = /^\S+@\S+\.\S+$/;

export const runtime = "nodejs";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const buildHtml = (params: {
  name: string;
  organization: string;
  email: string;
  message: string;
}) => {
  const { name, organization, email, message } = params;
  return `<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>R-Board Partnership Inquiry</title>
  </head>
  <body style="margin:0;padding:0;background-color:#0b0f14;color:#e6edf3;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color:#0b0f14;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;background-color:#121a22;border-radius:20px;border:1px solid rgba(255,255,255,0.08);overflow:hidden;">
            <tr>
              <td style="padding:24px 28px;border-bottom:1px solid rgba(255,255,255,0.08);">
                <p style="margin:0;font-size:12px;letter-spacing:0.3em;text-transform:uppercase;color:rgba(255,255,255,0.6);">New Inquiry</p>
                <h1 style="margin:12px 0 0;font-size:20px;font-weight:600;color:#f4f6f8;">R-Board Partnership Inquiry</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 28px;">
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="font-size:14px;">
                  <tr>
                    <td style="padding:8px 0;color:rgba(255,255,255,0.7);width:120px;">Name</td>
                    <td style="padding:8px 0;color:#f4f6f8;">${escapeHtml(name)}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;color:rgba(255,255,255,0.7);">Organization</td>
                    <td style="padding:8px 0;color:#f4f6f8;">${escapeHtml(
                      organization || "Not provided"
                    )}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;color:rgba(255,255,255,0.7);">Email</td>
                    <td style="padding:8px 0;color:#f4f6f8;">${escapeHtml(email)}</td>
                  </tr>
                </table>
                <div style="margin-top:20px;padding:16px;border-radius:14px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);">
                  <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.5);">Message</p>
                  <p style="margin:0;font-size:14px;line-height:1.5;color:#e6edf3;white-space:pre-line;">${escapeHtml(
                    message
                  )}</p>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 28px;border-top:1px solid rgba(255,255,255,0.08);font-size:12px;color:rgba(255,255,255,0.5);">
                Reply directly to this email to respond to the sender.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
};

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const contactTo = process.env.CONTACT_TO;

  if (!apiKey || !contactTo) {
    return NextResponse.json(
      { error: "Missing RESEND_API_KEY or CONTACT_TO environment variables." },
      { status: 500 }
    );
  }

  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 }
    );
  }

  const { name, organization, email, message } = body as Record<string, string>;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Email address is invalid." }, { status: 400 });
  }

  const safeName = name.trim().slice(0, 200);
  const safeOrganization = (organization || "").trim().slice(0, 200);
  const safeEmail = email.trim().slice(0, 320);
  const safeMessage = message.trim().slice(0, 4000);

  const text = [
    "New partnership inquiry:",
    "",
    `Name: ${safeName}`,
    `Organization: ${safeOrganization || "Not provided"}`,
    `Email: ${safeEmail}`,
    "",
    safeMessage,
  ].join("\n");

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: `R-Board <${FROM_EMAIL}>`,
    to: [contactTo],
    reply_to: safeEmail,
    subject: SUBJECT,
    text,
    html: buildHtml({
      name: safeName,
      organization: safeOrganization,
      email: safeEmail,
      message: safeMessage,
    }),
  });

  if (error) {
    return NextResponse.json(
      { error: error.message || "Failed to send email." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
