const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/cloneInsta", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
});