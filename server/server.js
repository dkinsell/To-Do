const express = require('express');
const app = express();
const toDoRoutes = require('./routes/toDoRoutes');
app.use(express.json());
const PORT = process.env.PORT || 8080;

app.use('/', toDoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});