# Vagabonds of Dyfed Foundry VTT System
0.3.0
* Fixed an issue preventing loading NPC sheets in v9
* Dropped support for Foundry VTT 0.8
* Removed Dependancy that was no longer being used from dev enviroment

0.2.5
* Updated NPC sheet to no longer use deprecate functions.
* Fixed issue where rolls reported negative damage.
* Updated Actorsheet to use Item.create and Item.delete methods
* Changed package method to esmodule with svelte front end for actor sheets
* Auto open new items for editing when adding directly from the character sheet.
* Updated ActorSheet workflow



0.2.4
* Fixed an issue preventing npc sheets from loading.

0.2.3
* All New Items, Techniques, and Injuries always append to the bottom of the page. (May appear on top of old items at first)
* Updated default value of new character to start at 3 speeds.
* Updated character to start with 1 EXP.
* Updated Actor sheet to no longer use deprecate functions.
* Clicking armor on the ActorSheet now loads the roll modal with defense checked.
* Updated Compendium to remove some weird formatting, fixed typos, and cleaned up white space

0.2.2
* Added Defense roll option from the d20 dialog popup.  Defense rolls take into account Character Armor
* GM can now select which token is rolling
* Updated to 0.8.4 support
* Added Level to ActorSheet
* Updated compendiums with new icons to better show on ActorSheet
* Updated ActorSheet Gear, Technique, and Injury Icons
* New gear, injuries and techniques now appear at the bottom of the segements
* Can double click Gear, Techniques and Injuries to edit them in addition to the edit icon.

0.2.1
* Added Async rolls for defense and action rolls. 
* Fixed issue with injuries on Actor sheet
* Fixed issue with dice rolls returning the wrong dice value with async rolls on defense
* Added Change log

0.2.0
* Updated to support FoundryVTT 0.8.X actor and item data structure 