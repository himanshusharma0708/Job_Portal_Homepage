const express = require('express');
const StudentController = require('./controllers/StudentController');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/students', StudentController.getStudents);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});