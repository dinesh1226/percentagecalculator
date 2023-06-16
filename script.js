"use strict";

var cal = document.getElementById("enter");
var input = document.getElementById("userinput");

cal.addEventListener("click", function (a) {
  if (input.value.length > 0) {
    const calc = function (a) {
      let c = (input.value - 0.75) * 10;
      return (document.getElementById(
        "replace-me"
      ).innerHTML = `Percentage = <b>${c}`);
    };
    calc(input.value);
  }
});
