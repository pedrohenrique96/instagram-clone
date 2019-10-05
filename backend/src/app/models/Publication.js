const { Schema, model } = require("mongoose");

const PublicationSchema = new Schema(
    {
        photo: String,
        url: String,

        description: {
            type: String,
            maxlength: 200,
            minlength: 1
        },

        author: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
                required: true
            }
        ]
    },
);

module.exports = model("Publication", PublicationSchema);
