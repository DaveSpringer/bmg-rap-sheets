export const loadedCharacters = [{
  name: 'Bruce Wayne',
  alias: 'Batman (Arkham Knight)',
  rank: 'Leader',
  reputation: 150,
  funding: 0,
  crews: ['bt'],
  traits: ['Bat-Armor MK III', 'Bat Cape', 'Batclaw', 'Detective', 'Martial Artist', 'Reinforced Gloves', 'Night Vision', 'Explosive Gel', 'Master Fighter', { name: 'Teamwork', counter: '1', target: 'ALL' }]
}, {
  name: 'Bruce Wayne',
  alias: 'Batman (Ben Affleck)',
  rank: 'Leader',
  reputation: 125,
  funding: 0,
  crews: ['bt'],
  traits: ['Bat-Armor MK 1', 'Bat Cape', 'Batclaw', 'Close Combat Master', 'Detective', 'Martial Artist', 'Reinforced Gloves', 'Sustained Defenses']
}, {
  name: 'Selina Kyle',
  alias: 'Catwoman',
  rank: 'Free Agent',
  reputation: 66,
  funding: 0,
  crews: ['*'],
  hates: ['lf', 'jk'],
  traits: ['Total Vision', 'Climbing Claws', 'Sneak Attack', 'Acrobat', 'Thief', { name: 'Primary Target', target: 'Loot' }, 'Retractable Claws']
}, {
  name: 'James W. Gordon',
  alias: 'Gordon',
  rank: [{ crew: 'bt', rank: 'Sidekick' }, { crew: 'lf', rank: 'Leader' }],
  reputation: 70,
  funding: 200,
  crews: ['bt', 'lf'],
  traits: ['Air Support', 'Arrest', 'Detective', { name: 'Elite Boss', type: 'S.W.A.T.' }, 'Kevlar Vest', 'Take Cover!!', 'Veteran']
}, {
  name: 'Barbara Gordon',
  alias: 'Batgirl',
  rank: 'Sidekick',
  reputation: 59,
  funding: 0,
  crews: ['bt', 'lf'],
  traits: ['Batclaw', 'Martial Artist', 'Informer', 'Bat Cape', 'Stealth', 'Sneak Attack', { name: 'Combo with', weapon: 'Unarmed' }]
}, {
  name: 'Richard Grayson',
  alias: 'Nightwing',
  rank: 'Sidekick',
  reputation: 85,
  funding: 0,
  crews: ['bt'],
  traits: ['Charismatic', { name: 'Combo with', weapon: 'Electric Baton' }, 'Explosive Gel', 'Acrobat', 'Batclaw', 'Sneak Attack']
}, {
  name: 'Damian Wayne',
  alias: 'Robin',
  rank: 'Free Agent',
  reputation: 50,
  funding: 0,
  crews: ['bt'],
  traits: ['Martial Artist', 'Acrobat', 'Batclaw', { name: 'True Love', love: 'Talia Al Ghul' }, { name: 'True Love', love: 'Batman' }, 'Small', 'Detective', 'Master Fighter', 'Technique']
}, {
  name: 'Alfred Pennyworth',
  alias: 'None',
  rank: 'Henchman',
  reputation: 30,
  funding: 0,
  crews: ['bt'],
  traits: ['Informer', 'Veteran']
}, {
  name: 'Jenette Vassili',
  alias: 'Quick Response Team 3',
  rank: 'Henchman',
  reputation: 35,
  funding: 400,
  crews: ['lf', 'ga', 'bt'],
  traits: ['Bulletproof Vest', 'Radio', 'Tracking']
}, {
  name: 'Salvador',
  alias: 'Quick Response Team 2',
  rank: 'Henchman',
  reputation: 33,
  funding: 350,
  crews: ['lf', 'ga', 'bt'],
  traits: ['Bulletproof Vest', 'Street Guy']
}, {
  name: 'Agent O Connell',
  alias: 'Unknown',
  rank: 'Henchman',
  reputation: 29,
  funding: 0,
  crews: ['lf', 'ga', 'bt'],
  traits: ['Arrest', 'Veteran']
}, {
  name: 'L. Lawrence',
  alias: 'Quick Response Team 1',
  rank: 'Henchman',
  reputation: 27,
  funding: 100,
  crews: ['lf', 'ga', 'bt'],
  traits: ['Arrest', 'Bulletproof Vest']
}, {
  name: 'Unknown',
  alias: 'Gotham Policewoman',
  rank: 'Henchman',
  reputation: 14,
  funding: 0,
  crews: ['lf', 'ga', 'bt'],
  traits: ['Arrest']
}, {
  name: 'Unknown',
  alias: 'Joker (Jared Leto)',
  rank: 'Leader',
  reputation: 120,
  funding: 0,
  crews: ['jk'],
  traits: ['Mobster', { name: 'Elite Boss', type: 'Cosplayers' }, 'Kaos Agent', 'Follow Me!', 'Psycho', 'Survivor', { name: 'True Love', love: 'Harley Quinn' }]
}, {
  name: 'Dr. Harleen Frances Quinzel',
  alias: 'Harley Quinn (Suicide Squad)',
  rank: 'Sidekick',
  reputation: 90,
  funding: 300,
  crews: ['jk', 'ss'],
  traits: ['Acrobat', 'Confusion', 'Charismatic', 'Combat Flip', 'Goad', 'Suicide Squad member', { name: 'True Love', love: 'Joker' }]
}, {
  name: 'Unknown',
  alias: 'Panda Man',
  rank: 'Henchman',
  reputation: 40,
  funding: 650,
  crews: ['jk'],
  traits: [{ name: 'Elite', type: 'Cosplayers' }, 'Hardened', 'Paranoid (Mental Disorder)']
}, {
  name: 'Unknown',
  alias: 'Goat Head Priest',
  rank: 'Henchman',
  reputation: 35,
  funding: 400,
  crews: ['jk'],
  traits: [{ name: 'Elite', type: 'Cosplayers' }, 'Dirty Fighter']
}, {
  name: 'Stan',
  alias: 'The Eyeball Man',
  rank: 'Henchman',
  reputation: 27,
  funding: 350,
  crews: ['jk'],
  traits: [{ name: 'Elite', type: 'Cosplayers' }, 'Street Guy']
}, {
  name: 'Unknown',
  alias: 'Mr. Grin (white)',
  rank: 'Henchman',
  reputation: 19,
  funding: 0,
  crews: ['jk'],
  traits: [{ name: 'Elite', type: 'Cosplayers' }, 'Desensitized']
}, {
  name: 'Unknown',
  alias: 'Mr. Grin (black)',
  rank: 'Henchman',
  reputation: 17,
  funding: 0,
  crews: ['jk'],
  traits: [{ name: 'Elite', type: 'Cosplayers' }, 'Desensitized']
}, {
  name: 'Oliver Queen',
  alias: 'Arrow',
  rank: 'Leader',
  reputation: 125,
  funding: 0,
  crews: ['ga'],
  traits: ['Acrobat', 'Counterattack', 'Good Aim', 'Hook Arrow', 'Multifire', 'Shooter', 'Stealth', 'Master Marksman']
}, {
  name: 'Barry Allen',
  alias: 'The Flash (TV Show)',
  rank: 'Sidekick',
  reputation: 100,
  funding: 0,
  crews: ['ga'],
  traits: ['Detective', 'Scientific', 'Fast', 'Dodge', 'Moral Compass', 'Speed Force Master', { name: 'Speedster', tokens: 5 }]
}, {
  name: 'John Diggle',
  alias: 'Spartan',
  rank: 'Henchman',
  reputation: 60,
  funding: 350,
  crews: ['ga'],
  traits: ['Bodyguard', 'Kevlar Vest', 'Lantern', 'Master Marksman', { name: 'Scheming', count: 2 }]
}, {
  name: 'Jonathan Crane',
  alias: 'Scarecrow (Arkham Knight)',
  rank: 'Leader',
  reputation: 80,
  funding: 0,
  crews: ['sc'],
  traits: ['Undercover', { name: 'Scheming', count: 2 }, 'Psychologist', 'Psycho', 'Gas Mask']
}, {
  name: 'Slade Wilson',
  alias: 'Deathstroke Origin',
  rank: [{ crew: 'sc', rank: 'Sidekick' }, { crew: '*', rank: 'Free Agent' }],
  reputation: 145,
  funding: 250,
  crews: ['*'],
  hates: ['bt', 'ga', 'lf'],
  traits: ['Acrobat', 'Undercover', 'Stealth', { name: 'Combo with', weapon: 'Reinforced Bo' }, 'Martial Artist', 'Counterattack']
}, {
  name: 'Unknown',
  alias: 'Militia Commander 1',
  rank: 'Henchman',
  reputation: 33,
  funding: 300,
  crews: ['sc'],
  traits: ['Expert Marksman', 'Kill Them!', 'Veteran']
}, {
  name: 'Unknown',
  alias: 'Militia 4',
  rank: 'Henchman',
  reputation: 29,
  funding: 500,
  crews: ['sc'],
  traits: ['Good Aim', 'Veteran']
}, {
  name: 'Unknown',
  alias: 'Militia 1',
  rank: 'Henchman',
  reputation: 22,
  funding: 350,
  crews: ['sc'],
  traits: ['Veteran', 'Shooter']
}, {
  name: 'Unknown',
  alias: 'Militia Medic',
  rank: 'Henchman',
  reputation: 21,
  funding: 0,
  crews: ['sc'],
  traits: ['Veteran']
}, {
  name: 'Unknown',
  alias: 'Militia 2',
  rank: 'Henchman',
  reputation: 15,
  funding: 0,
  crews: ['sc'],
  traits: ['Veteran']
}, {
  name: 'Floyd Lawton',
  alias: 'Deadshot (Suicide Squad)',
  rank: 'Free Agent',
  reputation: 96,
  funding: 400,
  crews: ['*'],
  hates: ['bt', 'ga', 'lf'],
  traits: ['Kevlar Vest', 'Leadership', 'Ranged Master', 'Shooter', 'Suicide Squad member']
}, {
  name: 'Waylon Jones',
  alias: 'Killer Croc (Suicide Squad)',
  rank: 'Free Agent',
  reputation: 64,
  funding: 0,
  crews: ['*'],
  hates: ['bt', 'ga', 'lf'],
  traits: ['Amphibious', 'Claws', 'Ferocious', 'Tough Skin', 'Suicide Squad member']
}, {
  name: 'Chato Santana',
  alias: 'Diablo (Suicide Squad)',
  rank: 'Free Agent',
  reputation: 50,
  funding: 200,
  crews: ['*'],
  hates: ['bt', 'ga', 'lf'],
  traits: ['Criminal', 'Dirty Fighter', 'Flaming Wave', 'Lantern', 'Magic Tattoos', 'Self-Discipline', 'Suicide Squad member', 'Supernatural']
}, {
  name: 'George "Digger" Harkness',
  alias: 'Captain Boomerang (Suicide Squad)',
  rank: 'Free Agent',
  reputation: 48,
  funding: 200,
  crews: ['*'],
  hates: ['bt', 'ga', 'lf'],
  traits: ['Elusive', 'Master Marksman', 'Ricochet', { name: 'Primary Target', target: 'Loot' }, 'Suicide Squad member']
}, {
  name: 'Christopher Weiss',
  alias: 'Slipknot (Suicide Squad)',
  rank: 'Free Agent',
  reputation: 42,
  funding: 200,
  crews: ['*'],
  hates: ['bt', 'ga', 'lf', 'ls'],
  traits: ['Arrest', 'Grapple Gun', 'Bulletproof Vest', 'Suicide Squad member']
}, {
  name: 'Tatsu Yamashiro',
  alias: 'Katana (Suicide Squad)',
  rank: 'Free Agent',
  reputation: 50,
  funding: 0,
  crews: ['lf'],
  traits: ['Acrobat', 'Bodyguard', 'Martial Artist', 'Suicide Squad member', 'Weapon Master']
}, {
  name: 'Agent Ron',
  alias: 'None',
  rank: 'Henchman',
  reputation: 25,
  funding: 300,
  crews: ['bt'],
  traits: ['Arrest', 'Street Guy']
}, {
  name: 'Unknown',
  alias: 'Gotham Policeman',
  rank: 'Henchman',
  reputation: 16,
  funding: 0,
  crews: ['bt'],
  traits: ['Arrest', 'Lantern']
}, {
  name: 'Unknown',
  alias: 'Bane Origin',
  rank: 'Leader',
  reputation: 93,
  funding: 0,
  crews: ['bn'],
  traits: ['Lethal Blow', 'Large', 'Reinforced Gloves', { name: 'Venom Dose', count: '2' }, 'Master Fighter', { name: 'Scheming', count: 2 }, 'Sturdy']
}, {
  name: 'Angel Vallelunga',
  alias: 'Bird',
  rank: 'Sidekick',
  reputation: 60,
  funding: 100,
  crews: ['bn'],
  traits: ['Bulletproof Vest', 'Climbing Rope', { name: 'Elite Boss', type: 'Soldier of Fortune' }, 'Self-Discipline', 'Veteran', { name: 'Weapon Master With', weapon: 'Combat Machete' }, 'Sturdy']
}, {
  name: 'Unknown',
  alias: 'Dallas',
  rank: 'Henchman',
  reputation: 35,
  funding: 600,
  crews: ['bn', 'ls'],
  traits: ['Bulletproof Vest', 'Veteran']
}, {
  name: 'Unknown',
  alias: 'Smash',
  rank: 'Henchman',
  reputation: 30,
  funding: 0,
  crews: ['bn', 'ls'],
  traits: ['Bulletproof Vest', 'Veteran']
}, {
  name: 'Unknown',
  alias: 'Mc Gregor',
  rank: 'Henchman',
  reputation: 30,
  funding: 0,
  crews: ['bn', 'ls'],
  traits: ['Bulletproof Vest', 'Veteran', { name: 'Weapon Master With', weapon: 'Machete' }]
}, {
  name: 'Victor Fries',
  alias: 'Mr. Freeze (Arkham Knight)',
  rank: 'Leader',
  reputation: 80,
  funding: 0,
  crews: ['mf'],
  traits: ['Desensitized', 'Ice Flash', 'Light Armor', 'Safe Hands', { name: 'Scheming', count: 3 }, 'Scientific', 'Self-Discipline', { name: 'Vulnerability', element: 'Fire' }]
}, {
  name: 'Leonard Snart',
  alias: 'Captain Cold',
  rank: [{ crew: 'mf', rank: 'Sidekick' }, { crew: '*', rank: 'Free Agent' }],
  reputation: 72,
  funding: 400,
  crews: ['mf'],
  hates: ['bt', 'ga', 'lf', 'jk', 'ls'],
  traits: ['Strategist', 'Leadership', 'Mastermind', 'Order', 'Ranged Master', { name: 'Teamwork', counter: 1, target: 'Heatwave' }]
}, {
  name: 'Mick Rory',
  alias: 'Heat Wave',
  rank: 'Free Agent',
  reputation: 65,
  funding: 300,
  crews: ['*'],
  hates: ['bt', 'ga', 'lf', 'jk', 'ls'],
  traits: ['Criminal', 'Escape Artist', 'Reinforced Gloves', 'Runaway', 'Sturdy', { name: 'Teamwork', counter: 2, target: 'Captain Cold' }]
}, {
  name: 'Unknown',
  alias: 'Snowy 5',
  rank: 'Henchman',
  reputation: 28,
  funding: 0,
  crews: ['mf'],
  traits: ['Hockey Gear', 'Bluff', 'Order']
}, {
  name: 'Unknown',
  alias: 'Snowy 4',
  rank: 'Henchman',
  reputation: 24,
  funding: 300,
  crews: ['mf'],
  traits: ['Hockey Gear']
}, {
  name: 'Unknown',
  alias: 'Snowy 3',
  rank: 'Henchman',
  reputation: 24,
  funding: 0,
  crews: ['mf'],
  traits: ['Hockey Gear', 'Radio', { name: 'Combo with', weapon: 'Hockey Stick' }]
}, {
  name: 'Unknown',
  alias: 'Snowy 2',
  rank: 'Henchman',
  reputation: 23,
  funding: 400,
  crews: [':mf'],
  traits: ['Hockey Gear']
}, {
  name: 'Unknown',
  alias: 'Snowy 1',
  rank: 'Henchman',
  reputation: 23,
  funding: 300,
  crews: ['mf'],
  traits: ['Hockey Gear']
}, {
  name: 'Sullivan',
  alias: 'Clover',
  rank: 'Henchman',
  reputation: 30,
  funding: 300,
  crews: ['bn'],
  traits: ['Bulletproof Vest', 'Veteran', 'Rapid Fire']
}, {
  name: 'Diaz',
  alias: 'Cuchillo',
  rank: 'Henchman',
  reputation: 27,
  funding: 0,
  crews: ['bn'],
  traits: ['Bulletproof Vest', 'Sneak Attack', 'Stealth', 'Tireless', 'Veteran']
}, {
  name: 'Ike',
  alias: 'Schoolboy',
  rank: 'Henchman',
  reputation: 33,
  funding: 500,
  crews: ['bn'],
  traits: [{ name: 'Elite', type: 'Soldier of Fortune' }, 'Gas Mask', 'Veteran']
}, {
  name: 'Eobard Thawne',
  alias: 'Reverse Flash (TV Show)',
  rank: ['Free Agent'],
  reputation: 110,
  funding: 0,
  crews: ['*'],
  hates: ['bt', 'ga', 'lf', 'jk', 'ls'],
  traits: ['Dodge', 'Fast', { name: 'Scheming', count: 2 }, 'Scientific', { name: 'Speedster', tokens: 5 }]
}, {
  name: "Unknown",
  alias: "404",
  rank: "Henchman",
  reputation: "35",
  funding: "0",
  crews: [ "tf" ],
  hates: [],
  traits: [ "Devastating Blow", "Gas Mask", "Brutal", "Criminal", "Mobster" ]
}, {
  name: "Aaron Cash",
  alias: "Unknown",
  rank: "Sidekick",
  reputation: "55",
  funding: "150",
  crews: [ "lf" ],
  hates: [],
  traits: [ "Bulletproof Vest", "Hardened", "Lantern", "Searcher", "Unstoppable" ]
}, {
  name: "Agent O'Connell",
  alias: "Agent O'Connell",
  rank: "Henchman",
  reputation: "29",
  funding: "0",
  crews: [ "bt", "ga", "lf" ],
  hates: [],
  traits: [ "Arrest", "Veteran" ]
}, {
  name: "Michael Sommers",
  alias: "Alpha",
  rank: "Henchman",
  reputation: "38",
  funding: "500",
  crews: [ "bt", "ga", "lf" ],
  hates: [],
  traits: [ "Shooter", "Lantern", "Bulletproof Vest" ]
}, {
  name: "Unknown",
  alias: "Anatoly",
  rank: "Henchman",
  reputation: "33",
  funding: "0",
  crews: [ "bm" ],
  hates: [],
  traits: [ "Football Gear", "Tireless", "Veteran", "Brutal" ]
}, {
  name: "Jason Todd",
  alias: "Arkham Knight",
  rank: "Sidekick",
  reputation: "95",
  funding: "500",
  crews: [ "sc" ],
  hates: [],
  traits: [ "Acrobat", "Kevlar Vest", "Rapid Fire", "Arrogant", "Agile", "Martial Artist", "Order", "Strategist" ]
}, {
  name: "Jason Todd",
  alias: "Arkham Knight",
  rank: "Leader",
  reputation: "105",
  funding: "0",
  crews: [ "sc" ],
  hates: [],
  traits: [ "Acrobat", "Kevlar Vest", "Rapid Fire", "Agile", "Martial Artist", "Undercover", "Vanish", "Fully Equipped" ]
}, {
  name: "Roy Harper",
  alias: "Arsenal (was Speedy)",
  rank: "Sidekick",
  reputation: "74",
  funding: "200",
  crews: [ "ga" ],
  hates: [],
  traits: [ "Rapid Fire", "Acrobat", "Good Aim", "Undercover", "Charge" ]
}, {
  name: "Unknown",
  alias: "Asker",
  rank: "Henchman",
  reputation: "38",
  funding: "200",
  crews: [ "jk" ],
  hates: [],
  traits: [ "Demential Laughter", "Bloodthirsty (MD)", "Fast", "Psycho" ]
}, {
  name: "Unknown",
  alias: "August",
  rank: "Henchman",
  reputation: "25",
  funding: "0",
  crews: [ "jk" ],
  hates: [],
  traits: [ "Psycho", "Tireless" ]
}, {
  name: "Michael Washington Lane",
  alias: "Azreal AK",
  rank: "Free Agent",
  reputation: "77",
  funding: "150",
  crews: [ "bt" ],
  hates: [],
  traits: [ "Devastating", "Acrobat", "Bipolar (MD)", "Fast", "Kevlar Vest", "Night Vision" ]
}, {
  name: "Classified",
  alias: "B.A.",
  rank: "Henchman",
  reputation: "43",
  funding: "0",
  crews: [ '*' ],
  hates: [ "jk", "pn" ],
  traits: [ "360° Attack with", "Handyman", "Runaway", "Sturdy" ]
}, {
  name: "Unknown",
  alias: "Bane (AC)",
  rank: "Leader",
  reputation: "150",
  funding: "0",
  crews: [
    "bn"
  ],
  hates: [],
  traits: [
    "Titan Addict",
    "Titan Dose x2",
    "Primary Target: Titan",
    "Scheming/1",
    "Master Fighter",
    "Desensitized",
    "Large"
  ]
}, {
  name: "Unknown",
  alias: "Bane (AO)",
  rank: "Leader",
  reputation: "93",
  funding: "0",
  crews: [
    "bn"
  ],
  hates: [],
  traits: [
    "Large",
    "Lethal Blow",
    "2 Venom Dose",
    "Master Fighter",
    "Scheming/2",
    "Sturdy"
  ]
}, {
  name: "Unknown",
  alias: "Bane (DKR Movie)",
  rank: "Leader(Bane)/Sidekick(LoS)",
  reputation: "96",
  funding: "0",
  crews: [
    "bn",
    "ls"
  ],
  hates: [],
  traits: [
    "Combo: Unarmed",
    "Kill them!",
    "Brutal",
    "Strategist",
    "Desensitized",
    "Runaway",
    "True Love: Talia"
  ]
}, {
  name: "Barbara Gordon",
  alias: "Batgirl (TAS)",
  rank: "Free Agent",
  reputation: "47",
  funding: "0",
  crews: [
    "bt"
  ],
  hates: [],
  traits: [
    "Batcape",
    "Batclaw",
    "Combo: Unarmed",
    "Distract",
    "Survivor"
  ]
}, {
  name: "Bruce Wayne",
  alias: "Batman Adam West",
  rank: "Leader",
  reputation: "75",
  funding: "0",
  crews: [
    "bt"
  ],
  hates: [],
  traits: [
    "Millionaire",
    "Batclaw",
    "Arrest",
    "Ka-Pow!!!!!",
    "Detective",
    "Veteran"
  ]
}, {
  name: "Bruce Wayne",
  alias: "Batman AC",
  rank: "Leader",
  reputation: "130",
  funding: "0",
  crews: [
    "bt"
  ],
  hates: [],
  traits: [
    "Batcape",
    "Explosive Gel",
    "Batclaw",
    "Bat-Armour Mk1",
    "Total Vision",
    "Detective",
    "Counter Attack",
    "Martial Expert",
    "Sneak Attack"
  ]
}, {
  name: "Bruce Wayne",
  alias: "Batman (AO)",
  rank: "Leader",
  reputation: "144",
  funding: "0",
  crews: [
    "bt"
  ],
  hates: [],
  traits: [
    "Batcape",
    "Batclaw",
    "Bat Armour Mk1",
    "Total Vision",
    "Explosive Gel",
    "Counter Attack",
    "Sneak Attack",
    "Detective"
  ]
}, {
  name: "Bruce Wayne",
  alias: "Batman (Modern Age)",
  rank: "Leader",
  reputation: "100",
  funding: "0",
  crews: [
    "bt"
  ],
  hates: [],
  traits: [
    "Acrobat",
    "Batcape",
    "Batclaw",
    "Detective",
    "Martial Artist",
    "Sneak Attack",
    "Stealth",
    "The Dynamic Duo",
    "Assistance"
  ]
}, {
  name: "Bruce Wayne",
  alias: "Batman (DKR Movie)",
  rank: "Leader",
  reputation: "120",
  funding: "0",
  crews: [
    "bt"
  ],
  hates: [],
  traits: [
    "Batcape",
    "Batclaw",
    "Arrest",
    "Bat Armour Mk 2",
    "Detective",
    "Stealth",
    "Combo: Unarmed",
    "Sneak Attack",
    "Arrest"
  ]
}, {
  name: "Bruce Wayne",
  alias: "Batman (TAS)",
  rank: "Leader",
  reputation: "80",
  funding: "0",
  crews: [
    "bt"
  ],
  hates: [],
  traits: [
    "Acrobat",
    "Batcape",
    "Batclaw",
    "Detective",
    "Martial Artist"
  ]
}, {
  name: "Bruce Wayne",
  alias: "Batman (TDKR)",
  rank: "Leader",
  reputation: "109",
  funding: "0",
  crews: [
    "bt"
  ],
  hates: [],
  traits: [
    "Batcape",
    "Batclaw",
    "Bat Armour Mk1",
    "Night Vision",
    "Sneak Attack",
    "Combo: Unarmed",
    "Detective",
    "Obstinate",
    "Veteran"
  ]
}, {
  name: "None",
  alias: "Batmobile (AK)",
  rank: "Vehicle/Legend",
  reputation: "150",
  funding: "1500",
  crews: [
    "bt"
  ],
  hates: [],
  traits: [
    "Combat Mode",
    "Heavy Armour",
    "Remote Driving",
    "Non-Lethal Ammo",
    "Shock Armour",
    "Lantern",
    "Large"
  ]
}, {
  name: "Kathy Kane",
  alias: "Batwoman",
  rank: "Sidekick",
  reputation: "95",
  funding: "0",
  crews: [
    "bt",
    "lf"
  ],
  hates: [],
  traits: [
    "Bat Armour Mk 1",
    "Batclaw",
    "Night Vision",
    "Criminology",
    "Detective",
    "Searcher",
    "Stealth",
    "Technique"
  ]
}, {
  name: "Benjamin Orchard",
  alias: "Benjamin Orchard",
  rank: "Leader",
  reputation: "40",
  funding: "0",
  crews: [
    "co"
  ],
  hates: [],
  traits: [
    "Joy for the Victory",
    "Court of Owls Crew",
    "Order",
    "Persuasive",
    "Scheming/1",
    "Veteran",
    "Weapon Master"
  ]
}, {
  name: "Dinah Drake Lance",
  alias: "Black Canary (Comic)",
  rank: "Free Agent",
  reputation: "69",
  funding: "0",
  crews: [
    "ga",
    "bt"
  ],
  hates: [],
  traits: [
    "Canary Cry",
    "Acrobat",
    "Martial Artist",
    "Hidden",
    "Technique"
  ]
}, {
  name: "Dinah Drake Lance",
  alias: "Black Canary (TAS)",
  rank: "Free Agent",
  reputation: "50",
  funding: "0",
  crews: [
    "ga"
  ],
  hates: [],
  traits: [
    "Canary Cry",
    "Acrobat",
    "Teamwork 2: Green Arrow",
    "\"Undercover",
    "\"",
    "Martial Artist"
  ]
}, {
  name: "David",
  alias: "Black Manta",
  rank: "Free Agent",
  reputation: "120",
  funding: "350",
  crews: ['*'],
  hates: [
    "bt",
    "lf",
    "ga",
    "oc"
  ],
  traits: [
    "Tracking",
    "Night vision",
    "Stealth",
    "Weapon Master",
    "Amphibious",
    "Bulletproof Vest",
    "Scientific",
    "Strategist"
  ]
}, {
  name: "Roman Sionis",
  alias: "Black Mask",
  rank: "Leader",
  reputation: "79",
  funding: "0",
  crews: [
    "bm"
  ],
  hates: [],
  traits: [
    "No Mercy!",
    "Mob",
    "Brutal",
    "Criminal",
    "Order",
    "Strategist"
  ]
}, {
  name: "Unknown",
  alias: "Blue Penguin",
  rank: "Henchman",
  reputation: "13",
  funding: "0",
  crews: [
    "pn"
  ],
  hates: [],
  traits: [
    "Mobster"
  ]
}, {
  name: "Unknown",
  alias: "Blue Penguin 1",
  rank: "Henchman",
  reputation: "13",
  funding: "0",
  crews: [
    "pn"
  ],
  hates: [],
  traits: [
    "Mobster"
  ]
}, {
  name: "Unknown",
  alias: "Blue Penguin 2",
  rank: "Henchman",
  reputation: "15",
  funding: "300",
  crews: [
    "pn"
  ],
  hates: [],
  traits: [
    "Mobster"
  ]
}, {
  name: "Unknown",
  alias: "Blue Penguin 3",
  rank: "Henchman",
  reputation: "17",
  funding: "0",
  crews: [
    "pn"
  ],
  hates: [],
  traits: [
    "Mobster"
  ]
}, {
  name: "Unknown",
  alias: "Bob",
  rank: "Henchman",
  reputation: "16",
  funding: "150",
  crews: [
    "tf"
  ],
  hates: [],
  traits: [
    "Criminal"
  ]
}, {
  name: "None",
  alias: "Bobbie",
  rank: "Henchman",
  reputation: "25",
  funding: "100",
  crews: [
    "jk"
  ],
  hates: [],
  traits: [
    "Bot",
    "Fly",
    "Funny Bomb",
    "Save Hands"
  ]
}, {
  name: "None",
  alias: "Bobbie MkII",
  rank: "Henchman",
  reputation: "30",
  funding: "100",
  crews: [
    "jk"
  ],
  hates: [],
  traits: [
    "Bot",
    "Fly",
    "Funny Bomb",
    "Save Hands"
  ]
}, {
  name: "Unknown",
  alias: "Borgon",
  rank: "Henchman",
  reputation: "42",
  funding: "0",
  crews: [
    "jk"
  ],
  hates: [],
  traits: [
    "Brutal",
    "Sturdy",
    "Demential Laughter",
    "Criminal"
  ]
}, {
  name: "Unknown",
  alias: "Boris",
  rank: "Henchman",
  reputation: "33",
  funding: "200",
  crews: [
    "tf",
    "oc",
    "bm"
  ],
  hates: [],
  traits: [
    "Criminal",
    "Persuasive",
    "Street Guy",
    "#N/A"
  ]
}, {
  name: "Borj",
  alias: "Borj",
  rank: "Henchman",
  reputation: "50",
  funding: "150",
  crews: [
    "pi"
  ],
  hates: [],
  traits: [
    "Plant Special Traits",
    "Control Pheremones",
    "Poison Master"
  ]
}, {
  name: "Bot Mk 1",
  alias: "Bot Mk 1",
  rank: "Henchman",
  reputation: "17",
  funding: "0",
  crews: [
    "rd"
  ],
  hates: [],
  traits: [
    "Bot",
    "Can you Solve this 4+"
  ]
}, {
  name: "Bot Mk 2",
  alias: "Bot Mk 2",
  rank: "Henchman",
  reputation: "19",
  funding: "0",
  crews: [
    "rd"
  ],
  hates: [],
  traits: [
    "Bot",
    "Can you Solve this 3+"
  ]
}, {
  name: "Bot Mk 3",
  alias: "Bot Mk 3",
  rank: "Henchman",
  reputation: "20",
  funding: "0",
  crews: [
    "rd"
  ],
  hates: [],
  traits: [
    "Bot",
    "Can you Solve this 5+"
  ]
}, {
  name: "Classified",
  alias: "Bravo",
  rank: "Henchman",
  reputation: "27",
  funding: "300",
  crews: [
    "bt",
    "ga",
    "lf"
  ],
  hates: [],
  traits: [
    "Veteran",
    "Bulletproof Vest"
  ]
}, {
  name: "Julian Gregory Day",
  alias: "Calendar Man",
  rank: "Free Agent",
  reputation: "55",
  funding: "0",
  crews: ['*'],
  hates: [
    "bt",
    "ga",
    "lf",
    "oc"
  ],
  traits: [
    "Adaptable",
    "Assassin 5",
    "Deadly Strike",
    "Handyman",
    "Self-Discipline",
    "Mastermind",
    "Psycho",
    "Undercover",
    "Undead"
  ]
}, {
  name: "George „Digger“ Harkness",
  alias: "Captain Boomerang",
  rank: "Free Agent",
  reputation: "82",
  funding: "350",
  crews: ['*'],
  hates: [
    "bt",
    "lf",
    "ga"
  ],
  traits: [
    "Master Marksman",
    "Tracking",
    "Shooter",
    "Ricochet",
    "Dodge",
    "Follow Me!!!"
  ]
}, {
  name: "George „Digger“ Harkness",
  alias: "Captain Boomerang (SSqS)",
  rank: "Free Agent",
  reputation: "48",
  funding: "200",
  crews: ['*'],
  hates: [
    "bt",
    "ga",
    "lf"
  ],
  traits: [
    "Elusive",
    "Master Marksman",
    "Ricochet",
    "Primary Target: Loot",
    "Suicide Squad Member",
    "Greed",
    "Monitoring Device"
  ]
}, {
  name: "Carmine Falcone",
  alias: "The Roman",
  rank: "Leader",
  reputation: "85",
  funding: "0",
  crews: [
    "oc"
  ],
  hates: [],
  traits: [
    "Lord of Business",
    "Invaluable",
    "Plead",
    "Revenge",
    "Runaway",
    "Bluff",
    "Demotivate",
    "Grand Strategist",
    "The Untouchable"
  ]
}, {
  name: "Selina Kyle",
  alias: "Catwoman (Modern Age)",
  rank: "Free Agent",
  reputation: "69",
  funding: "0",
  crews: ['*'],
  hates: [
    "lf",
    "jk"
  ],
  traits: [
    "Acrobat",
    "Bluff",
    "Coward‘s Reward",
    "Sneaking",
    "Thief",
    "Backpack"
  ]
}, {
  name: "Selina Kyle",
  alias: "Catwoman (TAS)",
  rank: "Free Agent",
  reputation: "50",
  funding: "0",
  crews: ['*'],
  hates: [
    "lf",
    "jk"
  ],
  traits: [
    "Acrobat",
    "Climbing Shoes",
    "Agile",
    "Pickpocket"
  ]
}, {
  name: "Unknown",
  alias: "Clayface",
  rank: "Free Agent",
  reputation: "116",
  funding: "0",
  crews: ['*'],
  hates: [
    "bt",
    "lf",
    "ga",
    "bn"
  ],
  traits: [
    "Claybody",
    "Regeneration",
    "Large",
    "Sturdy",
    "Adaptable",
    "Undercover"
  ]
}, {
  name: "Unknown",
  alias: "Clown",
  rank: "Henchman",
  reputation: "14",
  funding: "0",
  crews: [
    "jk"
  ],
  hates: [],
  traits: [
    "Demential Laughter"
  ]
}, {
  name: "Unknown",
  alias: "Clown",
  rank: "Henchman",
  reputation: "15",
  funding: "0",
  crews: [
    "jk"
  ],
  hates: [],
  traits: [
    "Demential Laughter"
  ]
}, {
  name: "Unknown",
  alias: "Clown",
  rank: "Henchman",
  reputation: "16",
  funding: "0",
  crews: [
    "jk"
  ],
  hates: [],
  traits: [
    "Demential Laughter"
  ]
}, {
  name: "Edward Blake",
  alias: "Comedian",
  rank: "Watchmen",
  reputation: "75",
  funding: "0",
  crews: [
    "wm"
  ],
  hates: [],
  traits: [
    "Demential Laughter",
    "Shooter",
    "Dirty Fighting",
    "Psycho",
    "Hardened",
    "Veteran",
    "Watchmen"
  ]
}, {
  name: "Gillian B. Loeb",
  alias: "Commissioner Loeb",
  rank: "\"Leader (LAW) / Sidekick (Black Mask",
  reputation: "",
  funding: "",
  crews: [
    "oc"
  ],
  hates: [],
  traits: [
    "Public Resources",
    "Commissioner",
    "Corrupt",
    "Discourage",
    "Kill Them",
    "Mob",
    "Persuasive",
    "Veteran"
  ]
}, {
  name: "Unknown",
  alias: "Conqueror Penguin",
  rank: "Henchman",
  reputation: "35",
  funding: "200",
  crews: [
    "pn"
  ],
  hates: [],
  traits: [
    "Power Strike",
    "Football Gear",
    "Veteran"
  ]
}, {
  name: "Unknown",
  alias: "Contre-Auguste",
  rank: "Henchman",
  reputation: "21",
  funding: "0",
  crews: [
    "jk"
  ],
  hates: [],
  traits: [
    "Obsessive (MD)",
    "Hardened"
  ]
}, {
  name: "Unknown",
  alias: "Copperhead",
  rank: "Free Agent",
  reputation: "62",
  funding: "0",
  crews: ['*'],
  hates: [
    "bt",
    "lf",
    "ga"
  ],
  traits: [
    "Acrobat",
    "Climbing Shoes",
    "Stealth",
    "Technique",
    "Undercover"
  ]
}, {
  name: "Creeper Plant",
  alias: "Creeper Plant",
  rank: "Henchman",
  reputation: "16",
  funding: "0",
  crews: [
    "pi"
  ],
  hates: [],
  traits: [
    "Plant Special Traits"
  ]
}, {
  name: "Victor Stone",
  alias: "Cyborg",
  rank: "Sidekick",
  reputation: "123",
  funding: "500",
  crews: [
    "bt"
  ],
  hates: [],
  traits: [
    "Cybernetic",
    "Fly",
    "Night Vision",
    "Hacking",
    "Light Armour",
    "Order",
    "Scheming/1"
  ]
}, {
  name: "Floyd Lawton",
  alias: "Deadshot (AO)",
  rank: "Free Agent",
  reputation: "76",
  funding: "300",
  crews: ['*'],
  hates: [
    "bt",
    "lf",
    "ga"
  ],
  traits: [
    "Expert Marksman",
    "Rapid Fire",
    "Night Vision",
    "Dodge",
    "Shooter"
  ]
}, {
  name: "Floyd Lawton",
  alias: "Deadshot (Comic)",
  rank: "Free Agent",
  reputation: "90",
  funding: "600",
  crews: ['*'],
  hates: [
    "bt",
    "lf",
    "ga",
    "jk"
  ],
  traits: [
    "Dodge",
    "Obsessive",
    "Ranged Master",
    "Outlaw Commander",
    "Assassin/3"
  ]
}, {
  name: "Slade Wilson",
  alias: "Deathstroke (Comic)",
  rank: "Free Agent",
  reputation: "122",
  funding: "0",
  crews: ['*'],
  hates: [
    "bt",
    "lf",
    "ga"
  ],
  traits: [
    "Sturdy",
    "Master Marksman",
    "Undercover",
    "Precise Blow",
    "Stealth",
    "Resilient",
    "Martial Artist"
  ]
}, {
  name: "Unknown",
  alias: "Ded",
  rank: "Henchman",
  reputation: "20",
  funding: "350",
  crews: [
    "tf"
  ],
  hates: [],
  traits: [
    "Gas Mask",
    "Assault 3",
    "Criminal"
  ]
}, {
  name: "Classified",
  alias: "Delta",
  rank: "Henchman",
  reputation: "33",
  funding: "300",
  crews: [
    "bt",
    "ga",
    "lf"
  ],
  hates: [],
  traits: [
    "Lantern",
    "Undercover",
    "Bulletproof Vest"
  ]
}, {
  name: "Unknown",
  alias: "Dirty Tom",
  rank: "Henchman",
  reputation: "32",
  funding: "350",
  crews: [
    "tf",
    "oc",
    "bm"
  ],
  hates: [],
  traits: [
    "Resilient",
    "Criminal",
    "Runaway",
    "#N/A"
  ]
}, {
  name: "Unknown",
  alias: "Dollotron 1",
  rank: "Henchman",
  reputation: "0",
  funding: "0",
  crews: ['*'],
  hates: [],
  traits: [
    "Desensitized",
    "Stupid",
    "Self-Discipline",
    "Make them perfect",
    "Creations of Perfection"
  ]
}, {
  name: "Unknown",
  alias: "Echo",
  rank: "Henchman",
  reputation: "26",
  funding: "0",
  crews: [
    "bt",
    "ga",
    "lf"
  ],
  hates: [],
  traits: [
    "Bulletproof Vest",
    "Brutal",
    "Veteran",
    "Lethal Blow"
  ]
}, {
  name: "Lester Buchinsky",
  alias: "Electrocutioner",
  rank: "Free Agent",
  reputation: "40",
  funding: "0",
  crews: ['*'],
  hates: [],
  traits: [
    "Criminal",
    "Charismatic",
    "EMP",
    "Taunt",
    "Electric Storm"
  ]
}, {
  name: "Ignatius Ogilvy",
  alias: "Emperor Penguin",
  rank: "Leader",
  reputation: "111",
  funding: "0",
  crews: [
    "pn"
  ],
  hates: [],
  traits: [
    "Dirty Money",
    "Fast",
    "Master Fighter",
    "Regeneration",
    "Scheming/1",
    "Tough Skin"
  ]
}, {
  name: "Mezz",
  alias: "EO474",
  rank: "Henchman",
  reputation: "24",
  funding: "0",
  crews: ['*'],
  hates: [
    "bt",
    "lf",
    "ga"
  ],
  traits: [
    "Climbing Claws",
    "Obsessive (MD)",
    "Brutal"
  ]
}, {
  name: "Irwin",
  alias: "EO475",
  rank: "Henchman",
  reputation: "18",
  funding: "0",
  crews: ['*'],
  hates: [
    "bt",
    "lf",
    "ga"
  ],
  traits: [
    "Paranoid (MD)",
    "Runaway"
  ]
}, {
  name: "Milo",
  alias: "EO476",
  rank: "Henchman",
  reputation: "34",
  funding: "0",
  crews: ['*'],
  hates: [
    "bt",
    "lf",
    "ga"
  ],
  traits: [
    "Devastating Blow",
    "Bipolar (MD)",
    "Hardened"
  ]
}, {
  name: "Meatman",
  alias: "EO 477",
  rank: "Henchman",
  reputation: "26",
  funding: "100",
  crews: ['*'],
  hates: [
    "bt",
    "lf",
    "ga"
  ],
  traits: [
    "Shooter",
    "Bloodthirsty (MD)",
    "Mobster"
  ]
}, {
  name: "Benton",
  alias: "EO478",
  rank: "Henchman",
  reputation: "15",
  funding: "0",
  crews: ['*'],
  hates: [
    "bt",
    "lf",
    "ga"
  ],
  traits: [
    "Bloodthirsty (MD)",
    "Stealth"
  ]
}, {
  name: "Unknown",
  alias: "File No 08923",
  rank: "Henchman",
  reputation: "20",
  funding: "0",
  crews: ['*'],
  hates: [
    "bt",
    "lf",
    "ga"
  ],
  traits: [
    "Delirium",
    "Aggressive Schizophrenia (MD)"
  ]
}, {
  name: "Garfield Lynns",
  alias: "Firefly",
  rank: "Free Agent",
  reputation: "72",
  funding: "450",
  crews: ['*'],
  hates: [
    "bt",
    "lf",
    "ga"
  ],
  traits: [
    "Fly",
    "Hover",
    "Pyromania (MD)",
    "Batcape",
    "Handyman",
    "Kevlar Vest"
  ]
}, {
  name: "Barry Allen",
  alias: "Flash (Comic)",
  rank: "Sidekick",
  reputation: "125",
  funding: "0",
  crews: [
    "bt"
  ],
  hates: [],
  traits: [
    "Speedster 6",
    "Speed Force Master",
    "Fast",
    "Dodge",
    "Detective",
    "Scientific",
    "Moral Compass"
  ]
}, {
  name: "Classified",
  alias: "GCPD Detective",
  rank: "Henchman",
  reputation: "25",
  funding: "200",
  crews: [
    "bt",
    "lf"
  ],
  hates: [],
  traits: [
    "Hidden",
    "Arrest",
    "Detective"
  ]
}, {
  name: "Unknown",
  alias: "Goon",
  rank: "Henchman",
  reputation: "16",
  funding: "0",
  crews: [
    "bm"
  ],
  hates: [],
  traits: [
    "Brutal"
  ]
}, {
  name: "Unknown",
  alias: "Goon 2",
  rank: "Henchman",
  reputation: "15",
  funding: "0",
  crews: [
    "bm"
  ],
  hates: [],
  traits: [
    "Brutal"
  ]
}, {
  name: "Felix Harmon",
  alias: "Gotham Butcher",
  rank: "Free Agent",
  reputation: "81",
  funding: "0",
  crews: [
    "co"
  ],
  hates: [],
  traits: [
    "Weakness: Cold",
    "Reanimated Owl",
    "Large",
    "Fast",
    "Tough Skin",
    "Brutal"
  ]
}, {
  name: "Oliver Queen",
  alias: "Green Arrow (Comic)",
  rank: "Sidekick",
  reputation: "117",
  funding: "300",
  crews: [
    "bt",
    "ga"
  ],
  hates: [],
  traits: [
    "Rapid Fire",
    "Master Marksman",
    "Acrobat",
    "Good Aim",
    "Hook Arrow (1SC+1MC / Batclaw)",
    "Technique",
    "Hardened",
    "Stealth",
    "Adaptable"
  ]
}, {
  name: "Oliver Queen",
  alias: "Green Arrow (TAS)",
  rank: "Leader",
  reputation: "77",
  funding: "0",
  crews: [
    "ga"
  ],
  hates: [],
  traits: [
    "Good Aim",
    "Teamwork 2: Black Canary",
    "Rapid Fire",
    "Sharpshooter",
    "Acrobat"
  ]
}, {
  name: "Oliver Queen",
  alias: "Green Arrow (TDKR)",
  rank: "Leader",
  reputation: "75",
  funding: "0",
  crews: [
    "ga"
  ],
  hates: [],
  traits: [
    "Acrobat",
    "Hook Arrow (1SC+1MC / Batclaw)",
    "Desensitized",
    "One-Armed",
    "Ranged Master"
  ]
}, {
  name: "Unknown",
  alias: "Harley Gatling Brute",
  rank: "Henchman",
  reputation: "49",
  funding: "850",
  crews: [
    "jk"
  ],
  hates: [],
  traits: [
    "Invaluable",
    "Hardened",
    "Ferocious",
    "Large",
    "Street Guy",
    "Tireless"
  ]
}, {
  name: "Dr. Harleen Frances Quinzel",
  alias: "Harley Quinn (AC)",
  rank: "Sidekick",
  reputation: "61",
  funding: "0",
  crews: [
    "jk"
  ],
  hates: [],
  traits: [
    "Acrobat",
    "Disarray",
    "Follow Me!!!",
    "Technique",
    "True Love: Joker"
  ]
}, {
  name: "Dr. Harleen Frances Quinzel",
  alias: "Harley Quinn (AK)",
  rank: "Leader",
  reputation: "80",
  funding: "0",
  crews: [
    "jk"
  ],
  hates: [],
  traits: [
    "Bluff",
    "Play Nice",
    "Acrobat",
    "Discourage",
    "Mobster",
    "Unpredictable",
    "Escape Artist"
  ]
}, {
  name: "Dr. Harleen Frances Quinzel",
  alias: "Harley Quinn (Comic)",
  rank: "Sidekick",
  reputation: "75",
  funding: "0",
  crews: [
    "jk"
  ],
  hates: [],
  traits: [
    "Acrobat",
    "360° Attack with",
    "Discourage",
    "Distract",
    "Fast",
    "True Love: Joker"
  ]
}, {
  name: "Dr. Harleen Frances Quinzel",
  alias: "Harley Quinn (TAS)",
  rank: "Free Agent",
  reputation: "40",
  funding: "200",
  crews: [
    "jk"
  ],
  hates: [],
  traits: [
    "Acrobat",
    "Disarray",
    "Distract",
    "Follow Me!!!"
  ]
}, {
  name: "Punker",
  alias: "Harley Thug 1",
  rank: "Henchman",
  reputation: "30",
  funding: "300",
  crews: [
    "jk"
  ],
  hates: [],
  traits: [
    "Goad",
    "Street Guy",
    "Hardened"
  ]
}, {
  name: "Bragg",
  alias: "Harley Thug 2",
  rank: "Henchman",
  reputation: "21",
  funding: "200",
  crews: [
    "jk"
  ],
  hates: [],
  traits: [
    "Street Guy"
  ]
}, {
  name: "Worker",
  alias: "Harley Thug 3",
  rank: "Henchman",
  reputation: "21",
  funding: "0",
  crews: [
    "jk"
  ],
  hates: [],
  traits: [
    "Street Guy"
  ]
}, {
  name: "Unknown",
  alias: "Harley Thug 4",
  rank: "Henchman",
  reputation: "16",
  funding: "0",
  crews: [
    "jk"
  ],
  hates: [],
  traits: [
    "Street Guy"
  ]
}, {
  name: "Unknown",
  alias: "Harley Thug 5",
  rank: "Henchman",
  reputation: "22",
  funding: "250",
  crews: [
    "jk"
  ],
  hates: [],
  traits: [
    "Street Guy"
  ]
}, {
  name: "Chencho",
  alias: "Harley Thug 6",
  rank: "Henchman",
  reputation: "25",
  funding: "0",
  crews: [
    "jk"
  ],
  hates: [],
  traits: [
    "Street Guy",
    "Combo: Bat",
    "Adaptable"
  ]
}, {
  name: "Lumberjack",
  alias: "Harley Thug 7",
  rank: "Henchman",
  reputation: "20",
  funding: "0",
  crews: [
    "jk"
  ],
  hates: [],
  traits: [
    "Street Guy"
  ]
}, {
  name: "Harvey Bullock",
  alias: "Harvey Bullock",
  rank: "Sidekick",
  reputation: "40",
  funding: "200",
  crews: [
    "lf"
  ],
  hates: [],
  traits: [
    "Arrest",
    "Detective",
    "Informer",
    "Luck",
    "Order"
  ]
}, {
  name: "Kendra Saunders",
  alias: "Hawkgirl",
  rank: "Free Agent",
  reputation: "99",
  funding: "0",
  crews: [
    "bt",
    "ga"
  ],
  hates: [],
  traits: [
    "Fly",
    "Hover",
    "Immune Fire",
    "Teamwork 2: Hawkman",
    "Flying High",
    "Weapon Master",
    "Unstoppable",
    "Unnatural Flight"
  ]
}, {
  name: "Carter Hall",
  alias: "Hawkman",
  rank: "Free Agent",
  reputation: "109",
  funding: "0",
  crews: [
    "bt",
    "ga"
  ],
  hates: [],
  traits: [
    "Fly",
    "Hover",
    "Immune Fire",
    "Teamwork 2: Hawkgirl",
    "Flying High",
    "Savage Fighter",
    "Hardened",
    "Power Strike",
    "Unnatural Flight"
  ]
}, {
  name: "Unknown",
  alias: "High Court Member",
  rank: "Leader",
  reputation: "37",
  funding: "0",
  crews: [
    "co"
  ],
  hates: [],
  traits: [
    "Demoralize",
    "Court of Owls Crew",
    "Discourage",
    "Distract",
    "Scheming/2"
  ]
}, {
  name: "Classified",
  alias: "High Security Henchman",
  rank: "Henchman",
  reputation: "48",
  funding: "0",
  crews: ['*'],
  hates: [
    "bt",
    "lf",
    "ga"
  ],
  traits: [
    "Combo: Knifes",
    "Devastating Blow",
    "Criminal",
    "Psycho"
  ]
}, {
  name: "Hugo Strange",
  alias: "Hugo Strange",
  rank: "Free Agent",
  reputation: "",
  funding: "44",
  crews: [
    "bm",
    "ls",
    "oc",
    "rd"
  ],
  hates: [],
  traits: [
    "Arkham Asylum Dr",
    "Subliminal Suggestion (2S)",
    "Psychiatrist",
    "Persuasive",
    "Psychologist"
  ]
}, {
  name: "Helena Bertinelli",
  alias: "Huntress",
  rank: "Free Agent",
  reputation: "66",
  funding: "100",
  crews: [
    "bt",
    "ga"
  ],
  hates: [],
  traits: [
    "Rapid Fire",
    "Acrobat",
    "Distract",
    "Runaway",
    "Stealth",
    "Martial Artist"
  ]
}, {
  name: "Thomas Elliot",
  alias: "Hush",
  rank: "Free Agent",
  reputation: "73",
  funding: "350",
  crews: [
    "pi",
    "jk",
    "rd",
    "sc"
  ],
  hates: [],
  traits: [
    "Exhaustive Planner",
    "The Hidden Boss",
    "Martial Artist",
    "Master Marksman",
    "Mastermind",
    "Persuassive",
    "Scheming/3"
  ]
}, {
  name: "Unknown",
  alias: "Ice Penguin",
  rank: "Henchman",
  reputation: "25",
  funding: "200",
  crews: [
    "pn"
  ],
  hates: [],
  traits: [
    "Criminal",
    "Mobster"
  ]
}, {
  name: "Jhonny-6",
  alias: "Jhonny-6",
  rank: "Henchman",
  reputation: "45",
  funding: "0",
  crews: [
    "rd"
  ],
  hates: [],
  traits: [
    "Bodyguard",
    "Bot",
    "Desesitized",
    "EMP"
  ]
}, {
  name: "Unknown",
  alias: "Joker (Arkham City)",
  rank: "Leader",
  reputation: "105",
  funding: "0",
  crews: [
    "jk"
  ],
  hates: [],
  traits: [
    "Total Vision",
    "Luck",
    "Kaos Agent",
    "One Shot Gun",
    "Trickster",
    "Poison Master"
  ]
}, {
  name: "Unknown",
  alias: "Joker (Killing Joke)",
  rank: "Leader",
  reputation: "100",
  funding: "0",
  crews: [
    "jk"
  ],
  hates: [],
  traits: [
    "Kaos Agent",
    "Intimidate",
    "Demotivate",
    "Kill Them!",
    "Psycho",
    "Scheming/1",
    "Trickster"
  ]
}, {
  name: "Unknown",
  alias: "Joker (TDKR)",
  rank: "Leader",
  reputation: "70",
  funding: "0",
  crews: [
    "jk"
  ],
  hates: [],
  traits: [
    "Kaos Agent",
    "Trickster",
    "Psycho",
    "Target of the Bat",
    "Combo: Precise Knife",
    "Cruel"
  ]
}, {
  name: "Unknown",
  alias: "Joker (Ledger)",
  rank: "Leader",
  reputation: "90",
  funding: "0",
  crews: [
    "jk"
  ],
  hates: [],
  traits: [
    "Kaos Agent",
    "Henchman Bomb",
    "Luck",
    "Undercover",
    "Trickster",
    "Psycho"
  ]
}, {
  name: "Unknown",
  alias: "Joker Titan AC",
  rank: "Leader",
  reputation: "130",
  funding: "0",
  crews: [
    "jk"
  ],
  hates: [],
  traits: [
    "Power Strike",
    "Large",
    "Luck",
    "Sturdy",
    "Tireless",
    "Trickster"
  ]
}, {
  name: "Duela Dent",
  alias: "Joker's Daughter",
  rank: "Sidekick",
  reputation: "",
  funding: "60",
  crews: [
    "jk"
  ],
  hates: [],
  traits: [
    "Acrobat",
    "Daddy's Girrrl",
    "Cruel",
    "Discourage",
    "Psycho",
    "Detective"
  ]
}, {
  name: "None",
  alias: "Jokermobile Skin (AK)",
  rank: "Vehicle/Legend",
  reputation: "150",
  funding: "1500",
  crews: [
    "bt"
  ],
  hates: [],
  traits: [
    "Combat Mode",
    "Laughing Gas",
    "Hard Driving",
    "Exclusive Driver",
    "Large",
    "Heavy Armour",
    "Lantern"
  ]
}, {
  name: "Tatsu Yamashiro",
  alias: "Katana",
  rank: "Free Agent",
  reputation: "75",
  funding: "100",
  crews: [
    "ga",
    "bt"
  ],
  hates: [],
  traits: [
    "Acrobat",
    "Feint",
    "Precise Blow",
    "Adaptable",
    "Martial Artist",
    "Stealth"
  ]
}, {
  name: "Bart Allen",
  alias: "Kid Flash",
  rank: "Free Agent",
  reputation: "74",
  funding: "0",
  crews: [
    "bt",
    "ga",
    "lf"
  ],
  hates: [],
  traits: [
    "Concealment",
    "Dodge",
    "Speed Force Master",
    "Speedster/4",
    "Dodge",
    "Fast"
  ]
}, {
  name: "Waylon Jones",
  alias: "Killer Croc",
  rank: "Free Agent",
  reputation: "95",
  funding: "0",
  crews: ['*'],
  hates: [
    "bt",
    "lf",
    "ga"
  ],
  traits: [
    "Cannibal",
    "Lord of the Sewer",
    "Amphibious",
    "Large",
    "Superior Smell",
    "Tough Skin"
  ]
}, {
  name: "Louise Lincoln",
  alias: "Killer Frost",
  rank: "Free Agent / Sidekick",
  reputation: "70",
  funding: "150",
  crews: ['*'],
  hates: [
    "bt",
    "lf",
    "ga"
  ],
  traits: [
    "Acrobat",
    "Adaptable",
    "Resilient",
    "Runaway",
    "Stop!"
  ]
}, {
  name: "Sandra Wu-San",
  alias: "Lady Shiva",
  rank: "Sidekick",
  reputation: "85",
  funding: "0",
  crews: [
    "ls"
  ],
  hates: [],
  traits: [
    "Combo: Unarmed",
    "Acrobat",
    "Adaptable",
    "Martial Artist",
    "Master Fighter",
    "Stealth",
    "Tracking"
  ]
}, {
  name: "Unknown",
  alias: "League‘s Agent 1",
  rank: "Henchman",
  reputation: "21",
  funding: "0",
  crews: [
    "ls"
  ],
  hates: [],
  traits: [
    "Sustained Defense",
    "Martial Artist"
  ]
}, {
  name: "Unknown",
  alias: "League‘s Agent 2",
  rank: "Henchman",
  reputation: "20",
  funding: "100",
  crews: [
    "ls"
  ],
  hates: [],
  traits: [
    "Undercover",
    "Martial Artist"
  ]
}, {
  name: "Unknown",
  alias: "League‘s Agent 3",
  rank: "Henchman",
  reputation: "23",
  funding: "0",
  crews: [
    "ls"
  ],
  hates: [],
  traits: [
    "Fast",
    "Martial Artist"
  ]
}, {
  name: "Howard Brandon",
  alias: "Lieutenant Branden",
  rank: "Sidekick",
  reputation: "53",
  funding: "400",
  crews: [
    "lf",
    "oc",
    "bm",
    "tf"
  ],
  hates: [],
  traits: [
    "Arrest",
    "Lantern",
    "Corrupt",
    "Bulletproof Vest",
    "Undercover",
    "Veteran"
  ]
}, {
  name: "Unknown",
  alias: "Little Spark",
  rank: "Henchman",
  reputation: "40",
  funding: "100",
  crews: ['*'],
  hates: [
    "bt",
    "lf",
    "ga"
  ],
  traits: [
    "Catcher Gear",
    "Electric Storm",
    "Handyman",
    "Sturdy",
    "Unpredictable"
  ]
}, {
  name: "Unknown",
  alias: "Lobo",
  rank: "Free Agent",
  reputation: "136",
  funding: "500",
  crews: ['*'],
  hates: [
    "bt",
    "lf",
    "ga"
  ],
  traits: [
    "Regeneration",
    "Immortal",
    "Brutal",
    "Dirty Fighting",
    "Master Fighter",
    "Power Strike",
    "Psycho",
    "The Main Man"
  ]
}, {
  name: "Unknown",
  alias: "Lotus",
  rank: "Henchman",
  reputation: "48",
  funding: "100",
  crews: [
    "ls"
  ],
  hates: [],
  traits: [
    "Dodge",
    "Rapid Fire",
    "Reflexes",
    "Martial Artist",
    "Stealth"
  ]
}, {
  name: "Dr. Jervis Tetch",
  alias: "Mad Hatter",
  rank: "Leader",
  reputation: "75",
  funding: "0",
  crews: [
    "wg"
  ],
  hates: [],
  traits: [
    "Dodge",
    "Handyman",
    "Mastermind",
    "Small",
    "Weak",
    "Charm",
    "Mind Control Device"
  ]
}, {
  name: "None",
  alias: "Mary",
  rank: "Henchman",
  reputation: "25",
  funding: "100",
  crews: [
    "jk"
  ],
  hates: [],
  traits: [
    "Bot",
    "Fly",
    "Funny Bomb",
    "Save Hands"
  ]
}, {
  name: "Unknown",
  alias: "Master of Ceremonies",
  rank: "Henchman",
  reputation: "36",
  funding: "0",
  crews: [
    "jk"
  ],
  hates: [],
  traits: [
    "Catcher Gear)",
    "Psycho",
    "Elusive",
    "Hardened"
  ]
}, {
  name: "Unknown",
  alias: "McGregor",
  rank: "Henchman",
  reputation: "27",
  funding: "0",
  crews: [
    "bn",
    "ls"
  ],
  hates: [],
  traits: [
    "Mercenary",
    "Veteran",
    "Bulletproof Vest",
    "Weapon Master: Machete"
  ]
}, {
  name: "Unknown",
  alias: "Mesh",
  rank: "Henchman",
  reputation: "22",
  funding: "600",
  crews: [
    "bm"
  ],
  hates: [],
  traits: [
    "Brutal"
  ]
}, {
  name: "Unknown",
  alias: "Militia Brute 1",
  rank: "Henchman",
  reputation: "40",
  funding: "0",
  crews: [
    "sc"
  ],
  hates: [],
  traits: [
    "Gas Mask",
    "Cybernetic",
    "Light Armor",
    "Sturdy",
    "Large"
  ]
}, {
  name: "Unknown",
  alias: "Militia Gatling Brute",
  rank: "Henchman",
  reputation: "53",
  funding: "850",
  crews: [
    "sc"
  ],
  hates: [],
  traits: [
    "Cybernetic",
    "Gas Mask",
    "Invaluable",
    "Large",
    "Light Armor",
    "Sturdy"
  ]
}, {
  name: "Unknown",
  alias: "Mohawk",
  rank: "Henchman",
  reputation: "30",
  funding: "0",
  crews: [
    "bn",
    "ls"
  ],
  hates: [],
  traits: [
    "Mercenary",
    "Veteran",
    "Bulletproof Vest",
    "Combo: Ice Axe"
  ]
}, {
  name: "Unknown",
  alias: "Mottom",
  rank: "Henchman",
  reputation: "27",
  funding: "0",
  crews: [
    "tf"
  ],
  hates: [
    "lf",
    "ga"
  ],
  traits: [
    "Fast",
    "Criminal"
  ]
}, {
  name: "Unknown",
  alias: "Monster T.",
  rank: "Free Agent",
  reputation: "40",
  funding: "200",
  crews: ['*'],
  hates: [
    "bt",
    "ga",
    "lf"
  ],
  traits: [
    "Handsome Hunka Hunka",
    "Disturb",
    "Goad",
    "Mobster"
  ]
}, {
  name: "Victor Fries",
  alias: "Mr Freeze",
  rank: "Free Agent",
  reputation: "75",
  funding: "500",
  crews: ['*'],
  hates: [],
  traits: [
    "Power Armour",
    "Primary Target: Loot",
    "Desensitized",
    "Scientific",
    "Scheming/2"
  ]
}, {
  name: "Abramovici",
  alias: "Mr. Hammer",
  rank: "Sidekick",
  reputation: "71",
  funding: "0",
  crews: [
    "jk"
  ],
  hates: [],
  traits: [
    "Bodyguard",
    "Lethal Blow",
    "One Armed",
    "Large",
    "Brutal"
  ]
}, {
  name: "S.B.",
  alias: "Mr. Pink",
  rank: "Henchman",
  reputation: "55",
  funding: "0",
  crews: [
    "oc",
    "bm",
    "tf"
  ],
  hates: [],
  traits: [
    "Bulletproof Vest",
    "Rapid Fire",
    "Primary Target: Loot",
    "Runaway",
    "Criminal",
    "Informer",
    "#N/A"
  ]
}, {
  name: "Unknown",
  alias: "Mule Goon",
  rank: "Henchman",
  reputation: "27",
  funding: "0",
  crews: [
    "bm"
  ],
  hates: [],
  traits: [
    "Brutal",
    "Sturdy",
    "Veteran"
  ]
}, {
  name: "Daniel Dreiberg",
  alias: "Niteowl",
  rank: "Watchmen",
  reputation: "50",
  funding: "0",
  crews: [
    "wm"
  ],
  hates: [],
  traits: [
    "Bonebreaker",
    "Archie",
    "Batcape",
    "Arrest",
    "Total Vision",
    "Brutal",
    "Watchmen"
  ]
}, {
  name: "Nyssa Raatko",
  alias: "Nyssa al Ghul",
  rank: "Sidekick",
  reputation: "83",
  funding: "300",
  crews: [
    "ls"
  ],
  hates: [],
  traits: [
    "Hook Arrow (1SC+1MC / Batclaw)",
    "Good Aim",
    "Acrobat",
    "Master Marksman",
    "Reflexes",
    "Stealth",
    "Martial Artist"
  ]
}, {
  name: "Brandon O‘Malley",
  alias: "O'Malley‘s Father",
  rank: "Henchman",
  reputation: "51",
  funding: "0",
  crews: [
    "co"
  ],
  hates: [],
  traits: [
    "Stealth",
    "Tireless",
    "Weakness: Cold",
    "Reanimated Owl",
    "Assassin /2",
    "Brutal"
  ]
}, {
  name: "James O‘Malley",
  alias: "O'Malley‘s Grandfather",
  rank: "Henchman",
  reputation: "33",
  funding: "0",
  crews: [
    "co"
  ],
  hates: [],
  traits: [
    "Bodyguard",
    "Veteran",
    "Weakness: Cold",
    "Reanimated Owl",
    "Martial Artist"
  ]
}, {
  name: "Nathaniel O‘Malley",
  alias: "O'Malley‘Son",
  rank: "Henchman",
  reputation: "30",
  funding: "0",
  crews: [
    "co"
  ],
  hates: [],
  traits: [
    "Martial Artist",
    "Weakness: Cold",
    "Reanimated Owl",
    "Distract"
  ]
}, {
  name: "Adrian Alexander Veidt",
  alias: "Ozymandias",
  rank: "Watchmen",
  reputation: "100",
  funding: "0",
  crews: [
    "wm"
  ],
  hates: [],
  traits: [
    "Acrobat",
    "Reflexes",
    "Mastermind",
    "Great Strategist",
    "Martial Artist",
    "Watchmen"
  ]
}, {
  name: "Unknown",
  alias: "Pavilion A Subject",
  rank: "Henchman",
  reputation: "10",
  funding: "0",
  crews: ['*'],
  hates: [
    "bt",
    "lf",
    "ga"
  ],
  traits: [
    "Delirium",
    "Unpredictable"
  ]
}, {
  name: "Unknown",
  alias: "Pavilion B Subject",
  rank: "Henchman",
  reputation: "13",
  funding: "0",
  crews: ['*'],
  hates: [
    "bt",
    "lf",
    "ga"
  ],
  traits: [
    "Delirium",
    "Paranoid (MD)",
    "Fast"
  ]
}, {
  name: "Oswald Chesterfield Cobblepot",
  alias: "Penguin (AC)",
  rank: "Leader",
  reputation: "75",
  funding: "0",
  crews: [
    "pn"
  ],
  hates: [],
  traits: [
    "Lord of Business",
    "Charismatic",
    "Handyman",
    "Bulletproof Vest",
    "Mob",
    "Persuasive",
    "Small"
  ]
}, {
  name: "Oswald Chesterfield Cobblepot",
  alias: "Penguin (AK)",
  rank: "Leader",
  reputation: "77",
  funding: "0",
  crews: [
    "pn"
  ],
  hates: [],
  traits: [
    "Lord of Business",
    "Exhaustive Planner",
    "Mob",
    "Order",
    "Pickpocket",
    "Plead",
    "Primary Target: Ammo Crates",
    "Protect Me!",
    "Small"
  ]
}, {
  name: "Oswald Chesterfield Cobblepot",
  alias: "Penguin (Gotham)",
  rank: "Leader (Penguin) / Sidekick (OC)",
  reputation: "70",
  funding: "0",
  crews: [
    "pn"
  ],
  hates: [],
  traits: [
    "Boss's Orders",
    "Survivor",
    "Cruel",
    "Distract",
    "Luck",
    "Mob",
    "Persuasive",
    "Scheming/2",
    "Strategist"
  ]
}, {
  name: "Unknown",
  alias: "Emperor Penguin",
  rank: "Henchman",
  reputation: "31",
  funding: "0",
  crews: [
    "pn"
  ],
  hates: [],
  traits: [
    "Football Gear",
    "Follow Me!!!"
  ]
}, {
  name: "Big A.",
  alias: "Penguin Lieutenant",
  rank: "Henchman",
  reputation: "50",
  funding: "0",
  crews: [
    "pn"
  ],
  hates: [],
  traits: [
    "Hockey Gear (Biker Jacket)",
    "Large",
    "Mobster",
    "Take Cover!",
    "Taunt"
  ]
}, {
  name: "Plant",
  alias: "Plant",
  rank: "Henchman",
  reputation: "10",
  funding: "0",
  crews: [
    "pi"
  ],
  hates: [],
  traits: [
    "Plant Special Traits"
  ]
}, {
  name: "Dr. Pamela Lillian Isley",
  alias: "Poison Ivy (Comic)",
  rank: "Leader",
  reputation: "83",
  funding: "0",
  crews: [
    "pi"
  ],
  hates: [],
  traits: [
    "Poison Immunity",
    "Acrobat",
    "Control Pheremones",
    "Scientific",
    "Confusion"
  ]
}, {
  name: "Classified",
  alias: "Prisoner 01",
  rank: "Henchman",
  reputation: "10",
  funding: "0",
  crews: ['*'],
  hates: [
    "bt",
    "lf",
    "ga"
  ],
  traits: [
    "Pickpocket"
  ]
}, {
  name: "Classified",
  alias: "Prisoner 02",
  rank: "Henchman",
  reputation: "17",
  funding: "0",
  crews: ['*'],
  hates: [
    "bt",
    "lf",
    "ga"
  ],
  traits: [
    "Elusive",
    "Criminal"
  ]
}, {
  name: "Unknown",
  alias: "Prisoner 03",
  rank: "Henchman",
  reputation: "19",
  funding: "0",
  crews: ['*'],
  hates: [
    "bt",
    "lf",
    "ga"
  ],
  traits: [
    "Criminal",
    "Street Guy"
  ]
}, {
  name: "Unknown",
  alias: "Prisoner 04",
  rank: "Henchman",
  reputation: "18",
  funding: "0",
  crews: ['*'],
  hates: [
    "bt",
    "lf",
    "ga"
  ],
  traits: [
    "Bodyguard",
    "Criminal"
  ]
}, {
  name: "Unknown",
  alias: "Prisoner 05",
  rank: "Henchman",
  reputation: "20",
  funding: "300",
  crews: ['*'],
  hates: [
    "bt",
    "lf",
    "ga"
  ],
  traits: [
    "Lantern",
    "Criminal"
  ]
}, {
  name: "Lazlo Valentin",
  alias: "Proffesor Pyg",
  rank: "Free Agent",
  reputation: "90",
  funding: "150",
  crews: ['*'],
  hates: [
    "bt",
    "lf",
    "ga"
  ],
  traits: [
    "Combo: Knife",
    "Medic",
    "Goad",
    "Self-Discipline",
    "Test Subjects",
    "Dollotrons",
    "Surgical Madness (MD)"
  ]
}, {
  name: "Eobard Thawne",
  alias: "Professor Zoom",
  rank: "Free Agent",
  reputation: "117",
  funding: "0",
  crews: ['*'],
  hates: [
    "bt",
    "lf",
    "ga",
    "jk",
    "ls"
  ],
  traits: [
    "Dodge",
    "Fast",
    "Negative Speed Force",
    "Speedster/5",
    "Scientific",
    "Strategist"
  ]
}, {
  name: "Josette",
  alias: "Quelle",
  rank: "Sidekick",
  reputation: "45",
  funding: "200",
  crews: [
    "rd"
  ],
  hates: [],
  traits: [
    "Bipolar",
    "Demotivate",
    "Disarray",
    "Undercover",
    "Trickster"
  ]
}, {
  name: "Alexander",
  alias: "Quiz 1",
  rank: "Henchman",
  reputation: "33",
  funding: "350",
  crews: [
    "rd"
  ],
  hates: [],
  traits: [
    "Hardened",
    "Rapid Fire"
  ]
}, {
  name: "Igor",
  alias: "Quiz 2",
  rank: "Henchman",
  reputation: "15",
  funding: "0",
  crews: [
    "rd"
  ],
  hates: [],
  traits: [
    "Combo: Riddler Knuckles",
    "Combat Flip",
    "Small"
  ]
}, {
  name: "John Carrie",
  alias: "Quiz 3",
  rank: "Henchman",
  reputation: "20",
  funding: "0",
  crews: [
    "rd"
  ],
  hates: [],
  traits: [
    "Combo: Short Sickle",
    "Distract"
  ]
}, {
  name: "Unknown",
  alias: "Puooup",
  rank: "Henchman",
  reputation: "15",
  funding: "0",
  crews: [
    "tf"
  ],
  hates: [],
  traits: [
    "Criminal"
  ]
}, {
  name: "Ra‘s Al Ghul",
  alias: "Ra's al Ghul (AC)",
  rank: "Leader",
  reputation: "125",
  funding: "0",
  crews: [
    "ls"
  ],
  hates: [],
  traits: [
    "Weapon Master: Soultaker Sword",
    "Precise Blow",
    "Immortal",
    "Veteran",
    "Undercover",
    "Master Mind",
    "Martial Artist",
    "Grand Strategist"
  ]
}, {
  name: "Ra‘s Al Ghul",
  alias: "Ra's al Ghul (Movie Neeson)",
  rank: "Leader",
  reputation: "120",
  funding: "0",
  crews: [
    "ls"
  ],
  hates: [],
  traits: [
    "Deathly Strike: Sword",
    "Sustained Defense",
    "Grand Strategist",
    "Martial Artist",
    "Master Mind",
    "Immortal",
    "Order",
    "Persuasive"
  ]
}, {
  name: "Rattler Drone",
  alias: "None",
  rank: "Vehicle",
  reputation: "60",
  funding: "900",
  crews: [
    "sc"
  ],
  hates: [],
  traits: [
    "Medium Armoured",
    "Large",
    "4x4 Off Road"
  ]
}, {
  name: "Rose Wilson",
  alias: "Ravager",
  rank: "Free Agent",
  reputation: "75",
  funding: "0",
  crews: ['*'],
  hates: [
    "lf",
    "ga"
  ],
  traits: [
    "Power Dampening",
    "Self Disipline",
    "Stealth",
    "Weapon Master",
    "Martial Artist"
  ]
}, {
  name: "Benjamin Gruener",
  alias: "Reaper",
  rank: "Sidekick",
  reputation: "70",
  funding: "0",
  crews: [
    "bm"
  ],
  hates: [],
  traits: [
    "Assassin/2",
    "Brutal",
    "Combo: Sickle",
    "Coward‘s Reward",
    "Tireless",
    "Stealth"
  ]
}, {
  name: "Jason Todd",
  alias: "Red Hood AK",
  rank: "Free Agent",
  reputation: "88",
  funding: "500",
  crews: [
    "bt"
  ],
  hates: [],
  traits: [
    "Teamwork/1 (All)",
    "Takedown",
    "Safe Hands",
    "Acrobat",
    "Batclaw",
    "Bulletproof Vest",
    "Scheming/1"
  ]
}, {
  name: "Jason Todd",
  alias: "Red Hood (Comic)",
  rank: "Sidekick",
  reputation: "105",
  funding: "400",
  crews: [
    "bt",
    "oc"
  ],
  hates: [],
  traits: [
    "Acrobat",
    "Gunman",
    "Kevlar Vest",
    "Instinctive Shooting",
    "Agile",
    "Martial Artist",
    "Searcher",
    "Schooter"
  ]
}, {
  name: "Unknown",
  alias: "Red Hood (Promotional)",
  rank: "Leader",
  reputation: "105",
  funding: "0",
  crews: [
    "jk"
  ],
  hates: [],
  traits: [
    "Total Vision",
    "Luck",
    "Kaos Agent",
    "One Shot Gun",
    "Trickster",
    "Poison Master"
  ]
}, {
  name: "Richard Rogers Flag",
  alias: "Rick Flag",
  rank: "Sidekick",
  reputation: "64",
  funding: "500",
  crews: [
    "lf"
  ],
  hates: [],
  traits: [
    "Bulletproof Vest",
    "Leadership",
    "Multifire",
    "Order",
    "Veteran",
    "Volunteer"
  ]
}, {
  name: "Edward Nigma",
  alias: "Riddler AK",
  rank: "Leader",
  reputation: "85",
  funding: "0",
  crews: [
    "rd"
  ],
  hates: [],
  traits: [
    "Bot Mechanic",
    "Can you Solve this 2+",
    "Objective? Puzzles everywhere",
    "Confusion",
    "Distract",
    "Handyman",
    "Luck",
    "Mastermind",
    "Puzzlemaster"
  ]
}, {
  name: "Edward Nigma",
  alias: "Riddler's Mech",
  rank: "Leader",
  reputation: "123",
  funding: "0",
  crews: [
    "rd"
  ],
  hates: [],
  traits: [
    "Bot Bomb",
    "Energy Field",
    "Can you Solve this 4",
    "Objective? Puzzles everywhere",
    "Cybernetic",
    "Confusion",
    "Large",
    "Mastermind",
    "Safe Hands"
  ]
}, {
  name: "Unknown",
  alias: "Ringmaster",
  rank: "Henchman",
  reputation: "28",
  funding: "0",
  crews: [
    "jk"
  ],
  hates: [],
  traits: [
    "360° Attack with",
    "Catcher‘s Gear",
    "Unpredictable"
  ]
}, {
  name: "Tim Drake",
  alias: "Robin (AC Drake)",
  rank: "Free Agent",
  reputation: "68",
  funding: "200",
  crews: [
    "bt"
  ],
  hates: [],
  traits: [
    "Batclaw",
    "Combo: Bo",
    "Follow Me!!!",
    "Searcher",
    "Detective"
  ]
}, {
  name: "Tim Drake",
  alias: "Robin (AK Drake)",
  rank: "Sidekick",
  reputation: "78",
  funding: "0",
  crews: [
    "bt"
  ],
  hates: [],
  traits: [
    "Batclaw",
    "Combo: Bo",
    "Teamwork/2 All",
    "Detective",
    "Undercover",
    "True Love: Barbara Gordon"
  ]
}, {
  name: "Dick Grayson",
  alias: "Robin (Boy Wonder)",
  rank: "Sidekick",
  reputation: "65",
  funding: "100",
  crews: [
    "bt"
  ],
  hates: [],
  traits: [
    "Acrobat",
    "Agile",
    "Batclaw",
    "Combat Flip",
    "Disarray",
    "Escape Artist",
    "Reflexes",
    "Small",
    "The Sidekick",
    "Boy Wonder",
    "Teen Titans Founder"
  ]
}, {
  name: "Carrie Kelley",
  alias: "Robin (TDKR)",
  rank: "Sidekick",
  reputation: "54",
  funding: "100",
  crews: [
    "bt"
  ],
  hates: [],
  traits: [
    "Acrobat",
    "Agile",
    "Concealment",
    "Handyman"
  ]
}, {
  name: "Unknown",
  alias: "Ror",
  rank: "Henchman",
  reputation: "26",
  funding: "500",
  crews: [
    "tf"
  ],
  hates: [],
  traits: [
    "Criminal",
    "Gas Mask"
  ]
}, {
  name: "Walter Joseph Kovacs",
  alias: "Rorschach",
  rank: "Watchmen",
  reputation: "75",
  funding: "0",
  crews: [
    "wm"
  ],
  hates: [],
  traits: [
    "Batclaw",
    "Bloodthirsty (MD)",
    "Detective",
    "Hidden",
    "Brutal",
    "Watchmen"
  ]
}, {
  name: "Unknown",
  alias: "Rottor",
  rank: "Henchman",
  reputation: "30",
  funding: "250",
  crews: [
    "tf"
  ],
  hates: [],
  traits: [
    "Hardened",
    "Follow Me!!!",
    "Criminal"
  ]
}, {
  name: "Unknown",
  alias: "Royal Penguin",
  rank: "Henchman",
  reputation: "24",
  funding: "600",
  crews: [
    "pn"
  ],
  hates: [],
  traits: [
    "Mobster",
    "Street Guy"
  ]
}, {
  name: "Unknown",
  alias: "Savage Penguin",
  rank: "Henchman",
  reputation: "26",
  funding: "300",
  crews: [
    "pn"
  ],
  hates: [
    "lf",
    "ga"
  ],
  traits: [
    "Stupid",
    "Mobster"
  ]
}, {
  name: "Jonathan Crane",
  alias: "Scarecrow (AC)",
  rank: "Free Agent",
  reputation: "57",
  funding: "200",
  crews: ['*'],
  hates: [
    "bt",
    "lf",
    "ga"
  ],
  traits: [
    "Psychologist",
    "Persuasive",
    "Undercover"
  ]
}, {
  name: "Jonathan Crane",
  alias: "Scarecrow (DK Movie)",
  rank: "Free Agent",
  reputation: "60",
  funding: "200",
  crews: [
    "ls"
  ],
  hates: [],
  traits: [
    "Death or Exile",
    "Follow Me!!!",
    "Hidden",
    "Psychologist"
  ]
}, {
  name: "Unknown",
  alias: "Seeker",
  rank: "Henchman",
  reputation: "27",
  funding: "200",
  crews: [
    "ls"
  ],
  hates: [],
  traits: [
    "Good Aim",
    "Martial Artist",
    "Stealth"
  ]
}, {
  name: "Sgt Winslow",
  alias: "Sgt Winslow",
  rank: "Henchman",
  reputation: "28",
  funding: "0",
  crews: [
    "lf"
  ],
  hates: [],
  traits: [
    "Lantern",
    "Arrest",
    "Order",
    "Detective",
    "Bulletproof Vest"
  ]
}, {
  name: "Unknown",
  alias: "Shadow",
  rank: "Henchman",
  reputation: "26",
  funding: "100",
  crews: [
    "ls"
  ],
  hates: [],
  traits: [
    "Martial Artist",
    "Stealth",
    "Undercover",
    "Sneak Attack"
  ]
}, {
  name: "T.S.A.",
  alias: "Shadowstorm",
  rank: "Henchman",
  reputation: "85",
  funding: "0",
  crews: [
    "ls"
  ],
  hates: [],
  traits: [
    "Acrobat",
    "Fast",
    "Reflexes",
    "Stealth",
    "Veteran"
  ]
}, {
  name: "Abramovici",
  alias: "Sickle",
  rank: "Sidekick",
  reputation: "67",
  funding: "0",
  crews: [
    "pn"
  ],
  hates: [],
  traits: [
    "360° Attack with",
    "Bodyguard",
    "One Armed",
    "Brutal",
    "Large"
  ]
}, {
  name: "Laurie Juspeczyk",
  alias: "Silk Spectre II",
  rank: "Watchmen",
  reputation: "50",
  funding: "0",
  crews: [
    "wm"
  ],
  hates: [],
  traits: [
    "Combo: Unarmed",
    "Acrobat",
    "Counter Attack",
    "Close Combat Master",
    "Martial Artist",
    "Watchmen"
  ]
}, {
  name: "Unknown",
  alias: "Six",
  rank: "Henchman",
  reputation: "35",
  funding: "0",
  crews: [
    "jk"
  ],
  hates: [],
  traits: [
    "Let’s Go",
    "Brutal",
    "Psycho",
    "Persuasive"
  ]
}, {
  name: "Unknown",
  alias: "Sniggering",
  rank: "Henchman",
  reputation: "25",
  funding: "600",
  crews: [
    "jk"
  ],
  hates: [],
  traits: [
    "Informer"
  ]
}, {
  name: "Cyrus Gold",
  alias: "Solomon Grundy",
  rank: "Free Agent",
  reputation: "128",
  funding: "0",
  crews: ['*'],
  hates: [
    "bt",
    "lf",
    "ga"
  ],
  traits: [
    "Undead",
    "Immortal",
    "Large",
    "Sturdy",
    "Stupid",
    "Brutal",
    "Supernatural"
  ]
}, {
  name: "Unknown",
  alias: "Son of Batman 01",
  rank: "Henchman",
  reputation: "14",
  funding: "100",
  crews: [
    "bt"
  ],
  hates: [],
  traits: [
    "Hardened",
    "Brutal"
  ]
}, {
  name: "Unknown",
  alias: "Son of Batman 02",
  rank: "Henchman",
  reputation: "23",
  funding: "350",
  crews: [
    "bt"
  ],
  hates: [],
  traits: [
    "Hardened",
    "Street Guy"
  ]
}, {
  name: "Unknown",
  alias: "Son of Batman 03",
  rank: "Henchman",
  reputation: "39",
  funding: "0",
  crews: [
    "bt"
  ],
  hates: [],
  traits: [
    "Bluff",
    "Counterattack",
    "Follow Me!!!",
    "Hardened"
  ]
}, {
  name: "Unknown",
  alias: "Spice",
  rank: "Sidekick",
  reputation: "69",
  funding: "0",
  crews: [
    "tf"
  ],
  hates: [],
  traits: [
    "Acrobat",
    "Bodyguard",
    "Weapon Master",
    "Teamwork 2: Sugar",
    "Runaway",
    "Desensitized",
    "Order",
    "True Love: Dent"
  ]
}, {
  name: "Spore Plant",
  alias: "Spore Plant",
  rank: "Henchman",
  reputation: "20",
  funding: "150",
  crews: [
    "pi"
  ],
  hates: [],
  traits: [
    "Plant Special Traits"
  ]
}, {
  name: "Koriand‘r",
  alias: "Starfire",
  rank: "Free Agent",
  reputation: "130",
  funding: "0",
  crews: [
    "bt"
  ],
  hates: [],
  traits: [
    "Fly",
    "Flying High",
    "Hover",
    "Invunerability/2",
    "Lantern",
    "Safe Hands",
    "True Love: Dick Grayson"
  ]
}, {
  name: "Grumble",
  alias: "Street Demonz 1",
  rank: "Henchman",
  reputation: "29",
  funding: "150",
  crews: [
    "pn"
  ],
  hates: [],
  traits: [
    "Hockey Gear (Biker Jacket)",
    "Mine",
    "Mobster"
  ]
}, {
  name: "Simmons",
  alias: "Street Demonz 2",
  rank: "Henchman",
  reputation: "21",
  funding: "200",
  crews: [
    "pn"
  ],
  hates: [],
  traits: [
    "Hockey Gear (Biker Jacket)",
    "Shooter",
    "Mobster"
  ]
}, {
  name: "Reaver",
  alias: "Street Demonz 3",
  rank: "Henchman",
  reputation: "20",
  funding: "0",
  crews: [
    "pn"
  ],
  hates: [],
  traits: [
    "Hockey Gear (Biker Jacket)",
    "Tireless",
    "Mobster"
  ]
}, {
  name: "Mary Turner",
  alias: "Strix",
  rank: "Henchman",
  reputation: "61",
  funding: "100",
  crews: [
    "co"
  ],
  hates: [],
  traits: [
    "Acrobat",
    "Climbing Claws",
    "Weakness: Cold",
    "Reanimated Owl",
    "Rapid Fire",
    "Stealth"
  ]
}, {
  name: "Alec Holland",
  alias: "Swamp Thing",
  rank: "Sidekick",
  reputation: "150",
  funding: "0",
  crews: [
    "pi"
  ],
  hates: [],
  traits: [
    "Roots",
    "Green Travel",
    "Regeneration",
    "Vulnerable to Fire",
    "Scientific",
    "Tough Skin",
    "Supernatural",
    "Immortal",
    "Large",
    "Natural Immunities",
    "Pollution Hate"
  ]
}, {
  name: "None",
  alias: "Talia al Ghul (AC)",
  rank: "Sidekick",
  reputation: "71",
  funding: "0",
  crews: [
    "ls"
  ],
  hates: [],
  traits: [
    "Acrobat",
    "Sneak Attack",
    "Martial Artist",
    "True Love: Bruce Wayne",
    "Scheming/1"
  ]
}, {
  name: "None",
  alias: "Talia al Ghul (Comic)",
  rank: "Sidekick",
  reputation: "75",
  funding: "250",
  crews: [
    "ls"
  ],
  hates: [],
  traits: [
    "Business Agent",
    "Get'em",
    "Acrobat",
    "Master Marksman",
    "Scheming/3",
    "True Love: Bruce Wayne"
  ]
}, {
  name: "Unknown",
  alias: "Ted Hunter",
  rank: "Henchman",
  reputation: "31",
  funding: "250",
  crews: [
    "bn",
    "ls"
  ],
  hates: [],
  traits: [
    "Mercenary",
    "Veteran",
    "Bulletproof Vest"
  ]
}, {
  name: "Luigi Lombardo",
  alias: "The Bull",
  rank: "Henchman",
  reputation: "22",
  funding: "0",
  crews: [
    "oc",
    "bm",
    "tf"
  ],
  hates: [],
  traits: [
    "Close Combat Master",
    "Criminial",
    "#N/A"
  ]
}, {
  name: "Edward Nigma",
  alias: "The Riddler",
  rank: "Free Agent",
  reputation: "69",
  funding: "0",
  crews: ['*'],
  hates: [
    "bt",
    "lf",
    "ga"
  ],
  traits: [
    "Confusion",
    "Mastermind",
    "Disarray",
    "Puzzle Master",
    "Trickster"
  ]
}, {
  name: "Edward Nigma",
  alias: "The Riddler (Modern Age)",
  rank: "Leader",
  reputation: "80",
  funding: "0",
  crews: [
    "rd"
  ],
  hates: [],
  traits: [
    "Wizard of Quiz",
    "Quiz Master",
    "A Challenge for you",
    "Riddler Bots",
    "Confusion",
    "Goad",
    "Master Mind",
    "Puzzle Master"
  ]
}, {
  name: "Unknown",
  alias: "Titan Blue Penguin",
  rank: "Henchman",
  reputation: "53",
  funding: "0",
  crews: [
    "pn"
  ],
  hates: [],
  traits: [
    "Large",
    "Brutal",
    "Sturdy",
    "Stupid"
  ]
}, {
  name: "Unknown",
  alias: "Titan Clown",
  rank: "Henchman",
  reputation: "59",
  funding: "0",
  crews: [
    "jk"
  ],
  hates: [],
  traits: [
    "Sturdy",
    "Stupid",
    "Bloodthirsty (MD)",
    "Large"
  ]
}, {
  name: "Unknown",
  alias: "TNT",
  rank: "Henchman",
  reputation: "43",
  funding: "600",
  crews: [
    "bn"
  ],
  hates: [],
  traits: [
    "Veteran",
    "Order",
    "Hardened",
    "Flak Armour"
  ]
}, {
  name: "Unknown",
  alias: "Tot",
  rank: "Henchman",
  reputation: "17",
  funding: "100",
  crews: [
    "tf"
  ],
  hates: [],
  traits: [
    "Criminal"
  ]
}, {
  name: "Unknown",
  alias: "Triston",
  rank: "Henchman",
  reputation: "26",
  funding: "300",
  crews: [
    "jk"
  ],
  hates: [],
  traits: [
    "Runaway",
    "Dirty Fighter"
  ]
}, {
  name: "Troy Santino",
  alias: "Troy Sins",
  rank: "Henchman",
  reputation: "16",
  funding: "0",
  crews: [
    "oc",
    "bm",
    "tf"
  ],
  hates: [],
  traits: [
    "Criminal",
    "Tireless",
    "#N/A"
  ]
}, {
  name: "Classified",
  alias: "Turk",
  rank: "Henchman",
  reputation: "25",
  funding: "400",
  crews: ['*'],
  hates: [
    "bt",
    "lf",
    "ga"
  ],
  traits: [
    "Gunman"
  ]
}, {
  name: "Deever Tweet",
  alias: "Tweedledee",
  rank: "Henchman",
  reputation: "30",
  funding: "300",
  crews: [
    "wg",
    "jk"
  ],
  hates: [],
  traits: [
    "Bodyguard",
    "Brutal",
    "Distract",
    "Immun to Stunned Effect",
    "Lazy Cousins"
  ]
}, {
  name: "Dumfree Tweet",
  alias: "Tweedledum",
  rank: "Henchman",
  reputation: "38",
  funding: "600",
  crews: [
    "wg",
    "jk"
  ],
  hates: [],
  traits: [
    "Bodyguard",
    "Strategist",
    "Scheming/1",
    "Immune to Stun Effect",
    "Lazy Cousins"
  ]
}, {
  name: "Harvey Dent",
  alias: "Two Face",
  rank: "Leader",
  reputation: "101",
  funding: "0",
  crews: [
    "tf"
  ],
  hates: [],
  traits: [
    "Judgement",
    "Bipolar (MD)",
    "Master Marksman",
    "Attorneys & Allegation",
    "Runaway",
    "Sturdy"
  ]
}, {
  name: "Unknown",
  alias: "Twoowt",
  rank: "Henchman",
  reputation: "12",
  funding: "0",
  crews: [
    "tf"
  ],
  hates: [],
  traits: [
    "Criminal"
  ]
}, {
  name: "Unknown",
  alias: "Venom Soldier",
  rank: "Henchman",
  reputation: "57",
  funding: "0",
  crews: [
    "bn"
  ],
  hates: [],
  traits: [
    "Bodyguard",
    "Brutal",
    "Large",
    "Hardened",
    "Titan Dose x2"
  ]
}, {
  name: "Samuel Hill",
  alias: "Vipera",
  rank: "Henchman",
  reputation: "27",
  funding: "300",
  crews: [
    "oc",
    "bm",
    "tf"
  ],
  hates: [],
  traits: [
    "Criminal",
    "Undercover",
    "#N/A"
  ]
}, {
  name: "Unknown",
  alias: "Victor Zsasz",
  rank: "Free Agent",
  reputation: "75",
  funding: "0",
  crews: ['*'],
  hates: [
    "bt",
    "lf",
    "ga"
  ],
  traits: [
    "Death Marks",
    "Devastating Blow",
    "Tension",
    "Fast",
    "Psycho",
    "Unpredictable"
  ]
}, {
  name: "Jaina Hudson",
  alias: "White Rabbit",
  rank: "Free Agent",
  reputation: "55",
  funding: "0",
  crews: [
    "wg",
    "bn"
  ],
  hates: [],
  traits: [
    "Acrobat",
    "Bluff",
    "Fast",
    "Confusion",
    "Escape Artist"
  ]
}, {
  name: "William Cobb",
  alias: "William Cobb",
  rank: "Henchman",
  reputation: "68",
  funding: "0",
  crews: [
    "co"
  ],
  hates: [],
  traits: [
    "Weakness: Cold",
    "Reanimated Owl",
    "Precise Blow",
    "Combo: Knife",
    "Elusive",
    "Martial Artist",
    "Undercover"
  ]
}, {
  name: "Xiao Loong",
  alias: "Xiao Loong",
  rank: "Henchman",
  reputation: "49",
  funding: "0",
  crews: [
    "co"
  ],
  hates: [],
  traits: [
    "Talon",
    "Weakness: Cold",
    "Reanimated Owl",
    "Martial Artist",
    "Sneak Attack",
    "Stealth"
  ]
}, {
  name: "Unknown",
  alias: "Yang",
  rank: "Henchman",
  reputation: "31",
  funding: "0",
  crews: [
    "ls"
  ],
  hates: [],
  traits: [
    "Combo: Katana",
    "Martial Artist",
    "Stealth"
  ]
}, {
  name: "Unknown",
  alias: "Ying",
  rank: "Henchman",
  reputation: "30",
  funding: "0",
  crews: [
    "ls"
  ],
  hates: [],
  traits: [
    "Climbing Shoes",
    "Martial Artist",
    "Stealth",
    "Hardened"
  ]
}, {
  name: "Unknown",
  alias: "Zwoowz",
  rank: "Henchman",
  reputation: "20",
  funding: "400",
  crews: [
    "tf"
  ],
  hates: [],
  traits: [
    "Criminal"
  ]
}
];
