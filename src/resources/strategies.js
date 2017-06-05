export const allStrategies = [{
  'key': 'S01',
  'name': 'Global Plan',
  'text': 'You may choose a specific [Scenario] instead of a random pick. If both players choose this [Strategy], then neither can apply its effect.',
  'cost': 3,
  'phase': 'A',
  'batmatch': true
}, {
  'key': 'S02',
  'name': 'Fast Advance',
  'text': 'Increase your [Deployment Area] by 10cm. If you have two [Deployment Area]s, increase each by 5cm. If both players choose this [Strategy], neither can apply its effect.',
  'cost': 2,
  'phase': 'C',
  'batmatch': true
}, {
  'key': 'S03',
  'name': 'Ambush',
  'text': 'Deploy your entire [Crew] after the other [Player](s). If both players choose this [Strategy], neither can apply its effect.',
  'cost': 2,
  'phase': 'C',
  'batmatch': true
}, {
  'key': 'S04',
  'name': 'Patrol',
  'text': 'You may place 1 [Model] up to 10cm outside your [Deployment Zone]. If this [Scenario] does not include a [Deployment Zone], you gain +1 to the [Deployment Rolls] to enter the [Playing Area] instead.',
  'cost': 1,
  'phase': 'C',
  'batmatch': true
}, {
  'key': 'S05',
  'name': 'Reinforcements',
  'text': 'You may pick one [Model] from your [Crew] and roll a [Die]. If the result is 4 or greater, you may hold it off table rather than deploy it. At the [Raise the Plan] state of the second [Round], you may [Deploy] that model in contact with any edge of the [Playing Area] except those within an enemy [Deployment Zone].',
  'cost': 1,
  'phase': 'C',
  'batmatch': true
}, {
  'key': 'S06',
  'name': 'Maps',
  'text': 'Gain 2 extra [Lamp Posts] or 1 [Sewer Marker] (your choice). You may deploy them anywhere except in the enemy [Deployment Area].',
  'cost': 1,
  'phase': 'B',
  'batmatch': true
}, {
  'key': 'S07',
  'name': 'Secret Objective',
  'text': 'Set 1 additional [Objective] of your choice. This [Strategy] may only be chosen once per player.',
  'cost': 2,
  'phase': 'D',
  'batmatch': true
}, {
  'key': 'S08',
  'name': 'Change of Plans',
  'text': 'Move an objective 2D6cm. This [Strategy] may only be chosen once per player and may only be performed after placing all [Objective] [Markers].',
  'cost': 1,
  'phase': 'D',
  'batmatch': true
}, {
  'key': 'S09',
  'name': 'Snitch',
  'text': 'Play in any [Pre-Game Phase] as a reaction to an opponent. When an opposing player declares one of their [Strategies], this [Strategy] will cancel those effects, rendering the enemy [Strategy] useless. A [Snitch] may be used to cancel the effect of another [Snitch].',
  'cost': 2,
  'phase': '?',
  'batmatch': false
}, {
  'key': 'S10',
  'name': 'Early Bird',
  'text': 'You choose who [Takes the Lead] in the first [Round] without having to draw counters. If both players choose this [Strategy], neither can apply its effect.',
  'cost': 2,
  'phase': 'E',
  'batmatch': true
}, {
  'key': 'S11',
  'name': 'Battle Cry',
  'text': 'Your [Crew] only tests to [Run Away] when your [Reputation] is reduced by 80 percent or more of its starting value.',
  'cost': 2,
  'phase': 'E',
  'batmatch': true
}, {
  'key': 'S12',
  'name': 'Perfect Plan',
  'text': 'At the beginning of the game, add an extra [Counter] for your [Crew] for determining who [Takes the Lead].',
  'cost': 3,
  'phase': 'C',
  'batmatch': true
}, {
  'key': 'S13',
  'name': 'Tunnel',
  'text': 'One [Character] can start the game inside the [Sewers], but cannot exit during the first [Round] of the [Game]. This [Strategy] cannot be chosen by Batman, Law Forces, or Green Arrow crews.',
  'cost': 1,
  'phase': 'C',
  'batmatch': true,
  'crews': [ 'jk', 'pn', 'ls', 'bn', 'pi', 'co', 'mf', 'oc', 'tf', 'bm', 'wm', 'rd', 'sc', 'wg', 'lc', 'gg' ]
}, {
  'key': 'S14',
  'name': 'Vandalism',
  'text': 'When your [Opponent] has placed all their [Sewer]s and [Lamppost]s, you may remove 1 of them. This [Strategy] can only be selected once per [Game].',
  'cost': 1,
  'phase': 'B',
  'batmatch': true,
  'crews': [ 'jk', 'pn', 'ls', 'bn', 'pi', 'co', 'mf', 'oc', 'tf', 'bm', 'wm', 'rd', 'sc', 'wg', 'lc', 'gg' ]
}, {
  'key': 'S15',
  'name': 'Rapid Response Training',
  'text': 'Select up to two [Henchmen] in your [Crew]. At the end of the first [Raise the Plan] phase, these [Characters] gain 1 bonus [MC].',
  'cost': 1,
  'phase': 'E',
  'batmatch': true,
  'crews': [ 'bt', 'ga', 'lf' ]
}, {
  'key': 'S16',
  'name': 'Distant Distraction',
  'text': 'Target an [Enemy] [Henchman]. The [Target] must take a [Willpower] roll. If the [Target] fails, the [Character] cannot move during its first [Turn].',
  'cost': 1,
  'phase': 'E',
  'batmatch': true
}, {
  'key': 'S17',
  'name': 'Objective Trap',
  'text': 'Choose and mark one [Objective]. The first mdoel that comes into contact with the marked [Objective] muss pass an [Agaility Roll] or suffer BS [Damage]. Once triggered, the trap does not work again. This [Strategy] can be selected once epr game.',
  'cost': 1,
  'phase': 'D',
  'batmatch': true
}, {
  'key': 'S18',
  'name': 'Objective Trap',
  'text': 'Choose and mark one [Objective]. The first mdoel that comes into contact with the marked [Objective] muss pass an [Agaility Roll] or suffer BS [Damage]. Once triggered, the trap does not work again. This [Strategy] can be selected once epr game.',
  'cost': 1,
  'phase': 'D',
  'batmatch': true
}, {
  'key': 'S19',
  'name': 'Fake Objective',
  'text': 'Choose one of the [Opponent]\'s [Objective]s. That [Objective] awards 1VP less than usual, to a minimum of 1VP. If the [Opponent] does not have any [Objective]s, subtract 1 VP from their points total at the end of the game instead. This [Strategy] can be selected once per game.',
  'cost': 3,
  'phase': 'E',
  'batmatch': true
}, {
  'key': 'S20',
  'name': 'Under Pressure',
  'text': '[Target] [Enemy] [Character] with [Willpower] 5 or less. That [Character] has minus 1 [Willpower] for the entire [Game]. This [Strategy] can be selected once per [Game]. Does not stack with [Duress].',
  'cost': 2,
  'phase': 'E',
  'batmatch': true
}, {
  'key': 'S21',
  'name': 'Duress',
  'text': '[Target] [Enemy] [Character] with [Willpower] 7 or less. That [Character] has minus 1 [Willpower] for the entire [Game]. This [Strategy] can be selected once per [Game]. Does not stack with [Duress].',
  'cost': 3,
  'phase': 'E',
  'batmatch': true
}, {
  'key': 'S22',
  'name': 'Public Resource Upgrade',
  'text': '[Target] up to 3 [Lamppost]s in the [Play Area]. Those [Lamppost]s now illuminate 15cm radius.',
  'cost': 3,
  'phase': 'E',
  'batmatch': true,
  'crews': [ 'bt', 'ga', 'lf' ]
}, {
  'key': 'S23',
  'name': 'Sewer Maps',
  'text': 'The maximum number of [Character]s you may have inside the [Sewers] at the same time is incrased by 1.',
  'cost': 1,
  'phase': 'E',
  'batmatch': true
}, {
  'key': 'S24',
  'name': 'Road Warning Signals',
  'text': 'After both players have finished placing [Lamppost]s and [Sewers], you may deploy up to 4 [Road Warning Signals], 5cm from the edge of the playing area, and 10cm from each other. [Road Warning Signals] count as [Lampposts], but only [Illuminate] within 3cm.',
  'cost': 1,
  'phase': 'B',
  'batmatch': true
}, {
  'key': 'S25',
  'name': 'I Am the Night',
  'text': 'Once per game at the beginning of any [Take the Lead] phase, you can choose up to 3 [Lamppost]s on the board. For the rest of the [Round], the selected [Lamppost]s do not function.',
  'cost': 1,
  'phase': '?',
  'batmatch': true,
  'crews': [ 'bt' ]
}, {
  'key': 'S26',
  'name': 'Effective Henchmen',
  'text': 'When a [Henchman] passes the [Let\'s Go!] roll and becomes [Activated], that [Character] may immediately move 5cm.',
  'cost': 2,
  'phase': '?',
  'batmatch': true,
  'crews': [ 'pn' ]
}, {
  'key': 'S27',
  'name': 'Why So Serious?',
  'text': 'Your [Crew]\'s [Boss] gains the [Immortal] [Trait].',
  'cost': 1,
  'phase': '?',
  'batmatch': true,
  'crews': [ 'jk' ]
}, {
  'key': 'S28',
  'name': 'Indomitable Will',
  'text': 'Each of your [Henchmen] may reroll one failed [Willpower] roll each [Round].',
  'cost': 2,
  'phase': '?',
  'batmatch': true,
  'crews': [ 'ls' ]
}, {
  'key': 'S29',
  'name': 'Police Training',
  'text': 'All [Henchmen] with the [Arrest] [Trait] only need to spend 1 [SC] to active it.',
  'cost': 2,
  'phase': '?',
  'batmatch': true,
  'crews': [ 'lf' ]
}, {
  'key': 'S30',
  'name': 'Guardian of Gotham',
  'text': 'The first [Enemy] [Model] who becomes [K.O.] is removed from play as a [Casualty] instead.',
  'cost': 2,
  'phase': '?',
  'batmatch': true,
  'crews': [ 'tf' ]
}, {
  'key': 'S31',
  'name': 'One Night to Kill the Bat!',
  'text': 'Your [Henchmen] gain plus 1 to their [Hit] rolls in [Close Combat] against an enemy [Leader], [Sidekick], or [Boss]. The [Henchmen] must have [Affiliation]: [Black Mask] to gain this bonus.',
  'cost': 1,
  'phase': '?',
  'batmatch': true,
  'crews': [ 'bm' ]
}, {
  'key': 'S32',
  'name': 'Regrowth',
  'text': 'Once per [Game], at the start of the [Take the Lead] phase, you can change the position of one [Friendly] [Plant] to another [Seed] counter.',
  'cost': 1,
  'phase': '?',
  'batmatch': true,
  'crews': [ 'pi' ]
}, {
  'key': 'S33',
  'name': 'Payday',
  'text': 'When a friendly [Henchman] makes an enemy [Free Agent], [Sidekick], [Leader], or [Boss] a casualty, roll a [Die]. On a result of 4 or greater, you obtain 1 additional [VP].',
  'cost': 2,
  'phase': '?',
  'batmatch': true,
  'crews': [ 'oc' ]
}, {
  'key': 'S34',
  'name': 'Undercover Spy',
  'text': '[Target] an [Enemy] [Henchman]. The [Target] cannot [Control] or [Contest] [Objective]s.',
  'cost': 1,
  'phase': 'E',
  'batmatch': true,
  'crews': [ 'rd' ]
}, {
  'key': 'S35',
  'name': 'Frozen Area',
  'text': 'Place an [Ice Template] [Explosive Tempalte] in the neutral zone. Roll a [Die] at the end of each [Victory Point and Casualty Recount] phase. On a 5 or greater, remove the [Ice Template].',
  'cost': 1,
  'phase': 'E',
  'batmatch': true,
  'crews': [ 'mf' ]
}, {
  'key': 'S36',
  'name': 'A City in Fear',
  'text': 'At the beginning of the [Take the Lead] [Phase] of each even numbered round, [Target] Non-[Boss] [Enemy] [Character] must pass a [Willpower] roll or become [Scared].',
  'cost': 2,
  'phase': '?',
  'batmatch': true,
  'crews': [ 'sc' ]
}, {
  'key': 'S37',
  'name': 'Weird Crew',
  'text': 'One [Free Agent] in your crew is teadted as a [Henchman] for the rest of the [Game] (not [Crew Building]).',
  'cost': 1,
  'phase': 'E',
  'batmatch': true,
  'crews': [ 'wg' ]
}, {
  'key': 'S38',
  'name': 'Lords of Gotham',
  'text': 'Place 2 additional [Sewer] markers in the [Playing Area], and mark these as special. These [Sewers] can only be used by [Friendly] [Character]s.',
  'cost': 1,
  'phase': 'B',
  'batmatch': true,
  'crews': [ 'co' ]
}, {
  'key': 'S39',
  'name': 'Adaptable Plan',
  'text': 'Move up to two of your [Model]s 2D6cm.',
  'cost': 1,
  'phase': 'E',
  'batmatch': true,
  'crews': [ 'ga' ]
}, {
  'key': 'S40',
  'name': 'Titan Container Located!',
  'text': 'Choose any one [Titan Container] [Objective]. You may [Move] the chose [Objective] up to 10cm, but must follow the usual rules for placing [Objective]s.',
  'cost': 1,
  'phase': 'D',
  'batmatch': true,
  'crews': [ 'bn' ]
}, {
  'key': 'S41',
  'name': 'Hunting Pack',
  'text': 'All [Henchmen] in your [Crew] gain the [Fast] [Trait].',
  'cost': 1,
  'phase': '?',
  'batmatch': true,
  'crews': [ 'gg' ]
}]
