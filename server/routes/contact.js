const router = require("express").Router();
const ContactUs = require("../models/contact-us");

router.post('/', async (req,res) => {
    const{email, message} = req.body;

    if(!res || !message)
        res.status(200).json({ message: true });

    try {
        await ContactUs.create({
            email : email,
            message : message,
        })

        res.status(201).json({ message: false });
    } catch(err) {
        console.log(err);
        res.status(500).json({ message: true });
    }
})

module.exports = router;