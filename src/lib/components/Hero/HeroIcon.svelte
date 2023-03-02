<script lang="ts">
	import { Avatar } from "@skeletonlabs/skeleton";
	import Dark from '$elements/dark.png'
	import Light from '$elements/light.png'
	import Basic from '$elements/basic.png'
	import Fire from '$elements/fire.png'
	import Water from '$elements/water.png'
	import Earth from '$elements/earth.png'
    export let icon: string
	export let name: string
	export let element: string

	let elementIcon = {
		dark: Dark,
		basic: Basic,
		light: Light,
		water: Water,
		earth: Earth,
		fire: Fire,
	}[element] || Basic
</script>

<div class="relative inline-block">
	<span class="badge-icon variant-filled-primary absolute -top-1 -right-1 z-10"
		><img class="rounded-3xl" src={elementIcon} alt="{name}'s element" /></span
	>
	<Avatar src={icon} initials={name} />
</div>
