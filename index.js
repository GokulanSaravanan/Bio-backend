const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const BioformModel = require('./models/Bioform');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/bioform", { useNewUrlParser: true })
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });

app.post("/login",(req,res)=>{
    const {email,password} = req.body;
    BioformModel.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password===password){
                res.json("Success")
            }
            else{
                res.json("The password is incorrect")
            }
        } else{
            res.json("No record existed")
        }
    })
})

app.post('/register', (req, res) => {
    BioformModel.create(req.body)
        .then(bioform => res.json(bioform))
        .catch(err => res.json(err));
});

app.listen(3001, () => {
    console.log("Server is coming");
});
