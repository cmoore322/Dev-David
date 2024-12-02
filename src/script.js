$(document).ready(function () {
  $("#game-piece").draggable();

  $("#game-target").droppable({
    drop: function (event, ui) {
      $("#game-result").html("<h2>WOW! Congratulations! You WON!!!</h2>");
    }
  });

  // Reset game when the reset button is clicked
  $("#reset-button").on("click", function () {
    $("#game-piece").css({ top: 0, left: 0 });
    $("#game-result").html("");
  });
});
