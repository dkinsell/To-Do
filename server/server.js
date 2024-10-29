const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.json());
const toDoRoutes = require('./routes/toToRoutes');

app.use('/', toDoRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});