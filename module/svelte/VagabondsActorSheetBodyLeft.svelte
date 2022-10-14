<script>
	import { getContext } from "svelte";
	//import { slide } from "svelte/transition";
	//import { writable } from "svelte/store";

	
	//getContext("sheetStore", dataStore);	
	let sheetData = getContext("sheetStore");
	let {  data } = $sheetData;
</script>

<main>
	<label class="resource-label">Traits</label><br>
	<label class="rules-label">Sum relevant positive and negative traits to determine <strong>aptitude</strong> (max +3, min -3)</label>
	<label>My Approch to Conflict:</label>
	<input type="text" name="system.aproaches.conflict" value="{data.system.aproaches.conflict}" />

	<label>My Goal:</label>
	<input type="text" name="system.aproaches.goal" value="{data.system.aproaches.goal}"/>

	<label>My Gimmick:</label>
	<input type="text" name="system.aproaches.gimmick" value="{data.system.aproaches.gimmick}"/>

	<label>My Background:</label>
	<input type="text" name="system.aproaches.background" value="{data.system.aproaches.background}"/>

	<label >My Foreground:</label>
	<input type="text" name="system.aproaches.foreground" value="{data.system.aproaches.foreground}"/>

	<label>My Weakness:</label>
	<input type="text" name="system.aproaches.weakness" value="{data.system.aproaches.weakness}" />

	<label>Additional Traits Per Level:</label>
	<input type="text" name="system.aproaches.a1" value="{data.system.aproaches.a1}"/>
	<input type="text" name="system.aproaches.a2" value="{data.system.aproaches.a2}" />
	<input type="text" name="system.aproaches.a3" value="{data.system.aproaches.a3}" />
	<input type="text" name="system.aproaches.a4" value="{data.system.aproaches.a4}" />
	<input type="text" name="system.aproaches.a5" value="{data.system.aproaches.a5}"/>
	<input type="text" name="system.aproaches.a6" value="{data.system.aproaches.a6}" />
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


</style>