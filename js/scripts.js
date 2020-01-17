// Business (back-end) logic: none

// User interface (front-end) logic:
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    var interest = $("input:radio[name=interest]:checked").val();
    var motivation = parseInt($("#motivation").val());




    if (name) {
      $(".name").text(name);
    } else {
      $(".name").text("there");
    }

  });
});