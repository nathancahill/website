<script lang="ts">
	import { onMount } from 'svelte';
	import 'leaflet/dist/leaflet.css';

	let container: HTMLDivElement;

	// Leaflet touches `window` on import, so it loads in the browser only.
	onMount(() => {
		let map: import('leaflet').Map | undefined;

		import('leaflet').then(({ default: L }) => {
			const layer = L.tileLayer(
				'https://tileproxy.wkx.workers.dev/Aerial/{z}/{x}/{y}.jpg?key=An65NyaJsa-zNETI0mjd-I07nV-jFfl-ogpn0eXQzgdxx1aX5XCx2PhuV_xCZ2Lf',
				{ opacity: 1, attribution: 'Bing Maps', minZoom: 1, maxZoom: 16 }
			);

			map = L.map(container, {
				center: [44.00002245309726, 17.700541762118256],
				zoom: 9,
				minZoom: 1,
				maxZoom: 18,
				layers: [layer]
			});
			map.attributionControl.setPrefix('');
		});

		return () => map?.remove();
	});
</script>

<div class="mt-6 h-[400px]" bind:this={container}></div>
