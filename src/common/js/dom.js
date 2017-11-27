/**
 * Created by  blue dong on 2017/11/24.
 */
'use strict';

export function addClass(elem, className) {
  if (hasClass(elem, className)) return;
  let newClass = elem.className.split(' ');
  newClass.push(className);
  elem.className = newClass.join(' ');
}

export function hasClass(elem, className) {
  let reg = new RegExp('(^|\\s)' + className + '($|\\s)');
  return reg.test(elem.className);
}

export function getData(elem, name, value) {
  name = 'data-' + name;
  if (value) {
    return elem.setAttribute(name, value);
  } else {
    return elem.getAttribute(name);
  }
}

let elementStyle = document.createElement('div').style;

let vendor = (() => {
  let transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  };
  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key;
    }
  }
  return false;
})();

export function prefixStyle(style) {
  if (vendor === false) {
    return false;
  }
  if (vendor === 'standard') {
    return style;
  }
  return vendor + style.charAt(0).toUpperCase() + style.substr(1);
}
