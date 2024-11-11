const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())
app.use(express.json());
const toDoRoutes = require('./routes/toDoRoutes');

const PORT = 8080;

app.use('/', toDoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
})