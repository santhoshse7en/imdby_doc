(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var sidebar = document.querySelector(".sidebar");
  var backdrop = document.querySelector(".backdrop");

  function closeSidebar() {
    if (!sidebar) return;
    sidebar.classList.remove("open");
    backdrop && backdrop.classList.remove("open");
    toggle && toggle.setAttribute("aria-expanded", "false");
  }

  function openSidebar() {
    if (!sidebar) return;
    sidebar.classList.add("open");
    backdrop && backdrop.classList.add("open");
    toggle && toggle.setAttribute("aria-expanded", "true");
  }

  if (toggle && sidebar) {
    toggle.addEventListener("click", function () {
      if (sidebar.classList.contains("open")) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
  }
  if (backdrop) backdrop.addEventListener("click", closeSidebar);
  document.addEventListener("keyup", function (e) {
    if (e.key === "Escape") closeSidebar();
  });
  document.querySelectorAll(".sidebar a").forEach(function (a) {
    a.addEventListener("click", closeSidebar);
  });

  // Top bar search box -> redirect to search page with query.
  var topSearch = document.querySelector(".topbar-search input");
  if (topSearch) {
    topSearch.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && topSearch.value.trim()) {
        window.location.href =
          topSearch.getAttribute("data-search-url") +
          "?q=" +
          encodeURIComponent(topSearch.value.trim());
      }
    });
  }

  // Copy-to-clipboard buttons on code blocks.
  document.querySelectorAll(".prose pre").forEach(function (pre) {
    var wrapper = document.createElement("div");
    wrapper.className = "code-block";
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "copy-btn";
    btn.textContent = "Copy";
    btn.addEventListener("click", function () {
      var text = pre.innerText;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function () {
          btn.textContent = "Copied";
          btn.classList.add("copied");
          setTimeout(function () {
            btn.textContent = "Copy";
            btn.classList.remove("copied");
          }, 1500);
        });
      }
    });
    wrapper.appendChild(btn);
  });
})();
