<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';

	const skills = [
		{
			category: 'Frontend',
			items: [
				'HTML',
				'CSS',
				'SASS/SCSS',
				'JavaScript',
				'TypeScript',
				'React',
				'Next.js',
				'Svelte',
				'SvelteKit'
			]
		},
		{
			category: 'Backend',
			items: ['PHP', 'Supabase', 'PostgresSQL', 'WordPress', 'Node.js', 'Express', 'REST APIs']
		},
		{
			category: 'Tools & Others',
			items: ['Git', 'GitHub', 'VS Code', 'Docker', 'Webpack', 'Vite', 'Adobe CC']
		}
	];
</script>

<section id="skills" class="bg-muted/50 py-16 md:py-20">
	<div class="container px-4 md:px-6">
		<h2 class="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
			Skills & Expertise
		</h2>
		<div class="grid gap-6 md:grid-cols-3">
			{#each skills as { category, items }}
				<Card.Root>
					<Card.Content class="p-6">
						<h3 class="mb-4 text-xl font-semibold">{category}</h3>
						<div class="flex flex-wrap gap-2">
							{#each items as skill}
								<Badge variant="secondary">{skill}</Badge>
							{/each}
						</div>
					</Card.Content>
				</Card.Root>
			{/each}
		</div>
	</div>
</section>
