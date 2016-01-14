$(document).ready(function(){
count = 100;

  $(".btn-primary").click(function() {
    for(i = 1; i <= 100; i++) {
      count = count - 1;
      $("div.jumbotron").append("<p>" + count + " bottles of beer on the wall." + "</p>");
    } if (count <= 0) {
      $(".btn-primary").hide();
      $(".btn-success").show();
    }
  });

  $(".btn-success").click(function(){
    window.location.reload();
  });
});
