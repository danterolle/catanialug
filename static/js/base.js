(function() {
  document.querySelectorAll('.nav-drop').forEach(function(d) {
    d.addEventListener('toggle', function() {
      if (this.open) {
        document.querySelectorAll('.nav-drop').forEach(function(o) {
          if (o !== this) o.open = false;
        });
      }
    });
  });

  document.querySelector('.hamburger')?.addEventListener('click', function() {
    document.querySelector('.site-nav').classList.toggle('nav-open');
  });

  window.revealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        window.revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: .12 });

  document.querySelectorAll('.reveal').forEach(function(el) {
    window.revealObserver.observe(el);
  });

  var accs = document.querySelectorAll('details.acc'), heights = [];
  accs.forEach(function(d, i) {
    var body = d.querySelector('.acc-body');
    if (!body) return;
    var wasOpen = d.open;
    if (!wasOpen) d.open = true;
    heights[i] = body.scrollHeight;
    if (wasOpen) {
      body.style.maxHeight = heights[i] + 'px';
    } else {
      d.open = false;
      body.style.maxHeight = '0';
    }
  });
  accs.forEach(function(d, i) {
    var body = d.querySelector('.acc-body');
    var summ = d.querySelector('summary');
    if (!body || !summ) return;
    summ.addEventListener('click', function(e) {
      e.preventDefault();
      if (d.open) {
        body.style.maxHeight = '0';
        body.addEventListener('transitionend', function h() {
          body.removeEventListener('transitionend', h);
          if (body.style.maxHeight == '0px') d.open = false;
        });
      } else {
        d.open = true;
        body.style.maxHeight = '0';
        requestAnimationFrame(function() {
          body.style.maxHeight = heights[i] + 'px';
        });
      }
    });
  });
})();
