# Dynamic Dark Mode

Javascript code to apply dark mode in any design.
But with a little feature allow programmer to change the toggle theme with any toggler you got it form codepen.io or whatever.

**Hope you happy coding.**

## Built With

- Vanilla JS
- OOP paradigm
- Strategy design pattern

## Getting Started

This is how you add dark mode feature in your project

```html
<script
  src="https://raw.githubusercontent.com/mohamed17717/dynamic-dark-mode/master/button-themes.js"
  defer
></script>
<script
  src="https://raw.githubusercontent.com/mohamed17717/dynamic-dark-mode/master/script.js"
  defer
></script>
```

Just add this script tag inside your template

## Advanced Usage

### Add New Theme

- create class extends form ThemeInterface
- add the html, css to its places in class
  - make sure html is contain `input[type="checkbox"]`
  - style is scoped to the id you set in class (optional to make sure no conflict is happening)
- update theme inside the main class `DynamicDarkMode`

```js
class NEW_THEME extends ThemeInterface {
  defaultId = undefined; // any unique id
  defaultPosition = undefined; // where you like to appear
  html = undefined; // html of your toggle
  style = undefined; // css of your toggle
}

class DynamicDarkMode {
  // update theme class here
  buttonTheme = new NEW_THEME();
  // code...
}
```

### Change Theme

- just copy a ready class from `button-themes.js` file
- follow the previous steps to make it work

### In Case

If invert style made something wrong or you wanna to skip specific element form inverted

just update the array of `rotatedElementsSelectors` with the new selector you wanted.

```js
class ToggleAction {
  // code ...

  rotatedElementsSelectors = ["html", "img", "video"]; // add new selectors in this array

  // code....
}
```

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Mohamed Mahmoud - [LinkedIn](https://linkedin.com/in/mohamed17717/) - d3v.mhmd@gmail.com
