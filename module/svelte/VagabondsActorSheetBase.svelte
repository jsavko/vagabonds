<script>
	import { setContext } from "svelte";
	import { slide } from "svelte/transition";
	import { writable } from "svelte/store";

	  // Component imports
	  //TODO: IMPORTS
	import VagabondsActorSheetHeader from "./VagabondsActorSheetHeader.svelte"; 
	import VagabondsActorSheetBodyLeft from "./VagabondsActorSheetBodyLeft.svelte"; 
	import VagabondsActorSheetBodyRight from "./VagabondsActorSheetBodyRight.svelte"; 


	//Exports
	export let dataStore ;
	setContext("sheetStore", dataStore);
	//let sheetData = getContext("sheetStore");
	let { actor, data, actorData, sheet } = $dataStore;
</script>

<header>
	<VagabondsActorSheetHeader />
</header>

<container>
	<VagabondsActorSheetBodyLeft />
	<VagabondsActorSheetBodyRight />
</container>


<style>
	container {
		display: flex; /* or inline-flex */
		}


</style>