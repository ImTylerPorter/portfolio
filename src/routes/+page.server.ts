// +page.server.ts
import type { Actions } from '@sveltejs/kit';
import { Resend } from 'resend';
import { fail } from '@sveltejs/kit';
import { RESEND_API_KEY } from '$env/static/private'; // Import server-side env variables
import { error } from '@sveltejs/kit';

// Initialize Resend with your API key from environment variables
const resend = new Resend(RESEND_API_KEY);

export const actions: Actions = {
  default: async ({ request }) => {
    console.log('action')
    // Parse the form data
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const honeyPot = formData.get('_honey_pot');

    // Simple bot protection using a honeypot field
    if (honeyPot) {
      throw error(400, 'Sorry, not today bot!');
    }

    // Basic validation
    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof message !== 'string' ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return fail(400, { error: 'All fields are required.' });
    }

    try {
      // Send the email using Resend
      await resend.emails.send({
        from: `${name} <no-reply@tylerporter.dev>`,
        to: 'hello@tylerporter.dev',
        replyTo: `${email}`,
        subject: `New Contact Form Submission from ${name}`,
        html: `
					<h2>New Contact Form Submission</h2>
					<p><strong>Name:</strong> ${name}</p>
					<p><strong>Email:</strong> ${email}</p>
					<p><strong>Message:</strong></p>
					<p>${message}</p>
				`,
      });

      // Return success state
      return { success: true };
    } catch (error) {
      console.error('Error sending email:', error);
      return fail(500, { error: 'Failed to send the message. Please try again later.' });
    }
  },
};
