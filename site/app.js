(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var items = $$(".lec-item"), lecs = $$(".lec"), search = $("#search");
  var side = $("#side"), scrim = $("#scrim"), menu = $("#menu");
  var current = items[0] && items[0].dataset.lec;
  var searching = false;

  function norm(s) { return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d"); }

  // header height drives the sticky sidebar offset
  var top = $(".top");
  function setHeader() { document.documentElement.style.setProperty("--hh", top.offsetHeight + "px"); }
  setHeader();
  if (window.ResizeObserver) new ResizeObserver(setHeader).observe(top);

  function drawer(open) {
    side.classList.toggle("open", open);
    scrim.hidden = !open;
    menu.setAttribute("aria-expanded", open);
  }
  menu.addEventListener("click", function () { drawer(!side.classList.contains("open")); });
  scrim.addEventListener("click", function () { drawer(false); });

  function show(id) {
    if (!document.getElementById(id)) return;
    current = id;
    items.forEach(function (it) {
      var on = it.dataset.lec === id;
      it.toggleAttribute("data-active", on);
      var a = $(".lec-link", it);
      if (on) { a.setAttribute("aria-current", "true"); a.scrollIntoView({ block: "nearest" }); }
      else a.removeAttribute("aria-current");
    });
    lecs.forEach(function (l) { l.hidden = l.id !== id; });
    try { localStorage.setItem("lec", id); } catch (e) {}
  }

  function route() {
    var h = location.hash.slice(1);
    if (!h) return;
    drawer(false);
    if (/^p\d+$/.test(h)) { clear(); show(h); window.scrollTo(0, 0); return; }
    var q = document.getElementById(h);
    if (q && q.classList.contains("q")) {
      clear();
      show(q.closest(".lec").id);
      q.open = true;
      q.scrollIntoView();
    }
  }

  function clear() {
    if (!searching) return;
    searching = false; search.value = "";
    $$(".q").forEach(function (q) { q.hidden = false; });
    items.forEach(function (it) { it.hidden = false; });
    $("#empty").hidden = true;
    show(current);
  }

  var index = $$(".q").map(function (q) { return { el: q, text: norm(q.textContent) }; });
  search.addEventListener("input", function () {
    var v = norm(search.value.trim());
    if (!v) { clear(); return; }
    searching = true;
    var words = v.split(/\s+/), total = 0;
    items.forEach(function (it) { it.removeAttribute("data-active"); });
    lecs.forEach(function (l) { l.hidden = false; });
    index.forEach(function (i) {
      var ok = words.every(function (w) { return i.text.indexOf(w) > -1; });
      i.el.hidden = !ok; if (ok) { total++; i.el.open = true; }
    });
    lecs.forEach(function (l) {
      var any = $$(".q", l).some(function (q) { return !q.hidden; });
      l.hidden = !any;
      var it = $('.lec-item[data-lec="' + l.id + '"]');
      if (it) it.hidden = !any;
    });
    $("#empty").hidden = total > 0;
  });

  var fold = $("#fold"), folded = false;
  fold.addEventListener("click", function () {
    folded = !folded;
    $$(".q").forEach(function (q) { q.open = !folded; });
    fold.textContent = folded ? "Pokaži odgovore" : "Skrij odgovore";
  });

  $("#theme").addEventListener("click", function () {
    var d = document.documentElement, dark = d.dataset.theme ? d.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    d.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("theme", d.dataset.theme); } catch (e) {}
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") drawer(false);
    if (e.key === "/" && document.activeElement !== search) { e.preventDefault(); window.scrollTo(0, 0); search.focus(); }
  });

  window.addEventListener("hashchange", route);
  if (location.hash) route();
  else { try { var s = localStorage.getItem("lec"); if (s) show(s); } catch (e) {} }
})();
