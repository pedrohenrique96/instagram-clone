const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            minlength: 1
        },

        name: {
            type: String,
            required: true,
            minlength: 2
        },

        email: {
            type: String,
            required: true,
            unique: true,
            minlength: 5
        },

        password: {
            type: String,
            required: true,
            minlength: 5
        },

        bio: {
            type: String,
            minlength: 5
        },

        avatar: {
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

// UserSchema.pre("save", async function(next) {
//     const hash = await bcrypt.hash(this.password, 10);
//     this.password = hash;

//     next();
// });

module.exports = model("User", UserSchema);
