const { Schema, model } = require("mongoose");

const PublicationSchema = new Schema(
    {
        photo: {
            type: String,
            required: true
        },

        description: {
            type: String,
            maxlength: 200,
            minlength: 10
        },

        author: [
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

module.exports = model("Publication", PublicationSchema);
