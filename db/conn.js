const { mongoose } = require('mongoose');
// const db="mongodb+srv://vs5686377:vs5686377@cluster0.dbp1ygs.mongodb.net/ProjectforNotes?retryWrites=true&w=majority"
const db="mongodb+srv://asuscode:asuscode@cluster0.gjyfr9c.mongodb.net/mistafavrite?retryWrites=true&w=majority"

mongoose.connect(db,{
    useUnifiedTopology:true
}).then(()=>console.log("connect start")).catch((e)=>console.log(e.message))