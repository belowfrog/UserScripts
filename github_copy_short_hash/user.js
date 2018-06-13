// ==UserScript==
// @name         copy 8-bit commit hash
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  in commits page, add new copy button besides origin button for copy short commit hash
// @author       Belowfrog
// @include      /https?:\/\/(www\.)?github/
// @license      MIT
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  const copyBtns = document.querySelectorAll('button[data-clipboard-text]')
  copyBtns.forEach(node => {
    if (node.dataset.clipboardText.length) {
      const newNode = node.cloneNode(true)
      newNode.dataset.clipboardText = node.dataset.clipboardText.substr(0, 8);
      newNode.setAttribute('aria-label', 'copy 8-bit commit hash')
      node.parentNode.insertBefore(newNode, node)
    }
  })
})();
