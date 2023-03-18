<script lang="ts">
	import HeroDetails from '$lib/components/HeroDetails.svelte';
	import type { Hero } from '$lib/types';
	import type { PageData } from './$types';
  
	export let data: PageData;
	let heroes: Hero[] = data.heroes.data;
  
	const filteredHeroes = heroes.map(({_id, publishedAt, createdAt, updatedAt, ...rest}) => rest);
  </script>
  
  <div class="sm:flex flex-wrap place-content-center">
	{#each filteredHeroes as hero}
	  <HeroDetails {...hero} classType={hero.class}/>
	{/each}
  </div>
  