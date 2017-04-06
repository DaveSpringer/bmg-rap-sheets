export const allTraits = [
  {
    name: "Bat-Armor MK 1",
    phase: "Execute the plan",
    cost: "",
    rule: "Each time this [Character] receives a [Hit], after [Block]s, [Ping]s, and [Dodge]s; roll a die. On a result of 5+, discard the [Hit].",
    grants: [],
    page: "B.55"
  },
  {
    name: "Bat-Armor MK III",
    phase: "Execute the plan",
    cost: "",
    rule: "Each time this [Character] receives a [Hit], after [Block]s, [Ping]s, and [Dodge]s; roll a die. On a result of 5+, discard the [Hit]. If this [Character] makes a Special Attack: Sneak Attack, they may assign Melee [Hit]s to targets up to 3cm away.  All of these [Hit]s are considered Sneak Attacks.",
    grants: [],
    page: "G.26"
  },
  {
    name: "Bat Cape",
    phase: "Execute the plan",
    cost: "1SC Passive",
    rule: "When this [Character] [Falls], they may spend 1 [SC] to avoid being [Knocked Down] and taking [Falling Damage].",
    grants: [],
    page: "B.55"
  },
  {
    name: "Batclaw",
    phase: "Execute the plan",
    cost: "1SC+1MC",
    rule: "Spend [1SC+1MC] to make a [Batclaw] movement. [See BMG pg 56]",
    grants: [],
    page: "B.56"
  },
  {
    name: "Close Combat Master",
    phase: "Execute the plan",
    cost: "",
    rule: "When fighting [Unarmed], the [Character] may reroll any number of [To [Hit]] dice.",
    grants: [],
    page: "?"
  },
  {
    name: "Detective",
    phase: "Execute the plan",
    cost: "",
    rule: "For each [Detective] [Character] in your [Crew], you may cancel an [Opponent]'s [Pass] at the beginning of each [Round]. [Detective]s my reroll [Riddle Objectives] once.",
    grants: [],
    page: "B.58"
  },
  {
    name: "Martial Artist",
    phase: "Execute the plan",
    cost: "",
    rule: "This [Character] ignores [Outnumbered].",
    grants: [],
    page: "B.62"
  },
  {
    name: "Reinforced Gloves",
    phase: "Execute the plan",
    cost: "",
    rule: "This [Character]'s [Unarmed Attacks] produce 2 [Stun Damage].",
    grants: [],
    page: "B.65"
  },
  {
    name: "Sustained Defenses",
    phase: "Execute the plan",
    cost: "",
    rule: "This [Character] receives 3 [Defense Dice] for every 2 [DC] spend [Defending] an [Attack].",
    grants: [],
    page: "B.65"
  },
  {
    name: "Total Vision",
    phase: "Execute the plan",
    cost: "",
    rule: "This [Character] benefits from the [Night Vision] Trait and can see through [Obstacles] or [Terrain]. The [Character] may not shoot through these elements unless the [Weapon] has [Remote Control].",
    grants: [ "Night Vision" ],
    page: "B.66"
  },
  {
    name: "Night Vision",
    phase: "Execute the plan",
    cost: "",
    rule: "This [Character] can [See] any distance.",
    grants: [],
    page: "B.62"
  },
  {
    name: "Climbing Claws",
    phase: "Execute the plan",
    cost: "1SC",
    rule: "This [Character] does not spend MC to [Climb] and [Climbing Movement] is not [Impaired]. Spending 1 [SC], the character may finish their [Movement] while [Climbing].",
    grants: [],
    page: "B.58"
  },
  {
    name: "Sneak Attack",
    phase: "Execute the plan",
    cost: "1SC",
    rule: "This [Special Attack] my only be performed if the [Target] cannot see the [Attacker] at the beginning of the [Attacker]'s activation. The [Target] cannot [Block] this [Special Attack].",
    grants: [],
    page: "B.71"
  },
  {
    name: "Acrobat",
    phase: "Execute the plan",
    cost: "",
    rule: "[BMD] and [Jump Capacity] become 12cm. The [Character] does not spend extra [MC] to [Move] through [Models], [Difficult Obstacles], [Difficult Ground], [Jump], or [Stand Up]. [Character] gains the [Dodge] trait.",
    grants: [ "Dodge" ],
    page: "B.55"
  }, {
    name: "Dodge",
    phase: "Execute the plan",
    cost: "1MC (PASSIVE)",
    rule: "This [Character] may spend [MC] to avoid [Ranged Attack Hits], before the [Attacker] makes its [Damage Rolls]. Each [Agility Test] [Success] cancels 1 [Hit].",
    grants: [],
    page: "B.59"
  }, {
    name: "Thief",
    phase: "Execute the plan",
    cost: "1SC",
    rule: "When a [Enemy Model] is [Hit] by this [Close Combat] [Special Attack], the [Attacker] gains [CRT]: [Steal].",
    grants: [],
    page: "B.71"
  }, {
    name: "Primary Target",
    nameFunc: 'Primary Target: -target-',
    phase: "D.After Placement",
    cost: "",
    rule: "Before starting the game, choose 1 [-target-] [Objective]. At the end of each [Round] this [Character] controls that [Objective], gain 1 additional [VP].",
    grants: [],
    page: "B.63"
  }, {
    name: "Retractable Claws",
    phase: "Execute the plan",
    cost: "",
    rule: "This [Character]'s [Unarmed] attacks inflict [Blood][Stun].",
    grants: [],
    page: "B.65"
  }, {
    name: "Master Fighter",
    phase: "Execute the plan",
    cost: "",
    rule: "This [Character] gets a +1 bonus to its [Hit] rolls when making [Unarmed Attacks].",
    grants: [],
    page: "B.62"
  }, {
    name: "Explosive Gel",
    phase: "Execute the plan",
    cost: "",
    rule: "This [Character] may spend 1 [MC] to [Manipulate] a piece of [Urban Furnature]. Place a [Gel] marker on the [Urban Furnature]. In a future [Round] the Character may spend 1 [SC] to destroy the marked [Urban Furnature].",
    grants: [],
    page: "B.59"
  }, {
    name: "Teamwork",
    nameFunc : "Teamwork/-counter- -target-",
    phase: "Execute the plan",
    cost: "",
    rule: "During -target- [Character]'s turn, they may spend -counter- [Action Counters] of this [Character]'s as long as they are within 10cm.",
    grants: [],
    page: "G.44"
  }, {
    name: "Elite Boss",
    nameFunc: "Elite Boss: (-type-)",
    phase: "Crew Building",
    cost: "",
    rule: 'Your crew may contain any number of [Elite]: -type-',
    grants: [],
    page: 'B.59'
  }, {
    name : 'Air Support',
    phase: 'Execute the plan',
    cost: '3SC',
    rule: 'Place a 10cm [Explosion Template] in the [Play Area]. [Target]s within the [Template] are [Illuminated].',
    grants: [],
    page: 'B.55'
  }, {
    name : 'Arrest',
    phase: 'Execute the plan',
    cost: '1SC+1MC',
    rule: 'Remove a [K.O.] [Character] in [Contact] as a [Casualty].',
    grants: [],
    page: 'B.55'
  }, {
    name : 'Kevlar Vest',
    phase: 'Execute the plan',
    cost: '',
    rule: 'Reduce [Damage Markers] recieved by 1 to a minimum of 1.',
    grants: [],
    page: 'B.60'
  }, {
    name : 'Take Cover!!',
    phase: 'Execute the plan',
    cost: '1SC',
    rule: 'Once per [Turn], [Henchmen] within 10cm of this [Character] assign 1 [DC].',
    grants: [],
    page: 'B.65'
  }, {
    name : 'Veteran',
    phase: 'Execute the plan',
    cost: '',
    rule: 'When this [Character] is [Activated], they may reassign 2 [Action Counters].',
    grants: [],
    page: 'B.66'
  }, {
    name : 'Informer',
    phase: 'Raise the plan',
    cost: '',
    rule: 'As long as this [Character] is [Active], you gain 1 additional [Pass].',
    grants: [],
    page: 'B.60'
  }, {
    name : 'Sealth',
    phase: 'Execute the plan',
    cost: '',
    rule: 'As long as this [Character] is [Active], you gain 1 additional [Pass].',
    grants: [],
    page: 'B.65'
  }, {
    name : 'Combo with',
    nameFunc : 'Combi with: -weapon-',
    phase: 'Execute the plan',
    cost: '',
    rule: 'When attacking with -weapon-, gain 1 extra [Attack Dice] for every 2 [AC] spent.',
    grants: [],
    page: 'B.58'
  }, {
    name : 'True Love',
    nameFunc: 'True Love: -love-',
    phase: 'Execute the plan',
    cost: '',
    rule: 'If the [Character] and -love- are in the same [Crew], and -love- is removed as a casualty, this [Character] gains +1 [Willpower] and +1 [Attack] ([Stacking]) until the end of the game.',
    grants: [],
    page: 'B.66'
  }, {
    name : 'Small',
    phase: 'Execute the plan',
    cost: '',
    rule: 'This [Character]\'s [BMD] is 8cm. This [Character] gets +1 to [Ping!] rolls',
    grants: [],
    page: 'B.65'
  }, {
    name : 'Technique',
    phase: 'Execute the plan',
    cost: '1SC',
    rule: 'If this [Character] [Damages] an enemy with this [Close Combat] [Special Attack], the [Target] is [Knocked Down]. If the [Target] would be knocked down from [Collateral Damage], they suffer a hit at [Strength 4+] and suffer 1 [Stun].',
    grants: [],
    page: 'B.65'
  }, {
    name : 'Bulletproof Vest',
    phase: 'Execute the plan',
    cost: '',
    rule: 'Firearms require a 4+ to [Damage] this [Character].',
    grants: [],
    page: 'B.58'
  }, {
    name : 'Radio',
    phase: 'Execute the plan',
    cost: '',
    rule: 'This model can reroll [Lets Go!] rolls.',
    grants: [],
    page: 'G.42'
  }, {
    name : 'Tracking',
    phase: 'VP and Casualty',
    cost: '2SC',
    rule: 'At the end of the [VP and Casualty] phase, this [Character] can move up to 2D6 cm.',
    grants: [],
    page: 'G.44'
  }, {
    name : 'Street Guy',
    phase: 'Execute the plan',
    cost: '',
    rule: 'This [Character] can [Crouch] without spending [SC].',
    grants: [],
    page: 'B.65'
  }, {
    name : 'Elite',
    nameFunc: 'Elite: -type-',
    phase: 'Crew Building',
    cost: '',
    rule: 'Your [Crew] may only include 1 [Elite] of each type.',
    grants: [],
    page: 'B.59',
  }
]

// console.log(JSON.stringify(allTraits))
