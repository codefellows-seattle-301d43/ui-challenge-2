'use strict';

$("input[type=checkbox]").click(function() {
  console.log($(this));
  $(this).toggleClass("check-box2");
});

