<script lang="ts">
	import HeroIcon from '$lib/components/Hero/HeroIcon.svelte';

	import { Paginator, Avatar } from '@skeletonlabs/skeleton';
	import type { Hero } from '$lib/types';
	import { IconId, IconUserSearch } from '@tabler/icons-svelte';
	import { writable, get } from 'svelte/store';
	import Title from '$lib/components/Title.svelte';
	import Loading from '$lib/components/Loading.svelte';

	let source: Hero[] = [];
	const hero = writable([]);

	async function getHeroes() {
		const response = await fetch(`api/heroes/`);
		const result = await response.json();
		hero.set(result.data);
		page.size = result.data.length;
		source = result.data;
		// console.log(source);
	}
	let page = {
		offset: 0,
		limit: 5,
		size: 0,
		amounts: [1, 2, 5, 10]
	};

	$: paginatedSource = source.slice(
		page.offset * page.limit, // start
		page.offset * page.limit + page.limit // end
	);

	let asc = true;
	function onPageChange(e: CustomEvent): void {
		asc = true;
		// console.log('event:page', e.detail);
	}

	function onAmountChange(e: CustomEvent): void {
		asc = true;
		// console.log('event:amount', e.detail);
	}

	// SEARCH
	let searchTerm = '';
	const search = async () => {
		if (searchTerm) {
			source = get(hero);
			source = source.filter((hero: Hero) =>
				hero.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
			page.offset = 0;
			page.size = source.length;
		} else {
			source = [...$hero];
			page.size = source.length;
		}
	};
</script>

<Title title="Heroes" />
{#await getHeroes()}
	<Loading />
{:then}
	<div class="table-container grid place-content-center">
		<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] mt-4">
			<div class="input-group-shim"><IconUserSearch /></div>
			<input type="search" placeholder="Search Name" bind:value={searchTerm} on:keydown={(e)=>{if (e.key === 'Enter') search()}}/>
			<button class="variant-filled" on:click={search}>Submit</button>
		</div>

		<table class="table table-hover table-cell-fit my-4">
			<thead>
				<tr>
					<th
						class="table-sort-{asc ? 'asc' : 'dsc'}"
						on:click={() => {
							(paginatedSource = paginatedSource.reverse()), (asc = !asc);
						}}>Icon</th
					>
					<th>Name</th>
					<th>Class</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{#each paginatedSource as hero}
					<tr>
						<td>
							<HeroIcon element={hero.element} icon={hero.image_urls.icon} name={hero.name} />
						</td>
						<td class="truncate">{hero.name.split(' ').pop()}</td>
						<td>{hero.class}</td>
						<td><a class="btn" href="/hero/{hero.name}"><IconId /></a></td>
					</tr>
				{/each}
			</tbody>
		</table>
		<Paginator
			bind:settings={page}
			on:page={onPageChange}
			on:amount={onAmountChange}
			justify="justify-around"
		/>
	</div>
{/await}
