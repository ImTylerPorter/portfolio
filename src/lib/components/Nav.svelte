<script lang="ts">
	import { Menu, Moon, Sun } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Sheet from '$lib/components/ui/sheet/index';

	// Navigation items
	const navItems = [
		{ href: '#about', label: 'About' },
		{ href: '#skills', label: 'Skills' },
		{ href: '#projects', label: 'Projects' },
		{ href: '#contact', label: 'Contact' }
	];

	// Mobile menu state
	let isOpen: boolean = $state(false);
	// Theme state
	let isDark: boolean = $state(false);

	// Check system preference on mount
	$effect.root(() => {
		isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		updateTheme();
	});

	// Update theme when isDark changes
	$effect(() => {
		updateTheme();
	});

	/** Toggle theme */
	function toggleTheme() {
		isDark = !isDark;
	}

	/** Update document class and local storage */
	function updateTheme() {
		if (isDark) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
</script>

<header class="bg-background/80 fixed top-0 z-50 w-full border-b backdrop-blur-sm">
	<nav class="container flex h-16 items-center justify-between px-4 md:px-6">
		<a href="#" class="text-xl font-bold">Tyler Porter</a>

		<!-- Desktop Navigation -->
		<ul class="hidden items-center gap-6 md:flex">
			{#each navItems as item}
				<li>
					<a href={item.href} class="hover:text-primary transition-colors">
						{item.label}
					</a>
				</li>
			{/each}
			<li>
				<Button variant="ghost" size="icon" onclick={toggleTheme}>
					{#if isDark}
						<Sun class="h-5 w-5" />
					{:else}
						<Moon class="h-5 w-5" />
					{/if}
				</Button>
			</li>
			<li>
				<Button variant="default">Hire Me</Button>
			</li>
		</ul>

		<!-- Mobile Navigation -->
		<div class="flex items-center gap-2 md:hidden">
			<Button variant="ghost" size="icon" onclick={toggleTheme}>
				{#if isDark}
					<Sun class="h-5 w-5" />
				{:else}
					<Moon class="h-5 w-5" />
				{/if}
			</Button>
			<Sheet.Root bind:open={isOpen}>
				<Sheet.Trigger>
					<Button variant="ghost" size="icon">
						<Menu class="h-5 w-5" />
					</Button>
				</Sheet.Trigger>
				<Sheet.Content>
					<nav class="flex flex-col gap-4">
						{#each navItems as item}
							<a href={item.href} class="text-lg" onclick={() => (isOpen = false)}>
								{item.label}
							</a>
						{/each}
						<Button>Hire Me</Button>
					</nav>
				</Sheet.Content>
			</Sheet.Root>
		</div>
	</nav>
</header>
