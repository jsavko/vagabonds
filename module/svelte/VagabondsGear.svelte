
<script>
	import { getContext } from "svelte";
	import { slide } from "svelte/transition";
	import { writable } from "svelte/store";
import { Item } from "svelte-layouts";


	export let dataStore;
	//getContext("sheetStore", dataStore);	
	let sheetData = getContext("sheetStore",dataStore);
	let { actor, data, actorData, sheet } = $sheetData;

	const sheetSub = sheetData.subscribe((v) => (sheet = v.sheet));
</script>

<lineage>
	<label class="resource-label">Gear</label>
	<ol class="items-list">
		{#each data.gear as item}
		<li class="item flexrow" data-item-id="{item._id}">
			<div class="item-image"><img src="{item.img}" title="{item.name}" width="24" height="24"/></div>
			<h4 class="item-name">{item.name}</h4>
			<div class="item-controls">
				<a on:click={sheet?._onItemEdit(item._id)} data-item-id="{item._id}" class="item-control item-edit" title="Edit Item"><i class="fas fa-edit"></i></a>
				<a on:click={sheet?._onItemDelete(item._id)} class="item-control item-delete" title="Delete Item"><i class="fas fa-trash"></i></a>
			</div>
		</li>
		{/each}
		<li class="item flexrow item-header">
            <div class="item-image"></div>
            <div class="item-name"></div>
            <div class="item-controls">
              <a on:click={sheet?._onItemCreate.bind(sheet)} class="item-control item-create" title="Create item" data-type="item"><i class="fas fa-plus"></i> Add item</a>
            </div>
          </li>
	</ol>
</lineage>

<style>

</style>