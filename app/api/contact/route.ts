import { NextResponse } from 'next/server';

/*
  ────────────────────────────────────────────────────────────────────────
  CONTACT FORM API ROUTE (stub)
  ────────────────────────────────────────────────────────────────────────
  This is a working placeholder. It validates the payload, logs it, and
  returns success so the front-end flow works end-to-end out of the box.

  TO WIRE UP REAL EMAIL DELIVERY, replace the "console.log" block below with
  your provider of choice. Two easy options:

  ── Option A: Resend (https://resend.com) ──────────────────────────────
    1. npm install resend
    2. Add RESEND_API_KEY to your environment (Vercel → Settings → Env Vars)
    3. Replace the TODO block with:

        import { Resend } from 'resend';
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: 'Website <hello@freshgroundfilms.co.uk>',
          to: 'PLACEHOLDER_EMAIL@freshgroundfilms.co.uk',
          replyTo: email,
          subject: `New enquiry — ${projectType} — ${name}`,
          text: `${name} (${email}, ${phone})\nBudget: ${budget}\n\n${message}`,
        });

  ── Option B: Formspree (https://formspree.io) ─────────────────────────
    No route handler needed — point the form's action at your Formspree
    endpoint instead. (Left here so the choice is documented in one place.)
  ────────────────────────────────────────────────────────────────────────
*/

// Runs on the edge-free Node runtime; keep it dynamic (never statically cached).
export const dynamic = 'force-dynamic';

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  budget?: string;
  message?: string;
  // Honeypot — should always be empty for real humans.
  company?: string;
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid request body.' },
      { status: 400 },
    );
  }

  const { name, email, phone, projectType, budget, message, company } = body;

  // Honeypot tripped — pretend success, drop silently.
  if (company && company.trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  // Basic server-side validation (never trust the client).
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { ok: false, error: 'Name, email and message are required.' },
      { status: 422 },
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json(
      { ok: false, error: 'Please provide a valid email address.' },
      { status: 422 },
    );
  }

  // TODO: swap this block for a real email service (see header comment).
  console.log('[contact] New enquiry received', {
    name,
    email,
    phone: phone || '—',
    projectType: projectType || '—',
    budget: budget || '—',
    message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}

// Reject other methods cleanly.
export async function GET() {
  return NextResponse.json(
    { ok: false, error: 'Method not allowed.' },
    { status: 405 },
  );
}
