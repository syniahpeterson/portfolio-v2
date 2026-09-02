import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getText(value, maximumLength) {
  if (typeof value !== "string") {
    return null;
  }

  const text = value.trim();

  return text && text.length <= maximumLength ? text : null;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed.",
    });
  }

  try {
    const { website } = req.body || {};

    if (typeof website === "string" && website.trim()) {
      return res.status(200).json({ success: true });
    }

    const name = getText(req.body?.name, 100);
    const email = getText(req.body?.email, 254);
    const subject = getText(req.body?.subject, 150);
    const message = getText(req.body?.message, 5000);

    if (
      !name ||
      !email ||
      !emailPattern.test(email) ||
      !subject ||
      /[\r\n]/.test(subject) ||
      !message ||
      message.length < 10
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide valid contact details.",
      });
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL],
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return res.status(500).json({
        success: false,
        message: "Unable to send message.",
      });
    }

    return res.status(200).json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
}
