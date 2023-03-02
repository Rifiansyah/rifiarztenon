<script lang="ts">
	import HeroDetails from '$lib/components/HeroDetails.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let heroes = data.heroes.data;
</script>

<div class="sm:flex flex-wrap place-content-center">
		{#each heroes as hero}
			<HeroDetails {...hero} classType={hero.class} />
		{/each}
</div>
