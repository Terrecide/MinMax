<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	/* import { Toast } from '@skeletonlabs/skeleton'; */
	import { smoothScroll } from '$lib/smoothScroll';
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar spacing="md:px-16">
			<svelte:fragment slot="lead">
				<strong><img src="/logo.png" class="w-16" alt="logo" /></strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<button class="btn variant-filled-primary" on:click={smoothScroll}> Sign Up </button>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
	<svelte:fragment slot="footer" />
	<!-- <Toast /> -->
</AppShell>
