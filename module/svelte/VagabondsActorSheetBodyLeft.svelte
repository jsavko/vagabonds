<script>
	import { getContext } from "svelte";
	import { slide } from "svelte/transition";
	import { writable } from "svelte/store";

	
	//getContext("sheetStore", dataStore);	
	let sheetData = getContext("sheetStore");
	let { actor, data, actorData, sheet } = $sheetData;
</script>

<main>
	<label class="resource-label">Traits</label><br>
	<label class="rules-label">Sum relevant positive and negative traits to determine <strong>aptitude</strong> (max +3, min -3)</label>
	<label>My Approch to Conflict:</label>
	<input type="text" name="data.aproaches.conflict" value="{data.data.aproaches.conflict}" />

	<label>My Goal:</label>
	<input type="text" name="data.aproaches.goal" value="{data.data.aproaches.goal}"/>

	<label>My Gimmick:</label>
	<input type="text" name="data.aproaches.gimmick" value="{data.data.aproaches.gimmick}"/>

	<label>My Background:</label>
	<input type="text" name="data.aproaches.background" value="{data.data.aproaches.background}"/>

	<label >My Foreground:</label>
	<input type="text" name="data.aproaches.foreground" value="{data.data.aproaches.foreground}"/>

	<label>My Weakness:</label>
	<input type="text" name="data.aproaches.weakness" value="{data.data.aproaches.weakness}" />

	<label>Additional Traits Per Level:</label>
	<input type="text" name="data.aproaches.a1" value="{data.data.aproaches.a1}"/>
	<input type="text" name="data.aproaches.a2" value="{data.data.aproaches.a2}" />
	<input type="text" name="data.aproaches.a3" value="{data.data.aproaches.a3}" />
	<input type="text" name="data.aproaches.a4" value="{data.data.aproaches.a4}" />
	<input type="text" name="data.aproaches.a5" value="{data.data.aproaches.a5}"/>
	<input type="text" name="data.aproaches.a6" value="{data.data.aproaches.a6}" />
	</main>


<style>
	main {
		text-align: center;
		margin: 0 auto;
		width:100%;
		min-width: 310px;
		padding: 1em;
		flex: 0 0 50%;
		border-right: 1px solid #999;
		}

	main input {
		border: none;
	}
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

</style>