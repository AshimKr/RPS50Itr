const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ashim:27446@cluster0.ur3z3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true,
    // useFindAndModify:false

})
.then(()=>{console.log("connection is successful")}).catch((e)=>{
    console.log("smtng is wrong",e);
})