<script lang="ts">
	import { Github, Linkedin, Mail } from 'lucide-svelte';
	const currentYear = new Date().getFullYear();
</script>

<footer class="border-t py-8 md:py-12">
	<div class="container px-4 md:px-6">
		<div class="flex flex-col items-center gap-4 text-center">
			<div class="flex items-center gap-4">
				<a
					href="https://github.com/ImTylerPorter"
					target="_blank"
					class="hover:text-primary transition-colors"
				>
					<Github class="h-5 w-5" />
				</a>
				<a
					href="https://linkedin.com/in/ImTylerPorter"
					target="_blank"
					class="hover:text-primary transition-colors"
				>
					<Linkedin class="h-5 w-5" />
				</a>
				<a href="mailto:hello@tylerporter.dev" class="hover:text-primary transition-colors">
					<Mail class="h-5 w-5" />
				</a>
			</div>
			<p class="text-muted-foreground text-sm">© {currentYear}. All rights reserved.</p>
		</div>
	</div>
</footer>
