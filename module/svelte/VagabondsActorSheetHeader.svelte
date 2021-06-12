<script>
	import { getContext } from "svelte";
	import { slide } from "svelte/transition";
	import { writable } from "svelte/store";


	export let dataStore;
	//getContext("sheetStore", dataStore);	
	let sheetData = getContext("sheetStore",dataStore);
	let { actor, data, actorData, sheet } = $sheetData;
</script>

<actorhead>
	<img class="profile-img" src="{data.img}" data-edit="img" title="{data.name}" height="125" width="125"/>
	<div class="namebox">
		<input name="name" type="text" value="{data.name}" placeholder="Name"/>
	</div>
	<div class="item1">
		<input type="text" name="data.attributes.level.value" value="{data.data.attributes.level.value}" data-dtype="Number"/>
		<label>Level</label>
	</div>
	<div class="item2">
		<input type="text" name="data.health.value" value="{data.data.health.value}" data-dtype="Number"/>
		<span> / </span>
		<input type="text" name="data.health.max" value="{data.data.health.max}" data-dtype="Number"/>
		<label>HP</label>
	</div>
	<div class="item3">
		<input type="text" name="data.speed.value" value="{data.data.speed.value}" data-dtype="Number"/>
		<label>Speed</label>
	</div>
	<div class="item4">
		<input type="text" name="data.armor.value" value="{data.data.armor.value}" data-dtype="Number"/>
		<label for="data.data.armor.value" class="resource-label rollable" data-defend="2d6">Armor</label> 
	</div>
	<div class="item5">
		<input type="text" name="data.data.attributes.exp.value" value="{data.data.attributes.exp.value}" data-dtype="Number"/>
		<label>Exp</label>
	</div>
</actorhead>


<style>
	actorhead {
		margin: 0 auto;
		padding: 1em;
		display: grid;
		grid-template-columns: 125px auto auto auto auto auto;
		grid-template-rows: 45px 80px auto;
		text-align: center;
		vertical-align: bottom;
		height: 100%;
	}

	actorhead input {
		border:none;
		height: 45px;
		font-size: 20px;
	}
	.profile-img {
		grid-column-start: 1;
		grid-column-end: 1;
		grid-row-start: 1;
		grid-row-end: 2;
		margin-top: 0px;
	}
	.namebox {
		grid-column-start: 2;
		grid-column-end: 7;
		grid-row-start: 1;
		grid-row-end: 1;
		text-align:left;
		vertical-align: bottom;
		margin-left: 2px;
	}

	.item1 {
		grid-column-start: 2;
		grid-row-start: 2;
		width: 100%;
		min-width: 93px;
		margin-top: auto;
		margin-left: 2px;
	}


	.item2 {
		grid-column-start: 3;
		grid-row-start: 2;
		width: 100%;
		min-width: 93px;
		margin-top: auto;

	}
	
	.item2 input {
		width: 35px;
	}

	
	.item3 {
		grid-column-start: 4;
		grid-row-start: 2;
		width: 100%;
		min-width: 93px;
		margin-top: auto;

	}

	
	.item4 {
		grid-column-start: 5;
		grid-row-start: 2;
		width: 100%;
		min-width: 93px;
		margin-top: auto;

	}

	
	.item5 {
		grid-column-start: 6;
		grid-row-start: 2;
		width: 100%;
		min-width: 93px;
		margin-top: auto;

	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		display:flex;		
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