const mongoose = require('mongoose');


const results = mongoose.Schema({
    player1: {
        type:String,
        require : true
    },
    player2: {
        type:String,
        require : true
    },
    player3: {
        type:String,
        require : true
    },
    player4:{
        type:String,
        require : true
    },
    result:{
        type: String
    }
})  

//creating collection
const createDoc = mongoose.model("RPSdata", results);

module.exports = createDoc;