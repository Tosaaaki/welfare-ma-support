const express = require('express');

const { config, connectDB } = require('./config/config');



const app = express();
app.use(express.json());


// Simple route for health check
app.get('/', (req, res) => {
  res.send('API running');
});

connectDB();

app.listen(config.port, () => {
  console.log(`Server started on port ${config.port}`);

});
