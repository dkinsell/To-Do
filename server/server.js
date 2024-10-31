const express = require('express');
const app = express();
app.use(express.json());
const toDoRoutes = require('./routes/toDoRoutes');
const PORT = process.env.PORT || 8080;

app.use('/', toDoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});