/* 
  Class for toggle theme you may got it from code pen
  you just set html, css code in the theme class
  and bingo you got it

  i prefer you to scope this style under id
  but whatever its optional

  html elm must contain checkbox to attach event to it
*/

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
  constructor (themeInstance) {
    const buttonTheme = themeInstance || new ToggleFancyShapeTheme();

    const button = new ToggleButtonShape(buttonTheme);
    const history = new ToggleHistoryManager();
    const action = new ToggleAction();

    const { onChangeEvent } = action;
    const { dispatchChangeEvent } = button;

    button.render();
    button.setChangeEvent(onChangeEvent);

    history.setPreviousState(dispatchChangeEvent);
  }
}

const theme = new ToggleFancyShapeTheme();
new DynamicDarkMode(theme);
