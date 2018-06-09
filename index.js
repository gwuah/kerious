const mongoose = require('mongoose');
    require('dotenv').load({ path: '.env' });

    mongoose.Promise = global.Promise;

    // load the right config if in production
    if (process.env.MODE == "production") {
        mongoose.connect(process.env.MONGODB_URI);
    } else {
        mongoose.connect(process.env.LOCAL_MONGO_URI);
    }

    mongoose.connection.on('error', async (err) => {
    console.error(err);
    console.log('%s MongoDB connection error. Please make sure MongoDB is running.');
    process.exit();
    });

    // just to restart app o

    // Start our app!
    const app = require('./app');

    app.set('port', process.env.PORT || 7777);

    const server = app.listen(app.get('port'), () => {
        console.log(`Main server running on port ${server.address().port}`)
    });