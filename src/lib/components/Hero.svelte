<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ArrowRight, Github, Linkedin } from 'lucide-svelte';
</script>

<section class="relative pb-16 pt-32 md:pb-20 md:pt-40">
	<div class="container px-4 md:px-6">
		<div class="flex flex-col items-center space-y-8 text-center">
			<h1 class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
				Full Stack Developer
			</h1>
			<p
				class="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
			>
				With 12 years of experience crafting beautiful and functional web applications. Currently
				available for new opportunities.
			</p>
			<div class="flex flex-col gap-4 min-[400px]:flex-row">
				<Button href="#contact" size="lg">
					Contact Me
					<ArrowRight class="ml-2 h-4 w-4" />
				</Button>
				<Button href="#projects" variant="outline" size="lg">View Projects</Button>
			</div>
			<div class="flex items-center gap-4">
				<a
					href="https://github.com/ImTylerPorter"
					target="_blank"
					class="hover:text-primary transition-colors"
				>
					<Github class="h-6 w-6" />
				</a>
				<a
					href="https://linkedin.com/in/ImtylerPorter"
					target="_blank"
					class="hover:text-primary transition-colors"
				>
					<Linkedin class="h-6 w-6" />
				</a>
			</div>
		</div>
	</div>
</section>
