<script>
	import { getContext } from "svelte";

	
	import VagabondsLinage from "./VagabondsLinage.svelte"; 
	import VagabondsGear from "./VagabondsGear.svelte"; 
	import VagabondsTechnique from "./VagabondsTechnique.svelte"; 
	import VagabondsInjury from "./VagabondsInjury.svelte"; 

	
	//export let dataStore;
	//getContext("sheetStore", dataStore);	
	let sheetData = getContext("sheetStore");

	//let {  data } = $sheetData;

</script>
<main>
	<label class="resource-label">Core Flaw</label>
	<label class="rules-label">Once per session, use to wriggle into or out of trouble, or <strong>succumb</strong> for +3xp</label>
	
	<textarea class="border_none" name="system.aproaches.coreflaw" rows="6">{$sheetData.actor.system.aproaches.coreflaw}</textarea>
	<VagabondsLinage />
	<VagabondsGear />
	<VagabondsTechnique />
	<VagabondsInjury />

</main>
<style>
	main {
		text-align: center;
		margin: 0 auto;
		width:100%;
		min-width: 310px;
		padding: 1em;
		flex: 0 0 50%;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

 
</style>