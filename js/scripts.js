window.addEventListener(
  "error",
  function (e) {
    if (e.target.tagName === "IFRAME") {
      e.preventDefault(); // Stops default error logging
      e.stopPropagation(); // Prevents bubbling
    }
  },
  true
);
