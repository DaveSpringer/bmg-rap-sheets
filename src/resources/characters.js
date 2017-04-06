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
    }
  ]

// console.log(JSON.stringify(loadedCharacters))
