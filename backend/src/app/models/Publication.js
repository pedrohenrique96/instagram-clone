const { Schema, model } = require("mongoose");

const PublicationSchema = new Schema(
    {
        photo: String,

        description: {
            type: String,
            maxlength: 200,
            minlength: 5
        },

        author: [
            {
                type: Schema.Types.ObjectId,
                ref: "User"
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
