<script lang="ts">
	import { page } from '$app/stores';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { fade } from 'svelte/transition';

	// Reactive variables to hold form feedback
	let errorMessage = $state('');
	let name = $state('');
	let email = $state('');
	let phone = $state('');
	let message = $state('');
	let messageSent = $state(false);

	const submitForm = async (event: Event): Promise<void> => {
		event.preventDefault();
		console.log('submitform');
		// Create FormData
		const formData = new FormData();
		formData.append('name', name);
		formData.append('email', email);
		formData.append('phone', phone);
		formData.append('message', message);

		try {
			const response = await fetch($page.url.pathname, {
				method: 'POST',
				body: formData
			});

			if (!response.ok) {
				const errorData = await response.json();
				errorMessage = errorData?.error?.message || 'An unexpected error occurred';
				return;
			}

			const data = await response.json();

			if (data.status === 200) {
				errorMessage = '';
				messageSent = true;
			} else {
				errorMessage = 'An error occurred';
			}
		} catch (error) {
			errorMessage = 'An unexpected error occurred';
		}
	};
</script>

<section id="contact" class="bg-muted/50 py-16 md:py-20">
	<div class="container px-4 md:px-6">
		<h2 class="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
			Get In Touch
		</h2>
		<Card.Root class="mx-auto max-w-xl">
			<Card.Content>
				{#if !messageSent}
					<form onsubmit={submitForm} class="space-y-4">
						<div class="space-y-2">
							<label for="name" class="block text-sm font-medium text-gray-700">Name</label>
							<Input bind:value={name} id="name" name="name" placeholder="Your name" required />
						</div>
						<div class="space-y-2">
							<label for="email" class="block text-sm font-medium text-gray-700">Email</label>
							<Input
								bind:value={email}
								id="email"
								type="email"
								name="email"
								placeholder="Your email"
								required
							/>
						</div>
						<div class="space-y-2">
							<label for="message" class="block text-sm font-medium text-gray-700">Message</label>
							<Textarea
								bind:value={message}
								id="message"
								name="message"
								placeholder="Your message"
								required
							/>
						</div>
						<input type="text" name="_honey_pot" style="display:none" />
						<Button type="submit" class="w-full">Send Message</Button>
					</form>
				{:else}
					<div class="space-y-4 py-8 text-center" transition:fade>
						<h3 class="text-2xl font-semibold text-primary">
							Thank you for your message, {name ? name.split(' ')[0] : 'valued customer'}!
						</h3>
						<p class="text-muted-foreground">I look forward to speaking and will reach out soon!</p>
					</div>
				{/if}
			</Card.Content>
		</Card.Root>
	</div>
</section>
