/* 
  Class for toggle theme you may got it from code pen
  you just set html, css code in the theme class
  and bingo you got it

  i prefer you to scope this style under id
  but whatever its optional

  html elm must contain checkbox to attach event to it
*/

// Themes start
class ThemeInterface {
  defaultId = undefined;
  defaultPosition = undefined;
  html = undefined;
  style = undefined;
}

class ToggleFancyShapeTheme extends ThemeInterface {
  defaultId = "adm-toggle";
  defaultPosition = `position:fixed;bottom:8%;right:0;z-index: 999999999999999999999999999999;`;

  html = `<div>
    <input id="darkmode-toggle" type="checkbox">
    <label for="darkmode-toggle">Dark Mode</label>
  </div>`;
  style = `
  @charset "UTF-8";
  *,:after,:before{box-sizing:border-box}body{transition:background-color .5s ease-out,color .5s ease-out;background-color:var(--color-bg);color:var(--color-text)}:root{--color-bg:#fff;--color-text:#333}:root .darkmode{--color-bg:#222;--color-text:steelblue}#darkmode-toggle{position:absolute;width:0;height:0;visibility:hidden}#darkmode-toggle+label{position:relative;display:block;width:4rem;height:2rem;background-color:var(--color-text);border-radius:2rem;text-indent:-100em}#darkmode-toggle+label:after{content:"";font-family:"Font Awesome 5 Free";font-weight:900;display:inline-block;font-size:1em;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:var(--color-text);text-indent:0;padding:.25rem;text-align:left;position:absolute;top:.25rem;left:.25rem;width:1.5rem;height:1.5rem;background-color:var(--color-bg);border-radius:1.5rem;transition:left .2s ease-out,transform .2s ease-out,width .2s ease-out}#darkmode-toggle+label:active:after,#darkmode-toggle+label:hover:after{width:2rem}#darkmode-toggle:checked+label:after{content:"";left:calc(100% - .25rem);transform:translateX(-100%);text-align:right}@media (prefers-color-scheme:dark){body{--pref:"dark"}}@media (prefers-color-scheme:light){body{--pref:"light"}}
  `;
}
// Themes end

class ToggleButtonShape {
  toggleElm = undefined;

  constructor({ html, style, js, defaultId, defaultPosition }) {
    this.html = html;
    this.style = style;
    this.js = js;
    this.defaultId = defaultId;
    this.defaultPosition = defaultPosition;
  }

  createStyleElement() {
    const styleElm = document.createElement("style");
    styleElm.innerHTML = this.style;

    return styleElm;
  }

  createToggleElement() {
    const div = document.createElement("div");
    div.innerHTML = this.html;

    return div.firstChild;
  }

  getInputElement() {
    if (!this.toggleElm) return;

    const selector = `#${this.defaultId} input[type='checkbox']`;
    const input = this.toggleElm.querySelector(selector);

    return input;
  }

  setChangeEvent(action) {
    const input = this.getInputElement();
    input.addEventListener("change", action);
  }

  dispatchChangeEvent = () => {
    const input = this.getInputElement();
    const event = new Event("change");

    input.checked = !input.checked;
    input.dispatchEvent(event);
  };

  render() {
    const styleElm = this.createStyleElement();
    const toggleElm = this.createToggleElement();

    toggleElm.setAttribute("style", this.defaultPosition);
    toggleElm.setAttribute("id", this.defaultId);

    document.head.appendChild(styleElm);
    document.body.appendChild(toggleElm);

    this.toggleElm = toggleElm;
  }
}

class ToggleHistoryManager {
  localStorageFlag = "awesome-dark-mode-status";

  saveState(state) {
    localStorage.setItem(this.localStorageFlag, state);
  }

  readState() {
    return JSON.parse(localStorage.getItem(this.localStorageFlag)) || false;
  }

  setPreviousState(buttonDispatchChange) {
    const isPreviousStatusChecked = this.readState();
    if (isPreviousStatusChecked) buttonDispatchChange();
  }
}

class ToggleAction {
  history = new ToggleHistoryManager();

  rotatedElementsSelectors = ["html", "img", "video"];

  isHue = true;
  cssRotateCode = `filter: invert(1)${
    this.isHue ? " hue-rotate(180deg)" : ""
  } !important`;

  rotateElmColor180deg(elm) {
    const cssCode = this.cssRotateCode;
    const elmCSSRules = elm.style.cssText
      .split(";")
      .map((elm) => elm.trim())
      .filter((elm) => elm);

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

  onChangeEvent = (e) => {
    this.rotateElementsColor();
    this.history.saveState(e.target.checked);
  };
}

class DynamicDarkMode {
  // update theme class here
  buttonTheme = new ToggleFancyShapeTheme();
  button = new ToggleButtonShape(this.buttonTheme);

  history = new ToggleHistoryManager();
  action = new ToggleAction();

  run() {
    const { onChangeEvent } = this.action;
    const { dispatchChangeEvent } = this.button;

    this.button.render();
    this.button.setChangeEvent(onChangeEvent);

    this.history.setPreviousState(dispatchChangeEvent);
  }
}

new DynamicDarkMode().run();
