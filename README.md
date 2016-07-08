# KonamiCode.js

KonamiCode.js lets you call a function from a browser when a user enters the Konami Code:

**Up, Up, Down, Down, Left, Right, Left, Right, B, A**


## Usage
```
function myCallback(){
    alert('You entered the code.');
}

new KonamiCode(myCallback);
```


If you want to un-bind the keyboard listener:

```
let myKonamiCode = new KonamiCode(myCallback);
myKonamiCode.destroy();
```

You can also pass an array of `KeyboardEvent.keyCode`s if you want to use a different sequence:

```
new KonamiCode(['52, 50, 48, 66, 76, 65, 90, 69, 73, 84'], myCallback);
```


## Installation, Build

You can just drop `dist/konamicode.js` straight into a script tag in your browser, but if you want to use it as a module or hack on it yourself:

```
npm install
npm run build
```
