const { Schema, model } = require("mongoose");
const bcrypt = require('bcryptjs')

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },

        name: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true,
            unique: true
        },

        password: {
            type: String,
            required: true
        },

        bio: {
            type: String
        },

        followers: [
            {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        ],

        following: [
            {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        ]
    },
    {
        timestamps: true
    }
);

UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash

    next()
})

module.exports = model('User', UserSchema)
