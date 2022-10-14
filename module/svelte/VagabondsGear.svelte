
<script>
	import { getContext } from "svelte";
	import { slide } from "svelte/transition";


	//getContext("sheetStore", dataStore);	
	let sheetData = getContext("sheetStore");
	let { sheet } = $sheetData;
	
	
	//let gear = $sheetData.data.gear;
	let gear;
	$: gear = $sheetData.gear

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
 
	//const sheetSub = sheetData.subscribe((v) => (sheet = v.sheet));
</script>

<gear>
	<label class="resource-label">Equipment</label>
	<label class="rules-label">-1 speed for each loaded-down limb and point of armor; at -7, you are immobilized</label>

	<ol class="items-list">
		{#each gear as item}
		<div transition:slide|local> 
			<li class="item flexrow" data-item-id="{item._id}">
				<div on:click="{() => ToggleItem(item._id)}" class="item-image"><img src="{item.img}" title="{item.name}" width="24" height="24"/></div>
				<h4 on:click="{() => ToggleItem(item._id)}" class="item-name">{item.name}</h4>
				<div class="item-controls">
					<a on:click={sheet?._onItemEdit(item._id)} class="item-control item-edit" title="Edit Item"><i class="fas fa-edit"></i></a>
					<a on:click={sheet?._onItemDelete(item._id)} class="item-control item-delete" title="Delete Item"><i class="fas fa-trash"></i></a>
				</div>
			</li>
			{#if showItems[item._id]} 
			<div class="item_desc"  transition:slide>
				{@html item.system.description}
			</div>
			{/if}
		</div>
		{/each}
		<li class="item flexrow item-header">
            <div class="item-image"></div>
            <div class="item-name"></div>
            <div class="item-controls">
              <a on:click={sheet?._onItemCreate.bind(sheet)} class="item-control item-create" title="Create item" data-type="item"><i class="fas fa-plus"></i> Add item</a>
            </div>
          </li>
	</ol>
</gear>

<style>

.item_desc {
	text-align:left;
	}
</style>