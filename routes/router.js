const express = require("express")
const router = express.Router()
const users = require("../models/userSchema")




router.post("/register", async (req, res) => {
    const { email, password } = req.body
    try {
        if (!password || !email) {
            res.status(403).send("plz fill the form")
        } else {
            const preuser = await users.findOne({ email: email })
            console.log(preuser)
            if (preuser) {
                res.status(404).send("already exist")
            }
            else {
                const AddNewUser = new users({
                     email,password
                })
                await AddNewUser.save()
                console.log(AddNewUser._id)
                
                res.status(201).json(AddNewUser._id)
            }
        }
    } catch (error) {
        res.status(404).json(error)
    }
})

router.get("/getUser/:id", async (req, res) => {
    try {
        console.log(req.params)
        const { id } = req.params
        const userindividual = await users.find({ _id: id })
        console.log(userindividual)
        res.status(201).json(userindividual)
    } catch (error) {
        console.log("djflsfj")
        res.status(404).json(error)
    }
})
router.patch("/OneimagePush/:id", async (req, res) => {
    try {
        const { id } = req.params
        let allitem;
        req.body.forEach(async function(item) {
            allitem+=item.images
          });
        const userindividual = await users.findOneAndUpdate({ _id: id }, { $set: { images: allitem } })
            console.log(userindividual)
        res.status(201).json(userindividual)
    } catch (error) {
        res.status(404).json(error)
    }
})
router.patch("/ArrayimagePush/:id", async (req, res) => {
    try {
        const { id } = req.params
         req.body.forEach(async function(item) {
            const userindividual = await users.findOneAndUpdate({ _id: id }, { $push: { images: item.images } })
            console.log(userindividual)
          });
            console.log(userindividual)
        res.status(201).json(userindividual)
    } catch (error) {
        res.status(404).json(error)
    }
})

router.delete("/delete", async (req, res) => {
    try {
        const user = await users.deleteMany();
        res.status(201).json(user)
    } catch (error) {
        res.status(404).json(error)
    }
})
router.get("/getrequist", async (req, res) => {
    try {
        const user = await users.find().sort({ "Score": -1 });
        res.status(201).json(user)
    } catch (error) {
        res.status(404).json(error)
    }
})

module.exports = router;