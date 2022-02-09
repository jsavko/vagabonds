
<script>
	import { getContext } from "svelte";
	import { slide } from "svelte/transition";


	//getContext("sheetStore", dataStore);	
	let sheetData = getContext("sheetStore");
	let {  sheet } = $sheetData;

	let lineage;
	$: lineage = $sheetData.data.lineage

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
	<label class="resource-label">Lineage</label>
	<ol class="items-list">
		{#each lineage as item}
		<div transition:slide|local> 
			<li class="item flexrow" data-item-id="{item._id}">
				<div  on:click="{() => ToggleItem(item._id)}" class="item-image"><img src="{item.img}" title="{item.name}" width="24" height="24"/></div>
				<h4  on:click="{() => ToggleItem(item._id)}" class="item-name">{item.name}</h4>
				<div class="item-controls">
					<a on:click={sheet?._onItemDelete(item._id)} class="item-control item-delete" title="Delete Item"><i class="fas fa-trash"></i></a>
				</div>
			</li>
			{#if showItems[item._id]}
			<div class="item_desc"  transition:slide>
				{@html item.data.description}
			</div>
			{/if}
		</div>
		{/each}
	</ol>
</lineage>

<style>

.item_desc {
	text-align:left;
	}

</style>