class AwesomeDarkMode {
  rotatedElementsSelectors = ["html", "img", ".bg", ".background"];
  localStorageFlag = "awesome-dark-mode-status";

  createToggleELm() {
    const toggleElmHtml = `<div id="dm-toggle"><label class="darkmode-toggle" for="toggle-checkbox"><input type="checkbox" id="toggle-checkbox" /><span class="toggle-slider" aria-hidden="true"></span></label></div>`;

    const div = document.createElement("div");
    div.innerHTML = toggleElmHtml;

    return div.firstChild;
  }

  renderToggleOnScreen() {
    const toggleElm = this.createToggleELm();

    document.body.appendChild(toggleElm);
    return toggleElm;
  }

  rotateElmColor180deg(elm) {
    const cssCode = "filter: invert(1) hue-rotate(180deg) !important";
    const elmCSSRules = elm.style.cssText.split(";");

    // toggle css code
    elmCSSRules.includes(cssCode)
      ? elmCSSRules.splice(elmCSSRules.indexOf(cssCode), 1)
      : elmCSSRules.push(cssCode);

    elm.style.cssText = elmCSSRules.join(";");
  }

  rotateElementsColor() {
    this.rotatedElementsSelectors.forEach((selector) =>
      document
        .querySelectorAll(selector)
        .forEach((elm) => this.rotateElmColor180deg(elm))
    );
  }

  setChangeEvent(input) {
    input.addEventListener("change", (e) => {
      this.rotateElementsColor();
      localStorage.setItem(this.localStorageFlag, input.checked);
    });
  }

  setPreviousChoice(input) {
    const status =
      JSON.parse(localStorage.getItem(this.localStorageFlag)) || false;

    input.checked = status;
    status && this.rotateElementsColor();
  }

  run() {
    const toggleElm = this.renderToggleOnScreen();
    const input = toggleElm.querySelector("#dm-toggle input[type='checkbox']");

    this.setChangeEvent(input);
    this.setPreviousChoice(input);
  }
}

new AwesomeDarkMode().run();
