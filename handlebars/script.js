$(document).ready(function() {

  $(document).on('click', '.button', function() {
    console.log($('.input').val());
  });

  // var source = document.getElementById("template").innerHTML;
  var source = $('#template').html();
  var template = Handlebars.compile(source);

  var context = {
    reply : 'hello world ciao mondo'
  };

  var html = template(context);

  $('.container').append(html);

});
