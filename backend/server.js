const app = require("./app");
const db = require("./config/Database");

require('dotenv').config({path:"backend/config/.env"});

app.listen(process.env.PORT, () => {
    console.log(`Server listening on ${process.env.PORT}`);
    db();
});