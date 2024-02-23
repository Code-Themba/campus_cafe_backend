const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestampes: true
});

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    } else {
        this.password = await bcrypt.hash(this.password, await bcrypt.genSalt(10));
    }

})

const User = mongoose.model('users', UserSchema);

module.exports = User;