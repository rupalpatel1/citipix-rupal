
// wait for DOlement to loac
$(document).ready(function() {

  // listen for click
  $('form').on('submit', function(e) {
    e.preventDefault();
    var userEntry = $("#city-type").val();

    userEntry = userEntry.toLowerCase();

    if(userEntry == "new york"|| userEntry == "new york city" || userEntry == "nyc") { 
      $("body").attr("class","nyc");
    } else if (userEntry == "san francisco" || userEntry == "sf" || userEntry == "ay area") {
      $("body").attr("class","sf");
    } else if(userEntry == "los angeles" || userEntry == "la" || userEntry == "lax") {
      $("body").attr("class","la");
    } else if(userEntry == "austin" || userEntry == "atx") {
      $("body").attr("class","austin");
    } else if(userEntry == "sydney" || userEntry == "syd") {
      $("body").attr("class","sydney");
    }

  });
});


