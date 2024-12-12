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

<svelte:head>
	<title>Tyler Porter - Full Stack Web Developer</title>
	<meta
		name="description"
		content="Full Stack Developer from the Pacific Northwest with 12 years' expertise in creating scalable web solutions. Dedicated to delivering high-quality projects and eager to join innovative, forward-thinking teams."
	/>
	<meta property="og:title" content="Tyler Porter - Full Stack Web Developer" />
	<meta
		property="og:description"
		content="Full Stack Developer from the Pacific Northwest with 12 years' expertise in creating scalable web solutions. Dedicated to delivering high-quality projects and eager to join innovative, forward-thinking teams."
	/>
	<meta property="og:image" content="/images/preview.jpg" />
</svelte:head>

<div class="min-h-screen w-full bg-background text-foreground" transition:fade>
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
