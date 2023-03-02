<script lang="ts">
	import type { Hero } from '$lib/types';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import HeroIcon from '$lib/components/Hero/HeroIcon.svelte';
	import { IconCircuitBattery, IconLink, IconSword } from '@tabler/icons-svelte';

	export let image_urls: Hero['image_urls'];
	export let normal_attack: Hero['normal_attack'];
	export let special_ability: Hero['special_ability'];
	export let chain_skill: Hero['chain_skill'];
	export let rarity: Hero['rarity'];
	export let name: Hero['name'];
	export let party_buff: Hero['party_buff'];
	export let classType: Hero['class'];
	export let element: Hero['element'];
	export let equipment: Hero['equipment'];
</script>

<div class="card bg-initial card-hover">
	<div class="flex">
		<div class="p-5">
			<HeroIcon {element} icon={image_urls.icon} {name} />
		</div>
		<div>
			<span class="text-xl font-bold">{name}</span>
			<div class="grid-cols-4 gap-2 space-y-2">
				<span class="chip variant-ghost-primary">{equipment}</span>
				<span class="chip variant-ringed-warning">{party_buff} pt. buff</span>
				<span class="chip variant-ringed-warning">{rarity == 'unique' ? '⭐⭐⭐' : '⭐⭐'}</span>
				<span class="chip variant-ringed-warning">{classType}</span>
			</div>
		</div>
	</div>

	<Accordion>
		<AccordionItem open>
			<svelte:fragment slot="lead"><IconSword /></svelte:fragment>
			<svelte:fragment slot="summary">Normal Attack</svelte:fragment>
			<svelte:fragment slot="content">
				<div class="title">
					{normal_attack.title}
				</div>
				<p>
					{normal_attack.description}
				</p>
			</svelte:fragment>
		</AccordionItem>
		<AccordionItem open>
			<svelte:fragment slot="lead"><IconLink /></svelte:fragment>
			<svelte:fragment slot="summary">Chain Skill</svelte:fragment>
			<svelte:fragment slot="content">
				<div class="title">
					{chain_skill.title}
				</div>
				<p>
					{chain_skill.description}
				</p>
			</svelte:fragment>
		</AccordionItem>
		<AccordionItem open>
			<svelte:fragment slot="lead"><IconCircuitBattery /></svelte:fragment>
			<svelte:fragment slot="summary">Special Ability</svelte:fragment>
			<svelte:fragment slot="content">
				<div class="title">
					{special_ability.title}
				</div>
				<p>
					{special_ability.description}
				</p>
			</svelte:fragment>
		</AccordionItem>
		<!-- ... -->
	</Accordion>
</div>

<style lang="postcss">
	p {
		@apply indent-4;
	}
	.title {
		@apply underline;
	}
	.card {
		@apply max-w-sm p-2 m-4 overflow-hidden
	}
</style>
