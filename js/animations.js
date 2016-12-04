(window.onload = function() {
  function $$(selector, context) {
    context = context || document;
    var elements = context.querySelectorAll(selector);
    return Array.prototype.slice.call(elements);
  };

  $$('h1').forEach(function(h1) {
    var len = h1.textContent.length
      , s = h1.style;
    s.width = len + 'ch';
    s.animationTimingFunction = "steps("+ len +"),steps(1)";
  });
})();
