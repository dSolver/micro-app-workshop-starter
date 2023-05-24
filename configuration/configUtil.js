const dotenv = require('dotenv');
dotenv.config();


module.exports = {
    devPort: process.env.DEV_PORT ?? "4001",
    devHost: process.env.DEV_HOST ?? "localhost",
    buildStage: process.env.BUILD_STAGE ?? "local",
}