/* Simple front-end password gate — a DETERRENT, not real security.
 *
 * The password lives in this file, so anyone can bypass it (view source,
 * disable JavaScript, or fetch the HTML directly). It only keeps casual
 * visitors out. Keep everything in site/ fake-data only.
 *
 * To use on a page: add <script src="gate.js"></script> in the <head>
 * (use the right relative path, e.g. "../gate.js" from site/prototypes/).
 *
 * To change the password: edit PASSWORD below. Don't reuse a real password.
 */
(function () {
  var PASSWORD = "teachable"; // <-- change me
  var KEY = "da-gate-ok";

  // Already unlocked this browser session? Do nothing.
  try {
    if (sessionStorage.getItem(KEY) === "1") return;
  } catch (e) {
    /* sessionStorage blocked — still show the gate */
  }

  // Hide page content immediately, before it paints.
  var hide = document.createElement("style");
  hide.id = "da-gate-hide";
  hide.textContent = "body{visibility:hidden!important}";
  (document.head || document.documentElement).appendChild(hide);

  function unlock() {
    try { sessionStorage.setItem(KEY, "1"); } catch (e) {}
    var o = document.getElementById("da-gate");
    if (o) o.remove();
    var h = document.getElementById("da-gate-hide");
    if (h) h.remove();
  }

  function mount() {
    // Load Fraunces so the serif heading looks right even on pages that don't
    // already load it. Reckless (if installed locally) still takes precedence.
    var font = document.createElement("link");
    font.rel = "stylesheet";
    font.href = "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500&display=swap";
    document.head.appendChild(font);

    var css = document.createElement("style");
    css.textContent = [
      '#da-gate{position:fixed;inset:0;z-index:2147483647;visibility:visible;display:flex;align-items:center;justify-content:center;background:#fbfbfb;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}',
      '#da-gate *{visibility:visible;box-sizing:border-box}',
      '.da-gate__card{width:320px;max-width:90vw;text-align:center;color:#222}',
      '.da-gate__chip{display:inline-block;background:#e7ff33;color:#222;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:3px 9px;border-radius:5px;margin-bottom:16px}',
      '#da-gate h1{font-family:"Reckless-Light","Reckless","Fraunces",Palatino,Garamond,Georgia,serif;font-size:30px;font-weight:400;letter-spacing:-.3px;margin:0 0 6px}',
      '#da-gate p{font-size:13.5px;color:#6b6b6b;margin:0 0 18px}',
      '#da-gate form{display:flex;gap:8px}',
      '#da-gate input{flex:1;padding:10px 12px;font-size:14px;border:1px solid #e4e4e4;border-radius:8px;outline:none}',
      '#da-gate input:focus{border-color:#222}',
      '#da-gate button{padding:10px 16px;font-size:14px;font-weight:600;color:#222;background:#e7ff33;border:1px solid #222;border-radius:8px;cursor:pointer}',
      '.da-gate__err{height:16px;margin-top:10px;font-size:12.5px;color:#ca483d}'
    ].join("");
    document.head.appendChild(css);

    var wrap = document.createElement("div");
    wrap.id = "da-gate";
    wrap.innerHTML =
      '<div class="da-gate__card">' +
      '<div class="da-gate__chip">Teachable · Design</div>' +
      "<h1>Protected</h1>" +
      "<p>Enter the password to view design artifacts.</p>" +
      '<form><input type="password" autocomplete="off" placeholder="Password" aria-label="Password" />' +
      "<button type=\"submit\">Enter</button></form>" +
      '<div class="da-gate__err" role="alert"></div>' +
      "</div>";
    document.body.appendChild(wrap);

    var form = wrap.querySelector("form");
    var input = wrap.querySelector("input");
    var err = wrap.querySelector(".da-gate__err");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (input.value === PASSWORD) {
        unlock();
      } else {
        err.textContent = "Incorrect password.";
        input.value = "";
        input.focus();
      }
    });
    input.focus();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
