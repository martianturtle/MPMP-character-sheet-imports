// This file adds the subclasses from Tasha's Cauldron of Everything to MPMB's Character Record Sheet
var iFileName = "paladin_watchers.js";
RequiredSheetVersion(13);

// Define the source
SourceList["TCoE"] = {
	name : "Tasha's Cauldron of Everything",
	abbreviation : "TCoE",
	group : "Primary Sources",
    date : "2020/12/15"
};

// Add a subclass for the Paladin
AddSubClass("paladin", "oath of the watchers", {
	regExpSearch : /^(?=.*watchers)((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper)))).*$/i,
	subname : "Oath of the Watchers",
	source : [["TCoE", 54]],
	features : {
		"subclassfeature3" : {
            name : "Channel Divinity: Harness Divine Power",
            source : [["TCoE", 53]],
            minlevel : 3,
            description : desc([
                "As a bonus action, can touch my holy symbol, utter a prayer, and regain 1 expended spell slot,",
                "the level of which can be no higher than half your proficiency bns (round up)",
            ]),
            action : [["bonus action", ""]],
            usages : [0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, " per "],
            recovery : "long rest"
        },
        "subclassfeature3.1" : {
			name : "Channel Divinity: Watcher's Will",
			source : [["TCoE", 55]],
			minlevel : 3,
			description : "\n   As an action, Cha mod of creatures I see in 30 ft plus me adv. on Int/Wis/Cha saves for 1 min",
			action : [["action", ""]],
			spellcastingExtra : [ "alarm", "detect magic", "see invisibility", "moonbeam", "counterspell", "nondetection", "aura of purity", "banishment", "hold monster", "scrying"]
		},
		"subclassfeature3.2" : {
            name : "Channel Divinity: Abjure the Extraplanar",
            source : [["TCoE", 55]],
            minlevel : 3,
            description : desc([
                "As an action, celestials, elementals, fey, fiends, and aberrations within 30 ft make a Wis save",
                "Succeeds if it can't hear me; On fail, turned for 1 minute or until it takes any damage",
                "Turned: move away, never within 30 ft of me, no reactions or actions other than Dash",
                "Turned: may Dodge instead of Dash when nowhere to move and unable to escape bonds"
            ]),
            action : [["action", ""]]
        },
        "subclassfeature7" : {
			name : "Aura of the Sentinel",
			source : [["TCoE", 55]],
			minlevel : 7,
			description : "\n   If I'm not incapacitated, chosen creatures in range and I add my proficiency to Initiative",
			additional : levels.map(function (n) { return n < 7 ? "" : (n < 18 ? 10 : 30) + "-foot aura"; }),
			addMod : [{ type : "skill", field : "Init", mod : "Prof", text : "I can add my Proficiency Bonus to initiative rolls." }]
		},
		"subclassfeature15" : {
			name : "Vigilant Rebuke",
			source : [["TCoE", 55]],
			minlevel : 15,
			description : desc([
				"As a reaction when I or another I can see makes an int/wis/cha save, I can damage the source",
				"Has to succeed save within 30 ft of me vs. unwanted spell; 2d8 + Cha mod force damage"
			]),
			action : [["reaction", ""]]
		},
		"subclassfeature20" : {
			name : "Mortal Bulwark",
			source : [["TCoE", 55]],
			minlevel : 20,
			description : desc([
				"As a bonus action, I can gain the following benefits for 1 minute: (recharge lvl 5 spell slot)",
				" \u2022 Truesight out to 120 ft and adv. on attacks vs. celestials, elementals, fey, fiends, aberrations",
				" \u2022 I can force creatures I hit and damage with an attack to make a Charisma save",
				"   If failed, the target is banished to its native plane of existence if it's not currently there",
				"   If successful, the creature can't be banished by this feature for 24 hours"
			]),
			recovery : "long rest",
			usages : 1,
			action : [["bonus action", ""]],
			altresource : "SS 5+"
		}
	}
});
