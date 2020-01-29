
var student = {
  'name' : 'lucas',
  'surname' : 'callister',
  'age' : 21
}

for (var key in student) {
  $('.student p').append(student[key] + ' ');
  console.log(student[key]);
}

// console.log(student);
