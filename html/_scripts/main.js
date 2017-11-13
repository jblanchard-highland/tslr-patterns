var App = {
  debug: false,
  log: function(what)   { if(App.debug) { console.log(what); } },
  exists: function(el)  { if($(el).length > 0) { return true; } },

  init: function() {
    this.accordion();
  },
  accordion: function () {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {

      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        panel.classList.toggle("show");
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }
  }

} || {};

;(function ($, window, undefined) {
  'use strict';

  $(document).ready(function() {
    App.init();
  });

})(jQuery, this);