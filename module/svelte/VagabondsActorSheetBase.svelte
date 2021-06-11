<script>
	import { setContext, getContext } from "svelte";
	import { slide } from "svelte/transition";
	import { writable } from "svelte/store";
	
	  // Component imports
	  //TODO: IMPORTS
	  import VagabondsActorSheetHeader from "./VagabondsActorSheetHeader.svelte"; 
	  

	//Exports
	export let dataStore;
	setContext("sheetStore", dataStore);
	//let sheetData = getContext("sheetStore");
	let { actor, data, actorData, sheet } = $dataStore;
</script>

<header>
	<VagabondsActorSheetHeader />
</header>

<main>
Body Here!
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