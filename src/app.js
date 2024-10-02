const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 4000;

var authRouter = require('./routes/auth');

app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);

app.listen(PORT, (error) =>{
        if(!error)
            console.log("FoliumBE is listening on port "+ PORT)
    else
        console.log("Error occurred, server can't start", error);
    }
);