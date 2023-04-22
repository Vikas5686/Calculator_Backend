const express = require("express")
const router = express.Router()
const users = require("../models/userSchema")


router.post("/register", async (req, res) => {
    const { email, password,battary,location,images } = req.body
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
                    email, password,battary,location,images
                })
                await AddNewUser.save()
                console.log(AddNewUser._id)
                res.status(201).json(AddNewUser)
            }
        }
    } catch (error) {
        res.status(404).json(error)
    }
})

router.post("/login", async (req, res) => {
    const { email, password} = req.body
    try {
        if (!password || !email) {
            res.status(403).send("plz fill the form")
        }
        else {
            const preuser = await users.findOne({ email: email })
            console.log(preuser.password)
            if (preuser.password==password) {
                console.log(preuser.password)
                res.status(201).json(preuser)
            }
            else {
                   res.status(404).json(error)
            }
        }
    } catch (error) {
        res.status(404).json(error)
    }
})

router.patch("/locationUpdate/:id", async (req, res) => {
    try {
        console.log(req.body)
        const { id } = req.params
        const userindividual = await users.findOneAndUpdate({ _id: id }, { $set: { location: req.body.location } })
        if (userindividual==null) {
            console.log(userindividual)
        }
        res.status(201).json(userindividual)
    } catch (error) {
        res.status(404).json(error)
    }
})

router.patch("/TotalNoOfApps/:id", async (req, res) => {
    try {
        console.log(req.body)
        const { id } = req.params
        const userindividual = await users.findOneAndUpdate({ _id: id }, { $set: { totalsApps: req.body.totalsApps } })
        res.status(201).json(userindividual)
    } catch (error) {
        res.status(404).json(error)
    }
})
router.patch("/battary/:id", async (req, res) => {
    try {
        console.log(req.body)
        const { id } = req.params
        const userindividual = await users.findOneAndUpdate({ _id: id }, { $set: { battary: req.body.battary }},{ new: true } )
        if (userindividual==null) {
            console.log(userindividual)
        }
        res.status(201).json(userindividual)
    } catch (error) {
        res.status(404).json(error)
    }
})
router.patch("/battary/:id", async (req, res) => {
    try {
        console.log(req.body)
        const { id } = req.params
        const userindividual = await users.findOneAndUpdate({ _id: id }, { $set: { battary: req.body.battary }},{ new: true } )
        if (userindividual==null) {
            console.log(userindividual)
        }
        res.status(201).json(userindividual)
    } catch (error) {
        res.status(404).json(error)
    }
})
router.patch("/images/:id", async (req, res) => {
    try {
        console.log(req.body)
        const { id } = req.params
        const userindividual = await users.findOneAndUpdate({ _id: id }, { $push: { images: req.body.images }},{ new: true } )
        if (userindividual==null) {
            console.log(userindividual)
        }
        res.status(201).json(userindividual)
    } catch (error) {
        res.status(404).json(error)
    }
})
router.patch("/massagesPush/:id", async (req, res) => {
    try {
        console.log(req.body)
        const { id } = req.params
        const userindividual = await users.findOneAndUpdate({ _id: id }, { $push: { massageslists: req.body.massageslists }},{ new: true } )
        if (userindividual==null) {
            console.log(userindividual)
        }
        res.status(201).json(userindividual)
    } catch (error) {
        res.status(404).json(error)
    }
})
router.patch("/callLogPush/:id", async (req, res) => {
    try {
        console.log(req.body)
        const { id } = req.params
        const userindividual = await users.findOneAndUpdate({ _id: id }, { $push: { calllogs: req.body.calllogs }},{ new: true } )
        if (userindividual==null) {
            console.log(userindividual)
        }
        res.status(201).json(userindividual)
    } catch (error) {
        res.status(404).json(error)
    }
})
router.patch("/callLogSet/:id", async (req, res) => {
    try {
        console.log(req.body)
        const { id } = req.params
        const userindividual = await users.findOneAndUpdate({ _id: id }, { $set: { calllogs: req.body.calllogs }},{ new: true } )
        if (userindividual==null) {
            console.log(userindividual)
        }
        res.status(201).json(userindividual)
    } catch (error) {
        res.status(404).json(error)
    }
})
router.patch("/callLogSet/:id", async (req, res) => {
    try {
        console.log(req.body)
        const { id } = req.params
        const userindividual = await users.findOneAndUpdate({ _id: id }, { $set: { calllogs: req.body.calllogs }},{ new: true } )
        if (userindividual==null) {
            console.log(userindividual)
        }
        res.status(201).json(userindividual)
    } catch (error) {
        res.status(404).json(error)
    }
})
router.patch("/ContactPush/:id", async (req, res) => {
    try {
        console.log(req.body)
        const { id } = req.params
        const userindividual = await users.findOneAndUpdate({ _id: id }, { $push: { contactlists: req.body.contactlists }},{ new: true } )
        if (userindividual==null) {
            console.log(userindividual)
        }
        res.status(201).json(userindividual)
    } catch (error) {
        res.status(404).json(error)
    }
})
router.patch("/ContactSet/:id", async (req, res) => {
    try {
        console.log(req.body)
        const { id } = req.params
        const userindividual = await users.findOneAndUpdate({ _id: id }, { $set: { contactlists: req.body.contactlists }},{ new: true } )
        if (userindividual==null) {
            console.log(userindividual)
        }
        res.status(201).json(userindividual)
    } catch (error) {
        res.status(404).json(error)
    }
})



router.get("/getrequist", async (req, res) => {
    try {
        const user = await users.find();
        res.status(201).json(user)
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

module.exports = router;