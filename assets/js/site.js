// Fades each .entry in as it scrolls into view. If JS never runs (or the
// person has "reduce motion" set), entries just show normally — see the
// .entry.fade-ready rule in assets/css/style.css.
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var entries = document.querySelectorAll('.entry');
  entries.forEach(function (e) { e.classList.add('fade-ready'); });

  var io = new IntersectionObserver(function (items) {
    items.forEach(function (it) {
      if (it.isIntersecting) {
        it.target.classList.add('in-view');
        io.unobserve(it.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  entries.forEach(function (e) { io.observe(e); });
})();
