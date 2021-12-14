class ThemeInterface {
  defaultId = undefined;
  defaultPosition = undefined;
  html = undefined;
  style = undefined;
}

class ToggleSunMoonTheme extends ThemeInterface {
  // shape and look
  defaultId = "adm-toggle";
  defaultPosition = `
    position:fixed;
    bottom:8%;
    right:0;
    z-index: 999999999999999999999999999999;
  `;

  html = `<div>
    <label class="darkmode-toggle" for="toggle-checkbox">
      <input type="checkbox" id="toggle-checkbox" />
      <span class="toggle-slider" aria-hidden="true"></span>
    </label>
  </div>`;
  style = `#${this.defaultId}{--gunmetal-85:hsla(212, 14%, 85%, 1);--gunmetal-75:hsla(212, 14%, 75%, 1);--sky-blue-75:hsla(201, 80%, 75%, 1);--sky-blue-60:hsla(201, 80%, 60%, 1);--t-width:70px;--t-height:calc(50 / 100 * var(--t-width));--b-width:calc(68 / 100 * var(--t-width));--b-height:var(--b-width);--b-top:calc(-10 / 100 * var(--t-width));--b-left:var(--b-top);--b-left-checked:calc(40 / 100 * var(--t-width))}#${this.defaultId} *{box-sizing:border-box}#${this.defaultId} .darkmode-toggle:focus-within .toggle-slider{box-shadow:0 0 2px 4px var(--sky-blue-60)}#${this.defaultId} .darkmode-toggle:focus-within input:checked+.toggle-slider{box-shadow:0 0 2px 4px var(--gunmetal-85)}#${this.defaultId} .darkmode-toggle input{opacity:0;position:absolute}#${this.defaultId} .darkmode-toggle input:checked+.toggle-slider{border:2px solid var(--gunmetal-75);background-color:var(--gunmetal-85)}#${this.defaultId} .darkmode-toggle input:checked+.toggle-slider:after{left:var(--b-left-checked);background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 432 427' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='1.5'%3E%3Cg id='SUN' transform='translate(-424.047 -239.811)'%3E%3Ccircle cx='640.753' cy='452.963' r='113.272' fill='%23e6e6e6' stroke='%23000' stroke-width='8'/%3E%3Cpath id='sun-shadow' d='M746.735 456.266c-21 129-212.959 115.208-212-3 1.865 136.625 200 145 212 3z' fill='%23ccc' stroke='%23ccc' stroke-width='8'/%3E%3Cpath id='sun-mouth' d='M624.71 460.049c.891 25.907 34.414 21.584 32.626.901' fill='none' stroke='%23000' stroke-width='8'/%3E%3Cpath id='sun-eye' d='M576.005 426.898c-6.87.006-20.616 3.651-20.612 20.054.004 17.057 13.742 21.669 20.612 21.664 6.871-.005 20.613-5.817 20.613-21.696 0-15.879-13.742-20.027-20.613-20.022z'/%3E%3Cpath d='M705.501 426.898c-6.87.006-20.616 3.651-20.612 20.054.004 17.057 13.742 21.669 20.612 21.664 6.871-.005 20.613-5.817 20.613-21.696 0-15.879-13.742-20.027-20.613-20.022z'/%3E%3C/g%3E%3C/svg%3E")}#${this.defaultId} .darkmode-toggle .toggle-slider{cursor:pointer;display:flex;width:var(--t-width);height:var(--t-height);position:relative;border-radius:25px 0 0 25px;border:2px solid var(--sky-blue-60);background-color:var(--sky-blue-75)}#${this.defaultId} .darkmode-toggle .toggle-slider:after{content:"";display:inline-block;width:var(--b-width);height:var(--b-height);position:absolute;top:var(--b-top);left:var(--b-left);border-radius:50%;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 432 427' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='1.5'%3E%3Cg id='SUN' transform='translate(-424.047 -239.811)'%3E%3Ccircle cx='640.753' cy='452.963' r='113.272' fill='%23ffe300' stroke='%23000' stroke-width='8'/%3E%3Cpath id='sun-shadow' d='M746.735 456.266c-21 129-212.959 115.208-212-3 1.865 136.625 200 145 212 3z' fill='%23ffb900' stroke='%23ffb900' stroke-width='8'/%3E%3Cpath id='sun-mouth' d='M624.71 460.049c.891 25.907 34.414 21.584 32.626.901' fill='none' stroke='%23000' stroke-width='8'/%3E%3Cg id='shine' fill='%23ffe300' stroke='%23000' stroke-width='8'%3E%3Cpath d='M495.247 311.376a6.126 6.126 0 00-8.66 0l-2.165 2.165a6.128 6.128 0 000 8.66l45.806 45.805a6.126 6.126 0 008.66 0l2.165-2.165a6.125 6.125 0 000-8.659l-45.806-45.806z'/%3E%3Cpath d='M648.408 249.934a6.127 6.127 0 00-6.124-6.123h-3.061a6.127 6.127 0 00-6.124 6.123v64.779a6.127 6.127 0 006.124 6.124h3.061a6.127 6.127 0 006.124-6.124v-64.779z'/%3E%3Cpath d='M434.171 431.37a6.127 6.127 0 00-6.124 6.123v3.062a6.127 6.127 0 006.124 6.124h64.779a6.127 6.127 0 006.123-6.124v-3.062a6.126 6.126 0 00-6.123-6.123h-64.779z'/%3E%3Cpath d='M780.449 439.024a6.127 6.127 0 00-6.124 6.124v3.061a6.127 6.127 0 006.124 6.124h64.779a6.127 6.127 0 006.123-6.124v-3.061a6.127 6.127 0 00-6.123-6.124h-64.779z'/%3E%3Cpath d='M797.102 316.401a6.126 6.126 0 000-8.66l-2.165-2.165a6.126 6.126 0 00-8.66 0l-45.805 45.806a6.126 6.126 0 000 8.66l2.165 2.165a6.127 6.127 0 008.659 0l45.806-45.806z'/%3E%3Cpath d='M786.277 594.55a6.128 6.128 0 008.66 0l2.165-2.165a6.126 6.126 0 000-8.66l-45.806-45.806a6.127 6.127 0 00-8.659 0l-2.165 2.165a6.126 6.126 0 000 8.66l45.805 45.806z'/%3E%3Cpath d='M630.991 656.597a6.127 6.127 0 006.123 6.124h3.062a6.127 6.127 0 006.124-6.124v-64.778a6.127 6.127 0 00-6.124-6.124h-3.062a6.127 6.127 0 00-6.123 6.124v64.778z'/%3E%3Cpath d='M484.422 583.725a6.128 6.128 0 000 8.66l2.165 2.165a6.128 6.128 0 008.66 0l45.806-45.806a6.126 6.126 0 000-8.66l-2.165-2.165a6.128 6.128 0 00-8.66 0l-45.806 45.806z'/%3E%3C/g%3E%3Cpath id='sun-eye' d='M576.005 426.898c-6.87.006-20.616 3.651-20.612 20.054.004 17.057 13.742 21.669 20.612 21.664 6.871-.005 20.613-5.817 20.613-21.696 0-15.879-13.742-20.027-20.613-20.022z'/%3E%3Cpath d='M705.501 426.898c-6.87.006-20.616 3.651-20.612 20.054.004 17.057 13.742 21.669 20.612 21.664 6.871-.005 20.613-5.817 20.613-21.696 0-15.879-13.742-20.027-20.613-20.022z'/%3E%3C/g%3E%3C/svg%3E")}@media (prefers-reduced-motion:no-preference){#${this.defaultId} .darkmode-toggle .toggle-slider:after{transition:all .3s ease-in}}`;
}

class ToggleSimpleTheme extends ThemeInterface {
  defaultId = "adm-toggle";
  defaultPosition = `
    position:fixed;
    bottom:8%;
    right:0;
    z-index: 999999999999999999999999999999;
  `;

  html = `<div>  
    <input type="checkbox" id="switch" class="switch"/>
    <label id="label" for="switch" class ="label">
      <i class="fas fa-moon"></i>
      <i class="fas fa-sun"></i>
      <div class="ball"></div>
    </label>
  </div>`;

  style = `
    #${this.defaultId} {
      box-sizing: border-box;
    }
    
    #${this.defaultId} .switch {
      opacity: 0;
      position: absolute;
    }
    
    #${this.defaultId} .label {
      background: #359DE6;
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 3px;
      border-radius: 50px;
      position: relative;
      width: 55px;
      height: 26px;
    }
    
    #${this.defaultId} .ball {
      background-color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 2px;
      left: 2px;
      width: 22px;
      height: 22px;
      transition: transform 0.3s linear;
    }
    #${this.defaultId} .switch:checked + .label .ball {
      transform: translateX(29px);
    }
    
    #${this.defaultId} .fa-moon {
      color: #cccc;
    }
    
    #${this.defaultId} .fa-sun {
      color: #F5EC30;
    }
    `;
}

class ToggleFancyShapeTheme extends ThemeInterface {
  defaultId = "adm-toggle";
  defaultPosition = `
    position:fixed;
    bottom:8%;
    right:0;
    z-index: 999999999999999999999999999999;
  `;

  html = `<div>
    <input id="darkmode-toggle" type="checkbox">
    <label for="darkmode-toggle">Dark Mode</label>
  </div>`;
  style = `
  @charset "UTF-8";
  *, *:before, *:after {
    box-sizing: border-box;
  }
  
  body {
    transition: background-color 0.5s ease-out, color 0.5s ease-out;
    background-color: var(--color-bg);
    color: var(--color-text);
  }
  
  :root {
    --color-bg: #fff;
    --color-text: #333;
  }
  :root .darkmode {
    --color-bg: #222;
    --color-text: steelblue;
  }
  
  #darkmode-toggle {
    position: absolute;
    width: 0;
    height: 0;
    visibility: hidden;
  }
  #darkmode-toggle + label {
    position: relative;
    display: block;
    width: 4rem;
    height: 2rem;
    background-color: var(--color-text);
    border-radius: 2rem;
    text-indent: -100em;
  }
  #darkmode-toggle + label:after {
    content: "";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    display: inline-block;
    font-size: 1em;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--color-text);
    text-indent: 0;
    padding: 0.25rem;
    text-align: left;
    position: absolute;
    top: 0.25rem;
    left: 0.25rem;
    width: 1.5rem;
    height: 1.5rem;
    background-color: var(--color-bg);
    border-radius: 1.5rem;
    transition: left 0.2s ease-out, transform 0.2s ease-out, width 0.2s ease-out;
  }
  #darkmode-toggle + label:hover:after, #darkmode-toggle + label:active:after {
    width: 2rem;
  }
  #darkmode-toggle:checked + label:after {
    content: "";
    left: calc(100% - 0.25rem);
    transform: translateX(-100%);
    text-align: right;
  }
  
  /*body:before{
    visibility:hidden;
    position:absolute;
    z-index:-1;
    @media (prefers-color-scheme: dark) {
      content:'dark';
    }
    @media (prefers-color-scheme: light) {
      content:'light';
    }
  }*/
  @media (prefers-color-scheme: dark) {
    body {
      --pref:"dark";
    }
  }
  @media (prefers-color-scheme: light) {
    body {
      --pref:"light";
    }
  }
  `;
}
