$(document).ready(function() {

  var studentX = {
    'name' : 'lucas',
    'surname' : 'callister',
    'age' : 21
  }

  for (var key in studentX) {
    console.log(key, studentX[key]);
  }

  console.log('==========');

  var studentArray = [
    studentX,
    {
      'name' : 'rufus',
      'surname' : 'curly',
      'age' : 23
    },
    {
      'name' : 'paolo',
      'surname' : 'rossi',
      'age' : 31
    },
    {
      'name' : 'simon',
      'surname' : 'green',
      'age' : 25
    },
    {
      'name' : 'marge',
      'surname' : 'silc',
      'age' : 19
    }
  ]

  for (var i = 0; i < studentArray.length; i++) {
    var student = studentArray[i];
    console.log(studentArray[i].name, studentArray[i].surname);
  }

  console.log('==========');

  var studentNew = {
    'name' : prompt('Insert student name'),
    'surname' : prompt('Insert student surname'),
    'age' : parseInt(prompt('Insert student age'))
  }

  for (var key in studentNew) {
    console.log(key, studentNew[key]);
  }

});
