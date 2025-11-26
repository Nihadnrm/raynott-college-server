const Contacts = require("../modals/Contactmodal")


exports.addcontact = async (req, res) => {
    try {
        const { name, email, message } = req.body
        const newcontact = new Contacts({ name, email, message })
        await newcontact.save()
        res.status(200).json(newcontact)

    } catch (err) {
        res.status(500).json(err)
        console.log(err);

    }

}

exports.getcontact = async (req, res) => {
    try {
        const response = await Contacts.find()
        res.status(200).json(response)
    } catch (err) {
        res.status(500).json(err)
        console.log(err);

    }


}