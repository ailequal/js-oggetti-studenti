
var student1 = {
  'name' : 'lucas',
  'surname' : 'callister',
  'age' : 21
}

for (var key in student1) {
  $('.student p').append(student1[key] + ' ');
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
    console.log(key, studentArray[i][key]);
  }
}

// console.log(studentArray);
