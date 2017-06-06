export const allEquipment = [{
  'crew': 'bt',
  'key': 'BT01A',
  'name': 'Magazine',
  'funding': 200,
  'rule': '+1 to [Ammunition] for one [Weapon].',
  'target': 'Henchmen'
}, {
  'crew': 'bt',
  'key': 'BT01B',
  'name': 'Magazine',
  'funding': 200,
  'rule': '+1 to [Ammunition] for one [Weapon].',
  'target': 'Henchmen'
}, {
  'crew': 'bt',
  'key': 'BT02A',
  'name': 'Flashlight',
  'funding': 100,
  'rule': '[Model] gains the [Lantern] [Trait].',
  'target': 'Henchmen',
  'trait': 'Lantern'
}, {
  'crew': 'bt',
  'key': 'BT02B',
  'name': 'Flashlight',
  'funding': 100,
  'rule': '[Model] gains the [Lantern] [Trait].',
  'target': 'Henchmen',
  'trait': 'Lantern'
}, {
  'crew': 'bt',
  'key': 'BT03A',
  'name': 'Handcuffs',
  'funding': 200,
  'rule': '[Model] gains the [Arrest] [Trait].',
  'target': 'Henchmen',
  'trait': 'Arrest'
}, {
  'crew': 'bt',
  'key': 'BT03B',
  'name': 'Handcuffs',
  'funding': 200,
  'rule': '[Model] gains the [Arrest] [Trait].',
  'target': 'Henchmen',
  'trait': 'Arrest'
}, {
  'crew': 'bt',
  'key': 'BT04',
  'name': 'Med-pack',
  'funding': 300,
  'cost': '2 SC',
  'rule': 'Once per [Game], remove 2 [Damage] from a [Model] in [Base-to-Base] [Contact] with this [Model].',
  'target': 'Henchmen'
}, {
  'crew': 'bt',
  'key': 'BT05A',
  'name': 'Street Patrol',
  'funding': 50,
  'rule': '[Model] gains the [Street Guy] [Trait].',
  'target': 'Henchmen',
  'trait': 'Street Guy'
}, {
  'crew': 'bt',
  'key': 'BT05B',
  'name': 'Street Patrol',
  'funding': 50,
  'rule': '[Model] gains the [Street Guy] [Trait].',
  'target': 'Henchmen',
  'trait': 'Street Guy'
}, {
  'crew': 'bt',
  'key': 'BT06',
  'name': 'Intensive Training',
  'funding': 100,
  'rule': '[Model] gains the [Teamwork / 1] [Trait].',
  'target': 'Henchmen',
  'trait': { 'name': 'Teamwork', 'counter': 1 }
}, {
  'crew': 'bt',
  'key': 'BT07A',
  'name': 'Radio',
  'funding': 100,
  'rule': '[Model] can reroll failed [Let\'s Go!] rolls.',
  'target': 'Henchmen'
}, {
  'crew': 'bt',
  'key': 'BT07B',
  'name': 'Radio',
  'funding': 100,
  'rule': '[Model] can reroll failed [Let\'s Go!] rolls.',
  'target': 'Henchmen'
}, {
  'crew': 'bt',
  'key': 'BT08',
  'name': 'Upgraded Batsuit',
  'funding': 100,
  'rule': '[Model] gains +1 to [Endurance].',
  'target': 'Bruce Wayne',
  'requires': 'Bruce Wayne'
}, {
  'crew': 'bt',
  'key': 'BT09',
  'name': 'Kevlar Cowl',
  'funding': 250,
  'rule': '[Model] gains [Immunity] to [CRT].',
  'target': 'Bruce Wayne',
  'requires': 'Bruce Wayne'
}, {
  'crew': 'bt',
  'key': 'BT10',
  'name': 'EMP',
  'funding': 100,
  'rule': '[Model] gains [EMP] [Trait].',
  'target': 'Henchmen',
  'requires': 'Bruce Wayne',
  'trait': 'EMP'
}, {
  'crew': 'bt',
  'key': 'BT11',
  'name': 'Batman Inc.',
  'funding': 400,
  'rep': 3,
  'rule': '[Model] gains the [Bat-Armor MK 2] [Trait].',
  'target': [ 'Sidekick', 'Free Agents' ],
  'requires': 'Bruce Wayne',
  'trait': 'Bat-Armor MK 2'
}, {
  'crew': 'bt',
  'key': 'BT12',
  'name': 'Martial Arts Training',
  'funding': 100,
  'rep': 2,
  'rule': '[Model] gains the [Martial Artist] [Trait].',
  'target': [ 'Sidekick', 'Free Agents' ],
  'requires': 'Bruce Wayne',
  'trait': 'Martial Artist'
}, {
  'crew': 'bt',
  'key': 'BT13',
  'name': 'Mentor',
  'funding': 200,
  'rep': 3,
  'rule': '[Model] gains the [Hidden Boss] [Trait].',
  'target': [ 'Sidekick', 'Free Agents' ],
  'requires': 'Bruce Wayne',
  'trait': 'Hidden Boss'
}, {
  'crew': 'bt',
  'key': 'BT14',
  'name': 'Hidden Magazine',
  'funding': 300,
  'rule': '[Model] gains +1 to [Ammunition] for 1 [Weapon].',
  'target': [ 'Leader', 'Sidekick' ],
  'requires': 'Bruce Wayne',
  'trait': 'Hidden Boss'
}, {
  'crew': 'bt',
  'key': 'BT15',
  'name': 'AK Batmobile Synchronizer',
  'funding': 0,
  'rule': '(Cannot be Broken)If [Batman (AK)] drive the [AK Batmobile], the [Batmobile] gains [Transport (2, 0)] and it does not lose [RoF] for moving.',
  'target': 'Batman (AK)',
  'requires': 'Bruce Wayne',
  'trait': 'Hidden Boss'
}, {
  'crew': 'bt',
  'key': 'BT16',
  'name': 'Morality',
  'funding': 50,
  'rule': '[Model] gains [Moral Compass] and [Demotivate] [Trait]s.',
  'target': 'Bruce Wayne',
  'requires': 'Bruce Wayne',
  'trait': [ 'Moral Compass', 'Demotivate' ]
}, {
  'crew': 'bt',
  'key': 'BT17',
  'name': 'Circus Training',
  'funding': 300,
  'rep': 5,
  'rule': '[Model] gains the [Acrobat] [Trait].',
  'target': 'Henchmen',
  'requires': 'Dick Grayson',
  'trait': 'Acrobat'
}, {
  'crew': 'bt',
  'key': 'BT18',
  'name': 'Runner',
  'funding': 100,
  'rule': '[Model] gains the [Tireless] [Trait].',
  'target': 'Henchmen',
  'requires': 'Dick Grayson',
  'trait': 'Tireless'
}, {
  'crew': 'bt',
  'key': 'BT19',
  'name': 'Officer Training',
  'funding': 100,
  'rep': 2,
  'rule': '[Model] gains the [Follow Me!] [Trait].',
  'target': 'Henchmen',
  'requires': 'Kathy Kane',
  'trait': 'Follow Me!'
}, {
  'crew': 'bt',
  'key': 'BT20',
  'name': 'Inspiring Presence',
  'funding': 200,
  'rule': '[Model] gains the [Leadership] [Trait].',
  'target': 'Robin (AK)',
  'requires': 'Tim Drake',
  'trait': 'Leadership'
}, {
  'crew': 'bt',
  'key': 'BT21',
  'name': 'Oracle',
  'funding': 200,
  'rule': '[Model] gains the [Exhaustive Planner] [Trait].',
  'target': 'Batgirl',
  'requires': 'Barbara Gordon',
  'trait': 'Exhaustive Planner'
}, {
  'crew': 'bt',
  'key': 'BT22',
  'name': 'Deadly Weapons',
  'funding': 200,
  'rep': 2,
  'rule': '[Weapons] gains the [Silencer] [Equipment Trait].',
  'target': 'Red Hood (AK)',
  'requires': 'Red Hood (AK)'
}, {
  'crew': 'bt',
  'key': 'BT23',
  'name': 'Heliport',
  'funding': 150,
  'rule': '(Cannot be Broken)When this [Model] uses the [Air Support] [Special Trait], [Target] an [Effected] [Enemy] [Model]. The [Target] receives a [Ranged Attack] with [ROF] 1, the [Firearm] rule, and [BB] damage which ignores the [Ping!] rule.',
  'target': 'James Gordon',
  'requires': 'James Gordon'
}, {
  'crew': 'bt',
  'key': 'BT24',
  'name': 'Feline Stalk',
  'funding': 200,
  'rule': '[Model] gains the [Tracking] [Trait].',
  'target': 'Henchmen',
  'requires': 'Selina Kyle'
}, {
  'crew': 'jk',
  'key': 'JK01A',
  'name': 'Magazine',
  'funding': 200,
  'rule': '+1 to [Ammunition] for 1 [Weapon].',
  'target': 'Henchmen'
}, {
  'crew': 'jk',
  'key': 'JK01B',
  'name': 'Magazine',
  'funding': 200,
  'rule': '+1 to [Ammunition] for 1 [Weapon].',
  'target': 'Henchmen'
}, {
  'crew': 'jk',
  'key': 'JK02A',
  'name': 'Grapple-Gun',
  'funding': 300,
  'rule': '[Model] gains the [Batclaw] [Trait].',
  'target': 'Henchmen',
  'trait': 'Batclaw'
}, {
  'crew': 'jk',
  'key': 'JK02B',
  'name': 'Grapple-Gun',
  'funding': 300,
  'rule': '[Model] gains the [Batclaw] [Trait].',
  'target': 'Henchmen',
  'trait': 'Batclaw'
}, {
  'crew': 'jk',
  'key': 'JK03A',
  'name': 'Clown Paint',
  'funding': 150,
  'rule': '[Model] gains the [Distract] [Trait].',
  'target': 'Henchmen',
  'trait': 'Distract'
}, {
  'crew': 'jk',
  'key': 'JK03B',
  'name': 'Clown Paint',
  'funding': 150,
  'rule': '[Model] gains the [Distract] [Trait].',
  'target': 'Henchmen',
  'trait': 'Distract'
}, {
  'crew': 'jk',
  'key': 'JK04A',
  'name': 'Flare',
  'funding': 300,
  'rule': '[Model] gains the [Flare] [Trait].',
  'target': 'Henchmen',
  'trait': 'Flare'
}, {
  'crew': 'jk',
  'key': 'JK04B',
  'name': 'Flare',
  'funding': 300,
  'rule': '[Model] gains the [Flare] [Trait].',
  'target': 'Henchmen',
  'trait': 'Flare'
}, {
  'crew': 'jk',
  'key': 'JK05',
  'name': 'Neurotoxic Drugs',
  'funding': 250,
  'rule': '[Model] gains the [Fast] and [Dodge] [Trait]s.',
  'target': 'Henchmen',
  'trait': [ 'Fast', 'Dodge' ]
}, {
  'crew': 'jk',
  'key': 'JK06',
  'name': 'Improvised Armor',
  'funding': 150,
  'rule': '[Model] gains the [Hockey Gear] [Trait].',
  'target': 'Henchmen',
  'trait': 'Hockey Gear'
}, {
  'crew': 'jk',
  'key': 'JK07',
  'name': 'Antidote',
  'funding': 50,
  'rule': '[Model] is immune to [Poison].',
  'target': 'Henchmen'
}, {
  'crew': 'jk',
  'key': 'JK08A',
  'name': 'Nerve Gas',
  'funding': 200,
  'rep': 3,
  'rule': '[Model] gains the [Sturdy] [Trait].',
  'target': 'Henchmen',
  'requires': 'Joker',
  'trait': 'Sturdy'
}, {
  'crew': 'jk',
  'key': 'JK08B',
  'name': 'Nerve Gas',
  'funding': 200,
  'rep': 3,
  'rule': '[Model] gains the [Sturdy] [Trait].',
  'target': 'Henchmen',
  'requires': 'Joker',
  'trait': 'Sturdy'
}, {
  'crew': 'jk',
  'key': 'JK09',
  'name': 'Sexy Costume',
  'funding': 300,
  'rep': 5,
  'rule': '[Model] gains the [Disarray] [Trait].',
  'target': 'Henchmen',
  'requires': 'Harley Quinn',
  'trait': 'Disarray'
}, {
  'crew': 'jk',
  'key': 'JK10',
  'name': 'Pole Dancer',
  'funding': 100,
  'rule': '[Model] gains the [Escape Artist] [Trait].',
  'target': 'Henchmen',
  'requires': 'Harley Quinn',
  'trait': 'Escape Artist'
}, {
  'crew': 'jk',
  'key': 'JK11',
  'name': 'Rusty Tools',
  'funding': 200,
  'rep': 2,
  'rule': '[Model] gains the [Cruel] [Trait].',
  'target': 'Henchmen',
  'requires': 'Duela Dent',
  'trait': 'Cruel'
}, {
  'crew': 'jk',
  'key': 'JK12',
  'name': 'Brutal Training',
  'funding': 150,
  'rule': '[Model] gains the [Savage Fighter] [Trait].',
  'target': 'Henchmen',
  'requires': 'Mr. Hammer',
  'trait': 'Savage Fighter'
}]
