<script lang="ts">
	import { Avatar } from "@skeletonlabs/skeleton";
    export let icon: string
	export let name: string
	export let element: string
</script>

<div class="relative inline-block">
	<span class="badge-icon variant-filled-primary absolute -top-1 -right-1 z-10"
		><img class="rounded-3xl" src="\src\lib\images\elements\{element.toLowerCase()}.png" alt="{name}'s element" /></span
	>
	<Avatar src={icon} initials={name} />
</div>
