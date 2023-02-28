<script lang="ts">
	import { Paginator, Avatar } from '@skeletonlabs/skeleton';
	import Title from '$lib/components/Title.svelte';
	import type { Hero } from '$lib/types'
	import { IconEdit } from '@tabler/icons-svelte';
	import { Shadow } from 'svelte-loading-spinners';

	
	let asc = true;
	let source: Hero[] = [];
	let page = {
		offset: 0,
		limit: 5,
		size: source.length,
		amounts: [1, 2, 5, 10]
	};

	async function getHeroes() {
		const response = await fetch(`api/heroes/`);
		const result = await response.json();
		source = result.data;
		page.size = source.length;
		// console.log(source);
	}

	function onPageChange(e: CustomEvent): void {
		asc = true
		// console.log('event:page', e.detail);
	}

	function onAmountChange(e: CustomEvent): void {
		asc = true
		// console.log('event:amount', e.detail);
	}

	$: paginatedSource = source.slice(
		page.offset * page.limit, // start
		page.offset * page.limit + page.limit // end
	);
</script>

<Title title="Heroes" />

<div class="table-container grid place-content-center">
	<table class="table table-hover my-4">
		{#await getHeroes()}
			<Shadow size="60" unit="px" duration="1s" />
		{:then}
			<thead>
				<tr>
					<th />
					<th class="table-sort-{asc ? 'asc' : 'dsc'}" on:click={() => {(paginatedSource = paginatedSource.reverse()), (asc = !asc);}}>
						Name
					</th>
					<th>Party Buff</th>
					<th>Element</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{#each paginatedSource as hero}
					<tr>
						<td><Avatar src={hero.image_urls.icon} initials={hero.name} /></td>
						<td>{hero.name}</td>
						<td>{hero.party_buff}</td>
						<td>{hero.element}</td>
						<td><IconEdit/></td>
					</tr>
				{/each}
			</tbody>
		{/await}
	</table>
</div>
<Paginator
	bind:settings={page}
	on:page={onPageChange}
	on:amount={onAmountChange}
	justify="justify-around"
/>
