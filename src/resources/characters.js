export const loadedCharacters = [{
      name: 'Bruce Wayne',
      alias: 'Batman (Arkham Knight)',
      rank: 'Leader',
      reputation: 150,
      funding: 0,
      crews: [ 'bt' ],
      traits: [ 'Bat-Armor MK III', 'Bat Cape', 'Batclaw', 'Detective', 'Martial Artist', 'Reinforced Gloves', 'Night Vision', 'Explosive Gel', 'Master Fighter', { name: 'Teamwork', counter:'1', target:'ALL'} ]
    }, {
      name: 'Bruce Wayne',
      alias: 'Batman (Ben Affleck)',
      rank: 'Leader',
      reputation: 125,
      funding: 0,
      crews: [ 'bt' ],
      traits: [ 'Bat-Armor MK 1', 'Bat Cape', 'Batclaw', 'Close Combat Master', 'Detective', 'Martial Artist', 'Reinforced Gloves', 'Sustained Defenses' ]
    }, {
      name: 'Selina Kyle',
      alias: 'Catwoman',
      rank: 'Free Agent',
      reputation: 66,
      funding: 0,
      crews: [ '*' ],
      hates: [ 'lf', 'jk' ],
      traits: [ 'Total Vision', 'Climbing Claws', 'Sneak Attack', 'Acrobat', 'Thief', {name: 'Primary Target', target: 'Loot' }, 'Retractable Claws' ]
    }, {
      name: 'James W. Gordon',
      alias: 'Gordon',
      rank: [{ crew: 'bt', rank: 'Sidekick' }, { crew: 'lf', rank: 'Leader' }],
      reputation: 70,
      funding: 200,
      crews: [ 'bt', 'lf' ],
      traits: [ 'Air Support', 'Arrest', 'Detective', { name: 'Elite Boss', type: 'S.W.A.T.' }, 'Kevlar Vest', 'Take Cover!!', 'Veteran' ]
    }, {
      name: 'Barbara Gordon',
      alias: 'Batgirl',
      rank: 'Sidekick',
      reputation: 59,
      funding: 0,
      crews: [ 'bt', 'lf' ],
      traits: [ 'Batclaw', 'Martial Artist', 'Informer', 'Bat Cape', 'Stealth', 'Sneak Attack', { name: 'Combo with', weapon: 'Unarmed' }]
    }, {
      name: 'Richard Grayson',
      alias: 'Nightwing',
      rank: 'Sidekick',
      reputation: 85,
      funding: 0,
      crews: [ 'bt' ],
      traits: [ 'Charismatic', { name : 'Combo with', weapon: 'Electric Baton' }, 'Explosive Gel', 'Acrobat', 'Batclaw', 'Sneak Attack' ]
    }, {
      name: 'Damian Wayne',
      alias: 'Robin',
      rank: 'Free Agent',
      reputation: 50,
      funding: 0,
      crews: [ 'bt' ],
      traits: [ 'Martial Artist', 'Acrobat', 'Batclaw', { name: 'True Love', love: 'Talia Al Ghul' }, { name: 'True Love', love: 'Batman' }, 'Small', 'Detective', 'Master Fighter', 'Technique' ]
    }, {
      name: 'Alfred Pennyworth',
      alias: 'None',
      rank: 'Henchman',
      reputation: 30,
      funding: 0,
      crews: [ 'bt' ],
      traits: [ 'Informer', 'Veteran' ]
    }, {
      name: 'Jenette Vassili',
      alias: 'Quick Response Team 3',
      rank: 'Henchman',
      reputation: 35,
      funding: 400,
      crews: [ 'lf', 'ga', 'bt' ],
      traits: [ 'Bulletproof Vest', 'Radio', 'Tracking' ]
    }, {
      name: 'Salvador',
      alias: 'Quick Response Team 2',
      rank: 'Henchman',
      reputation: 33,
      funding: 350,
      crews: [ 'lf', 'ga', 'bt' ],
      traits: [ 'Bulletproof Vest', 'Street Guy' ]
    }, {
      name: 'Agent O Connell',
      alias: 'Unknown',
      rank: 'Henchman',
      reputation: 29,
      funding: 0,
      crews: [ 'lf', 'ga', 'bt' ],
      traits: [ 'Arrest', 'Veteran' ]
    }, {
      name: 'L. Lawrence',
      alias: 'Quick Response Team 1',
      rank: 'Henchman',
      reputation: 27,
      funding: 100,
      crews: [ 'lf', 'ga', 'bt' ],
      traits: [ 'Arrest', 'Bulletproof Vest' ]
    }, {
      name: 'Unknown',
      alias: 'Gotham Policewoman',
      rank: 'Henchman',
      reputation: 14,
      funding: 0,
      crews: [ 'lf', 'ga', 'bt' ],
      traits: [ 'Arrest' ]
    }, {
      name: 'Unknown',
      alias: 'Joker (Jared Leto)',
      rank: 'Leader',
      reputation: 120,
      funding: 0,
      crews: [ 'jk' ],
      traits: [ 'Mobster', { name: 'Elite Boss', type: 'Cosplayers'}, 'Kaos Agent', 'Follow Me!', 'Psycho', 'Survivor', { name: 'True Love', love: 'Harley Quinn'} ]
    }, {
      name: 'Dr. Harleen Frances Quinzel',
      alias: 'Harley Quinn (Suicide Squad)',
      rank: 'Sidekick',
      reputation: 90,
      funding: 300,
      crews: [ 'jk', 'ss' ],
      traits: [ 'Acrobat', 'Confusion', 'Charismatic', 'Combat Flip', 'Goad', 'Suicide Squad member', { name: 'True Love', love: 'Joker' } ]
    }, {
      name: 'Unknown',
      alias: 'Panda Man',
      rank: 'Henchman',
      reputation: 40,
      funding: 650,
      crews: [ 'jk' ],
      traits: [ { name: 'Elite', type: 'Cosplayers'}, 'Hardened', 'Paranoid (Mental Disorder)' ]
    }, {
      name: 'Unknown',
      alias: 'Goat Head Priest',
      rank: 'Henchman',
      reputation: 35,
      funding: 400,
      crews: [ 'jk' ],
      traits: [ { name: 'Elite', type: 'Cosplayers'}, 'Dirty Fighter' ]
    }, {
      name: 'Stan',
      alias: 'The Eyeball Man',
      rank: 'Henchman',
      reputation: 27,
      funding: 350,
      crews: [ 'jk' ],
      traits: [ { name: 'Elite', type: 'Cosplayers'}, 'Street Guy' ]
    }, {
      name: 'Unknown',
      alias: 'Mr. Grin (white)',
      rank: 'Henchman',
      reputation: 19,
      funding: 0,
      crews: [ 'jk' ],
      traits: [ { name: 'Elite', type: 'Cosplayers'}, 'Desensitized' ]
    }, {
      name: 'Unknown',
      alias: 'Mr. Grin (black)',
      rank: 'Henchman',
      reputation: 17,
      funding: 0,
      crews: [ 'jk' ],
      traits: [ { name: 'Elite', type: 'Cosplayers'}, 'Desensitized' ]
    }, {
      name: 'Oliver Queen',
      alias: 'Arrow',
      rank: 'Leader',
      reputation: 125,
      funding: 0,
      crews: [ 'ga' ],
      traits: [ 'Acrobat', 'Counterattack', 'Good Aim', 'Hook Arrow', 'Multifire', 'Shooter', 'Stealth', 'Master Marksman' ]
    }, {
      name: 'Barry Allen',
      alias: 'The Flash (TV Show)',
      rank: 'Sidekick',
      reputation: 100,
      funding: 0,
      crews: [ 'ga' ],
      traits: [ 'Detective', 'Scientific', 'Fast', 'Dodge', 'Moral Compass', 'Speed Force Master', { name: 'Speedster', tokens: 5 } ]
    }, {
      name: 'John Diggle',
      alias: 'Spartan',
      rank: 'Henchman',
      reputation: 60,
      funding: 350,
      crews: [ 'ga' ],
      traits: [ 'Bodyguard', 'Kevlar Vest', 'Lantern', 'Master Marksman', { name: 'Scheming', count: 2 } ]
    }, {
      name: 'Jonathan Crane',
      alias: 'Scarecrow (Arkham Knight)',
      rank: 'Leader',
      reputation: 80,
      funding: 0,
      crews: [ 'sc' ],
      traits: [ 'Undercover', { name: 'Scheming', count: 2 }, 'Psychologist', 'Psycho', 'Gas Mask' ]
    }, {
      name: 'Slade Wilson',
      alias: 'Deathstroke Origin',
      rank: [{ crew: 'sc', rank: 'Sidekick' }, { crew: '*', rank: 'Free Agent' }],
      reputation: 145,
      funding: 250,
      crews: [ '*' ],
      hates: [ 'bt', 'ga', 'lf' ],
      traits: [ 'Acrobat', 'Undercover', 'Stealth', { name: 'Combo with', weapon: 'Reinforced Bo' }, 'Martial Artist', 'Counterattack' ]
    }, {
      name: 'Unknown',
      alias: 'Militia Commander 1',
      rank: 'Henchman',
      reputation: 33,
      funding: 300,
      crews: [ 'sc' ],
      traits: [ 'Expert Marksman', 'Kill Them!', 'Veteran' ]
    }, {
      name: 'Unknown',
      alias: 'Militia 4',
      rank: 'Henchman',
      reputation: 29,
      funding: 500,
      crews: [ 'sc' ],
      traits: [ 'Good Aim', 'Veteran' ]
    }, {
      name: 'Unknown',
      alias: 'Militia 1',
      rank: 'Henchman',
      reputation: 22,
      funding: 350,
      crews: [ 'sc' ],
      traits: [ 'Veteran', 'Shooter' ]
    }, {
      name: 'Unknown',
      alias: 'Militia Medic',
      rank: 'Henchman',
      reputation: 21,
      funding: 0,
      crews: [ 'sc' ],
      traits: [ 'Veteran' ]
    }, {
      name: 'Unknown',
      alias: 'Militia 2',
      rank: 'Henchman',
      reputation: 15,
      funding: 0,
      crews: [ 'sc' ],
      traits: [ 'Veteran' ]
    }, {
      name: 'Floyd Lawton',
      alias: 'Deadshot (Suicide Squad)',
      rank: 'Free Agent',
      reputation: 96,
      funding: 400,
      crews: [ '*' ],
      hates: [ 'bt', 'ga', 'lf' ],
      traits: [ 'Kevlar Vest', 'Leadership', 'Ranged Master', 'Shooter', 'Suicide Squad member' ]
    }, {
      name: 'Waylon Jones',
      alias: 'Killer Croc (Suicide Squad)',
      rank: 'Free Agent',
      reputation: 64,
      funding: 0,
      crews: [ '*' ],
      hates: [ 'bt', 'ga', 'lf' ],
      traits: [ 'Amphibious', 'Claws', 'Ferocious', 'Tough Skin', 'Suicide Squad member' ]
    }, {
      name: 'Chato Santana',
      alias: 'Diablo (Suicide Squad)',
      rank: 'Free Agent',
      reputation: 50,
      funding: 200,
      crews: [ '*' ],
      hates: [ 'bt', 'ga', 'lf' ],
      traits: [ 'Criminal', 'Dirty Fighter', 'Flaming Wave', 'Lantern', 'Magic Tattoos', 'Self-Discipline', 'Suicide Squad member', 'Supernatural' ]
    }, {
      name: 'George "Digger" Harkness',
      alias: 'Captain Boomerang (Suicide Squad)',
      rank: 'Free Agent',
      reputation: 48,
      funding: 200,
      crews: [ '*' ],
      hates: [ 'bt', 'ga', 'lf' ],
      traits: [ 'Elusive', 'Master Marksman', 'Ricochet', { name: 'Primary Target', target: 'Loot' }, 'Suicide Squad member' ]
    }, {
      name: 'Christopher Weiss',
      alias: 'Slipknot (Suicide Squad)',
      rank: 'Free Agent',
      reputation: 42,
      funding: 200,
      crews: [ '*' ],
      hates: [ 'bt', 'ga', 'lf', 'ls' ],
      traits: [ 'Arrest', 'Grapple Gun', 'Bulletproof Vest', 'Suicide Squad member' ]
    }, {
      name: 'Tatsu Yamashiro',
      alias: 'Katana (Suicide Squad)',
      rank: 'Free Agent',
      reputation: 50,
      funding: 0,
      crews: [ 'lf' ],
      traits: [ 'Acrobat', 'Bodyguard', 'Martial Artist', 'Suicide Squad member', 'Weapon Master' ]
    }, {
      name: 'Agent Ron',
      alias: 'None',
      rank: 'Henchman',
      reputation: 25,
      funding: 300,
      crews: [ 'bt' ],
      traits: [ 'Arrest', 'Street Guy' ]
    }, {
      name: 'Unknown',
      alias: 'Gotham Policeman',
      rank: 'Henchman',
      reputation: 16,
      funding: 0,
      crews: [ 'bt' ],
      traits: [ 'Arrest', 'Lantern' ]
    }, {
      name: 'Unknown',
      alias: 'Bane Origin',
      rank: 'Leader',
      reputation: 93,
      funding: 0,
      crews: [ 'bn' ],
      traits: [ 'Lethal Blow', 'Large', 'Reinforced Gloves', { name: 'Venom Dose', count: '2' }, 'Master Fighter', { name: 'Scheming', count: 2 }, 'Sturdy' ]
    }, {
      name: 'Angel Vallelunga',
      alias: 'Bird',
      rank: 'Sidekick',
      reputation: 60,
      funding: 100,
      crews: [ 'bn' ],
      traits: [ 'Bulletproof Vest', 'Climbing Rope', { name: 'Elite Boss', type: 'Soldier of Fortune' }, 'Self-Discipline', 'Veteran', { name: 'Weapon Master With', weapon: 'Combat Machete' }, 'Sturdy' ]
    }, {
      name: 'Unknown',
      alias: 'Dallas',
      rank: 'Henchman',
      reputation: 35,
      funding: 600,
      crews: [ 'bn', 'ls' ],
      traits: [ 'Bulletproof Vest', 'Veteran' ]
    }, {
      name: 'Unknown',
      alias: 'Smash',
      rank: 'Henchman',
      reputation: 30,
      funding: 0,
      crews: [ 'bn', 'ls' ],
      traits: [ 'Bulletproof Vest', 'Veteran' ]
    }, {
      name: 'Unknown',
      alias: 'Mc Gregor',
      rank: 'Henchman',
      reputation: 30,
      funding: 0,
      crews: [ 'bn', 'ls' ],
      traits: [ 'Bulletproof Vest', 'Veteran', { name: 'Weapon Master With', weapon: 'Machete'} ]
    }, {
      name: 'Victor Fries',
      alias: 'Mr. Freeze (Arkham Knight)',
      rank: 'Leader',
      reputation: 80,
      funding: 0,
      crews: [ 'mf' ],
      traits: [ 'Desensitized', 'Ice Flash', 'Light Armor', 'Safe Hands', { name: 'Scheming', count: 3 }, 'Scientific', 'Self-Discipline', { name: 'Vulnerability', element: 'Fire' } ]
    }, {
      name: 'Leonard Snart',
      alias: 'Captain Cold',
      rank: [{ crew: 'mf', rank: 'Sidekick' }, { crew: '*', rank: 'Free Agent' }],
      reputation: 72,
      funding: 400,
      crews: [ 'mf' ],
      hates: [ 'bt', 'ga', 'lf', 'jk', 'ls' ],
      traits: [ 'Strategist', 'Leadership', 'Mastermind', 'Order', 'Ranged Master', { name: 'Teamwork', counter: 1, target: 'Heatwave' } ]
    }, {
      name: 'Mick Rory',
      alias: 'Heat Wave',
      rank: 'Free Agent',
      reputation: 65,
      funding: 300,
      crews: [ '*' ],
      hates: [ 'bt', 'ga', 'lf', 'jk', 'ls' ],
      traits: [ 'Criminal', 'Escape Artist', 'Reinforced Gloves', 'Runaway', 'Sturdy', { name: 'Teamwork', counter: 2, target: 'Captain Cold' } ]
    }, {
      name: 'Unknown',
      alias: 'Snowy 5',
      rank: 'Henchman',
      reputation: 28,
      funding: 0,
      crews: [ 'mf' ],
      traits: [ 'Hockey Gear', 'Bluff', 'Order' ]
    }, {
      name: 'Unknown',
      alias: 'Snowy 4',
      rank: 'Henchman',
      reputation: 24,
      funding: 300,
      crews: [ 'mf' ],
      traits: [ 'Hockey Gear' ]
    }, {
      name: 'Unknown',
      alias: 'Snowy 3',
      rank: 'Henchman',
      reputation: 24,
      funding: 0,
      crews: [ 'mf' ],
      traits: [ 'Hockey Gear', 'Radio', { name: 'Combo with', weapon: 'Hockey Stick' } ]
    }, {
      name: 'Unknown',
      alias: 'Snowy 2',
      rank: 'Henchman',
      reputation: 23,
      funding: 400,
      crews: [ 'mf' ],
      traits: [ 'Hockey Gear' ]
    }, {
      name: 'Unknown',
      alias: 'Snowy 1',
      rank: 'Henchman',
      reputation: 23,
      funding: 300,
      crews: [ 'mf' ],
      traits: [ 'Hockey Gear' ]
    }, {
      name: 'Sullivan',
      alias: 'Clover',
      rank: 'Henchman',
      reputation: 30,
      funding: 300,
      crews: [ 'bn' ],
      traits: [ 'Bulletproof Vest', 'Veteran', 'Rapid Fire' ]
    }, {
      name: 'Diaz',
      alias: 'Cuchillo',
      rank: 'Henchman',
      reputation: 27,
      funding: 0,
      crews: [ 'bn' ],
      traits: [ 'Bulletproof Vest', 'Sneak Attack', 'Stealth', 'Tireless', 'Veteran' ]
    }, {
      name: 'Ike',
      alias: 'Schoolboy',
      rank: 'Henchman',
      reputation: 33,
      funding: 500,
      crews: [ 'bn' ],
      traits: [ { name: 'Elite', type: 'Soldier of Fortune' }, 'Gas Mask', 'Veteran' ]
    }
  ]

// console.log(JSON.stringify(loadedCharacters))
