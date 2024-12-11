<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { fade } from 'svelte/transition';
</script>

<div class="bg-background text-foreground min-h-screen w-full" transition:fade>
	<Nav />
	<main>
		<Hero />
		<About />
		<Skills />
		<Projects />
		<Contact />
	</main>
	<Footer />
</div>
