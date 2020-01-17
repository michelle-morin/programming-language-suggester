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
      } else if (interest === "database") {
        recommendation = "Python";
        userInterest = "database administration";
      } else if (interest === "systems") {
        recommendation = "C++";
        userInterest = "computer systems";
      } else if (interest === "BI") {
        recommendation = "SQL (while not a development language, learning SQL may be helpful for the types of data analysis commonly used for busisness intelligence)";
        userInterest = "business intelligence analytics";
      } else if (interest === "programmer") {
        recommendation = "C#";
        userInterest = "software development";
      }

    var userMotivation;
    if (motivation === 1) {
      userMotivation = "";

    } else if (motivation === 2) {
      userMotivation = "";

    } else if (motivation === 3) {
      userMotivation = "";

    } else if (motivation === 4) {
      userMotivation = "";
    }

    $(".language").text(recommendation);
    $(".interest").text(userInterest);
    $(".motivation").text(userMotivation);
  });
});