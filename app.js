require("./src/DB/conn");
const express = require("express");
const createDoc = require("./src/Model/schema");
const app = express();

const port = process.env.PORT || 5500;

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.get("/game", (req, res) => {
    res.send("Hello I'm Ashim ");
});



// 1:Rock, 2:Paper, 3:Scissor
app.get("/game/start", async (req, res) => {

    for (let i = 0; i < 50; i++) {
        let playerOne = Math.floor(Math.random() * 3) + 1;
        let playerTwo = Math.floor(Math.random() * 3) + 1;
        let playerThree = Math.floor(Math.random() * 3) + 1;
        let playerFour = Math.floor(Math.random() * 3) + 1;

        // console.log(playerOne, playerTwo,playerThree,playerFour);

        if (playerOne === 1) {
            playerOne = "Rock";
        } else if (playerOne === 2) {
            playerOne = "Paper";
        } else {
            playerOne = "Scissor";
        }

        if (playerTwo === 1) {
            playerTwo = "Rock";
        } else if (playerTwo === 2) {
            playerTwo = "Paper";
        } else {
            playerTwo = "Scissor";
        }

        if (playerThree === 1) {
            playerThree = "Rock";
        } else if (playerThree === 2) {
            playerThree = "Paper";
        } else {
            playerThree = "Scissor";
        }

        if (playerFour === 1) {
            playerFour = "Rock";
        } else if (playerFour === 2) {
            playerFour = "Paper";
        } else {
            playerFour = "Scissor";
        }

        // res.send(` ${playerOne} ${playerTwo} ${playerThree} ${playerFour}`);
        // console.log(playerOne, playerTwo, playerThree, playerFour);

        let p1 = 0,
            p2 = 0,
            p3 = 0,
            p4 = 0;
        let winner = "Draw";

        //Logic for Player One
        if (playerOne === "Rock") {
            if (playerTwo === "Scissor") {
                p1 = p1 + 1;
            }
            if (playerThree === "Scissor") {
                p1 = p1 + 1;
            }
            if (playerFour === "Scissor") {
                p1 = p1 + 1;
            }
        }
        if (playerOne === "Paper") {
            if (playerTwo === "Rock") {
                p1 = p1 + 1;
            }
            if (playerThree === "Rock") {
                p1 = p1 + 1;
            }
            if (playerFour === "Rock") {
                p1 = p1 + 1;
            }
        }
        if (playerOne === "Scissor") {
            if (playerTwo === "Paper") {
                p1 = p1 + 1;
            }
            if (playerThree === "Paper") {
                p1 = p1 + 1;
            }
            if (playerFour == "Paper") {
                p1 = p1 + 1;
            }
        }

        //Logic for Player Two
        if (playerTwo === "Rock") {
            if (playerOne === "Scissor") {
                p2 = p2 + 1;
            }
            if (playerThree === "Scissor") {
                p2 = p2 + 1;
            }
            if (playerFour === "Scissor") {
                p2 = p2 + 1;
            }
        }
        if (playerTwo === "Paper") {
            if (playerOne === "Rock") {
                p2 = p2 + 1;
            }
            if (playerThree === "Rock") {
                p2 = p2 + 1;
            }
            if (playerFour === "Rock") {
                p2 = p2 + 1;
            }
        }
        if (playerTwo === "Scissor") {
            if (playerOne === "Paper") {
                p2 = p2 + 1;
            }
            if (playerThree === "Paper") {
                p2 = p2 + 1;
            }
            if (playerFour == "Paper") {
                p2 = p2 + 1;
            }
        }

        //Logic for Player Three
        if (playerThree === "Rock") {
            if (playerTwo === "Scissor") {
                p3 = p3 + 1;
            }
            if (playerOne === "Scissor") {
                p3 = p3 + 1;
            }
            if (playerFour === "Scissor") {
                p3 = p3 + 1;
            }
        }
        if (playerThree === "Paper") {
            if (playerTwo === "Rock") {
                p3 = p3 + 1;
            }
            if (playerOne === "Rock") {
                p3 = p3 + 1;
            }
            if (playerFour === "Rock") {
                p3 = p3 + 1;
            }
        }
        if (playerThree === "Scissor") {
            if (playerTwo === "Paper") {
                p3 = p3 + 1;
            }
            if (playerOne === "Paper") {
                p3 = p3 + 1;
            }
            if (playerFour == "Paper") {
                p3 = p3 + 1;
            }
        }

        //Logic for Player Four
        if (playerFour === "Rock") {
            if (playerTwo === "Scissor") {
                p4 = p4 + 1;
            }
            if (playerThree === "Scissor") {
                p4 = p4 + 1;
            }
            if (playerOne === "Scissor") {
                p4 = p4 + 1;
            }
        }
        if (playerFour === "Paper") {
            if (playerTwo === "Rock") {
                p4 = p4 + 1;
            }
            if (playerThree === "Rock") {
                p4 = p4 + 1;
            }
            if (playerOne === "Rock") {
                p4 = p4 + 1;
            }
        }
        if (playerFour === "Scissor") {
            if (playerTwo === "Paper") {
                p4 = p4 + 1;
            }
            if (playerThree === "Paper") {
                p4 = p4 + 1;
            }
            if (playerOne === "Paper") {
                p4 = p4 + 1;
            }
        }
        // let p1s = p1, p2s=p2, p3s=p3,

        if (p1 > p2 && p1 > p3 && p1 > p4) {
            winner = "PlayerOne";
        }
        if (p2 > p1 && p2 > p3 && p2 > p4) {
            winner = "PlayerTwo";
        }
        if (p3 > p1 && p3 > p2 && p3 > p4) {
            winner = "PlayerThree";
        }
        if (p4 > p1 && p4 > p3 && p4 > p2) {
            winner = "PlayerFour";
        }

        // console.log("PlayerOne Score", p1);
        // console.log("PlayerTwo Score", p2);
        // console.log("PlayerThree Score", p3);
        // console.log("PlayerFour Score", p4);
        // console.log("Winner is : ", winner);

        const itrn = new createDoc({
            player1: playerOne,
            player2: playerTwo,
            player3: playerThree,
            player4: playerFour,
            result: winner
        })

        const saveitrn = await itrn.save();
        console.log(saveitrn);

    } 
    const respn = await createDoc.find();
    res.send(respn);  
});

app.listen(port, () => {
    console.log("listing in port : 5500");
});
