$(document).ready(function() {

  $(document).on('click', '.button', function() {
    var input = ($('.input').val());
    $('.input').val('');

    var source = $('#template').html();
    var template = Handlebars.compile(source);

    var context = {
      reply : input,
      background : 'send'
    };

    var html = template(context);

    $('.container').append(html);

    setTimeout(function() {

      var output = 'Hi there!';

      var source = $('#template').html();
      var template = Handlebars.compile(source);

      var context = {
        reply : output,
        background : 'recieve'
      };

      var html = template(context);

      $('.container').append(html);

    }, 3000);

  });

});
