document.addEventListener("DOMContentLoaded", function() {
  var acc = document.querySelectorAll('.mdl-js-accordion');
  for (var i = 0; i < acc.length; i++) {
    var item = acc[i];
    componentHandler.upgradeElement(item);
  }
});