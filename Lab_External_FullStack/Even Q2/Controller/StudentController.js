// StudentController.js
const getStudents = (req, res) => {
  const students = [
    { id: 1, name: 'John Doe', age: 20, grade: 'A' },
    { id: 2, name: 'Jane Smith', age: 21, grade: 'B+' },
    { id: 3, name: 'Bob Johnson', age: 19, grade: 'A-' },
    { id: 4, name: 'Alice Brown', age: 22, grade: 'A+' },
    { id: 5, name: 'Charlie Wilson', age: 20, grade: 'B' }
  ];
  
  res.json(students);
};

module.exports = {
  getStudents
};