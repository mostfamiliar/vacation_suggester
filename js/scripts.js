$(document).ready(function(){
    $("form#vacation-suggester").submit(function(event) {
      var hotchecked = $("input#hot-weather").prop('checked');
      var coldchecked = $("input#cold-weather").prop('checked');
      var landmarks = $("input#landmarks-radio").prop('checked');
      var music = $("input#music-radio").prop('checked');
      var nature = $("input#nature-radio").prop('checked');
      var citychecked = $("input#city-yes").prop('checked');
      var budget = parseInt($("input#budget-amount").val());
      var veganchecked = $("input#vegan-checked").prop('checked');
      var local;

      $(".activity-shade").change(function () {
        $('[type=radio]:checked').prop('checked', false);
        $(this).prop('checked', 'checked');
      });


      if (hotchecked === true) {
         var vacation = "Tulum";
         $(".vacationOutput").text(vacation);
      }

      else {
        if (citychecked === true) {
          if (budget >= 5000) {
            if (veganchecked === false) {
              if (landmarks === true) {
                  var vacation = "Paris France";
                  $(".vacationOutput").text(vacation);
              }

              else {
                  var vacation = "London England";
                  $(".vacationOutput").text(vacation);
                }
              }

            else {
              var vacation = "Reykjavik Iceland";
              $(".vacationOutput").text(vacation);
            }
          }

          else if (budget >= 2000) {
            if (veganchecked === true) {
              if (music === true) {
              var vacation = "New York City";
              $(".vacationOutput").text(vacation);
              }

              else {
                var vacation = "Reykjavik Iceland";
                $(".vacationOutput").text(vacation);
              }
            }

            else {
              var vacation = "traveling around Norway";
              $(".vacationOutput").text(vacation);
              }

          }


          else {
            var vacation = "a local vacation";
            $(".vacationOutput").text(vacation);
          }

        }

        else {

            var vacation = "traveling around Norway";
            $(".vacationOutput").text(vacation);

        }
      }



      $("#output-message").show();
      event.preventDefault();
    });
});
