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
  'key': 'BT04A',
  'name': 'Whistle',
  'funding': 200,
  'rule': '[Model] gains the [Stop!] [Trait].',
  'target': 'Henchmen',
  'trait': 'Stop!'
}, {
  'crew': 'bt',
  'key': 'BT04B',
  'name': 'Whistle',
  'funding': 200,
  'rule': '[Model] gains the [Stop!] [Trait].',
  'target': 'Henchmen',
  'trait': 'Stop!'
}, {
  'crew': 'bt',
  'key': 'BT05',
  'name': 'Med-pack',
  'funding': 300,
  'cost': '2 SC',
  'rule': 'Once per [Game], remove 2 [Damage] from a [Model] in [Base-to-Base] [Contact] with this [Model].',
  'target': 'Henchmen'
}, {
  'crew': 'bt',
  'key': 'BT06A',
  'name': 'Street Patrol',
  'funding': 50,
  'rule': '[Model] gains the [Street Guy] [Trait].',
  'target': 'Henchmen',
  'trait': 'Street Guy'
}, {
  'crew': 'bt',
  'key': 'BT06B',
  'name': 'Street Patrol',
  'funding': 50,
  'rule': '[Model] gains the [Street Guy] [Trait].',
  'target': 'Henchmen',
  'trait': 'Street Guy'
}, {
  'crew': 'bt',
  'key': 'BT07',
  'name': 'Intensive Training',
  'funding': 100,
  'rule': '[Model] gains the [Teamwork / 1] [Trait].',
  'target': 'Henchmen',
  'trait': { 'name': 'Teamwork', 'counter': 1 }
}, {
  'crew': 'bt',
  'key': 'BT08A',
  'name': 'Radio',
  'funding': 100,
  'rule': '[Model] can reroll failed [Let\'s Go!] rolls.',
  'target': 'Henchmen'
}, {
  'crew': 'bt',
  'key': 'BT08B',
  'name': 'Radio',
  'funding': 100,
  'rule': '[Model] can reroll failed [Let\'s Go!] rolls.',
  'target': 'Henchmen'
}, {
  'crew': 'bt',
  'key': 'BT09',
  'name': 'Upgraded Batsuit',
  'funding': 100,
  'rule': '[Model] gains +1 to [Endurance].',
  'target': 'Bruce Wayne',
  'requires': 'Bruce Wayne'
}, {
  'crew': 'bt',
  'key': 'BT10',
  'name': 'Kevlar Cowl',
  'funding': 250,
  'rule': '[Model] gains [Immunity] to [CRT].',
  'target': 'Bruce Wayne',
  'requires': 'Bruce Wayne'
}, {
  'crew': 'bt',
  'key': 'BT11',
  'name': 'EMP',
  'funding': 100,
  'rule': '[Model] gains [EMP] [Trait].',
  'target': 'Henchmen',
  'requires': 'Bruce Wayne',
  'trait': 'EMP'
}, {
  'crew': 'bt',
  'key': 'BT12',
  'name': 'Batman Inc.',
  'funding': 400,
  'rep': 3,
  'rule': '[Model] gains the [Bat-Armor MK 2] [Trait].',
  'target': [ 'Sidekick', 'Free Agents' ],
  'requires': 'Bruce Wayne',
  'trait': 'Bat-Armor MK 2'
}, {
  'crew': 'bt',
  'key': 'BT13',
  'name': 'Martial Arts Training',
  'funding': 100,
  'rep': 2,
  'rule': '[Model] gains the [Martial Artist] [Trait].',
  'target': [ 'Sidekick', 'Free Agents' ],
  'requires': 'Bruce Wayne',
  'trait': 'Martial Artist'
}, {
  'crew': 'bt',
  'key': 'BT14',
  'name': 'Mentor',
  'funding': 200,
  'rep': 3,
  'rule': '[Model] gains the [Hidden Boss] [Trait].',
  'target': [ 'Sidekick', 'Free Agents' ],
  'requires': 'Bruce Wayne',
  'trait': 'Hidden Boss'
}, {
  'crew': 'bt',
  'key': 'BT15',
  'name': 'Hidden Magazine',
  'funding': 300,
  'rule': '[Model] gains +1 to [Ammunition] for 1 [Weapon].',
  'target': [ 'Leader', 'Sidekick' ],
  'requires': 'Bruce Wayne'
}, {
  'crew': 'bt',
  'key': 'BT16',
  'name': 'AK Batmobile Synchronizer',
  'funding': 0,
  'rule': '(Cannot be Broken)If [Batman (AK)] drive the [AK Batmobile], the [Batmobile] gains [Transport (2, 0)] and it does not lose [RoF] for moving.',
  'target': 'Batman (AK)',
  'requires': 'Bruce Wayne'
}, {
  'crew': 'bt',
  'key': 'BT17',
  'name': 'Morality',
  'funding': 50,
  'rule': '[Model] gains [Moral Compass] and [Demotivate] [Trait]s.',
  'target': 'Bruce Wayne',
  'requires': 'Bruce Wayne',
  'trait': [ 'Moral Compass', 'Demotivate' ]
}, {
  'crew': 'bt',
  'key': 'BT18',
  'name': 'Circus Training',
  'funding': 300,
  'rep': 5,
  'rule': '[Model] gains the [Acrobat] [Trait].',
  'target': 'Henchmen',
  'requires': 'Dick Grayson',
  'trait': 'Acrobat'
}, {
  'crew': 'bt',
  'key': 'BT19',
  'name': 'Runner',
  'funding': 100,
  'rule': '[Model] gains the [Tireless] [Trait].',
  'target': 'Henchmen',
  'requires': 'Dick Grayson',
  'trait': 'Tireless'
}, {
  'crew': 'bt',
  'key': 'BT20',
  'name': 'Officer Training',
  'funding': 100,
  'rep': 2,
  'rule': '[Model] gains the [Follow Me!] [Trait].',
  'target': 'Henchmen',
  'requires': 'Kathy Kane',
  'trait': 'Follow Me!'
}, {
  'crew': 'bt',
  'key': 'BT21',
  'name': 'Inspiring Presence',
  'funding': 200,
  'rule': '[Model] gains the [Leadership] [Trait].',
  'target': 'Robin (AK)',
  'requires': 'Tim Drake',
  'trait': 'Leadership'
}, {
  'crew': 'bt',
  'key': 'BT22',
  'name': 'Oracle',
  'funding': 200,
  'rule': '[Model] gains the [Exhaustive Planner] [Trait].',
  'target': 'Batgirl',
  'requires': 'Barbara Gordon',
  'trait': 'Exhaustive Planner'
}, {
  'crew': 'bt',
  'key': 'BT23',
  'name': 'Deadly Weapons',
  'funding': 200,
  'rep': 2,
  'rule': '[Weapons] gains the [Silencer] [Equipment Trait].',
  'target': 'Red Hood (AK)',
  'requires': 'Red Hood (AK)'
}, {
  'crew': 'bt',
  'key': 'BT24',
  'name': 'Heliport',
  'funding': 150,
  'rule': '(Cannot be Broken)When this [Model] uses the [Air Support] [Special Trait], [Target] an [Effected] [Enemy] [Model]. The [Target] receives a [Ranged Attack] with [ROF] 1, the [Firearm] rule, and [BB] damage which ignores the [Ping!] rule.',
  'target': 'James Gordon',
  'requires': 'James Gordon'
}, {
  'crew': 'bt',
  'key': 'BT25',
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
}, {
  'crew': 'pn',
  'key': 'PN01A',
  'name': 'Magazine',
  'funding': 200,
  'rule': '+1 to [Ammunition] for 1 [Weapon].',
  'target': 'Henchmen'
}, {
  'crew': 'pn',
  'key': 'PN01B',
  'name': 'Magazine',
  'funding': 200,
  'rule': '+1 to [Ammunition] for 1 [Weapon].',
  'target': 'Henchmen'
}, {
  'crew': 'pn',
  'key': 'PN02A',
  'name': 'Grapple-Gun',
  'funding': 300,
  'rule': '[Model] gains the [Batclaw] [Trait].',
  'target': 'Henchmen',
  'trait': 'Batclaw'
}, {
  'crew': 'pn',
  'key': 'PN02B',
  'name': 'Grapple-Gun',
  'funding': 300,
  'rule': '[Model] gains the [Batclaw] [Trait].',
  'target': 'Henchmen',
  'trait': 'Batclaw'
}, {
  'crew': 'pn',
  'key': 'PN03A',
  'name': 'Laser Sight',
  'funding': 150,
  'rule': '[Model] gains the [Laser Sight] [Trait].',
  'target': 'Henchmen',
  'trait': 'Laser Sight'
}, {
  'crew': 'pn',
  'key': 'PN03B',
  'name': 'Laser Sight',
  'funding': 150,
  'rule': '[Model] gains the [Laser Sight] [Trait].',
  'target': 'Henchmen',
  'trait': 'Laser Sight'
}, {
  'crew': 'pn',
  'key': 'PN04A',
  'name': 'Camo Vest',
  'funding': 300,
  'rule': '[Model] gains the [Stealth] [Trait].',
  'target': 'Henchmen',
  'trait': 'Stealth'
}, {
  'crew': 'pn',
  'key': 'PN04B',
  'name': 'Camo Vest',
  'funding': 300,
  'rule': '[Model] gains the [Stealth] [Trait].',
  'target': 'Henchmen',
  'trait': 'Stealth'
}, {
  'crew': 'pn',
  'key': 'PN05A',
  'name': 'Radio',
  'funding': 100,
  'rule': '[Model] can reroll failed [Let\'s Go!] rolls.',
  'target': 'Henchmen'
}, {
  'crew': 'pn',
  'key': 'PN05B',
  'name': 'Radio',
  'funding': 100,
  'rule': '[Model] can reroll failed [Let\'s Go!] rolls.',
  'target': 'Henchmen'
}, {
  'crew': 'pn',
  'key': 'PN06',
  'name': 'Backpack',
  'funding': 100,
  'rule': '[Model] gains the [Backpack] [Trait].',
  'target': 'Henchmen',
  'trait': 'Backpack'
}, {
  'crew': 'pn',
  'key': 'PN07A',
  'name': 'Improvised Armor',
  'funding': 100,
  'rule': '[Model] gains the [Hockey Gear] [Trait].',
  'target': 'Henchmen',
  'trait': 'Hockey Gear'
}, {
  'crew': 'pn',
  'key': 'PN07B',
  'name': 'Improvised Armor',
  'funding': 100,
  'rule': '[Model] gains the [Hockey Gear] [Trait].',
  'target': 'Henchmen',
  'trait': 'Hockey Gear'
}, {
  'crew': 'pn',
  'key': 'PN07C',
  'name': 'Improvised Armor',
  'funding': 100,
  'rule': '[Model] gains the [Hockey Gear] [Trait].',
  'target': 'Henchmen',
  'trait': 'Hockey Gear'
}, {
  'crew': 'pn',
  'key': 'PN08',
  'name': 'Helmet',
  'funding': 300,
  'rule': '[Model] gains the [Hardened] [Trait].',
  'target': 'Henchmen',
  'trait': 'Hardened'
}, {
  'crew': 'pn',
  'key': 'PN09',
  'name': 'Ostentatious Clothes',
  'funding': 200,
  'rep': 2,
  'rule': '[Model] gains the [Goad] [Trait].',
  'requires': 'Oswald Chesterfield Cobblepot',
  'trait': 'Goad'
}, {
  'crew': 'pn',
  'key': 'PN10',
  'name': 'Grow in the Street',
  'funding': 150,
  'rule': '[Model] gains the [Plead] [Trait].',
  'requires': 'The Penguin (AK)',
  'trait': 'Plead'
}, {
  'crew': 'pn',
  'key': 'PN11',
  'name': 'Brutal Training',
  'funding': 100,
  'rule': '[Model] gains the [Savage Fighter] [Trait].',
  'requires': 'Sickle',
  'trait': 'Plead'
}, {
  'crew': 'ga',
  'key': 'GA01A',
  'name': 'Magazine',
  'funding': 200,
  'rule': '+1 to [Ammunition] for one [Weapon].',
  'target': 'Henchmen'
}, {
  'crew': 'ga',
  'key': 'GA01B',
  'name': 'Magazine',
  'funding': 200,
  'rule': '+1 to [Ammunition] for one [Weapon].',
  'target': 'Henchmen'
}, {
  'crew': 'ga',
  'key': 'GA02A',
  'name': 'Flashlight',
  'funding': 100,
  'rule': '[Model] gains the [Lantern] [Trait].',
  'target': 'Henchmen',
  'trait': 'Lantern'
}, {
  'crew': 'ga',
  'key': 'GA02B',
  'name': 'Flashlight',
  'funding': 100,
  'rule': '[Model] gains the [Lantern] [Trait].',
  'target': 'Henchmen',
  'trait': 'Lantern'
}, {
  'crew': 'ga',
  'key': 'GA03A',
  'name': 'Radio',
  'funding': 100,
  'rule': '[Model] can reroll failed [Let\'s Go!] rolls.',
  'target': 'Henchmen'
}, {
  'crew': 'ga',
  'key': 'GA03B',
  'name': 'Radio',
  'funding': 100,
  'rule': '[Model] can reroll failed [Let\'s Go!] rolls.',
  'target': 'Henchmen'
}, {
  'crew': 'ga',
  'key': 'GA04A',
  'name': 'Whistle',
  'funding': 200,
  'rule': '[Model] gains the [Stop!] [Trait].',
  'target': 'Henchmen',
  'trait': 'Stop!'
}, {
  'crew': 'ga',
  'key': 'GA04B',
  'name': 'Whistle',
  'funding': 200,
  'rule': '[Model] gains the [Stop!] [Trait].',
  'target': 'Henchmen',
  'trait': 'Stop!'
}, {
  'crew': 'ga',
  'key': 'GA05',
  'name': 'Antidote',
  'funding': 200,
  'rule': '[Model] is [Immune] to the [Poison] [Effect].',
  'target': 'Henchmen'
}, {
  'crew': 'ga',
  'key': 'GA06',
  'name': 'Grapple-Gun',
  'funding': 200,
  'rule': '[Model] gains the [Batclaw] [Trait].',
  'target': 'Henchmen',
  'trait': 'Batclaw'
}, {
  'crew': 'ga',
  'key': 'GA07A',
  'name': 'Riot Gear',
  'funding': 150,
  'rule': '[Model] gains the [Football Gear] [Trait].',
  'target': 'Henchmen',
  'trait': 'Football Gear'
}, {
  'crew': 'ga',
  'key': 'GA07B',
  'name': 'Riot Gear',
  'funding': 150,
  'rule': '[Model] gains the [Football Gear] [Trait].',
  'target': 'Henchmen',
  'trait': 'Football Gear'
}, {
  'crew': 'ga',
  'key': 'GA08',
  'name': 'Helmet',
  'funding': 300,
  'rule': '[Model] gains the [Hardened] [Trait].',
  'target': 'Henchmen',
  'trait': 'Hardened'
}, {
  'crew': 'ga',
  'key': 'GA09',
  'name': 'Command Center Support',
  'funding': 250,
  'rule': '[Model] gains the [Scheming/2] [Trait].',
  'target': 'Henchmen',
  'trait': { 'name': 'Scheming', 'count': 2 },
  'requires': 'Oliver Queen'
}, {
  'crew': 'ga',
  'key': 'GA10',
  'name': 'Tactical Gloves',
  'funding': 50,
  'rule': '[Model] gains the [Reinforced Gloves] [Trait].',
  'target': 'Henchmen',
  'trait': 'Reinforced Gloves',
  'requires': 'Arrow'
}, {
  'crew': 'ga',
  'key': 'GA11',
  'name': 'Hi-Tech Ammo',
  'funding': 150,
  'rep': 2,
  'rule': 'One of the [Model]\'s [Ranged Weapon]s gains [CRT]: BB.',
  'target': 'Henchmen',
  'requires': 'Roy Harper'
}, {
  'crew': 'bn',
  'key': 'BN01A',
  'name': 'Magazine',
  'funding': 200,
  'rule': '+1 to [Ammunition] for 1 [Weapon].',
  'target': 'Henchmen'
}, {
  'crew': 'bn',
  'key': 'BN01B',
  'name': 'Magazine',
  'funding': 200,
  'rule': '+1 to [Ammunition] for 1 [Weapon].',
  'target': 'Henchmen'
}, {
  'crew': 'bn',
  'key': 'BN02A',
  'name': 'Grapple-Gun',
  'funding': 300,
  'rule': '[Model] gains the [Batclaw] [Trait].',
  'target': 'Henchmen',
  'trait': 'Batclaw'
}, {
  'crew': 'bn',
  'key': 'BN02B',
  'name': 'Grapple-Gun',
  'funding': 300,
  'rule': '[Model] gains the [Batclaw] [Trait].',
  'target': 'Henchmen',
  'trait': 'Batclaw'
}, {
  'crew': 'bn',
  'key': 'BN03',
  'name': 'Titan Dose',
  'funding': 100,
  'rule': '[Model] gains one [Titan Dose].',
  'target': 'Henchmen',
  'trait': 'Titan Dose'
}, {
  'crew': 'bn',
  'key': 'BN04',
  'name': 'Night Vision Goggles',
  'funding': 200,
  'rule': '[Model] gains the [Night Vision] [Trait].',
  'target': 'Henchmen',
  'trait': 'Night Vision'
}, {
  'crew': 'bn',
  'key': 'BN05',
  'name': 'Antidote',
  'funding': 200,
  'rule': '[Model] is immune to [Poison].',
  'target': 'Henchmen'
}, {
  'crew': 'bn',
  'key': 'BN06A',
  'name': 'Venom Dose',
  'funding': 100,
  'rule': '[Model] gains one [Venom Dose].',
  'target': 'Henchmen',
  'trait': 'Venom Dose'
}, {
  'crew': 'bn',
  'key': 'BN06B',
  'name': 'Venom Dose',
  'funding': 100,
  'rule': '[Model] gains one [Venom Dose].',
  'target': 'Henchmen',
  'trait': 'Venom Dose'
}, {
  'crew': 'bn',
  'key': 'BN07',
  'name': 'Backpack',
  'funding': 100,
  'rule': '[Model] gains the [Backpack] [Trait].',
  'target': 'Henchmen',
  'trait': 'Backpack'
}, {
  'crew': 'bn',
  'key': 'BN08',
  'name': 'Gas Mask',
  'funding': 150,
  'rule': '[Model] gains the [Gas Mask] [Trait].',
  'target': 'Henchmen',
  'trait': 'Gas Mask'
}, {
  'crew': 'bn',
  'key': 'BN09',
  'name': 'Venom Laboratory',
  'funding': 100,
  'rep': 5,
  'rule': 'All [Model]s in your [Crew] can use more than 1 [Titan Dose] per [Game]. This bonus remains in play even if this [Model] is removed from play or leaves the [Playing Area]. Also, the cost of [Venom Doses] in the [Equipment List] is reduces to 50.',
  'target': [ 'Sidekick', 'Free Agents' ],
  'requires': 'Bane'
}, {
  'crew': 'bn',
  'key': 'BN10',
  'name': 'Venom Applicator',
  'funding': 100,
  'rep': 2,
  'rule': 'This [Model] can use [Titan] and [Venom] [Dose]s on a [Friend] in [Contact].',
  'target': [ 'Sidekick', 'Free Agents' ],
  'requires': 'Bane'
}, {
  'crew': 'bn',
  'key': 'BN11',
  'name': 'Military Progress',
  'funding': 150,
  'rule': '[Model] gains the [Veteran] [Trait].',
  'requires': 'Bird',
  'trait': 'Veteran'
}, {
  'crew': 'bm',
  'key': 'BM01A',
  'name': 'Magazine',
  'funding': 200,
  'rule': '+1 to [Ammunition] for 1 [Weapon].',
  'target': 'Henchmen'
}, {
  'crew': 'bm',
  'key': 'BM01B',
  'name': 'Magazine',
  'funding': 200,
  'rule': '+1 to [Ammunition] for 1 [Weapon].',
  'target': 'Henchmen'
}, {
  'crew': 'bm',
  'key': 'BM02A',
  'name': 'Brass Knuckles',
  'funding': 200,
  'rule': '[Model] gains the [Reinforced Gloves] [Trait].',
  'target': 'Reinforced Gloves'
}, {
  'crew': 'bm',
  'key': 'BM02B',
  'name': 'Brass Knuckles',
  'funding': 200,
  'rule': '[Model] gains the [Reinforced Gloves] [Trait].',
  'target': 'Reinforced Gloves'
}, {
  'crew': 'bm',
  'key': 'BM03A',
  'name': 'Grapple-Gun',
  'funding': 300,
  'rule': '[Model] gains the [Batclaw] [Trait].',
  'target': 'Henchmen',
  'trait': 'Batclaw'
}, {
  'crew': 'bm',
  'key': 'BM03B',
  'name': 'Grapple-Gun',
  'funding': 300,
  'rule': '[Model] gains the [Batclaw] [Trait].',
  'target': 'Henchmen',
  'trait': 'Batclaw'
}, {
  'crew': 'bm',
  'key': 'BM04',
  'name': 'Bribe',
  'funding': 100,
  'rule': '[Model] gains the [Informer] [Trait].',
  'target': 'Henchmen',
  'trait': 'Informer'
}, {
  'crew': 'bm',
  'key': 'BM05',
  'name': 'Lock Picks',
  'funding': 100,
  'rule': '[Model] gains the [Runaway] [Trait].',
  'target': 'Henchmen',
  'trait': 'Runaway'
}, {
  'crew': 'bm',
  'key': 'BM06A',
  'name': 'Backpack',
  'funding': 100,
  'rule': '[Model] gains the [Backpack] [Trait].',
  'target': 'Henchmen',
  'trait': 'Backpack'
}, {
  'crew': 'bm',
  'key': 'BM06B',
  'name': 'Backpack',
  'funding': 100,
  'rule': '[Model] gains the [Backpack] [Trait].',
  'target': 'Henchmen',
  'trait': 'Backpack'
}, {
  'crew': 'bm',
  'key': 'BM07',
  'name': 'Bounty Hunter Contract',
  'funding': 200,
  'rep': 2,
  'rule': '[Free Agent]s in your crew can be affected by the [No Mercy!] rule.',
  'target': 'Henchmen'
}, {
  'crew': 'bm',
  'key': 'BM08',
  'name': 'Silencer',
  'funding': 200,
  'rule': 'One of the [Model]\'s [Ranged Weapons] gains the [Silencer] [Trait].',
  'target': 'Henchmen',
  'trait': 'Silencer'
}, {
  'crew': 'bm',
  'key': 'BM09',
  'name': 'Old-School Training',
  'funding': 50,
  'rule': '[Model] gains the [Veteran] [Trait].',
  'target': { 'trait': 'Elite' },
  'trait': 'Veteran'
}, {
  'crew': 'bm',
  'key': 'BM10',
  'name': 'Psychotic',
  'funding': 150,
  'rule': '[Model] gains the [Protect Me!] [Trait].',
  'target': 'Black Mask',
  'requires': 'Roman Sionis',
  'trait': 'Protect Me!'
}, {
  'crew': 'tf',
  'key': 'TF01A',
  'name': 'Magazine',
  'funding': 200,
  'rule': '+1 to [Ammunition] for 1 [Weapon].',
  'target': 'Henchmen'
}, {
  'crew': 'tf',
  'key': 'TF01B',
  'name': 'Magazine',
  'funding': 200,
  'rule': '+1 to [Ammunition] for 1 [Weapon].',
  'target': 'Henchmen'
}, {
  'crew': 'tf',
  'key': 'TF02',
  'name': 'Bribe',
  'funding': 100,
  'rule': '[Model] gains the [Informer] [Trait].',
  'target': 'Henchmen',
  'trait': 'Informer'
}, {
  'crew': 'tf',
  'key': 'TF03A',
  'name': 'Bulletproof Vest',
  'funding': 100,
  'rule': '[Model] gains the [Bulletproof Vest] [Trait].',
  'target': 'Henchmen',
  'trait': 'Bulletproof Vest'
}, {
  'crew': 'tf',
  'key': 'TF03B',
  'name': 'Bulletproof Vest',
  'funding': 100,
  'rule': '[Model] gains the [Bulletproof Vest] [Trait].',
  'target': 'Henchmen',
  'trait': 'Bulletproof Vest'
}, {
  'crew': 'tf',
  'key': 'TF04A',
  'name': 'Handcuffs',
  'funding': 200,
  'rule': '[Model] gains the [Arrest] [Trait].',
  'target': 'Henchmen',
  'trait': 'Arrest'
}, {
  'crew': 'tf',
  'key': 'TF04B',
  'name': 'Handcuffs',
  'funding': 200,
  'rule': '[Model] gains the [Arrest] [Trait].',
  'target': 'Henchmen',
  'trait': 'Arrest'
}, {
  'crew': 'tf',
  'key': 'TF05A',
  'name': 'C-4',
  'funding': 200,
  'rule': '[Model] gains the [Explosive Gel] [Trait].',
  'target': 'Henchmen',
  'trait': 'Explosive Gel'
}, {
  'crew': 'tf',
  'key': 'TF05B',
  'name': 'C-4',
  'funding': 200,
  'rule': '[Model] gains the [Explosive Gel] [Trait].',
  'target': 'Henchmen',
  'trait': 'Explosive Gel'
}, {
  'crew': 'tf',
  'key': 'TF06A',
  'name': 'Morphine',
  'funding': 150,
  'rule': '[Model] gains the [Sturdy] [Trait].',
  'target': 'Henchmen',
  'trait': 'Sturdy'
}, {
  'crew': 'tf',
  'key': 'TF06B',
  'name': 'Morphine',
  'funding': 150,
  'rule': '[Model] gains the [Sturdy] [Trait].',
  'target': 'Henchmen',
  'trait': 'Sturdy'
}, {
  'crew': 'tf',
  'key': 'TF07',
  'name': 'Rusty Tools',
  'funding': 300,
  'rep': 3,
  'rule': '[Model] gains the [Cruel] [Trait].',
  'target': 'Henchmen',
  'trait': 'Cruel'
}, {
  'crew': 'tf',
  'key': 'TF08A',
  'name': 'Gas Mask',
  'funding': 150,
  'rule': '[Model] gains the [Gas Mask] [Trait].',
  'target': 'Henchmen',
  'trait': 'Gas Mask'
}, {
  'crew': 'tf',
  'key': 'TF08B',
  'name': 'Gas Mask',
  'funding': 150,
  'rule': '[Model] gains the [Gas Mask] [Trait].',
  'target': 'Henchmen',
  'trait': 'Gas Mask'
}, {
  'crew': 'tf',
  'key': 'TF09A',
  'name': 'Grapple-Gun',
  'funding': 350,
  'rule': '[Model] gains the [Batclaw] [Trait].',
  'target': 'Henchmen',
  'trait': 'Batclaw'
}, {
  'crew': 'tf',
  'key': 'TF09B',
  'name': 'Grapple-Gun',
  'funding': 350,
  'rule': '[Model] gains the [Batclaw] [Trait].',
  'target': 'Henchmen',
  'trait': 'Batclaw'
}, {
  'crew': 'tf',
  'key': 'TF10',
  'name': 'Silencer',
  'funding': 200,
  'rule': 'One of the [Model]\'s [Ranged Weapons] gains the [Silencer] [Trait].',
  'target': 'Henchmen',
  'trait': 'Silencer'
}, {
  'crew': 'tf',
  'key': 'TF11A',
  'name': 'Pawn Expert',
  'funding': 200,
  'rule': '[Model] gains the [Distract] [Trait].',
  'target': 'Henchmen',
  'trait': 'Distract'
}, {
  'crew': 'tf',
  'key': 'TF11B',
  'name': 'Pawn Expert',
  'funding': 200,
  'rule': '[Model] gains the [Distract] [Trait].',
  'target': 'Henchmen',
  'trait': 'Distract'
}, {
  'crew': 'tf',
  'key': 'TF12',
  'name': 'VOTE HARVEY DENT Banner',
  'funding': 350,
  'rep': 5,
  'rule': 'Your [Leader]\'s [Inspire] [Trait] has a 20cm radius instead of 10cm.',
  'target': 'Henchmen',
  'requires': 'Harvey Dent'
}, {
  'crew': 'tf',
  'key': 'TF13',
  'name': 'Gunslinger',
  'funding': 50,
  'rule': '[Model] gains the [Dirty Fighter] [Trait].',
  'target': 'Henchmen',
  'requires': 'Harvey Dent',
  'trait': 'Dirty Fighter'
}, {
  'crew': 'tf',
  'key': 'TF14',
  'name': 'Old-School Training',
  'funding': 50,
  'rule': '[Model] gains the [Veteran] [Trait].',
  'target': { 'trait': 'Elite' },
  'trait': 'Veteran'
}, {
  'crew': 'co',
  'key': 'CO01A',
  'name': 'Magazine',
  'funding': 200,
  'rule': '+1 to [Ammunition] for 1 [Weapon].',
  'target': 'Henchmen'
}, {
  'crew': 'co',
  'key': 'CO01B',
  'name': 'Magazine',
  'funding': 200,
  'rule': '+1 to [Ammunition] for 1 [Weapon].',
  'target': 'Henchmen'
}, {
  'crew': 'co',
  'key': 'CO02A',
  'name': 'Climbing Claws',
  'funding': 200,
  'rule': '[Model] gains the [Climbing Claws] [Trait].',
  'target': 'Henchmen',
  'trait': 'Climbing Claws'
}, {
  'crew': 'co',
  'key': 'CO02B',
  'name': 'Climbing Claws',
  'funding': 200,
  'rule': '[Model] gains the [Climbing Claws] [Trait].',
  'target': 'Henchmen',
  'trait': 'Climbing Claws'
}, {
  'crew': 'co',
  'key': 'CO03',
  'name': 'Antidote',
  'funding': 200,
  'rule': '[Model] is immune to [Poison].',
  'target': 'Henchmen'
}, {
  'crew': 'co',
  'key': 'CO04A',
  'name': 'Camo Vest',
  'funding': 100,
  'rule': '[Model] gains the [Stealth] [Trait].',
  'target': 'Henchmen',
  'trait': 'Stealth'
}, {
  'crew': 'co',
  'key': 'CO04B',
  'name': 'Camo Vest',
  'funding': 100,
  'rule': '[Model] gains the [Stealth] [Trait].',
  'target': 'Henchmen',
  'trait': 'Stealth'
}, {
  'crew': 'co',
  'key': 'CO05',
  'name': 'C-4',
  'funding': 300,
  'rule': '[Model] gains the [Explosive Gel] [Trait].',
  'target': 'Henchmen',
  'trait': 'Explosive Gel'
}, {
  'crew': 'co',
  'key': 'CO06',
  'name': 'Gas Mask',
  'funding': 150,
  'rule': '[Model] gains the [Gas Mask] [Trait].',
  'target': 'Henchmen',
  'trait': 'Gas Mask'
}, {
  'crew': 'co',
  'key': 'CO07',
  'name': 'Grapple-Gun',
  'funding': 400,
  'rule': '[Model] gains the [Batclaw] [Trait].',
  'target': 'Henchmen',
  'trait': 'Batclaw'
}, {
  'crew': 'co',
  'key': 'CO08',
  'name': 'Ancient Weapon',
  'funding': 200,
  'rule': '[Model]\'s [Close Combat Attacks] gain [CRT]: B.',
  'target': 'Henchmen'
}, {
  'crew': 'co',
  'key': 'CO09A',
  'name': 'Genetic Alteration',
  'funding': 50,
  'rule': '[Model] gains the [Tireless] [Trait].',
  'target': 'Henchmen',
  'trait': 'Tireless'
}, {
  'crew': 'co',
  'key': 'CO09B',
  'name': 'Genetic Alteration',
  'funding': 50,
  'rule': '[Model] gains the [Tireless] [Trait].',
  'target': 'Henchmen',
  'trait': 'Tireless'
}, {
  'crew': 'co',
  'key': 'CO09C',
  'name': 'Genetic Alteration',
  'funding': 50,
  'rule': '[Model] gains the [Tireless] [Trait].',
  'target': 'Henchmen',
  'trait': 'Tireless'
}, {
  'crew': 'co',
  'key': 'CO10A',
  'name': 'Hunter Training',
  'funding': 200,
  'rule': '[Model] gains the [Tracking] [Trait].',
  'target': 'Henchmen',
  'trait': 'Tracking'
}, {
  'crew': 'co',
  'key': 'CO10B',
  'name': 'Hunter Training',
  'funding': 200,
  'rule': '[Model] gains the [Tracking] [Trait].',
  'target': 'Henchmen',
  'trait': 'Tracking'
}, {
  'crew': 'co',
  'key': 'CO11A',
  'name': 'Ancient Training',
  'funding': 150,
  'rule': '[Model] gains the [Master Fighter] [Trait].',
  'target': 'Henchmen',
  'trait': 'Master Fighter'
}, {
  'crew': 'co',
  'key': 'CO11B',
  'name': 'Ancient Training',
  'funding': 150,
  'rule': '[Model] gains the [Master Fighter] [Trait].',
  'target': 'Henchmen',
  'trait': 'Master Fighter'
}, {
  'crew': 'co',
  'key': 'CO12',
  'name': 'Mixed Martial Arts',
  'funding': 150,
  'rule': '[Model] gains the [Combat Flip] [Trait].',
  'target': 'Henchmen',
  'trait': 'Combat Flip'
}, {
  'crew': 'lf',
  'key': 'LF01A',
  'name': 'Magazine',
  'funding': 200,
  'rule': '+1 to [Ammunition] for 1 [Weapon].',
  'target': 'Henchmen'
}, {
  'crew': 'lf',
  'key': 'LF01B',
  'name': 'Magazine',
  'funding': 200,
  'rule': '+1 to [Ammunition] for 1 [Weapon].',
  'target': 'Henchmen'
}, {
  'crew': 'lf',
  'key': 'LF02',
  'name': 'Patrol Training',
  'funding': 200,
  'rule': '[Model] gains the [Undercover] [Trait].',
  'target': 'Henchmen',
  'trait': 'Undercover'
}, {
  'crew': 'lf',
  'key': 'LF03',
  'name': 'Handcuffs',
  'funding': 200,
  'rule': '[Model] gains the [Arrest] [Trait].',
  'target': 'Henchmen',
  'trait': 'Arrest'
}, {
  'crew': 'lf',
  'key': 'LF04A',
  'name': 'Radio',
  'funding': 100,
  'rule': '[Model] can reroll failed [Let\'s Go!] rolls.',
  'target': 'Henchmen'
}, {
  'crew': 'lf',
  'key': 'LF04B',
  'name': 'Radio',
  'funding': 100,
  'rule': '[Model] can reroll failed [Let\'s Go!] rolls.',
  'target': 'Henchmen'
}, {
  'crew': 'lf',
  'key': 'LF05',
  'name': 'Police Badge',
  'funding': 200,
  'rule': '[Model] gains the [Veteran] [Trait].',
  'target': 'Henchmen',
  'trait': 'Veteran'
}, {
  'crew': 'lf',
  'key': 'LF06A',
  'name': 'Gas Mask',
  'funding': 100,
  'rule': '[Model] gains the [Gas Mask] [Trait].',
  'target': 'Henchmen',
  'trait': 'Gas Mask'
}, {
  'crew': 'lf',
  'key': 'LF06B',
  'name': 'Gas Mask',
  'funding': 100,
  'rule': '[Model] gains the [Gas Mask] [Trait].',
  'target': 'Henchmen',
  'trait': 'Gas Mask'
}, {
  'crew': 'lf',
  'key': 'LF07A',
  'name': 'Whistle',
  'funding': 200,
  'rule': '[Model] gains the [Stop!] [Trait].',
  'target': 'Henchmen',
  'trait': 'Stop!'
}, {
  'crew': 'lf',
  'key': 'LF07B',
  'name': 'Whistle',
  'funding': 200,
  'rule': '[Model] gains the [Stop!] [Trait].',
  'target': 'Henchmen',
  'trait': 'Stop!'
}, {
  'crew': 'lf',
  'key': 'LF08',
  'name': 'Grapple-Gun',
  'funding': 350,
  'rule': '[Model] gains the [Batclaw] [Trait].',
  'target': 'Henchmen',
  'trait': 'Batclaw'
}, {
  'crew': 'lf',
  'key': 'LF09A',
  'name': 'Street Patrol',
  'funding': 50,
  'rule': '[Model] gains the [Street Guy] [Trait].',
  'target': 'Henchmen',
  'trait': 'Street Guy'
}, {
  'crew': 'lf',
  'key': 'LF09B',
  'name': 'Street Patrol',
  'funding': 50,
  'rule': '[Model] gains the [Street Guy] [Trait].',
  'target': 'Henchmen',
  'trait': 'Street Guy'
}, {
  'crew': 'lf',
  'key': 'LF10A',
  'name': 'Riot Gear',
  'funding': 150,
  'rule': '[Model] gains the [Football Gear] [Trait].',
  'target': 'Henchmen',
  'trait': 'Football Gear'
}, {
  'crew': 'lf',
  'key': 'LF10B',
  'name': 'Riot Gear',
  'funding': 150,
  'rule': '[Model] gains the [Football Gear] [Trait].',
  'target': 'Henchmen',
  'trait': 'Football Gear'
}, {
  'crew': 'lf',
  'key': 'LF11',
  'name': 'Tear Gas',
  'funding': 200,
  'rule': '[Model] gains the [Smoke Grenades] [Weapon].',
  'target': 'Henchmen',
  'weapon': 'Smoke Grenades 1'
}, {
  'crew': 'lf',
  'key': 'LF12',
  'name': 'Sanitarian',
  'funding': 150,
  'rule': '[Model] gains the [Medic] [Trait].',
  'target': 'Henchmen',
  'trait': 'Medic'
}, {
  'crew': 'lf',
  'key': 'LF13',
  'name': 'S.W.A.T. Special Training',
  'funding': 100,
  'rule': '[Model] gains one of these [Traits]: [Tracking], [Precise Aim].',
  'target': { 'trait': 'Elite' },
  'trait': [ 'Tracking', 'Precise Aim' ]
}, {
  'crew': 'lf',
  'key': 'LF14',
  'name': 'Lieutenant Training',
  'funding': 100,
  'rep': 2,
  'rule': '[Model] gains the [Follow Me!] [Trait].',
  'target': 'Henchmen',
  'trait': 'Follow Me!',
  'requires': 'Kathy Kane'
}, {
  'crew': 'lf',
  'key': 'LF15A',
  'name': 'Sergeant Training',
  'funding': 50,
  'rule': '[Model] gains the [Order] [Trait].',
  'target': 'Henchmen',
  'trait': 'Order',
  'requires': 'James Gordon'
}, {
  'crew': 'lf',
  'key': 'LF15B',
  'name': 'Sergeant Training',
  'funding': 50,
  'rule': '[Model] gains the [Order] [Trait].',
  'target': 'Henchmen',
  'trait': 'Order',
  'requires': 'James Gordon'
}, {
  'crew': 'lf',
  'key': 'LF16',
  'name': 'Heliport',
  'funding': 150,
  'rule': '(Cannot be Broken)When this [Model] uses the [Air Support] [Special Trait], [Target] an [Effected] [Enemy] [Model]. The [Target] receives a [Ranged Attack] with [ROF] 1, the [Firearm] rule, and [BB] damage which ignores the [Ping!] rule.',
  'target': 'James Gordon',
  'requires': 'James Gordon'
}, {
  'crew': 'lf',
  'key': 'LF17',
  'name': 'Bribe',
  'funding': 150,
  'rule': '[Model] gains the [Informer] [Trait].',
  'target': 'Henchmen',
  'trait': 'Informer',
  'requires': 'Gillian B. Loeb'
}, {
  'crew': 'rd',
  'key': 'RD01A',
  'name': 'Magazine',
  'funding': 200,
  'rule': '+1 to [Ammunition] for 1 [Weapon].',
  'target': 'Henchmen'
}, {
  'crew': 'rd',
  'key': 'RD01B',
  'name': 'Magazine',
  'funding': 200,
  'rule': '+1 to [Ammunition] for 1 [Weapon].',
  'target': 'Henchmen'
}, {
  'crew': 'rd',
  'key': 'RD02A',
  'name': 'Grapple-Gun',
  'funding': 300,
  'rule': '[Model] gains the [Batclaw] [Trait].',
  'target': 'Henchmen',
  'trait': 'Batclaw'
}, {
  'crew': 'rd',
  'key': 'RD02B',
  'name': 'Grapple-Gun',
  'funding': 300,
  'rule': '[Model] gains the [Batclaw] [Trait].',
  'target': 'Henchmen',
  'trait': 'Batclaw'
}, {
  'crew': 'rd',
  'key': 'RD03A',
  'name': 'Flare',
  'funding': 300,
  'rule': '[Model] gains the [Flare] [Trait].',
  'target': 'Henchmen',
  'trait': 'Flare'
}, {
  'crew': 'rd',
  'key': 'RD03B',
  'name': 'Flare',
  'funding': 300,
  'rule': '[Model] gains the [Flare] [Trait].',
  'target': 'Henchmen',
  'trait': 'Flare'
}, {
  'crew': 'rd',
  'key': 'RD04A',
  'name': 'Enigma Data-Pack',
  'funding': 150,
  'rule': '[Model] gains the [Distract] [Trait].',
  'target': 'Henchmen',
  'trait': 'Distract'
}, {
  'crew': 'rd',
  'key': 'RD04B',
  'name': 'Enigma Data-Pack',
  'funding': 150,
  'rule': '[Model] gains the [Distract] [Trait].',
  'target': 'Henchmen',
  'trait': 'Distract'
}, {
  'crew': 'rd',
  'key': 'RD05',
  'name': 'Broken Equipment',
  'funding': 250,
  'rule': 'Before [Phase A] of the [Pre-Game Sequence], choose one item of [Equipment] purchased by an [Opponent]. That [Equipment] may not be used during the [Game].',
  'target': 'Henchmen'
}, {
  'crew': 'rd',
  'key': 'RD06',
  'name': 'Gas Mask',
  'funding': 200,
  'rule': '[Model] gains the [Gas Mask] [Trait].',
  'target': 'Henchmen',
  'trait': 'Gas Mask'
}, {
  'crew': 'rd',
  'key': 'RD07',
  'name': 'Bot',
  'funding': 250,
  'rep': 3,
  'rule': '[Model] gains the [Claws] [Trait].',
  'requires': { 'trait': 'Bot' },
  'target': { 'trait': 'Bot' },
  'trait': 'Claws'
}, {
  'crew': 'rd',
  'key': 'RD08',
  'name': 'Shock Droid',
  'funding': 50,
  'rule': '[Model]\'s [Attacks] gains [CRT: Stunned].',
  'target': { 'trait': 'Bot' },
  'requires': { 'trait': 'Bot' }
}, {
  'crew': 'rd',
  'key': 'RD09',
  'name': 'Improved Chassis MK',
  'funding': 50,
  'rule': '[Model] gains the [Tireless] [Trait].',
  'target': { 'trait': 'Bot' },
  'requires': { 'trait': 'Bot' },
  'trait': 'Tireless'
}, {
  'crew': 'rd',
  'key': 'RD10',
  'name': 'Improved Armor',
  'funding': 250,
  'rep': 2,
  'rule': '(Cannot be [Broken])[Model]s with the [Bot] [Trait] gain the [Light Armor] [Trait].',
  'target': 'The Riddler',
  'requires': [ 'The Riddler (AK)', 'The Riddler\'s Mech' ],
  'trait': 'Light Armor'
}, {
  'crew': 'rd',
  'key': 'RD11',
  'name': 'B.U.C (Bots Upgraded CPU)',
  'funding': 100,
  'rule': '(Cannot be [Broken])[Trait] [Can you Solve this?] allows you to place 8 [Clue Markers] instead of 5.',
  'target': 'The Riddler',
  'requires': [ 'The Riddler (AK)', 'The Riddler\'s Mech' ]
}, {
  'crew': 'rd',
  'key': 'RD12',
  'name': 'Enhanced Servo-engines',
  'funding': 150,
  'rule': '(Cannot be [Broken]) [The Riddler\'s Mech] gains 1 to [Movement] and [Combo with Mechanical Claw]',
  'target': 'The Riddler\'s Mech',
  'requires': [ 'The Riddler (AK)', 'The Riddler\'s Mech' ],
  'trait': { 'name': 'Combo with', 'weapon': 'Mechanical Claw' }
}, {
  'crew': 'mf',
  'key': 'MF01A',
  'name': 'Magazine',
  'funding': 200,
  'rule': '+1 to [Ammunition] for 1 [Weapon].',
  'target': 'Henchmen'
}, {
  'crew': 'mf',
  'key': 'MF01B',
  'name': 'Magazine',
  'funding': 200,
  'rule': '+1 to [Ammunition] for 1 [Weapon].',
  'target': 'Henchmen'
}, {
  'crew': 'mf',
  'key': 'MF02',
  'name': 'Grapple-Gun',
  'funding': 150,
  'rule': '[Model] gains the [Batclaw] [Trait].',
  'target': 'Henchmen',
  'trait': 'Batclaw'
}, {
  'crew': 'mf',
  'key': 'MF03A',
  'name': 'Bulletproof Vest',
  'funding': 150,
  'rule': '[Model] gains the [Bulletproof Vest] [Trait].',
  'target': 'Henchmen',
  'trait': 'Bulletproof Vest'
}, {
  'crew': 'mf',
  'key': 'MF03B',
  'name': 'Bulletproof Vest',
  'funding': 150,
  'rule': '[Model] gains the [Bulletproof Vest] [Trait].',
  'target': 'Henchmen',
  'trait': 'Bulletproof Vest'
}, {
  'crew': 'mf',
  'key': 'MF04',
  'name': 'Med-pack',
  'funding': 300,
  'cost': '2 SC',
  'rule': 'Once per [Game], remove 2 [Damage] from a [Model] in [Base-to-Base] [Contact] with this [Model].',
  'target': 'Henchmen'
}, {
  'crew': 'mf',
  'key': 'MF05',
  'name': 'Scope',
  'funding': 300,
  'rule': 'One of the [Model]\'s [Ranged Weapons] gains the [Scope] [Trait].',
  'target': 'Henchmen',
  'trait': 'Scope'
}, {
  'crew': 'mf',
  'key': 'MF06',
  'name': 'Gas Mask',
  'funding': 150,
  'rule': '[Model] gains the [Gas Mask] [Trait].',
  'target': 'Henchmen',
  'trait': 'Gas Mask'
}, {
  'crew': 'mf',
  'key': 'MF07',
  'name': 'Cool Generator',
  'funding': 150,
  'rule': '[Model] gains the [Stop!] [Trait].',
  'target': 'Henchmen',
  'trait': 'Stop!'
}, {
  'crew': 'mf',
  'key': 'MF08',
  'name': 'Improvised Armor',
  'funding': 150,
  'rule': '[Model] gains the [Hockey Gear] [Trait].',
  'target': 'Henchmen',
  'trait': 'Hockey Gear'
}, {
  'crew': 'mf',
  'key': 'MF09',
  'name': 'Freeze Generator',
  'funding': 150,
  'rule': '[Model] gains the [Shockwave] [Trait].',
  'target': 'Henchmen',
  'trait': 'Shockwave',
  'requires': 'Victor Fries'
}, {
  'crew': 'mf',
  'key': 'MF10',
  'name': 'Engineer Training',
  'funding': 100,
  'rule': '[Model] gains the [Handyman] [Trait].',
  'target': 'Henchmen',
  'trait': 'Handyman',
  'requires': 'Victor Fries'
}, {
  'crew': 'mf',
  'key': 'MF11',
  'name': 'Cryo-Blast',
  'funding': 50,
  'rule': '[Model] gains the [Bluff] [Trait].',
  'target': 'Henchmen',
  'trait': 'Bluff',
  'requires': 'Victor Fries'
}, {
  'crew': 'sc',
  'key': 'SC01A',
  'name': 'Magazine',
  'funding': 200,
  'rule': '+1 to [Ammunition] for 1 [Weapon].',
  'target': 'Henchmen'
}, {
  'crew': 'sc',
  'key': 'SC01B',
  'name': 'Magazine',
  'funding': 200,
  'rule': '+1 to [Ammunition] for 1 [Weapon].',
  'target': 'Henchmen'
}, {
  'crew': 'sc',
  'key': 'SC02A',
  'name': 'Antidote',
  'funding': 150,
  'rule': '[Model] is immune to [Poison].',
  'target': 'Henchmen'
}, {
  'crew': 'sc',
  'key': 'SC02B',
  'name': 'Antidote',
  'funding': 150,
  'rule': '[Model] is immune to [Poison].',
  'target': 'Henchmen'
}, {
  'crew': 'sc',
  'key': 'SC03',
  'name': 'Titan Dose',
  'funding': 100,
  'rule': '[Model] gains one [Titan Dose].',
  'target': 'Henchmen',
  'trait': 'Titan Dose'
}, {
  'crew': 'sc',
  'key': 'SC04',
  'name': 'Neurotoxic Drugs',
  'funding': 250,
  'rule': '[Model] gains the [Fast] and [Dodge] [Trait]s.',
  'target': 'Henchmen',
  'trait': [ 'Fast', 'Dodge' ]
}, {
  'crew': 'sc',
  'key': 'SC04A',
  'name': 'Camo Vest',
  'funding': 300,
  'rule': '[Model] gains the [Stealth] [Trait].',
  'target': 'Henchmen',
  'trait': 'Stealth'
}, {
  'crew': 'sc',
  'key': 'SC04B',
  'name': 'Camo Vest',
  'funding': 300,
  'rule': '[Model] gains the [Stealth] [Trait].',
  'target': 'Henchmen',
  'trait': 'Stealth'
}, {
  'crew': 'sc',
  'key': 'SC05A',
  'name': 'Gas Mask',
  'funding': 150,
  'rule': '[Model] gains the [Gas Mask] [Trait].',
  'target': 'Henchmen',
  'trait': 'Gas Mask'
}, {
  'crew': 'sc',
  'key': 'SC05B',
  'name': 'Gas Mask',
  'funding': 150,
  'rule': '[Model] gains the [Gas Mask] [Trait].',
  'target': 'Henchmen',
  'trait': 'Gas Mask'
}, {
  'crew': 'sc',
  'key': 'SC05C',
  'name': 'Gas Mask',
  'funding': 150,
  'rule': '[Model] gains the [Gas Mask] [Trait].',
  'target': 'Henchmen',
  'trait': 'Gas Mask'
}, {
  'crew': 'sc',
  'key': 'SC06',
  'name': 'Grapple-Gun',
  'funding': 300,
  'rule': '[Model] gains the [Batclaw] [Trait].',
  'target': 'Henchmen',
  'trait': 'Batclaw'
}, {
  'crew': 'sc',
  'key': 'SC07',
  'name': 'Fear Gas Dispenser',
  'funding': 250,
  'rule': '[Model] gains the [Inspire Fear] [Trait].',
  'target': 'Henchmen',
  'trait': 'Inspire Fear',
  'requires': 'Scarecrow (AK)'
}, {
  'crew': 'sc',
  'key': 'SC08',
  'name': 'Secret Laboratory',
  'funding': 100,
  'rep': 2,
  'rule': '(Cannot be [Broken]) [Scarecrow] gains the [Scientific] [Trait]. At the start of the [Game], choose up to two [Henchmen] in your [Crew]. These [Model]s let you use [Scarecrow]\'s [Inspire Fear] from those [Model]\'s position. The [Willpower] roll cause by any [Inspire Fear] suffers a plus 2 [Penalty] to the [Roll] (not cumulatvive with a [Discourage] [Penalty]). The [Counters] lost due to [Terror] are chosen by the [Scarecrow] [Controller].',
  'target': 'Scarecrow (AK)',
  'trait': [ 'Scientific', 'Inspire Fear' ],
  'requires': 'Scarecrow (AK)'
}, {
  'crew': 'sc',
  'key': 'SC09A',
  'name': 'Radio',
  'funding': 50,
  'rule': '[Model] can reroll failed [Let\'s Go!] rolls.',
  'target': 'Henchmen',
  'requires': 'Arkham Knight'
}, {
  'crew': 'sc',
  'key': 'SC09B',
  'name': 'Radio',
  'funding': 50,
  'rule': '[Model] can reroll failed [Let\'s Go!] rolls.',
  'target': 'Henchmen',
  'requires': 'Arkham Knight'
}, {
  'crew': 'sc',
  'key': 'SC10',
  'name': 'Hidden Magazine',
  'funding': 200,
  'rule': '[Model] gains +1 to [Ammunition] for 1 [Weapon].',
  'target': 'Arkham Knight',
  'requires': 'Arkham Knight'
}, {
  'crew': 'sc',
  'key': 'SC11',
  'name': 'Cybernetic Arms',
  'funding': 50,
  'rule': '[Model] gains the [Reinforced Gloves] [Trait].',
  'target': 'Arkham Knight',
  'requires': 'Arkham Knight'
}, {
  'crew': 'sc',
  'key': 'SC12',
  'name': 'Arkham Knight Secret Armory',
  'funding': 100,
  'rule': 'One [Ranged Weapon] of this [Model] gains the [Acid] [Trait].',
  'target': 'Henchmen',
  'requires': 'Arkham Knight',
  'trait': 'Acid'
}, {
  'crew': 'sc',
  'key': 'SC13',
  'name': 'Hook Pistol',
  'funding': 400,
  'rule': '(Only if [Arkham Knight] is the [Boss]) Gain [Batclaw] and the [Electric Hook] [Weapon].',
  'target': 'Arkham Knight',
  'requires': 'Arkham Knight',
  'trait': 'Batclaw',
  'weapon': 'Electric Hook'
}, {
  'crew': 'sc',
  'key': 'SC14',
  'name': 'Martial Training',
  'funding': 150,
  'rule': '(Only if [Arkham Knight] is the [Boss]) Gain [Batclaw] and the [Electric Hook] [Weapon].',
  'target': 'Henchmen',
  'requires': 'Slade Wilson',
  'trait': [ 'Martial Artist', 'Master Fighter' ]
}, {
  'crew': 'wg',
  'key': 'WG01A',
  'name': 'Magazine',
  'funding': 200,
  'rule': '+1 to [Ammunition] for 1 [Weapon].',
  'target': 'Henchmen'
}, {
  'crew': 'wg',
  'key': 'WG01B',
  'name': 'Magazine',
  'funding': 200,
  'rule': '+1 to [Ammunition] for 1 [Weapon].',
  'target': 'Henchmen'
}, {
  'crew': 'wg',
  'key': 'WG02A',
  'name': 'Grapple-Gun',
  'funding': 300,
  'rule': '[Model] gains the [Batclaw] [Trait].',
  'target': 'Henchmen',
  'trait': 'Batclaw'
}, {
  'crew': 'wg',
  'key': 'WG02B',
  'name': 'Grapple-Gun',
  'funding': 300,
  'rule': '[Model] gains the [Batclaw] [Trait].',
  'target': 'Henchmen',
  'trait': 'Batclaw'
}, {
  'crew': 'wg',
  'key': 'WG03A',
  'name': 'Bulletproof Vest',
  'funding': 100,
  'rule': '[Model] gains the [Bulletproof Vest] [Trait].',
  'target': 'Henchmen',
  'trait': 'Bulletproof Vest'
}, {
  'crew': 'wg',
  'key': 'WG03B',
  'name': 'Bulletproof Vest',
  'funding': 100,
  'rule': '[Model] gains the [Bulletproof Vest] [Trait].',
  'target': 'Henchmen',
  'trait': 'Bulletproof Vest'
}, {
  'crew': 'wg',
  'key': 'WG04',
  'name': 'Neurotoxic Drugs',
  'funding': 250,
  'rule': '[Model] gains the [Fast] and [Dodge] [Trait]s.',
  'target': 'Henchmen',
  'trait': [ 'Fast', 'Dodge' ]
}, {
  'crew': 'wg',
  'key': 'WG05',
  'name': 'C-4',
  'funding': 250,
  'rule': '[Model] gains the [Explosive Gel] [Trait].',
  'target': 'Henchmen',
  'trait': 'Explosive Gel'
}, {
  'crew': 'wg',
  'key': 'WG06',
  'name': 'Broken Equipment',
  'funding': 250,
  'rule': 'Before [Phase A] of the [Pre-Game Sequence], choose one item of [Equipment] purchased by an [Opponent]. That [Equipment] may not be used during the [Game].',
  'target': 'Henchmen'
}, {
  'crew': 'wg',
  'key': 'WG07A',
  'name': 'Weird Device',
  'funding': 200,
  'rule': '[Model] gains the [Goad] [Trait].',
  'target': 'Henchmen',
  'trait': 'Goad'
}, {
  'crew': 'wg',
  'key': 'WG07B',
  'name': 'Weird Device',
  'funding': 200,
  'rule': '[Model] gains the [Goad] [Trait].',
  'target': 'Henchmen',
  'trait': 'Goad'
}, {
  'crew': 'wg',
  'key': 'WG08A',
  'name': 'Cup of Special Tea',
  'funding': 100,
  'rule': '[Model] gains one [Vertigo Dose].',
  'target': 'Henchmen',
  'trait': 'Vertigo Dose'
}, {
  'crew': 'wg',
  'key': 'WG08B',
  'name': 'Cup of Special Tea',
  'funding': 100,
  'rule': '[Model] gains one [Vertigo Dose].',
  'target': 'Henchmen',
  'trait': 'Vertigo Dose'
}, {
  'crew': 'wg',
  'key': 'WG09',
  'name': 'Trained Mind',
  'funding': 100,
  'rule': '[Model] gains the [Desensitized] [Trait].',
  'target': 'Henchmen',
  'trait': 'Desensitized',
  'requires': 'Dr. Jervish Tetch'
}, {
  'crew': 'wg',
  'key': 'WG10',
  'name': 'Rhyme with Me',
  'funding': 200,
  'rule': '[Model] gains the [Disarray] [Trait].',
  'target': 'Henchmen',
  'trait': 'Disarray',
  'requires': 'Dr. Jervish Tetch'
}, {
  'crew': 'wg',
  'key': 'WG11',
  'name': 'Masks of Wonderland-Queen of Hearts Mask',
  'funding': 200,
  'rule': '[Model] gains the [Assassin 1] and [Order] [Trait]s.',
  'target': 'Henchmen',
  'trait': [ { 'name': 'Assassin', 'points': '1' }, 'Order' ],
  'requires': 'Dr. Jervish Tetch'
}, {
  'crew': 'wg',
  'key': 'WG12',
  'name': 'Masks of Wonderland-White Rabbit Mask',
  'funding': 200,
  'rule': '[Model] gains the [Fast] and [Tireless] [Trait]s.',
  'target': 'Henchmen',
  'trait': [ 'Fast', 'Tireless' ],
  'requires': 'Dr. Jervish Tetch'
}, {
  'crew': 'wg',
  'key': 'WG13',
  'name': 'Masks of Wonderland-Cheshire Cat Mask',
  'funding': 200,
  'rule': '[Model] gains the [Stealth] and [Climbing Claws] [Trait]s.',
  'target': 'Henchmen',
  'trait': [ 'Stealth', 'Climbing Claws' ],
  'requires': 'Dr. Jervish Tetch'
}, {
  'crew': 'gg',
  'key': 'GG01A',
  'name': 'Broken Equipment',
  'funding': 400,
  'rule': 'Before [Phase A] of the [Pre-Game Sequence], choose one item of [Equipment] purchased by an [Opponent]. That [Equipment] may not be used during the [Game].',
  'target': 'Henchmen'
}, {
  'crew': 'gg',
  'key': 'GG01B',
  'name': 'Broken Equipment',
  'funding': 400,
  'rule': 'Before [Phase A] of the [Pre-Game Sequence], choose one item of [Equipment] purchased by an [Opponent]. That [Equipment] may not be used during the [Game].',
  'target': 'Henchmen'
}, {
  'crew': 'gg',
  'key': 'GG02A',
  'name': 'Ancient Weapon',
  'funding': 200,
  'rule': '[Model]\'s [Close Combat Attacks] gain [CRT]: B.',
  'target': 'Henchmen'
}, {
  'crew': 'gg',
  'key': 'GG02B',
  'name': 'Ancient Weapon',
  'funding': 200,
  'rule': '[Model]\'s [Close Combat Attacks] gain [CRT]: B.',
  'target': 'Henchmen'
}, {
  'crew': 'gg',
  'key': 'GG03',
  'name': 'Antidote',
  'funding': 100,
  'rule': '[Model] is immune to [Poison].',
  'target': 'Henchmen'
}, {
  'crew': 'gg',
  'key': 'GG04',
  'name': 'Grapple-Gun',
  'funding': 300,
  'rule': '[Model] gains the [Batclaw] [Trait].',
  'target': 'Henchmen',
  'trait': 'Batclaw'
}, {
  'crew': 'gg',
  'key': 'GG05',
  'name': 'Hunter Training',
  'funding': 200,
  'rule': '[Model] gains the [Tracking] [Trait].',
  'target': 'Henchmen',
  'trait': 'Tracking'
}, {
  'crew': 'gg',
  'key': 'GG06',
  'name': 'Passage',
  'funding': 200,
  'rule': '[Model] gains the [Undercover] [Trait].',
  'target': 'Henchmen',
  'trait': 'Undercover'
}, {
  'crew': 'gg',
  'key': 'GG07',
  'name': 'Primal',
  'funding': 200,
  'rule': '[Model] gains the [Feral] [Trait].',
  'target': 'Henchmen',
  'trait': 'Feral'
}, {
  'crew': 'ls',
  'key': 'LS01A',
  'name': 'Magazine',
  'funding': 200,
  'rule': '+1 to [Ammunition] for 1 [Weapon].',
  'target': 'Henchmen'
}, {
  'crew': 'ls',
  'key': 'LS01B',
  'name': 'Magazine',
  'funding': 200,
  'rule': '+1 to [Ammunition] for 1 [Weapon].',
  'target': 'Henchmen'
}, {
  'crew': 'ls',
  'key': 'LS02',
  'name': 'Loyalty Tattoo',
  'funding': 200,
  'rule': '[Model] gains the [Bodyguard] [Trait].',
  'target': 'Henchmen',
  'trait': 'Bodyguard'
}, {
  'crew': 'ls',
  'key': 'LS03',
  'name': 'Night Vision Goggles',
  'funding': 200,
  'rule': '[Model] gains the [Night Vision] [Trait].',
  'target': 'Henchmen',
  'trait': 'Night Vision'
}, {
  'crew': 'ls',
  'key': 'LS04',
  'name': 'Climbing Claws',
  'funding': 100,
  'rule': '[Model] gains the [Climbing Claws] [Trait].',
  'target': 'Henchmen',
  'trait': 'Climbing Claws'
}, {
  'crew': 'ls',
  'key': 'LS05',
  'name': 'Trained in the Shadows',
  'funding': 200,
  'rule': '[Model] gains the [Hidden] [Trait].',
  'target': 'Henchmen',
  'trait': 'Hidden'
}, {
  'crew': 'ls',
  'key': 'LS06',
  'name': 'Gas Mask',
  'funding': 150,
  'rule': '[Model] gains the [Gas Mask] [Trait].',
  'target': 'Henchmen',
  'trait': 'Gas Mask'
}, {
  'crew': 'ls',
  'key': 'LS07',
  'name': 'Grapple-Gun',
  'funding': 400,
  'rule': '[Model] gains the [Batclaw] [Trait].',
  'target': 'Henchmen',
  'trait': 'Batclaw'
}, {
  'crew': 'ls',
  'key': 'LS08A',
  'name': 'Combat Bracers',
  'funding': 150,
  'rule': 'This [Model]\'s [Close Combat Weapon] and [Unarmed] [Attacks] gain the [Defensive] [Weapon Trait].',
  'target': 'Henchmen',
  'trait': 'Defensive'
}, {
  'crew': 'ls',
  'key': 'LS08B',
  'name': 'Combat Bracers',
  'funding': 150,
  'rule': 'This [Model]\'s [Close Combat Weapon] and [Unarmed] [Attacks] gain the [Defensive] [Weapon Trait].',
  'target': 'Henchmen',
  'trait': 'Defensive'
}, {
  'crew': 'ls',
  'key': 'LS09',
  'name': 'Venom Dose',
  'funding': 100,
  'rule': '[Model] gains one [Venom Dose].',
  'target': 'Henchmen',
  'trait': 'Venom Dose'
}, {
  'crew': 'ls',
  'key': 'LS10',
  'name': 'Precise Orders',
  'funding': 150,
  'rule': '[Model] gains the [Chain of Command] [Trait].',
  'target': 'Henchmen',
  'trait': 'Chain of Command'
}, {
  'crew': 'ls',
  'key': 'LS11A',
  'name': 'Ancient Weapon',
  'funding': 150,
  'rep': 1,
  'rule': '[Model]\'s [Close Combat Attacks] gain [CRT]: B.',
  'target': 'Henchmen',
  'requires': 'Ra\'s Al Ghul'
}, {
  'crew': 'ls',
  'key': 'LS11B',
  'name': 'Ancient Weapon',
  'funding': 150,
  'rep': 1,
  'rule': '[Model]\'s [Close Combat Attacks] gain [CRT]: B.',
  'target': 'Henchmen',
  'requires': 'Ra\'s Al Ghul'
}, {
  'crew': 'ls',
  'key': 'LS12',
  'name': 'Shadow Training',
  'funding': 200,
  'rule': '[Model] gains the [Undercover] [Trait]',
  'target': 'Henchmen',
  'trait': 'Undercover',
  'requires': 'Talia Al Ghul'
}, {
  'crew': 'ls',
  'key': 'LS13',
  'name': 'Bow Training',
  'funding': 100,
  'rule': '[Model] gains the [Shooter] [Trait]',
  'target': 'Henchmen',
  'trait': 'Shooter',
  'requires': 'Nyssa Al Ghul'
}, {
  'crew': 'ls',
  'key': 'LS14',
  'name': 'Unarmed Combat Training',
  'funding': 150,
  'rule': '[Model] gains the [Close Combat Master] [Trait]',
  'target': 'Henchmen',
  'trait': 'Close Combat Master',
  'requires': 'Lady Shiva'
}, {
  'crew': 'ls',
  'key': 'LS15',
  'name': 'Poison Training',
  'funding': 50,
  'rule': '[Model] gains the [Poison Master] [Trait]',
  'target': 'Henchmen',
  'trait': 'Poison Master',
  'requires': 'Cheshire'
}, {
  'crew': 'ls',
  'key': 'LS16',
  'name': 'Traditional Way',
  'funding': 0,
  'rule': '(Unbreakable) This [Crew] cannot recruit [Model]s with [Firearm] or [Beam] rules. Instead, [Crew Affiliated Henchmen] may buy [Bow] and [Katana] [Equipment].',
  'target': 'Henchmen',
  'trait': 'Poison Master',
  'requires': 'Nyssa Al Ghul (AK)'
}, {
  'crew': 'ls',
  'key': 'LS17A',
  'name': 'Bow',
  'funding': 150,
  'rule': '[Model] gains a [Bow] [Weapon]',
  'target': 'Henchmen',
  'weapon': 'Bow',
  'requires': 'Nyssa Al Ghul (AK)'
}, {
  'crew': 'ls',
  'key': 'LS17B',
  'name': 'Bow',
  'funding': 150,
  'rule': '[Model] gains a [Bow] [Weapon]',
  'target': 'Henchmen',
  'weapon': 'Bow',
  'requires': 'Nyssa Al Ghul (AK)'
}, {
  'crew': 'ls',
  'key': 'LS18A',
  'name': 'Katana',
  'funding': 100,
  'rep': 5,
  'rule': '[Model] gains a [Katana] [Weapon]',
  'target': 'Henchmen',
  'weapon': 'Katana',
  'requires': 'Nyssa Al Ghul (AK)'
}, {
  'crew': 'ls',
  'key': 'LS18B',
  'name': 'Katana',
  'funding': 100,
  'rep': 5,
  'rule': '[Model] gains a [Katana] [Weapon]',
  'target': 'Henchmen',
  'weapon': 'Katana',
  'requires': 'Nyssa Al Ghul (AK)'
}, {
  'crew': 'pi',
  'key': 'PI01A',
  'name': 'Titanic Mutation',
  'funding': 150,
  'rule': '[Model] gains one [Titan Dose].',
  'target': { 'trait': 'Plant' },
  'trait': 'Titan Dose'
}, {
  'crew': 'pi',
  'key': 'PI01B',
  'name': 'Titanic Mutation',
  'funding': 150,
  'rule': '[Model] gains one [Titan Dose].',
  'target': { 'trait': 'Plant' },
  'trait': 'Titan Dose'
}, {
  'crew': 'pi',
  'key': 'PI02',
  'name': 'Sense Mutation',
  'funding': 150,
  'rule': '[Model] gains the [Night Vision] [Trait]',
  'target': { 'trait': 'Plant' },
  'trait': 'Night Vision'
}, {
  'crew': 'pi',
  'key': 'PI03A',
  'name': 'Extra Spores',
  'funding': 200,
  'rule': '[Model] gains one additional [Ammunition] for one [Weapon].',
  'target': { 'trait': 'Plant' }
}, {
  'crew': 'pi',
  'key': 'PI03B',
  'name': 'Extra Spores',
  'funding': 200,
  'rule': '[Model] gains one additional [Ammunition] for one [Weapon].',
  'target': { 'trait': 'Plant' }
}, {
  'crew': 'pi',
  'key': 'PI04A',
  'name': 'Spikes Mutation',
  'funding': 200,
  'rule': '[Model] gains the [Claws] [Trait]',
  'target': { 'trait': 'Plant' },
  'trait': 'Claws'
}, {
  'crew': 'pi',
  'key': 'PI04B',
  'name': 'Spikes Mutation',
  'funding': 200,
  'rule': '[Model] gains the [Claws] [Trait]',
  'target': { 'trait': 'Plant' },
  'trait': 'Claws'
}, {
  'crew': 'pi',
  'key': 'PI05',
  'name': 'Luminescent Mutation',
  'funding': 100,
  'rule': '[Model] gains the [Lantern] [Trait]',
  'target': { 'trait': 'Plant' },
  'trait': 'Lantern'
}, {
  'crew': 'pi',
  'key': 'PI06',
  'name': 'Large Roots',
  'funding': 200,
  'rule': '[Model]s moving within 10cm of this [Plant] suffer [Impared Movement]',
  'target': { 'trait': 'Plant' }
}, {
  'crew': 'pi',
  'key': 'PI07',
  'name': 'Grapple-Gun',
  'funding': 300,
  'rule': '[Model] gains the [Grapple Gun] [Trait].',
  'target': 'Henchmen',
  'trait': 'Grapple Gun'
}, {
  'crew': 'pi',
  'key': 'PI08',
  'name': 'Camo Vest',
  'funding': 300,
  'rule': '[Model] gains the [Stealth] [Trait].',
  'target': 'Henchmen',
  'trait': 'Stealth'
}, {
  'crew': 'pi',
  'key': 'PI09',
  'name': 'Mutation Serum',
  'funding': 200,
  'rep': 3,
  'rule': '[Model] gains the [Tough Skin] and [Desensitized] [Trait]s.',
  'target': 'Henchmen',
  'trait': ['Tough Skin', 'Desensitized']
}, {
  'crew': 'pi',
  'key': 'PI10A',
  'name': 'Mutant Alterations',
  'funding': 150,
  'rep': 2,
  'rule': '[Model] gains the [Adaptable] [Trait].',
  'target': 'Henchmen',
  'trait': 'Adaptable'
}, {
  'crew': 'pi',
  'key': 'PI10B',
  'name': 'Mutant Alterations',
  'funding': 150,
  'rep': 2,
  'rule': '[Model] gains the [Adaptable] [Trait].',
  'target': 'Henchmen',
  'trait': 'Adaptable'
}, {
  'crew': 'pi',
  'key': 'PI11A',
  'name': 'Corrosive Blood',
  'funding': 50,
  'rule': 'When this [Model] becomes a [Casualty], all [Model]s in [Contact] must pass an [Endurance Roll] or receive B [Damage].',
  'target': 'Henchmen'
}, {
  'crew': 'pi',
  'key': 'PI11B',
  'name': 'Corrosive Blood',
  'funding': 50,
  'rule': 'When this [Model] becomes a [Casualty], all [Model]s in [Contact] must pass an [Endurance Roll] or receive B [Damage].',
  'target': 'Henchmen'
}, {
  'crew': 'pi',
  'key': 'PI12',
  'name': 'Modified Pheromones',
  'funding': 150,
  'rep': 5,
  'rule': '(Cannot be [Broken]) All [Model]s in the [Crew] with the [Control Pheromones] rule can choose up to 2 [Enemy] [Model]s instead of 1 when using the [Control Pheromones] [Trait]. This bonus is lost if this [Model] is removed from [Play].',
  'target': [ 'Leader', 'Sidekick', 'Free Agent' ],
  'requires': 'Pamela Lillian Isley'
}, {
  'crew': 'pi',
  'key': 'PI13',
  'name': 'Ancient Plants',
  'funding': 200,
  'rep': 40,
  'rule': '(Cannot be [Broken]) [Model] gains [Large], +1 to all [Basic Skills] except [Endurance], +4 [Endurance], [Tough Skin], and [Millenary Roots].',
  'target': [ 'Leader', 'Sidekick', 'Free Agent' ],
  'trait': [ 'Large', 'Tough Skin', 'Millenary Roots' ],
  'requires': 'Pamela Lillian Isley'
}, {
  'crew': 'pi',
  'key': 'PI14',
  'name': 'Passage',
  'funding': 200,
  'rule': '[Model] gains the [Undercover] [Trait].',
  'target': 'Henchmen',
  'trait': 'Undercover'
}, {
  'crew': 'oc',
  'key': 'OC01A',
  'name': 'Magazine',
  'funding': 150,
  'rule': '+1 to [Ammunition] for 1 [Weapon].',
  'target': 'Henchmen'
}, {
  'crew': 'oc',
  'key': 'OC01B',
  'name': 'Magazine',
  'funding': 150,
  'rule': '+1 to [Ammunition] for 1 [Weapon].',
  'target': 'Henchmen'
}, {
  'crew': 'oc',
  'key': 'OC01C',
  'name': 'Magazine',
  'funding': 150,
  'rule': '+1 to [Ammunition] for 1 [Weapon].',
  'target': 'Henchmen'
}, {
  'crew': 'oc',
  'key': 'OC02',
  'name': 'Bribe',
  'funding': 100,
  'rule': '[Model] gains the [Informer] [Trait].',
  'target': 'Henchmen',
  'trait': 'Informer'
}, {
  'crew': 'oc',
  'key': 'OC03A',
  'name': 'Kevlar Vest',
  'funding': 300,
  'rule': '[Model] gains the [Kevlar Vest] [Trait].',
  'target': 'Henchmen',
  'trait': 'Kevlar Vest'
}, {
  'crew': 'oc',
  'key': 'OC03B',
  'name': 'Kevlar Vest',
  'funding': 300,
  'rule': '[Model] gains the [Kevlar Vest] [Trait].',
  'target': 'Henchmen',
  'trait': 'Kevlar Vest'
}, {
  'crew': 'oc',
  'key': 'OC04A',
  'name': 'Grapple-Gun',
  'funding': 250,
  'rule': '[Model] gains the [Grapple Gun] [Trait].',
  'target': 'Henchmen',
  'trait': 'Grapple Gun'
}, {
  'crew': 'oc',
  'key': 'OC04B',
  'name': 'Grapple-Gun',
  'funding': 250,
  'rule': '[Model] gains the [Grapple Gun] [Trait].',
  'target': 'Henchmen',
  'trait': 'Grapple Gun'
}, {
  'crew': 'oc',
  'key': 'OC05',
  'name': 'C-4',
  'funding': 250,
  'rule': '[Model] gains the [Explosive Gel] [Trait].',
  'target': 'Henchmen',
  'trait': 'Explosive Gel'
}, {
  'crew': 'oc',
  'key': 'OC06',
  'name': 'Gas Mask',
  'funding': 150,
  'rule': '[Model] gains the [Gas Mask] [Trait].',
  'target': 'Henchmen',
  'trait': 'Gas Mask'
}, {
  'crew': 'oc',
  'key': 'OC07',
  'name': 'Silencer',
  'funding': 200,
  'rule': 'One of the [Model]\'s [Ranged Weapons] gains the [Silencer] [Trait].',
  'target': 'Henchmen',
  'trait': 'Silencer'
}, {
  'crew': 'oc',
  'key': 'OC08',
  'name': 'Backpack',
  'funding': 100,
  'rule': '[Model] gains the [Backpack] [Trait].',
  'target': 'Henchmen',
  'trait': 'Backpack'
}, {
  'crew': 'oc',
  'key': 'OC09',
  'name': 'Mechanic',
  'funding': 100,
  'rule': '[Model] gains the [Repairman] [Trait].',
  'target': 'Henchmen',
  'trait': 'Repairman'
}, {
  'crew': 'oc',
  'key': 'OC10',
  'name': 'High Confidence',
  'funding': 200,
  'rule': '[Model] gains the [Sturdy] and [Mobster] [Trait]s.',
  'target': [ 'Henchmen', 'Victor Zsasz' ],
  'trait': [ 'Sturdy', 'Mobster' ],
  'requires': 'Falcone'
}, {
  'crew': 'oc',
  'key': 'OC11',
  'name': 'Mafia',
  'funding': 100,
  'rule': '[Model] gains the [Criminal] [Trait].',
  'target': 'Henchmen',
  'trait': 'Criminal',
  'requires': 'Falcone'
}, {
  'crew': 'oc',
  'key': 'OC12',
  'name': 'Old-School Training',
  'funding': 50,
  'rule': '[Model] gains the [Veteran] [Trait].',
  'target': { 'trait': 'Elite' },
  'trait': 'Veteran'
}, {
  'crew': 'oc',
  'key': 'OC13',
  'name': 'Loyalty Tattoo',
  'funding': 100,
  'rule': '[Model] gains the [Bodyguard] [Trait].',
  'target': { 'trait': 'Elite' },
  'trait': 'Bodyguard'
}]
