<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import Title from '$lib/components/Title.svelte';
</script>

<Title />
<AppShell>
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotTrail="place-content-end">
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase"><a href="/" class="btn">Guardita</a></strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch class="mr-4" />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
