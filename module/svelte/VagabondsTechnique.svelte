
<script>
	import { getContext } from "svelte";
	import { slide } from "svelte/transition";
	import { writable } from "svelte/store";


	//getContext("sheetStore", dataStore);	
	let sheetData = getContext("sheetStore");
	let { actor, data, actorData, sheet } = $sheetData;
	let techniques;
	$: techniques = $sheetData.data.techniques

	let showItems = [];
	let hasBeenClicked = false;

	function ToggleItem(Item) {
		if (hasBeenClicked) return;
        hasBeenClicked = true;
        setTimeout(() => {
            hasBeenClicked = false;
        }, 200);

		if (!showItems[Item] ){
			showItems[Item] = true;
		} else { 
			showItems[Item] = false;
		}
	}

</script>

<lineage>
	<label class="resource-label">Techniques</label>
	<ol class="items-list">
		{#each techniques as item}
		<li  class="item flexrow" data-item-id="{item._id}">
			<div on:click="{() => ToggleItem(item._id)}" class="item-image"><img src="{item.img}" title="{item.name}" width="24" height="24"/></div>
			<h4  on:click="{() => ToggleItem(item._id)}" class="item-name">{item.name}</h4>
			<div class="item-controls">
				<a class="item-control item-edit" title="Edit Item"><i class="fas fa-edit"></i></a>
				<a class="item-control item-delete" title="Delete Item"><i class="fas fa-trash"></i></a>
			</div>
		</li>
		{#if showItems[item._id]}
		<div transition:slide>
			{@html item.data.description}
		</div>
		{/if}
		{/each}
	</ol>
</lineage>

<style>

</style>