$(document).ready(function() {
  
  var student1 = {
    'name' : 'lucas',
    'surname' : 'callister',
    'age' : 21
  }

  for (var key in student1) {
    // var listItem = $('.template li').clone();
    // listItem.append(key + ': ' + student1[key]);
    // $('.student .list-student').append(listItem);
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
      var listItem = $('.template li').clone();
      listItem.append(key + ': ' + studentArray[i][key]);
      $('.student .list-student').append(listItem);
      console.log(key, studentArray[i][key]);
    }
    $('.student .list-student').append('==========');
  }

  console.log('==========');

  var student6 = {
    'name' : '',
    'surname' : '',
    'age' : 0
  }

  for (var key in student6) {
    student6[key] = prompt('Insert ' + key);
    var listItem = $('.template li').clone();
    listItem.append(key + ': ' + student6[key]);
    $('.student .list-student').append(listItem);
    console.log(key, student6[key]);
  }
  // parseInt(student6['age']);

});
