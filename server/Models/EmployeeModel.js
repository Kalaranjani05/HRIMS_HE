const mongoose = require('mongoose')

    const LoginSchema = new mongoose.Schema({
        email: {
            type: String,
            required: true  
        },
        password: {
            type: String,
            required: true 
        },
        resetToken: {
            type: String,    
        },
        expiryresetToken: {
            type: Date,     
        }
    });
    

const Employee = new mongoose.model('Employee',LoginSchema)

module.exports = Employee;