<script lang="ts">
	import { ConicGradient } from '@skeletonlabs/skeleton';
	import type { ConicStop } from '@skeletonlabs/skeleton';

	const stopsSpinner: ConicStop[] = [
		{ color: 'transparent', start: 0, end: 25 },
		{ color: 'rgb(var(--color-surface-500))', start: 75, end: 100 }
	];
</script>

<div class="grid h-screen place-items-center">
	<ConicGradient stops={stopsSpinner} spin width="w-36">
		<small class="opacity-50">Loading</small>
	</ConicGradient>
</div>
