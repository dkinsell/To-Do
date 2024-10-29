const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});