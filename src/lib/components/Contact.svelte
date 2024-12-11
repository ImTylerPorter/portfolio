<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';

	// Reactive variables to hold form feedback
	let successMessage: string | null = null;
	let errorMessage: string | null = null;

	// Access form data from server response
	onMount(() => {
		const data = get(page).data;
		if (data.success) {
			successMessage = 'Your message has been sent successfully!';
			// Optionally, reset form fields
		} else if (data.error) {
			errorMessage = data.error;
		}
	});
</script>

<section id="contact" class="bg-muted/50 py-16 md:py-20">
	<div class="container px-4 md:px-6">
		<h2 class="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
			Get In Touch
		</h2>
		<Card.Root class="mx-auto max-w-xl">
			<Card.Content>
				<form action="?/send" method="POST" class="space-y-4">
					<div class="space-y-2">
						<label for="name" class="block text-sm font-medium text-gray-700">Name</label>
						<Input id="name" name="name" placeholder="Your name" required />
					</div>
					<div class="space-y-2">
						<label for="email" class="block text-sm font-medium text-gray-700">Email</label>
						<Input id="email" type="email" name="email" placeholder="Your email" required />
					</div>
					<div class="space-y-2">
						<label for="message" class="block text-sm font-medium text-gray-700">Message</label>
						<Textarea id="message" name="message" placeholder="Your message" required />
					</div>
					<Button type="submit" class="w-full">Send Message</Button>
				</form>
			</Card.Content>
		</Card.Root>

		<!-- Success Message -->
		{#if successMessage}
			<div class="mt-4 rounded bg-green-100 p-4 text-green-700">
				{successMessage}
			</div>
		{/if}

		<!-- Error Message -->
		{#if errorMessage}
			<div class="mt-4 rounded bg-red-100 p-4 text-red-700">
				{errorMessage}
			</div>
		{/if}
	</div>
</section>
