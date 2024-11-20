# rock-paper-scissors
To start creating my Rock-Paper_Scissors game.
I designed my interface i chosed to go with an ipad design.
i have a have player score, computer score and round all set to 0.
I have a display div which will display winners and other messages that needs to be displayed.
last i have buttons which are label with rock paper and Scissors at the player options.

step 2: 
i created a get getcomputerChoice function this gets any option within the choice variable. i used math.floor and math.random to generate a random number not more than the length of the choice variable which has 3 choices Rock, Paper and Scissors so i used choices.length.

after the number is generated i the getcomputerchoice then returns choice using the genrated number as the index of the randomly selected choice .

step 2: 
I wil be creating a get getHumanChoice function.
Rhis function will will have a parameter that will receive a value via a click of the buttons. if rock button is click then the value passed to the function will be Rock.

I added an eventlistener to the rock paper and scissors but if andy of them are clicked the gethumanchoice function is called and depending on the button clicked the gethumanchoice will be given that value. so if rock button is clicked then value passed as the argument of the gethumenchoice will be rock.

step 3: 
i built a playround function which has a parameter called button. the getHumanChoice alse has a parementer called button. within my playRound function i a have a variable called playerSelection which the value is getHumanchoice with the button as an argument. Remember that if Rock button is click then the value that will be pass to the functions will be rock. this value will be then used in my logic to calculate the winner.