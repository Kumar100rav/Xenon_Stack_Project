//Savving file to database
const Contact = require('../Models/contactinfo');

exports.saveContact = async (req, res) => {
    try{
        const {fname, lname, email, phone, message} = req.body;
        const contact = new Contact({
            fname,
            lname,
            email,
            phone,
            message
        });
        await contact.save();
        res.status(200).json({
            status: "OK",
            message: "Contact saved successfully"
        })

    }
    catch(err){
        console.log(err);
        res.status(500).json({
            status: "ERROR",
            message: "Internal server error"
        })
    }
}