<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { ExternalLink, Github } from 'lucide-svelte';

	const projects = [
		{
			title: 'Dreamify',
			description:
				'A dream interpreter app built with SvelteKit, Drizzle, and Supabase, featuring AI-powered insights and a modern Tailwind design.',
			tech: ['SvelteKit', 'TypeScript', 'Supabase', 'Drizzle'],
			github: 'https://github.com/ImTylerPorter/dreamify',
			live: 'https://dreamify-flax.vercel.app/'
		},
		{
			title: 'McClinton Auto',
			description:
				'A full-featured CMS solution built with Svelte/SvelteKit, Drizzle, and Supabase.',
			tech: ['SvelteKit', 'TypeScript', 'Supabase', 'Drizzle'],
			github: 'https://github.com/ImTylerPorter/mcclinton-auto',
			live: 'https://mcclintonauto.com'
		},
		{
			title: 'Demo X/Y Plotting App',
			description:
				'App showcasing biodegradation data with filtering capabilities and simulations predicting degradation over days.',
			tech: ['SvelteKit', 'TypeScript', 'Supabase', 'Drizzle'],
			github: 'https://github.com',
			live: 'https://plotting-app.vercel.app/'
		},
		{
			title: 'Federal CMS Solution',
			description:
				'Custom CMS built with PHP and WordPress, incorporating new features as per client requirements.',
			tech: ['PHP', 'WordPress', 'Gutenberg', 'SASS', 'JavaScript', 'Webpack'],
			live: 'https://state.gov'
		},
		{
			title: 'FED Design/Builders',
			description:
				"Developed a bespoke content management system utilizing PHP and WordPress, delivering a comprehensive end-to-end solution tailored to FED Design/Builders' specific needs.",
			tech: ['PHP', 'WordPress', 'Gutenberg', 'SASS', 'JavaScript', 'Webpack'],
			live: 'https://fedcorp.com/',
			note: 'Note: This project has been handed off to the client. Further changes may have been made post-delivery.'
		},
		{
			title: 'QWIK Raise',
			description:
				"Engineered a customized CMS with PHP and WordPress, providing a full-scale build that supports QWIK Raise's unique functionality and user experience requirements.",
			tech: ['PHP', 'WordPress', 'Gutenberg', 'SASS', 'JavaScript', 'Webpack'],
			live: 'https://qwikraise.com/',
			note: 'Note: This project has been handed off to the client. Further changes may have been made post-delivery.'
		},
		{
			title: 'Skywalker Property Partners',
			description:
				"Created a specialized WordPress and PHP-based content management system, managing the entire development lifecycle to enhance Skywalker Property Partners' online presence.",
			tech: ['PHP', 'WordPress', 'Gutenberg', 'SASS', 'JavaScript', 'Webpack'],
			live: 'https://www.skywalkerproperty.com/',
			note: 'Note: This project has been handed off to the client. Further changes may have been made post-delivery.'
		},
		{
			title: 'SearchWide Global',
			description:
				"Implemented a personalized CMS platform using PHP and WordPress, encompassing the complete build process to meet SearchWide Global's dynamic content management needs.",
			tech: ['PHP', 'WordPress', 'Gutenberg', 'SASS', 'JavaScript', 'Webpack'],
			live: 'https://searchwideglobal.com/',
			note: 'Note: This project has been handed off to the client. Further changes may have been made post-delivery.'
		},
		{
			title: 'ScreenVue',
			description: 'Custom CMS built with Next.js and Contentful.',
			tech: ['Next.js', 'JavaScript', 'Contentful', 'Webpack'],
			live: 'https://screenvue.com/'
		}
	];
</script>

<section id="projects" class="py-16 md:py-20">
	<div class="container px-4 md:px-6">
		<h2 class="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
			Featured Projects
		</h2>
		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each projects as project}
				<Card.Root class="flex h-full flex-col">
					<Card.Header>
						<Card.Title>{project.title}</Card.Title>
					</Card.Header>
					<Card.Content class="flex-grow">
						<p class="mb-4 text-muted-foreground">{project.description}</p>
						{#if project.note}
							<p class="mb-4 text-sm italic text-gray-500">{project.note}</p>
						{/if}
						<div class="flex flex-wrap gap-2">
							{#each project.tech as tech}
								<span class="rounded-md bg-primary/10 px-2 py-1 text-sm">{tech}</span>
							{/each}
						</div>
					</Card.Content>
					<Card.Footer class="mt-auto flex justify-between pt-6">
						{#if project?.github}
							<Button variant="ghost" size="sm" asChild>
								<a href={project.github} target="_blank" rel="noopener noreferrer">
									<Github class="mr-2 h-4 w-4" />
									Code
								</a>
							</Button>
						{/if}
						<Button variant="ghost" size="sm" asChild class="ml-auto">
							<a href={project.live} target="_blank" rel="noopener noreferrer">
								<ExternalLink class="mr-2 h-4 w-4" />
								Live
							</a>
						</Button>
					</Card.Footer>
				</Card.Root>
			{/each}
		</div>
	</div>
</section>
