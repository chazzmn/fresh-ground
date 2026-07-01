'use client';

import { useState, type FormEvent } from 'react';
import { SECTORS } from '@/content/sectors';

/*
  Contact form. Posts JSON to /api/contact (a Next.js route handler stub).
  Client-side validation is light and non-blocking; the required attributes +
  native types do the heavy lifting so it degrades gracefully. Honeypot field
  ("company") catches basic bots.
*/

type Status = 'idle' | 'submitting' | 'success' | 'error';

const BUDGETS = [
  'Under £2k',
  '£2k – £5k',
  '£5k – £10k',
  '£10k – £25k',
  '£25k+',
  'Not sure yet',
];

const fieldBase =
  'w-full rounded-xl border border-line bg-white px-4 py-3 text-cocoa placeholder:text-taupe transition-colors duration-200 focus:border-ember focus:outline-none focus:ring-2 focus:ring-ember/25';

const labelBase = 'mb-2 block text-sm font-semibold text-coffee';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string>('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setError('');

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setError(
        'Something went wrong sending your message. Please email us directly and we will pick it up.',
      );
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border-2 border-ember/40 bg-paper-card p-8 shadow-card sm:p-10"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ember/15 text-2xl text-ember-deep">
          ✓
        </span>
        <p className="overline mt-5">Message received</p>
        <h3 className="display mt-3 text-2xl sm:text-3xl">
          Thanks — we&apos;ll be in touch shortly.
        </h3>
        <p className="mt-3 max-w-prose text-coffee">
          We read every enquiry ourselves and usually reply within two working
          days. If it&apos;s urgent, give us a call and we&apos;ll move faster.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="btn-ghost mt-7"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-line bg-paper-card p-6 shadow-card sm:p-8 lg:p-10"
    >
      {/* Honeypot — hidden from humans */}
      <div aria-hidden className="hidden">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelBase}>
            Name <span className="text-ember">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={fieldBase}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelBase}>
            Email <span className="text-ember">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@organisation.co.uk"
            className={fieldBase}
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelBase}>
            Phone <span className="text-taupe">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Best number to reach you"
            className={fieldBase}
          />
        </div>

        <div>
          <label htmlFor="projectType" className={labelBase}>
            Project type <span className="text-ember">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            defaultValue=""
            className={`${fieldBase} appearance-none`}
          >
            <option value="" disabled>
              Select a sector
            </option>
            {SECTORS.map((s) => (
              <option key={s.slug} value={s.label}>
                {s.label}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="budget" className={labelBase}>
            Budget range <span className="text-taupe">(optional)</span>
          </label>
          <select
            id="budget"
            name="budget"
            defaultValue=""
            className={`${fieldBase} appearance-none`}
          >
            <option value="">Prefer not to say</option>
            {BUDGETS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelBase}>
            Message <span className="text-ember">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="What are you trying to say, and who needs to hear it?"
            className={`${fieldBase} resize-y`}
          />
        </div>
      </div>

      {status === 'error' && (
        <p role="alert" className="mt-4 rounded-lg bg-ember/10 px-4 py-3 text-sm font-medium text-ember-deep">
          {error}
        </p>
      )}

      <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {status === 'submitting' ? 'Sending…' : 'Send enquiry'}
        </button>
        <p className="text-xs text-taupe">
          We will only use your details to reply to this enquiry.
        </p>
      </div>
    </form>
  );
}
