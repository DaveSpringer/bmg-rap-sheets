const traits = [
        {
            name: "Bat-Armor MK 1",
            phase: "Execute the plan",
            cost: "",
            rule: "Each time this [Character] receives a [Hit], after [Block]s, [Ping]s, and [Dodge]s; roll a die. On a result of 5+, discard the [Hit].",
            grants: []
        },
        {
            name: "Bat-Armor MK III",
            phase: "Execute the plan",
            cost: "",
            rule: "Each time this [Character] receives a [Hit], after [Block]s, [Ping]s, and [Dodge]s; roll a die. On a result of 5+, discard the [Hit]. If this [Character] makes a Special Attack: Sneak Attack, they may assign Melee [Hit]s to targets up to 3cm away.  All of these [Hit]s are considered Sneak Attacks.",
            grants: [],
        },
        {
            name: "Bat Cape",
            phase: "Execute the plan",
            cost: "1SC Passive",
            rule: "When this [Character] [Falls], they may spend 1 [SC] to avoid being [Knocked Down] and taking [Falling Damage].",
            grants: []
        },
        {
            name: "Batclaw",
            phase: "Execute the plan",
            cost: "1SC+1MC",
            rule: "Spend [1SC+1MC] to make a [Batclaw] movement. [See BMG pg 56]",
            grants: []
        },
        {
            name: "Close Combat Master",
            phase: "Execute the plan",
            cost: "",
            rule: "When fighting [Unarmed], the [Character] may reroll any number of [To [Hit]] dice.",
            grants: []
        },
        {
            name: "Detective",
            phase: "Execute the plan",
            cost: "",
            rule: "For each [Detective] [Character] in your [Crew], you may cancel an [Opponent]'s [Pass] at the beginning of each [Round]. [Detective]s my reroll [Riddle Objectives] once.",
            grants: []
        },
        {
            name: "Martial Artist",
            phase: "Execute the plan",
            cost: "",
            rule: "This [Character] ignores [Outnumbered].",
            grants: []
        },
        {
            name: "Reinforced Gloves",
            phase: "Execute the plan",
            cost: "",
            rule: "This [Character]'s [Unarmed Attacks] produce 2 [Stun Damage].",
            grants: []
        },
        {
            name: "Sustained Defenses",
            phase: "Execute the plan",
            cost: "",
            rule: "This [Character] receives 3 [Defense Dice] for every 2 [DC] spend [Defending] an [Attack].",
            grants: []
        }
    ]
console.log(JSON.stringify(traits))
