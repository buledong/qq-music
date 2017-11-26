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
