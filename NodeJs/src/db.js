const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/AngularAPP',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}).then(db => console.log('BD conectada'))
    .catch((err) => console.error(err));