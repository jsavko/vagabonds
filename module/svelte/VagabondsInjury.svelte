
<script>
	import { getContext } from "svelte";
	import { slide } from "svelte/transition";
	import { writable } from "svelte/store";


	//getContext("sheetStore", dataStore);	
	let sheetData = getContext("sheetStore");
	let { actor, data, actorData, sheet } = $sheetData;
	let injury;
	$: injury = $sheetData.data.injury
</script>

<lineage>
	<label class="resource-label">Injury</label>
	<ol class="items-list">
		{#each injury as item}
		<li class="item flexrow" data-item-id="{item._id}}">
			<div class="item-image"><img src="{item.img}" title="{item.name}" width="24" height="24"/></div>
			<h4 class="item-name">{item.name}</h4>
			<div class="item-controls">
				<a class="item-control item-edit" title="Edit Item"><i class="fas fa-edit"></i></a>
				<a class="item-control item-delete" title="Delete Item"><i class="fas fa-trash"></i></a>
			</div>
		</li>
		{/each}
	</ol>
</lineage>

<style>

</style>