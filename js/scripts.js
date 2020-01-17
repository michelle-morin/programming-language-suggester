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

    var recommendation;
    var userInterest;
      if (interest === "UX") {
        recommendation = "JavaScript";
        userInterest = "user experience (UX) design";
        $(".javascript").show();
      } else if (interest === "database") {
        recommendation = "Python";
        userInterest = "database administration";
        $(".python").show();
      } else if (interest === "systems") {
        recommendation = "C++";
        userInterest = "computer systems";
        $(".c-plus-plus").show();
      } else if (interest === "BI") {
        recommendation = "SQL. While not a development language, learning SQL may help streamline data analysis commonly used for busisness intelligence";
        userInterest = "business intelligence analytics";
        $(".sql").show();
      } else if (interest === "programmer") {
        recommendation = "C#";
        userInterest = "software development";
        $(".c-sharp").show();
      }

    var userMotivation;
    if (motivation === 1) {
      userMotivation = "are planning to launch a new career that involves coding";
      $(".career").show();
    } else if (motivation === 2) {
      userMotivation = "are curious about whether you will enjoy coding";
      $(".enjoy").show();
    } else if (motivation === 3) {
      userMotivation = "would like to code as a hobby";
      $(".hobby").show();
    } else if (motivation === 4) {
      userMotivation = "are a programmer seeking to add additional skills to your toolkit";
      $(".experienced").show();
    }

    $("#output").show();
    $(".language").text(recommendation);
    $(".interest").text(userInterest);
    $(".motivation").text(userMotivation);
  });
});