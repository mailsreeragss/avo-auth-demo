const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const dotenv = require('dotenv');
dotenv.config();
const routes = require('./routes/index')

// require('./config/db.js');

const app = express();

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
	res.send('Sample Web API Testing...');
});
app.use('/api', routes);
app.listen(8082, () => {
	console.log('Server is running at 8082');
});
