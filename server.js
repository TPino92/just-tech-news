const expiress = require('express');
const routes = require('./routes');
const sequqlize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.user(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db & server
sequqlize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});