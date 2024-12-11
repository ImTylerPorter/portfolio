<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { ExternalLink, Github } from 'lucide-svelte';

	const projects = [
		{
			title: 'McClinton Auto',
			description:
				'A full-featured cms solution built with Svelte/SvelteKit, Drizzle and Supabase.',
			tech: ['SvelteKit', 'TypeScript', 'Supabase', 'Drizzle'],
			github: 'https://github.com/ImTylerPorter/mcclinton-auto',
			live: 'https://mcclintonauto.com'
		},
		{
			title: 'Demo X/Y Plotting App',
			description:
				'App showing biodegradation data with a filter and simulation predicting degradation by days.',
			tech: ['SvelteKit', 'TypeScript', 'Supabase', 'Drizzle'],
			github: 'https://github.com',
			live: 'https://plotting-app.vercel.app/'
		},
		{
			title: 'Federal CMS Solution',
			description:
				'Custom CMS built with PHP and WordPress. Specifically built in new features as client needed.',
			tech: ['PHP', 'WordPress', 'Gutenberg', 'SASS', 'JavaScript', 'Webpack'],
			live: 'https://state.gov'
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
						<p class="text-muted-foreground mb-4">{project.description}</p>
						<div class="flex flex-wrap gap-2">
							{#each project.tech as tech}
								<span class="bg-primary/10 rounded-md px-2 py-1 text-sm">{tech}</span>
							{/each}
						</div>
					</Card.Content>
					<Card.Footer class="mt-auto flex justify-between pt-6">
						{#if project?.github}
							<Button variant="ghost" size="sm" asChild>
								<a href={project.github} target="_blank">
									<Github class="mr-2 h-4 w-4" />
									Code
								</a>
							</Button>
						{/if}
						<Button variant="ghost" size="sm" asChild class="ml-auto">
							<a href={project.live} target="_blank">
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
