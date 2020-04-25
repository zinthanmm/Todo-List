//check off completed task
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

//remove completed tasks
$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  event.stopPropagation();
});

//add new tasks
$("input[type='text'").keypress(function (event) {
  if (event.which === 13) {
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span>X</span> " + todoText + "</li>");
  }
});
