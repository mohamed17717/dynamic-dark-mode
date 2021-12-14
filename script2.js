class TogglerShape {
  /* 
    Class for toggle you may got it from code pen
    you just convert html, style and js
    and bingo you got it

    i prefer you to scope this style under id
    but whatever its optional

    html elm must contain checkbox to attach event to it
  */

  defaultId = `dynamic-dark-mode`;
  defaultPosition = `
    position:fixed;
    bottom:8%;
    right:0;
    z-index: 999999999999999999999999999999
  `;

  html = `<div>
    <label class="darkmode-toggle" for="toggle-checkbox">
      <input type="checkbox" id="toggle-checkbox" />
      <span class="toggle-slider" aria-hidden="true"></span>
    </label>
  </div>`;

  css = `html{--gunmetal-85:hsla(212, 14%, 85%, 1);--gunmetal-75:hsla(212, 14%, 75%, 1);--sky-blue-75:hsla(201, 80%, 75%, 1);--sky-blue-60:hsla(201, 80%, 60%, 1);--t-width:70px;--t-height:calc(50 / 100 * var(--t-width));--b-width:calc(68 / 100 * var(--t-width));--b-height:var(--b-width);--b-top:calc(-10 / 100 * var(--t-width));--b-left:var(--b-top);--b-left-checked:calc(40 / 100 * var(--t-width))}#${this.elmId} *{box-sizing:border-box}.darkmode-toggle:focus-within .toggle-slider{box-shadow:0 0 2px 4px var(--sky-blue-60)}.darkmode-toggle:focus-within input:checked+.toggle-slider{box-shadow:0 0 2px 4px var(--gunmetal-85)}.darkmode-toggle input{opacity:0;position:absolute}.darkmode-toggle input:checked+.toggle-slider{border:2px solid var(--gunmetal-75);background-color:var(--gunmetal-85)}.darkmode-toggle input:checked+.toggle-slider:after{left:var(--b-left-checked);background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 432 427' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='1.5'%3E%3Cg id='SUN' transform='translate(-424.047 -239.811)'%3E%3Ccircle cx='640.753' cy='452.963' r='113.272' fill='%23e6e6e6' stroke='%23000' stroke-width='8'/%3E%3Cpath id='sun-shadow' d='M746.735 456.266c-21 129-212.959 115.208-212-3 1.865 136.625 200 145 212 3z' fill='%23ccc' stroke='%23ccc' stroke-width='8'/%3E%3Cpath id='sun-mouth' d='M624.71 460.049c.891 25.907 34.414 21.584 32.626.901' fill='none' stroke='%23000' stroke-width='8'/%3E%3Cpath id='sun-eye' d='M576.005 426.898c-6.87.006-20.616 3.651-20.612 20.054.004 17.057 13.742 21.669 20.612 21.664 6.871-.005 20.613-5.817 20.613-21.696 0-15.879-13.742-20.027-20.613-20.022z'/%3E%3Cpath d='M705.501 426.898c-6.87.006-20.616 3.651-20.612 20.054.004 17.057 13.742 21.669 20.612 21.664 6.871-.005 20.613-5.817 20.613-21.696 0-15.879-13.742-20.027-20.613-20.022z'/%3E%3C/g%3E%3C/svg%3E")}.darkmode-toggle .toggle-slider{cursor:pointer;display:flex;width:var(--t-width);height:var(--t-height);position:relative;border-radius:25px 0 0 25px;border:2px solid var(--sky-blue-60);background-color:var(--sky-blue-75)}.darkmode-toggle .toggle-slider:after{content:"";display:inline-block;width:var(--b-width);height:var(--b-height);position:absolute;top:var(--b-top);left:var(--b-left);border-radius:50%;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 432 427' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='1.5'%3E%3Cg id='SUN' transform='translate(-424.047 -239.811)'%3E%3Ccircle cx='640.753' cy='452.963' r='113.272' fill='%23ffe300' stroke='%23000' stroke-width='8'/%3E%3Cpath id='sun-shadow' d='M746.735 456.266c-21 129-212.959 115.208-212-3 1.865 136.625 200 145 212 3z' fill='%23ffb900' stroke='%23ffb900' stroke-width='8'/%3E%3Cpath id='sun-mouth' d='M624.71 460.049c.891 25.907 34.414 21.584 32.626.901' fill='none' stroke='%23000' stroke-width='8'/%3E%3Cg id='shine' fill='%23ffe300' stroke='%23000' stroke-width='8'%3E%3Cpath d='M495.247 311.376a6.126 6.126 0 00-8.66 0l-2.165 2.165a6.128 6.128 0 000 8.66l45.806 45.805a6.126 6.126 0 008.66 0l2.165-2.165a6.125 6.125 0 000-8.659l-45.806-45.806z'/%3E%3Cpath d='M648.408 249.934a6.127 6.127 0 00-6.124-6.123h-3.061a6.127 6.127 0 00-6.124 6.123v64.779a6.127 6.127 0 006.124 6.124h3.061a6.127 6.127 0 006.124-6.124v-64.779z'/%3E%3Cpath d='M434.171 431.37a6.127 6.127 0 00-6.124 6.123v3.062a6.127 6.127 0 006.124 6.124h64.779a6.127 6.127 0 006.123-6.124v-3.062a6.126 6.126 0 00-6.123-6.123h-64.779z'/%3E%3Cpath d='M780.449 439.024a6.127 6.127 0 00-6.124 6.124v3.061a6.127 6.127 0 006.124 6.124h64.779a6.127 6.127 0 006.123-6.124v-3.061a6.127 6.127 0 00-6.123-6.124h-64.779z'/%3E%3Cpath d='M797.102 316.401a6.126 6.126 0 000-8.66l-2.165-2.165a6.126 6.126 0 00-8.66 0l-45.805 45.806a6.126 6.126 0 000 8.66l2.165 2.165a6.127 6.127 0 008.659 0l45.806-45.806z'/%3E%3Cpath d='M786.277 594.55a6.128 6.128 0 008.66 0l2.165-2.165a6.126 6.126 0 000-8.66l-45.806-45.806a6.127 6.127 0 00-8.659 0l-2.165 2.165a6.126 6.126 0 000 8.66l45.805 45.806z'/%3E%3Cpath d='M630.991 656.597a6.127 6.127 0 006.123 6.124h3.062a6.127 6.127 0 006.124-6.124v-64.778a6.127 6.127 0 00-6.124-6.124h-3.062a6.127 6.127 0 00-6.123 6.124v64.778z'/%3E%3Cpath d='M484.422 583.725a6.128 6.128 0 000 8.66l2.165 2.165a6.128 6.128 0 008.66 0l45.806-45.806a6.126 6.126 0 000-8.66l-2.165-2.165a6.128 6.128 0 00-8.66 0l-45.806 45.806z'/%3E%3C/g%3E%3Cpath id='sun-eye' d='M576.005 426.898c-6.87.006-20.616 3.651-20.612 20.054.004 17.057 13.742 21.669 20.612 21.664 6.871-.005 20.613-5.817 20.613-21.696 0-15.879-13.742-20.027-20.613-20.022z'/%3E%3Cpath d='M705.501 426.898c-6.87.006-20.616 3.651-20.612 20.054.004 17.057 13.742 21.669 20.612 21.664 6.871-.005 20.613-5.817 20.613-21.696 0-15.879-13.742-20.027-20.613-20.022z'/%3E%3C/g%3E%3C/svg%3E")}@media (prefers-reduced-motion:no-preference){.darkmode-toggle .toggle-slider:after{transition:all .3s ease-in}}`;

  js = ``;
}

class RenderElement {
  /*
    Render toggler element on the screen
  */

  constructor({ html, css, js, defaultPosition, defaultId }) {
    /* elm is an object with html, css, js props */

    this.html = html;
    this.css = css;
    this.js = js;
    this.defaultPosition = defaultPosition;
    this.defaultId = defaultId;

    return this.render();
  }

  createHtmlElement() {
    const div = document.createElement("div");
    div.innerHTML = this.html;

    return div.firstChild;
  }

  createStyleElement() {
    const style = document.createElement("style");
    style.innerHTML = this.css;
    style.setAttribute("scoped", "");

    return style;
  }

  createScriptElement() {
    const script = document.createElement("script");
    script.innerHTML = this.js;

    return script;
  }

  setDefultValues(elm) {
    elm.setAttribute("id", this.defaultId);
    elm.setAttribute("style", this.defaultPosition);
  }

  render() {
    const elm = this.createHtmlElement();
    const style = this.createStyleElement();
    const script = this.createScriptElement();

    elm.appendChild(style);
    elm.appendChild(script);

    this.setDefultValues(elm);

    document.body.appendChild(elm);
    return elm;
  }
}

class TogglerActions {
  /* Contain all actions that toggler need */
  shape = new TogglerShape();
  elm = new RenderElement(this.shape);

  history = new ToggleHistoryManager();

  rotatedElementsSelectors = ["html", "img", "video"];
  isHue = true;
  cssRotateCode = `filter: invert(1)${
    this.isHue ? " hue-rotate(180deg)" : ""
  } !important`;

  getInputElement() {
    if (!this.elm) return;

    const selector = `#${this.shape.defaultId} input[type='checkbox']`;
    const input = this.elm.querySelector(selector);

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

class DynamicDarkMode {
  history = new ToggleHistoryManager();
  button = new ToggleButtonShape();
  action = new TogglerActions();

  run() {
    const { onChangeEvent } = this.action;
    const { dispatchChangeEvent } = this.button;

    this.button.render();
    this.button.setChangeEvent(onChangeEvent);

    this.history.setPreviousState(dispatchChangeEvent);
  }
}

new DynamicDarkMode().run();
