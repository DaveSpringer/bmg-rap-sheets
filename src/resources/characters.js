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
      alias: 'Harley Quinn',
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
      alias: 'Deadshot',
      rank: 'Free Agent',
      reputation: 96,
      funding: 400,
      crews: [ '*' ],
      hates: [ 'bt', 'ga', 'lf' ],
      traits: [ 'Kevlar Vest', 'Leadership', 'Ranged Master', 'Shooter', 'Suicide Squad member' ]
    }, {
      name: 'Waylon Jones',
      alias: 'Killer Croc',
      rank: 'Free Agent',
      reputation: 64,
      funding: 0,
      crews: [ '*' ],
      hates: [ 'bt', 'ga', 'lf' ],
      traits: [ 'Amphibious', 'Claws', 'Ferocious', 'Tough Skin', 'Suicide Squad member' ]
    }, {
      name: 'Chato Santana',
      alias: 'Diablo',
      rank: 'Free Agent',
      reputation: 50,
      funding: 200,
      crews: [ '*' ],
      hates: [ 'bt', 'ga', 'lf' ],
      traits: [ 'Criminal', 'Dirty Fighter', 'Flaming Wave', 'Lantern', 'Magic Tattoos', 'Self-Discipline', 'Suicide Squad member', 'Supernatural' ]
    }, {
      name: 'George "Digger" Harkness',
      alias: 'Captain Boomerang',
      rank: 'Free Agent',
      reputation: 48,
      funding: 200,
      crews: [ '*' ],
      hates: [ 'bt', 'ga', 'lf' ],
      traits: [ 'Elusive', 'Master Marksman', 'Ricochet', { name: 'Primary Target', target: 'Loot' }, 'Suicide Squad member' ]
    }, {
      name: 'Christopher Weiss',
      alias: 'Slipknot',
      rank: 'Free Agent',
      reputation: 42,
      funding: 200,
      crews: [ '*' ],
      hates: [ 'bt', 'ga', 'lf', 'ls' ],
      traits: [ 'Arrest', 'Grapple Gun', 'Bulletproof Vest', 'Suicide Squad member' ]
    }, {
      name: 'Tatsu Yamashiro',
      alias: 'Katana',
      rank: 'Free Agent',
      reputation: 50,
      funding: 0,
      crews: [ 'lf' ],
      traits: [ 'Acrobat', 'Bodyguard', 'Martial Artist', 'Suicide Squad member', 'Weapon Master' ]
    }
  ]

// console.log(JSON.stringify(loadedCharacters))
