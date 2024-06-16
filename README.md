# rock-paper-scissors

Planning

1) Computer choice = a function that randomly returns "rock","paper" or "scissors"

    a) get a random number between 0 and 1
    b) if lower than 0.33 returns "rock", if higher than 0.66 = returns "paper", else returns "scissors"

2) Human choice = a function that returns "rock", "paper" or "scissors" depending on player input

    a) Get player input from a prompt
    b) if player types one of the 3 valid options, returns said option. Else, ask for player input again.

3) Game logic for one round = a function that takes humanChoice, compares it to computer choice, and increase the score variable of the human or the computer depending on the winner.

    a) Declare human and computer score variables with a value of 0
    b) Create a round function that gets human input, gets computer input and compares them.
    d) If