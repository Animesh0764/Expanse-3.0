const mongoose = require("mongoose");

// Create User schema
const UserSchema = new mongoose.Schema({
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
    },
    refreshToken:
    {
        type: [String],
    },
    accessToken:
    {
        type: [String],
    },
});

const Users = mongoose.model('Users', UserSchema);

module.exports = Users;