/* brandonmiller.co — small progressive enhancements. The site works without JS. */
(function () {
  "use strict";

  // Sticky header border once the page scrolls
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () { header.classList.toggle("scrolled", window.scrollY > 8); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Mobile navigation
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  // Footer year
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  // Placeholder links (e.g. pre-order buttons before retailer links exist)
  document.querySelectorAll('a[aria-disabled="true"]').forEach(function (a) {
    a.addEventListener("click", function (e) { e.preventDefault(); });
  });

  function setStatus(form, msg, isError) {
    var status = form.querySelector(".form-status");
    if (!status) return;
    status.hidden = false;
    status.textContent = msg;
    status.classList.toggle("error", !!isError);
  }

  // Newsletter forms post straight to Kit, which redirects to /checklist-thanks.
  // Until a real Kit form ID is in place, stop the submit and explain.
  document.querySelectorAll("form[data-newsletter]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      if (form.action.indexOf("KIT_FORM_ID") !== -1) {
        e.preventDefault();
        setStatus(form, "Signups are being moved to a new system and will reopen shortly. Thanks for your patience!", true);
      }
    });
  });

  // Contact form: submit to Formspree in the background so visitors stay on the page.
  var contact = document.querySelector("form[data-contact]");
  if (contact) {
    contact.addEventListener("submit", function (e) {
      e.preventDefault();
      if (contact.action.indexOf("FORMSPREE_ID") !== -1) {
        setStatus(contact, "The contact form isn't connected yet. Please email hello@brandonmiller.co in the meantime.", true);
        return;
      }
      var btn = contact.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.textContent = "Sending…"; }
      fetch(contact.action, {
        method: "POST",
        body: new FormData(contact),
        headers: { Accept: "application/json" }
      }).then(function (res) {
        if (!res.ok) throw new Error("Request failed");
        contact.reset();
        setStatus(contact, "Thank you! Your message has been sent, and I'll respond personally.", false);
      }).catch(function () {
        setStatus(contact, "Sorry, something went wrong. Please try again, or email hello@brandonmiller.co.", true);
      }).then(function () {
        if (btn) { btn.disabled = false; btn.textContent = "Send message"; }
      });
    });
  }
})();
