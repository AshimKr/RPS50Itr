It is a rock-paper-scissors API using Nodejs.

API : /game/start 
  if you run this path it will return a JSON response with 50 iteration, Each type the player choice(as rock, paper, scissor) is randomly, And result is Calculated for each player   in respect to every oher player based on the choices made.
 


Rules -
● Paper beats Rock
● Rock beats Scissors
● Scissors beats Paper
1) All user input values are going to be generated via random numbers. No need
for a user input mechanism.
2) It will be a 4 player game.
3) Each player will randomly choose either of the three (Rock, Paper or
Scissors). Calculate the results for each player in respect to every
other player based on the choices made.
4) The above should be repeated 50 times.
5) Return a JSON response with the results of each iteration.


API : /game/start
  A demo output of this API is given below: 
  
  
  [
{
"_id": "612b26a92e53ebf5698c722f",
"player1": "Rock",
"player2": "Paper",
"player3": "Rock",
"player4": "Paper",
"result": "Draw",
"__v": 0
},
{
"_id": "612b26a92e53ebf5698c7231",
"player1": "Rock",
"player2": "Scissor",
"player3": "Rock",
"player4": "Paper",
"result": "PlayerFour",
"__v": 0
},
{
"_id": "612b26aa2e53ebf5698c7233",
"player1": "Paper",
"player2": "Paper",
"player3": "Scissor",
"player4": "Paper",
"result": "PlayerThree",
"__v": 0
},
{
"_id": "612b26aa2e53ebf5698c7235",
"player1": "Paper",
"player2": "Paper",
"player3": "Scissor",
"player4": "Paper",
"result": "PlayerThree",
"__v": 0
},
{
"_id": "612b26ab2e53ebf5698c7237",
"player1": "Scissor",
"player2": "Paper",
"player3": "Paper",
"player4": "Paper",
"result": "PlayerOne",
"__v": 0
},
{
"_id": "612b26ab2e53ebf5698c7239",
"player1": "Paper",
"player2": "Rock",
"player3": "Paper",
"player4": "Scissor",
"result": "PlayerFour",
"__v": 0
},
{
"_id": "612b26ab2e53ebf5698c723b",
"player1": "Paper",
"player2": "Paper",
"player3": "Scissor",
"player4": "Scissor",
"result": "Draw",
"__v": 0
},
{
"_id": "612b26ac2e53ebf5698c723d",
"player1": "Rock",
"player2": "Rock",
"player3": "Paper",
"player4": "Paper",
"result": "Draw",
"__v": 0
},
{
"_id": "612b26ac2e53ebf5698c723f",
"player1": "Rock",
"player2": "Scissor",
"player3": "Rock",
"player4": "Rock",
"result": "Draw",
"__v": 0
},
{
"_id": "612b26ad2e53ebf5698c7241",
"player1": "Rock",
"player2": "Rock",
"player3": "Rock",
"player4": "Rock",
"result": "Draw",
"__v": 0
},
{
"_id": "612b26ad2e53ebf5698c7243",
"player1": "Rock",
"player2": "Rock",
"player3": "Rock",
"player4": "Paper",
"result": "PlayerFour",
"__v": 0
},
{
"_id": "612b26ad2e53ebf5698c7245",
"player1": "Rock",
"player2": "Scissor",
"player3": "Rock",
"player4": "Rock",
"result": "Draw",
"__v": 0
},
{
"_id": "612b26ae2e53ebf5698c7247",
"player1": "Rock",
"player2": "Scissor",
"player3": "Rock",
"player4": "Paper",
"result": "PlayerFour",
"__v": 0
},
{
"_id": "612b26ae2e53ebf5698c7249",
"player1": "Scissor",
"player2": "Scissor",
"player3": "Scissor",
"player4": "Rock",
"result": "PlayerFour",
"__v": 0
},
{
"_id": "612b26af2e53ebf5698c724b",
"player1": "Scissor",
"player2": "Scissor",
"player3": "Rock",
"player4": "Scissor",
"result": "PlayerThree",
"__v": 0
},
{
"_id": "612b26af2e53ebf5698c724d",
"player1": "Scissor",
"player2": "Scissor",
"player3": "Rock",
"player4": "Paper",
"result": "PlayerThree",
"__v": 0
},
{
"_id": "612b26af2e53ebf5698c724f",
"player1": "Paper",
"player2": "Scissor",
"player3": "Scissor",
"player4": "Scissor",
"result": "Draw",
"__v": 0
},
{
"_id": "612b26b02e53ebf5698c7251",
"player1": "Paper",
"player2": "Paper",
"player3": "Scissor",
"player4": "Scissor",
"result": "Draw",
"__v": 0
},
{
"_id": "612b26b02e53ebf5698c7253",
"player1": "Rock",
"player2": "Scissor",
"player3": "Paper",
"player4": "Rock",
"result": "PlayerThree",
"__v": 0
},
{
"_id": "612b26b02e53ebf5698c7255",
"player1": "Paper",
"player2": "Paper",
"player3": "Scissor",
"player4": "Paper",
"result": "PlayerThree",
"__v": 0
},
{
"_id": "612b26b12e53ebf5698c7257",
"player1": "Rock",
"player2": "Scissor",
"player3": "Paper",
"player4": "Paper",
"result": "PlayerTwo",
"__v": 0
},
{
"_id": "612b26b12e53ebf5698c7259",
"player1": "Rock",
"player2": "Rock",
"player3": "Rock",
"player4": "Paper",
"result": "PlayerFour",
"__v": 0
},
{
"_id": "612b26b12e53ebf5698c725b",
"player1": "Paper",
"player2": "Rock",
"player3": "Scissor",
"player4": "Rock",
"result": "PlayerOne",
"__v": 0
},
{
"_id": "612b26b22e53ebf5698c725d",
"player1": "Rock",
"player2": "Paper",
"player3": "Scissor",
"player4": "Rock",
"result": "PlayerTwo",
"__v": 0
},
{
"_id": "612b26b22e53ebf5698c725f",
"player1": "Rock",
"player2": "Rock",
"player3": "Rock",
"player4": "Scissor",
"result": "Draw",
"__v": 0
},
{
"_id": "612b26b32e53ebf5698c7261",
"player1": "Paper",
"player2": "Scissor",
"player3": "Paper",
"player4": "Paper",
"result": "PlayerTwo",
"__v": 0
},
{
"_id": "612b26b32e53ebf5698c7263",
"player1": "Rock",
"player2": "Paper",
"player3": "Rock",
"player4": "Rock",
"result": "PlayerTwo",
"__v": 0
},
{
"_id": "612b26b32e53ebf5698c7265",
"player1": "Paper",
"player2": "Rock",
"player3": "Paper",
"player4": "Rock",
"result": "Draw",
"__v": 0
},
{
"_id": "612b26b32e53ebf5698c7267",
"player1": "Rock",
"player2": "Scissor",
"player3": "Rock",
"player4": "Scissor",
"result": "Draw",
"__v": 0
},
{
"_id": "612b26b42e53ebf5698c7269",
"player1": "Rock",
"player2": "Paper",
"player3": "Rock",
"player4": "Rock",
"result": "PlayerTwo",
"__v": 0
},
{
"_id": "612b26b42e53ebf5698c726b",
"player1": "Paper",
"player2": "Scissor",
"player3": "Rock",
"player4": "Rock",
"result": "PlayerOne",
"__v": 0
},
{
"_id": "612b26b52e53ebf5698c726d",
"player1": "Scissor",
"player2": "Paper",
"player3": "Paper",
"player4": "Paper",
"result": "PlayerOne",
"__v": 0
},
{
"_id": "612b26b52e53ebf5698c726f",
"player1": "Scissor",
"player2": "Scissor",
"player3": "Paper",
"player4": "Scissor",
"result": "Draw",
"__v": 0
},
{
"_id": "612b26b52e53ebf5698c7271",
"player1": "Paper",
"player2": "Rock",
"player3": "Rock",
"player4": "Paper",
"result": "Draw",
"__v": 0
},
{
"_id": "612b26b62e53ebf5698c7273",
"player1": "Rock",
"player2": "Paper",
"player3": "Rock",
"player4": "Rock",
"result": "PlayerTwo",
"__v": 0
},
{
"_id": "612b26b62e53ebf5698c7275",
"player1": "Rock",
"player2": "Paper",
"player3": "Scissor",
"player4": "Scissor",
"result": "PlayerOne",
"__v": 0
},
{
"_id": "612b26b72e53ebf5698c7277",
"player1": "Paper",
"player2": "Paper",
"player3": "Scissor",
"player4": "Scissor",
"result": "Draw",
"__v": 0
},
{
"_id": "612b26b72e53ebf5698c7279",
"player1": "Rock",
"player2": "Paper",
"player3": "Scissor",
"player4": "Rock",
"result": "PlayerTwo",
"__v": 0
},
{
"_id": "612b26b72e53ebf5698c727b",
"player1": "Rock",
"player2": "Scissor",
"player3": "Paper",
"player4": "Scissor",
"result": "PlayerOne",
"__v": 0
},
{
"_id": "612b26b82e53ebf5698c727d",
"player1": "Scissor",
"player2": "Paper",
"player3": "Rock",
"player4": "Scissor",
"result": "PlayerThree",
"__v": 0
},
{
"_id": "612b26b82e53ebf5698c727f",
"player1": "Scissor",
"player2": "Paper",
"player3": "Paper",
"player4": "Scissor",
"result": "Draw",
"__v": 0
},
{
"_id": "612b26b82e53ebf5698c7281",
"player1": "Paper",
"player2": "Scissor",
"player3": "Scissor",
"player4": "Scissor",
"result": "Draw",
"__v": 0
},
{
"_id": "612b26b92e53ebf5698c7283",
"player1": "Scissor",
"player2": "Paper",
"player3": "Rock",
"player4": "Scissor",
"result": "PlayerThree",
"__v": 0
},
{
"_id": "612b26b92e53ebf5698c7285",
"player1": "Scissor",
"player2": "Rock",
"player3": "Scissor",
"player4": "Paper",
"result": "PlayerTwo",
"__v": 0
},
{
"_id": "612b26b92e53ebf5698c7287",
"player1": "Rock",
"player2": "Rock",
"player3": "Rock",
"player4": "Rock",
"result": "Draw",
"__v": 0
},
{
"_id": "612b26ba2e53ebf5698c7289",
"player1": "Paper",
"player2": "Rock",
"player3": "Paper",
"player4": "Rock",
"result": "Draw",
"__v": 0
},
{
"_id": "612b26ba2e53ebf5698c728b",
"player1": "Scissor",
"player2": "Rock",
"player3": "Rock",
"player4": "Paper",
"result": "PlayerFour",
"__v": 0
},
{
"_id": "612b26bb2e53ebf5698c728d",
"player1": "Scissor",
"player2": "Rock",
"player3": "Scissor",
"player4": "Scissor",
"result": "PlayerTwo",
"__v": 0
},
{
"_id": "612b26bb2e53ebf5698c728f",
"player1": "Scissor",
"player2": "Paper",
"player3": "Paper",
"player4": "Scissor",
"result": "Draw",
"__v": 0
},
{
"_id": "612b26bc2e53ebf5698c7291",
"player1": "Rock",
"player2": "Scissor",
"player3": "Scissor",
"player4": "Scissor",
"result": "PlayerOne",
"__v": 0
},
{
"_id": "612b271f2e53ebf5698c7294",
"player1": "Rock",
"player2": "Rock",
"player3": "Scissor",
"player4": "Paper",
"result": "PlayerFour",
"__v": 0
},
{
"_id": "612b271f2e53ebf5698c7296",
"player1": "Rock",
"player2": "Scissor",
"player3": "Paper",
"player4": "Scissor",
"result": "PlayerOne",
"__v": 0
},
{
"_id": "612b271f2e53ebf5698c7298",
"player1": "Paper",
"player2": "Scissor",
"player3": "Scissor",
"player4": "Paper",
"result": "Draw",
"__v": 0
},
{
"_id": "612b27202e53ebf5698c729a",
"player1": "Paper",
"player2": "Scissor",
"player3": "Rock",
"player4": "Rock",
"result": "PlayerOne",
"__v": 0
},
{
"_id": "612b27202e53ebf5698c729c",
"player1": "Rock",
"player2": "Rock",
"player3": "Paper",
"player4": "Scissor",
"result": "PlayerThree",
"__v": 0
},
{
"_id": "612b27202e53ebf5698c729e",
"player1": "Paper",
"player2": "Scissor",
"player3": "Scissor",
"player4": "Rock",
"result": "PlayerFour",
"__v": 0
},
{
"_id": "612b27212e53ebf5698c72a0",
"player1": "Paper",
"player2": "Rock",
"player3": "Scissor",
"player4": "Rock",
"result": "PlayerOne",
"__v": 0
},
{
"_id": "612b27212e53ebf5698c72a2",
"player1": "Rock",
"player2": "Scissor",
"player3": "Scissor",
"player4": "Paper",
"result": "PlayerOne",
"__v": 0
},
{
"_id": "612b27222e53ebf5698c72a4",
"player1": "Scissor",
"player2": "Scissor",
"player3": "Paper",
"player4": "Paper",
"result": "Draw",
"__v": 0
},
{
"_id": "612b27222e53ebf5698c72a6",
"player1": "Scissor",
"player2": "Scissor",
"player3": "Scissor",
"player4": "Paper",
"result": "Draw",
"__v": 0
},
{
"_id": "612b27222e53ebf5698c72a8",
"player1": "Paper",
"player2": "Paper",
"player3": "Paper",
"player4": "Scissor",
"result": "PlayerFour",
"__v": 0
},
{
"_id": "612b27232e53ebf5698c72aa",
"player1": "Rock",
"player2": "Paper",
"player3": "Paper",
"player4": "Scissor",
"result": "PlayerFour",
"__v": 0
},
{
"_id": "612b27232e53ebf5698c72ac",
"player1": "Scissor",
"player2": "Scissor",
"player3": "Rock",
"player4": "Rock",
"result": "Draw",
"__v": 0
},
{
"_id": "612b27232e53ebf5698c72ae",
"player1": "Rock",
"player2": "Paper",
"player3": "Scissor",
"player4": "Paper",
"result": "PlayerThree",
"__v": 0
},
{
"_id": "612b27242e53ebf5698c72b0",
"player1": "Rock",
"player2": "Paper",
"player3": "Scissor",
"player4": "Scissor",
"result": "PlayerOne",
"__v": 0
},
{
"_id": "612b27242e53ebf5698c72b2",
"player1": "Rock",
"player2": "Paper",
"player3": "Scissor",
"player4": "Paper",
"result": "PlayerThree",
"__v": 0
},
{
"_id": "612b27242e53ebf5698c72b4",
"player1": "Paper",
"player2": "Paper",
"player3": "Scissor",
"player4": "Scissor",
"result": "Draw",
"__v": 0
},
{
"_id": "612b27252e53ebf5698c72b6",
"player1": "Paper",
"player2": "Rock",
"player3": "Paper",
"player4": "Scissor",
"result": "PlayerFour",
"__v": 0
},
{
"_id": "612b27252e53ebf5698c72b8",
"player1": "Paper",
"player2": "Scissor",
"player3": "Scissor",
"player4": "Rock",
"result": "PlayerFour",
"__v": 0
},
{
"_id": "612b27252e53ebf5698c72ba",
"player1": "Rock",
"player2": "Paper",
"player3": "Rock",
"player4": "Scissor",
"result": "PlayerTwo",
"__v": 0
},
{
"_id": "612b27262e53ebf5698c72bc",
"player1": "Rock",
"player2": "Scissor",
"player3": "Scissor",
"player4": "Rock",
"result": "Draw",
"__v": 0
},
{
"_id": "612b27262e53ebf5698c72be",
"player1": "Scissor",
"player2": "Paper",
"player3": "Paper",
"player4": "Scissor",
"result": "Draw",
"__v": 0
},
{
"_id": "612b27262e53ebf5698c72c0",
"player1": "Scissor",
"player2": "Rock",
"player3": "Rock",
"player4": "Rock",
"result": "Draw",
"__v": 0
},
{
"_id": "612b27272e53ebf5698c72c2",
"player1": "Rock",
"player2": "Rock",
"player3": "Rock",
"player4": "Scissor",
"result": "Draw",
"__v": 0
},
{
"_id": "612b27272e53ebf5698c72c4",
"player1": "Rock",
"player2": "Paper",
"player3": "Scissor",
"player4": "Scissor",
"result": "PlayerOne",
"__v": 0
},
{
"_id": "612b27282e53ebf5698c72c6",
"player1": "Paper",
"player2": "Rock",
"player3": "Rock",
"player4": "Paper",
"result": "Draw",
"__v": 0
},
{
"_id": "612b27282e53ebf5698c72c8",
"player1": "Paper",
"player2": "Scissor",
"player3": "Rock",
"player4": "Paper",
"result": "PlayerTwo",
"__v": 0
},
{
"_id": "612b27292e53ebf5698c72ca",
"player1": "Paper",
"player2": "Paper",
"player3": "Scissor",
"player4": "Scissor",
"result": "Draw",
"__v": 0
},
{
"_id": "612b27292e53ebf5698c72cc",
"player1": "Paper",
"player2": "Scissor",
"player3": "Rock",
"player4": "Scissor",
"result": "PlayerThree",
"__v": 0
},
{
"_id": "612b27292e53ebf5698c72ce",
"player1": "Scissor",
"player2": "Scissor",
"player3": "Paper",
"player4": "Paper",
"result": "Draw",
"__v": 0
},
{
"_id": "612b272a2e53ebf5698c72d0",
"player1": "Rock",
"player2": "Scissor",
"player3": "Rock",
"player4": "Rock",
"result": "Draw",
"__v": 0
},
{
"_id": "612b272a2e53ebf5698c72d2",
"player1": "Rock",
"player2": "Rock",
"player3": "Rock",
"player4": "Rock",
"result": "Draw",
"__v": 0
},
{
"_id": "612b272a2e53ebf5698c72d4",
"player1": "Rock",
"player2": "Paper",
"player3": "Scissor",
"player4": "Scissor",
"result": "PlayerOne",
"__v": 0
},
{
"_id": "612b272b2e53ebf5698c72d6",
"player1": "Scissor",
"player2": "Scissor",
"player3": "Scissor",
"player4": "Rock",
"result": "PlayerFour",
"__v": 0
},
{
"_id": "612b272b2e53ebf5698c72d8",
"player1": "Paper",
"player2": "Rock",
"player3": "Paper",
"player4": "Paper",
"result": "Draw",
"__v": 0
},
{
"_id": "612b272b2e53ebf5698c72da",
"player1": "Scissor",
"player2": "Paper",
"player3": "Rock",
"player4": "Rock",
"result": "PlayerTwo",
"__v": 0
},
{
"_id": "612b272c2e53ebf5698c72dc",
"player1": "Rock",
"player2": "Rock",
"player3": "Rock",
"player4": "Scissor",
"result": "Draw",
"__v": 0
},
{
"_id": "612b272c2e53ebf5698c72de",
"player1": "Scissor",
"player2": "Scissor",
"player3": "Rock",
"player4": "Rock",
"result": "Draw",
"__v": 0
},
{
"_id": "612b272d2e53ebf5698c72e0",
"player1": "Scissor",
"player2": "Scissor",
"player3": "Rock",
"player4": "Rock",
"result": "Draw",
"__v": 0
},
{
"_id": "612b272d2e53ebf5698c72e2",
"player1": "Scissor",
"player2": "Paper",
"player3": "Rock",
"player4": "Rock",
"result": "PlayerTwo",
"__v": 0
},
{
"_id": "612b272e2e53ebf5698c72e4",
"player1": "Scissor",
"player2": "Rock",
"player3": "Rock",
"player4": "Paper",
"result": "PlayerFour",
"__v": 0
},
{
"_id": "612b272e2e53ebf5698c72e6",
"player1": "Rock",
"player2": "Rock",
"player3": "Rock",
"player4": "Rock",
"result": "Draw",
"__v": 0
},
{
"_id": "612b272f2e53ebf5698c72e8",
"player1": "Rock",
"player2": "Rock",
"player3": "Rock",
"player4": "Rock",
"result": "Draw",
"__v": 0
},
{
"_id": "612b272f2e53ebf5698c72ea",
"player1": "Scissor",
"player2": "Paper",
"player3": "Scissor",
"player4": "Scissor",
"result": "Draw",
"__v": 0
},
{
"_id": "612b272f2e53ebf5698c72ec",
"player1": "Rock",
"player2": "Paper",
"player3": "Scissor",
"player4": "Paper",
"result": "PlayerThree",
"__v": 0
},
{
"_id": "612b27302e53ebf5698c72ee",
"player1": "Rock",
"player2": "Scissor",
"player3": "Rock",
"player4": "Paper",
"result": "PlayerFour",
"__v": 0
},
{
"_id": "612b27302e53ebf5698c72f0",
"player1": "Paper",
"player2": "Rock",
"player3": "Rock",
"player4": "Scissor",
"result": "PlayerOne",
"__v": 0
},
{
"_id": "612b27302e53ebf5698c72f2",
"player1": "Paper",
"player2": "Rock",
"player3": "Scissor",
"player4": "Rock",
"result": "PlayerOne",
"__v": 0
},
{
"_id": "612b27312e53ebf5698c72f4",
"player1": "Scissor",
"player2": "Rock",
"player3": "Rock",
"player4": "Scissor",
"result": "Draw",
"__v": 0
},
{
"_id": "612b27312e53ebf5698c72f6",
"player1": "Paper",
"player2": "Scissor",
"player3": "Rock",
"player4": "Paper",
"result": "PlayerTwo",
"__v": 0
}
]

