<script>
	import { getContext } from "svelte";

	import { writable } from "svelte/store";


	//getContext("sheetStore", dataStore);	
	let sheetData = getContext("sheetStore"); 
/**
   * Opens a File Picker and updates the actor accordingly.
   */
   const filePicker = (event) => {
        const attr = event.currentTarget.dataset.edit;
        const current = foundry.utils.getProperty($sheetData.actor, attr);
        const fp = new FilePicker({
            type: "image",
            current: current,
            callback: (path) => {
                $sheetData.actor.update({ [attr]: path });
            },
            top: $sheetData.sheet.position.top + 40,
            left: $sheetData.sheet.position.left + 10
        });
        return fp.browse();
    };


</script>

<actorhead>
	<img on:click={filePicker} class="profile-img" src="{$sheetData.actor.img}" data-edit="img" title="{$sheetData.actor.name}" height="125" width="125"/>
	<div class="namebox">
		<input name="name" type="text" value="{$sheetData.actor.name}" placeholder="Name"/>
	</div>
	<div class="item1">
		<input type="text" name="system.attributes.level.value" value="{$sheetData.actor.system.attributes.level.value}" data-dtype="Number"/>
		<label>Level</label>
	</div>
	<div class="item2">
		<input type="text" name="system.health.value" value="{$sheetData.actor.system.health.value}" data-dtype="Number"/>
		<span> / </span>
		<input type="text" name="system.health.max" value="{$sheetData.actor.system.health.max}" data-dtype="Number"/>
		<label>HP</label>
	</div>
	<div class="item3">
		<input type="text" name="system.speed.value" value="{$sheetData.actor.system.speed.value}" data-dtype="Number"/>
		<label>Speed</label>
	</div>
	<div class="item4">
		<input type="text" name="system.armor.value" value="{$sheetData.actor.system.armor.value}" data-dtype="Number"/>
		<label on:click={$sheetData.sheet?._onRoll.bind($sheetData.sheet)} for="system.armor.value" class="resource-label rollable" data-defend="2d6">Armor</label> 
	</div>
	<div class="item5">
		<input type="text" name="system.attributes.xp.value" value="{$sheetData.actor.system.attributes.xp.value}" data-dtype="Number"/>
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

</style>