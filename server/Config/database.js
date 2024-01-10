const mongoose = require('mongoose');

const dbConnect=()=>mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log('Database Connected'))
.catch((err)=>
{console.log(err)
process.exit(1)});

module.exports=dbConnect;