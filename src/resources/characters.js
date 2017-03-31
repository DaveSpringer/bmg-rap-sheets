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
    }]

// console.log(JSON.stringify(loadedCharacters))
