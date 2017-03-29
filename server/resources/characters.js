const characters = [{
      name: 'Bruce Wayne',
      alias: 'Batman (Arkham Knight)',
      rank: 'Leader',
      reputation: 150,
      funding: 0,
      crews: [ 'bt' ],
      traits: [ 'Bat-Armor MK III', 'Bat Cape', 'Batclaw', 'Detective', 'Martial Artist', 'Reinforced Gloves', 'Night Vision', 'Explosive Gel', 'Master Fighter', 'Teamwork/1 (All)' ]
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
      traits: [ 'Total Vision', 'Climbing Claws', 'Sneak Attack', 'Acrobat', 'Thief', 'Primary Target (Loot)', 'Retractable Claws' ]
    }]

console.log(JSON.stringify(characters))
