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
    {
        toJSON: {
            virtuals: true
        }
    }
);

PublicationSchema.virtual("photo_url").get(function() {
    return `http://localhost:5000/files/${this.photo}`;
});

module.exports = model("Publication", PublicationSchema);
