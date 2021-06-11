<script>
	import { getContext } from "svelte";
	import { slide } from "svelte/transition";
	import { writable } from "svelte/store";
	
	export let dataStore;
	//getContext("sheetStore", dataStore);	
	let sheetData = getContext("sheetStore",dataStore);
	let { actor, data, actorData, sheet } = $sheetData;
</script>

<main>
	<img class="profile-img" src="{data.img}" data-edit="img" title="{data.name}" height="100" width="100"/>
	{data.name}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>