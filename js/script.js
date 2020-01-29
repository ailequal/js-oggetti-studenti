
var student1 = {
  'name' : 'lucas',
  'surname' : 'callister',
  'age' : 21
}

for (var key in student1) {
  $('.student .student1').append(student1[key] + ' ');
  console.log(key, student1[key]);
}

console.log('==========');

var studentArray = [
  student1,
  student2 = {
    'name' : 'rufus',
    'surname' : 'curly',
    'age' : 23
  },
  student3 = {
    'name' : 'paolo',
    'surname' : 'rossi',
    'age' : 31
  },
  student4 = {
    'name' : 'simon',
    'surname' : 'green',
    'age' : 25
  },
  student5 = {
    'name' : 'marge',
    'surname' : 'silc',
    'age' : 19
  }
]

for (var i = 0; i < studentArray.length; i++) {
  for (var key in studentArray[i]) {
    // $('.student .student' + i + 2).append(studentArray[i][key] + ' ');
    console.log(key, studentArray[i][key]);
  }
}

console.log('==========');

var student6 = {
  'name' : '',
  'surname' : '',
  'age' : 0
}

for (var key in student6) {
  student6[key] = prompt('Insert ' + key);
  console.log(key, student6[key]);
}
// parseInt(student6['age']);
