<script>
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import Title from '$lib/components/Title.svelte';
</script>

<!-- App Shell -->
<Title />
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-center">
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">GuardiTa</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a href="/hero">Hero</a>
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
