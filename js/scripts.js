$(document).ready(function(){

  $("body").hide();
  $("body").fadeIn("slow");


  $('input[type="checkbox"]').on('change', function() {
    $('input[name="' + this.name + '"]').not(this).prop('checked', false);
  });

  $("form#vacation-suggester").submit(function(event) {
    var hotChecked = $("input#hot-weather").prop('checked');
    var coldChecked = $("input#cold-weather").prop('checked');
    var landmarks = $("input#landmarks-radio").prop('checked');
    var music = $("input#music-radio").prop('checked');
    var nature = $("input#nature-radio").prop('checked');
    var cityChecked = $("input#city-yes").prop('checked');
    var budget = parseInt($("input#budget-amount").val());
    var veganChecked = $("input#vegan-checked").prop('checked');
    var name = $("input#name").val();

    var weatherChecked = $('input.weather-checked').is(':checked');
    var cityChecked = $('input.weather-checked').is(':checked');

    $(".nameInput").text(name);

    if (hotChecked === true) {
        var vacation = "Tulum Mexico";
        $(".vacationOutput").text(vacation);


    } else if (hotChecked === false) {
        if (cityChecked === true) {
          if (budget >= 5000) {
            if (veganChecked === false) {
              if (landmarks === true) {
                  var vacation = "Paris France";
                  $(".vacationOutput").text(vacation);

              } else {
                  var vacation = "London England";
                  $(".vacationOutput").text(vacation);
                }

            } else {
              var vacation = "Reykjavik Iceland";
              $(".vacationOutput").text(vacation);
              }
          }

          else if (budget >= 2000) {
            if (veganChecked === true) {
              if (music === true) {
              var vacation = "New York City";
              $(".vacationOutput").text(vacation);
              }

              else {
                var vacation = "Reykjavik Iceland";
                $(".vacationOutput").text(vacation);
                }

            } else {
              var vacation = "traveling around Norway";
              $(".vacationOutput").text(vacation);
            }

        } else {
          var vacation = "a local vacation";
          $(".vacationOutput").text(vacation);
        }

    } else {
        var vacation = "traveling around Norway";
        $(".vacationOutput").text(vacation);
      }
  }

    if (!name) {
      $(".error").show();
      $(".name-shade").attr("class", "has-error");
      event.preventDefault();

   } else if (weatherChecked === false) {
     $(".weather-shade").attr("class", "has-error");
     event.preventDefault();

   } else {
       $("#output-message").show();
       event.preventDefault();
    }

  });
});
