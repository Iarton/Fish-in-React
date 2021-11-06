# Fishing for fun

This project is made by me just because i want to code it, it is a fishing mini game based on my homebrew RPG system.

## Rules

Fishing is a simple three steep game:

### - Find a Location [70%];

    The player roll 1d20 plus Intelligence or Perception, which one is higher, if the result is less than 6 and
    even, the fisherman thinks he find a nice spot, if it is less than 6 and odd, he believes it is a bad spot. If is between 6 and 10
    whe doenst know if it  is good or not. If is between 11 and 15 he knows the quality of the spot.
    If is between 16 and 19, he knows what species can be found in there.
    If is 20 or more, he finds the best possible spot.

### - Cast the Line; [100%]

    The Player rolls 1d20 plus their fishing skill, plus location, plus Strength, expertise or agility, the highest of the three.
    Result <6: 20 minutes lost and the player must recast the line
    6>= Result <=10: Small fish;
    11>= Result <=15: Medium fish;
    16>= Result <=19: A Big one;
    20>= Result: A Massive boi;

    Now the fish is alread bitting the bait, so we need to know their rarity.
    The player rolls 1d20 plus fishing skill, plus bait, if any.
    Result <4: Literal trash, from an old boot to a worn out useless scroll, to even a branch
    5>= Result <=11: A common fish;
    12>= Result <=14: An uncommon one;
    15>= Result <=17: Rare one;
    18>= Result <=19: Epic;
    20>= Result: Legendary!;

### - The Fight between the fish and the Man;

    Best of five between the fish and the player, the hardest and best part:
    First is calculated fish's strength, using the list below:

        Size:
            - Small: -1
            - Medium: +2
            - Big: +5
            - Massive: +8
        Rarity:
            - Common: +5
            - Uncommon: +6
            - Rare: +7
            - Epic: +8
            - Legendary: +9
    Now every round, the Player will roll 1d20 + Line + Fishing Skill against the fish total strength
    The first to win three rounds win, if the player wins, he catches the fish, if the fish wins, the player lost 20 minutes for nothing.
    Every time the player wins, the fish loses 1 Strength

## - To do;

    - Add all rules as written [55%]
    - Beautify everything [10%]
    - Add back-end [0%]
    - Make more modular [0%]
    - Make more interactive [0%]
