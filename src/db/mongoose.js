const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO , {
    connectTimeoutMS:60000,
    autoCreate: false
});



