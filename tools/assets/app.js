(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var tabs = $$(".tab"), lecs = $$(".lec"), search = $("#search");
  var current = tabs[0] && tabs[0].dataset.lec;
  var searching = false;

  function norm(s) { return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d"); }

  function show(id, keepHash) {
    if (!document.getElementById(id)) return;
    current = id;
    tabs.forEach(function (t) {
      var on = t.dataset.lec === id;
      t.setAttribute("aria-selected", on);
      if (on) t.scrollIntoView({ block: "nearest", inline: "center" });
    });
    lecs.forEach(function (l) { l.hidden = l.id !== id; });
    try { localStorage.setItem("lec", id); } catch (e) {}
    if (!keepHash) history.replaceState(null, "", "#" + id);
  }

  function route() {
    var h = location.hash.slice(1);
    if (!h) return;
    if (/^p\d+$/.test(h)) { clear(); show(h, true); window.scrollTo(0, 0); return; }
    var q = document.getElementById(h);
    if (q && q.classList.contains("q")) {
      clear();
      show(q.closest(".lec").id, true);
      q.open = true;
      q.scrollIntoView();
    }
  }

  tabs.forEach(function (t) {
    t.addEventListener("click", function () { clear(); show(t.dataset.lec); window.scrollTo(0, 0); });
    t.addEventListener("keydown", function (e) {
      var i = tabs.indexOf(t), n = e.key === "ArrowRight" ? i + 1 : e.key === "ArrowLeft" ? i - 1 : null;
      if (n === null || !tabs[n]) return;
      e.preventDefault(); tabs[n].focus(); tabs[n].click();
    });
  });

  function clear() {
    if (!searching) return;
    searching = false; search.value = "";
    $$(".q").forEach(function (q) { q.hidden = false; });
    $$(".toc").forEach(function (t) { t.style.display = ""; });
    $("#empty").hidden = true;
    show(current, true);
  }

  var index = $$(".q").map(function (q) { return { el: q, text: norm(q.textContent) }; });
  search.addEventListener("input", function () {
    var v = norm(search.value.trim());
    if (!v) { clear(); return; }
    searching = true;
    var words = v.split(/\s+/), total = 0;
    lecs.forEach(function (l) { l.hidden = false; });
    index.forEach(function (i) {
      var ok = words.every(function (w) { return i.text.indexOf(w) > -1; });
      i.el.hidden = !ok; if (ok) { total++; i.el.open = true; }
    });
    lecs.forEach(function (l) {
      var any = $$(".q", l).some(function (q) { return !q.hidden; });
      l.hidden = !any;
      $(".toc", l).style.display = "none";
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
    if (e.key === "/" && document.activeElement !== search) { e.preventDefault(); window.scrollTo(0, 0); search.focus(); }
  });

  window.addEventListener("hashchange", route);
  if (location.hash) route();
  else { try { var s = localStorage.getItem("lec"); if (s) show(s, true); } catch (e) {} }
})();
