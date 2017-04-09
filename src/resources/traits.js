export const allTraits = [
  {
    name: "Bat-Armor MK 1",
    phase: "Execute the plan",
    cost: "",
    rule: "Each time this [Character] receives a [Hit], after [Block]s, [Ping]s, and [Dodge]s; roll a die. On a result of 5+, discard the [Hit].",
    grants: [],
    page: "B.55"
  }, {
    name: "Bat-Armor MK III",
    phase: "Execute the plan",
    cost: "",
    rule: "Each time this [Character] receives a [Hit], after [Block]s, [Ping]s, and [Dodge]s; roll a die. On a result of 5+, discard the [Hit]. If this [Character] makes a Special Attack: Sneak Attack, they may assign Melee [Hit]s to targets up to 3cm away.  All of these [Hit]s are considered Sneak Attacks.",
    grants: [],
    page: "F.26"
  }, {
    name: "Bat Cape",
    phase: "Execute the plan",
    cost: "1SC Passive",
    rule: "When this [Character] [Falls], they may spend 1 [SC] to avoid being [Knocked Down] and taking [Falling Damage].",
    grants: [],
    page: "B.55"
  }, {
    name: "Batclaw",
    phase: "Execute the plan",
    cost: "1SC+1MC",
    rule: "Spend [1SC+1MC] to make a [Batclaw] movement. [See BMG pg 56]",
    grants: [],
    page: "B.56"
  }, {
    name: "Grapple Gun",
    phase: "Execute the plan",
    cost: "1SC+1MC",
    rule: "Spend [1SC+1MC] to make a [Batclaw] movement. [See BMG pg 56]",
    grants: [],
    page: "B.56"
  }, {
    name: "Hook Arrow",
    phase: "Execute the plan",
    cost: "1SC+1MC",
    rule: "Spend [1SC+1MC] to make a [Batclaw] movement. [See BMG pg 56]",
    grants: [],
    page: "B.56"
  }, {
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
    phase: "D.After Placement/VP Count",
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
    page: "F.44"
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
    page: 'F.42'
  }, {
    name : 'Tracking',
    phase: 'VP and Casualty',
    cost: '2SC',
    rule: 'At the end of the [VP and Casualty] phase, this [Character] can move up to 2D6 cm.',
    grants: [],
    page: 'F.44'
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
    page: 'B.59'
  }, {
    name : 'Speedster',
    nameFunc: 'Speedster/-tokens-',
    phase: 'Speed Force',
    cost: '',
    rule: 'This [Character] may take up to -tokens- Speed Force Tokens.',
    grants: [],
    page: '?'
  }, {
    name : 'Counterattack',
    phase: 'Execute the plan',
    cost: '1SC Passive',
    rule: 'The first time this [Character] [Block]s any [Attack], they may spend 1 [SC] to immediately make one [Strike] against the [Attacker].',
    grants: [],
    page: 'B.58'
  }, {
    name : 'Good Aim',
    phase: 'Execute the plan',
    cost: '1SC',
    rule: 'Spend 1 [SC]. This [Character] may [Move] and [Fire] a [Weapon] with the [Aim] rule.',
    grants: [],
    page: 'B.59'
  }, {
    name : 'Multifire',
    phase: 'Execute the plan',
    cost: '1SC',
    rule: 'Spend 1 [SC]. This [Character] gains +1 to the [Rate of Fire] on its [Weapon]s.',
    grants: [],
    page: '?',
  }, {
    name : 'Shooter',
    phase: 'Execute the plan',
    cost: '',
    rule: 'This [Character] ignores the first [Obstacle], [Protective Item], and [Vehicle] for [Ping!] rolls.',
    grants: [],
    page: 'B.65',
  }, {
    name : 'Scheming',
    nameFunc: 'Scheming/-count-',
    phase: 'Raise the plan',
    cost: '',
    rule: 'If this [Character]\'s [Crew] is the first to [Raise the Plan], -count- [Character]s may be nominated to [Raise the Plan] after the opponent. Otherwise, you may reduce your [Opponent]s nominated [Characters] by -count-.',
    grants: [],
    page: '?'
  }, {
    name : 'Stealth',
    phase: 'Execute the plan',
    cost: '',
    rule: 'If this [Character] is more than 20cm from an [Enemy], this [Character] cannot be [Seen]. Other rules override this effect (i.e. [Illumination], [Total Vision], etc).',
    grants: [],
    page: '?'
  }, {
    name : 'Master Marksman',
    phase: 'Execute the plan',
    cost: '',
    rule: 'This [Character] may reroll [To Hit Rolls] on [Ranged Attacks]',
    grants: [],
    page: '?'
  }, {
    name : 'Scientific',
    phase: 'Execute the plan',
    cost: '',
    rule: 'This [Character] may assign 4 [SC]. This [Character] is worth 1 additional [VP] if removed as a [Casualty].',
    grants: [],
    page: '?'
  }, {
    name : 'Fast',
    phase: 'Execute the plan',
    cost: '',
    rule: 'This [Character] may reroll [MC] used to [Move].',
    grants: [],
    page: '?'
  }, {
    name : 'Moral Compass',
    phase: 'Execute the plan',
    cost: '',
    rule: 'While this [Character] is in your [Crew], no [Character] may use [Coup de Grace]',
    grants: [],
    page: '?'
  }, {
    name : 'Speed Force Master',
    phase: 'Speed Force',
    cost: '',
    rule: 'This [Character] may use up to 2 [Speed Force Powers] in a [Turn].',
    grants: [],
    page: '?'
  }, {
    name : 'Bodyguard',
    phase: 'Execute the plan',
    cost: '1 SC Passive',
    rule: 'If a [Leader] or [Sidekick] within 5cm receives any number of [Hits], this [Character] may receive the [Hit] instead.',
    grants: [],
    page: '?'
  }, {
    name : 'Lantern',
    phase: 'Execute the plan',
    cost: '1 SC',
    rule: 'If not in [Contact] with an [Enemy] [Character], everything within 5cm of this [Character] is [Illuminated].',
    grants: [],
    page: '?'
  }, {
    name : 'Undercover',
    phase: 'C.Crew Deployment',
    cost: '',
    rule: 'This [Character] can deploy up to 20cm outside the [Deployment Area] after [Phase D: Objectives].',
    grants: [],
    page: '?'
  }, {
    name : 'Psychologist',
    phase: 'Execute the plan',
    cost: '',
    rule: 'This [Character] automatically solves [Riddle Objectives] for 1 VP, removing the [Riddle Objective] from the [Game]. Gain: [Psychoanalysis]',
    grants: [ 'Psychoanalysis' ],
    page: '?'
  }, {
    name : 'Psychoanalysis',
    phase: 'Execute the plan',
    cost: '1 SC',
    rule: 'This [Character] may spend 1SC to cancel all [Mental Disorder] special rules of any [Characters] [Seen] within 20cm',
    grants: [ ],
    page: '?'
  }, {
    name : 'Psycho',
    phase: 'Execute the plan',
    cost: '',
    rule: 'This [Character]\'s [Willpower] is never reduced. This does not affect [Action Counters] lost from [Damage].',
    grants: [ ],
    page: '?'
  }, {
    name : 'Gas Mask',
    phase: 'Execute the plan',
    cost: '',
    rule: '[Gas] [Damage] and [Traits] are ignored.',
    grants: [ ],
    page: '?'
  }, {
    name : 'Charismatic',
    phase: '0.Crew Building',
    cost: '',
    rule: '[Crew]s that include this [Character] may have 1 [Free Agent] per every 100 [Reputation Points].',
    grants: [ ],
    page: '?'
  }, {
    name : 'Mobster',
    phase: 'Execute the plan',
    cost: '',
    rule: 'When [Attacking] a [Character] who is [Outnumbered], this [Character] gets an extra [Strike] against the [Target]. This [Attack] does not require any [AC].',
    grants: [ ],
    page: '?'
  }, {
    name : 'Kaos Agent',
    phase: 'Execute the plan',
    cost: '',
    rule: 'At the beginning of the [Game], remove 1 [Opponent]\'s [Take the Lead] marker. [Game]s may now end before the [Scenario]\'s [Round Limit]. All [Henchmen] reveive the [Trickster] [Trait].',
    grants: [ ],
    page: '?'
  }, {
    name : 'Follow Me!',
    phase: 'Execute the plan',
    cost: '1 SC',
    rule: 'Once per [Turn], assign 1 [MC] to [Friendly] [Henchmen] within 10cm.',
    grants: [ ],
    page: '?'
  }, {
    name : 'Survivor',
    phase: 'Execute the plan',
    cost: '',
    rule: 'When you would [Remove] this [Character] as a [Casualty], roll a die. On a 5+, this [Character] discards 1 [Damage], and remains in the [Playing Area] [Knocked Down].',
    grants: [ ],
    page: '?'
  }, {
    name : 'Confusion',
    phase: 'Execute the plan',
    cost: '2 SC',
    rule: 'Once per [Turn], [Target] a [Seen] [Enemy Character] within 20cm. Recude the [Target]\'s [Attack] and [Defense] by 1 and they cannot use [SC]. These effects last until the end of the [Round].',
    grants: [ ],
    page: '?'
  }, {
    name : 'Combat Flip',
    phase: 'Execute the plan',
    cost: '1 SC',
    rule: 'Once per [Turn], you may remove this [Character] from [Base to Base] contact with an [Enemy]. Place this [Character] within 5cm of the original [Enemy].',
    grants: [ ],
    page: '?'
  }, {
    name : 'Goad',
    phase: 'Execute the plan',
    cost: '1 SC',
    rule: 'Target 1 [Seen] [Enemy Character] within 20cm. The [Target] must make a [Willpower Roll]. If the [Target] fails, move the [Target] 5cm. You cannot force the [Target] to [Fall] or spend [Action Counters].',
    grants: [ ],
    page: '?'
  }, {
    name : 'Suicide Squad member',
    phase: 'Build your crew',
    cost: '1 SC',
    rule: 'This [Character] may be part of the [Suicide Squad] team. See Flash pg. 68.',
    grants: [ ],
    page: 'F.68'
  }, {
    name : 'Hardened',
    phase: 'Execute the plan',
    cost: '',
    rule: 'The first [Blood Damage Marker] this [Character] receives each [Round] becomes a [Stun Damage Marker] instead.',
    grants: [ ],
    page: '?'
  }, {
    name : 'Paranoid (Mental Disorder)',
    phase: 'Raise the plan',
    cost: '',
    rule: 'During [Raise the Plan], if this [Character] has 1 [Damage], they gain 1 free [DC]. This [DC] counts toward the total [DC] for that [Character].',
    grants: [ ],
    page: 'B.63'
  }, {
    name : 'Dirty Fighter',
    phase: 'Execute the plan',
    cost: '',
    rule: 'This [Character]\'s [Ranged Weapons] have the [Weapon Trait]: [Light]',
    grants: [ ],
    page: 'B.59'
  }, {
    name : 'Desensitized',
    phase: 'Execute the plan',
    cost: '',
    rule: 'If this [Character] takes damage, it does not reduce the number of [Action Counter]s generated.',
    grants: [ ],
    page: 'B.58'
  }, {
    name : 'Expert Marksman',
    phase: 'Execute the plan',
    cost: '1 SC',
    rule: '[Target]s of this [Character]\'s [Ranged Attacks] have a -1 [Penalty] to [Ping! Rolls].',
    grants: [ ],
    page: 'B.59'
  }, {
    name : 'Kill Them!',
    phase: 'Execute the plan',
    cost: '1 SC',
    rule: 'All other [Friendly] [Henchmen] within 10cm of this [Character] gain 1 [AC]. This [AC] may take the number of [Action Counters] above a [Henchman]\'s normal maximum. This [Trait] may only be used once per [Round].',
    grants: [ ],
    page: 'B.59'
  }, {
    name : 'Leadership',
    phase: 'Execute the plan',
    cost: '',
    rule: 'All [Friendly Character]s within 20cm of this [Character] may reroll failed [Willpower Roll]s.',
    grants: [ ],
    page: '?'
  }, {
    name : 'Ranged Master',
    phase: 'Execute the plan',
    cost: '',
    rule: 'This [Character] receives +1 on [Ranged] [To Hit Roll]s.',
    grants: [ ],
    page: '?'
  }, {
    name : 'Amphibious',
    phase: 'Execute the plan',
    cost: '',
    rule: 'This [Character] does not spend [MC] to [Move] through [Difficult Ground]: [Water]',
    grants: [ ],
    page: '?'
  }, {
    name : 'Claws',
    phase: 'Execute the plan',
    cost: '',
    rule: 'This [Character]\'s [Unarmed Attacks] produce [Blood] + [Stun] [Damage].',
    grants: [ ],
    page: '?'
  }, {
    name : 'Ferocious',
    phase: 'Execute the plan',
    cost: '',
    rule: 'This [Character] may [Close Combat Push] without spending [SC].',
    grants: [ ],
    page: '?'
  }, {
    name : 'Tough Skin',
    phase: 'Execute the plan',
    cost: '',
    rule: 'Subtract 1 from [Damage Roll]s made against this [Character].',
    grants: [ ],
    page: '?'
  }, {
    name : 'Criminal',
    phase: 'Execute the plan',
    cost: '',
    rule: 'Once per [Game], if this [Character] causes an [Enemy Character] to become [K.O.] or a [Casualty], gain +1 [Willpower].',
    grants: [ ],
    page: '?'
  }, {
    name : 'Flaming Wave',
    phase: 'Execute the plan',
    cost: '3 SC',
    rule: 'This [Character] may make a Flaming Wave [Special Attack]. See Flash and Arrow pg.35',
    grants: [ ],
    page: 'F.35'
  }, {
    name : 'Magic Tattoos',
    phase: 'Execute the plan',
    cost: '',
    rule: 'This [Character] is immunte to [Steal] and [Fire] effects.',
    grants: [ ],
    page: 'F.39'
  }, {
    name : 'Self-Discipline',
    phase: 'Execute the plan',
    cost: '',
    rule: 'This [Character] may not be controlled by an [Opponent].',
    grants: [ ],
    page: 'F.42'
  }, {
    name : 'Supernatural',
    phase: 'Execute the plan',
    cost: '',
    rule: '[Attacks] made by this [Character] have the [Magic] [Weapon Trait].',
    grants: [ ],
    page: 'F.44'
  }, {
    name : 'Elusive',
    phase: 'Execute the plan',
    cost: '1 MC Passive',
    rule: 'Once per [Round], this [Character] may spend 1 [MC] to get +1 to [Defense] against [Ranged Attack]s until the end of the [Round].',
    grants: [ ],
    page: 'B.59',
    concern: true
  }, {
    name : 'Ricochet',
    phase: 'Execute the plan',
    cost: '1 SC',
    rule: 'Once per [Round], after this [Character] [Hits] with a [Ranged Attack], they may make an additional [Ranged Attack] with the same weapon. The new [Target] must have [Line of Sight] and be within 5cm of the original [Target].',
    grants: [ ],
    page: 'F.42',
    concern: true
  }, {
    name : 'Weapon Master',
    phase: 'Execute the plan',
    cost: '',
    rule: 'This [Character] receives +1 on melee [To Hit Rolls] when they are not [Unarmed].',
    grants: [ ],
    page: '?'
  }
]

// console.log(JSON.stringify(allTraits))
