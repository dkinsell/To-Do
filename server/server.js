const express = require('express');
const app = express();
const toDoRoutes = require('./routes/toDoRoutes');
const PORT = process.env.PORT || 8080;
app.use(express.json());

app.use('/todo', toDoRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});