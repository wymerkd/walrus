$(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
  });

  $(".clickable2").click(function() {
    $("#icecream-showing").slideToggle();
    $("#icecream-hidden").slideToggle();
  });

  $(".clickable21").click(function() {
    alert("OM NOM NOM");
    $("#icecream-showing").slideToggle();
    $("#icecream-hidden").slideToggle();
  });

  $(".clickable3").click(function() {
    $("#learn-showing").slideToggle();
    $("#learn-hidden").slideToggle();
  });

  $("button#dark").click(function() {
    $("body").addClass("dark-background");
    $("body").addClass("light-text");
  });

  $("button#light").click(function() {
    $("body").removeClass("dark-background");
    $("body").removeClass("light-text");
  });

  $(".idk").click(function() {
    $("#hide").addClass("boxStyle");
  });

  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!");

    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });


  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Adios!</li>");
    $("ul#webpage").prepend("<li>See yaaa!");
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>You stop copying me!");
  });



});
