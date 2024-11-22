const express = require('express');
const User = require('../models/userAuthModel')

const router = express.Router();

//Get request
router.get('/', async(req, res)=>{
    try {
        const user = await User.find();
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch user'})
    }
})

//Post request

router.post('/', async(req, res)=>{
    const {username, email, password, createdAt} = req.body

try {
    //Save the user collections
    const newUser = new User({
        username,
        email,
        password,
        createdAt
    })

    await newUser.save()
    res.status(201).json(newUser)
    
} catch (error) {
    res.status(400).json({error: 'Failed to create user', details: error.message});
}

})

module.exports = router
