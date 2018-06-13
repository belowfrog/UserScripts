// ==UserScript==
// @name         copy 8-bit commit hash
// @namespace    https://github.com/belowfrog/UserScripts
// @description  in commits page, add new copy button besides origin button for copy short commit hash
// @author       belowfrog
// @license      MIT
// @icon         https://assets-cdn.github.com/pinned-octocat.svg
// @include      /https?:\/\/(www\.)?github/
// @homepage     https://github.com/belowfrog/UserScripts/tree/master/github_copy_short_hash
// @homepageURL  https://github.com/belowfrog/UserScripts/tree/master/github_copy_short_hash
// @supportURL   https://github.com/belowfrog/UserScripts/issues
// @downloadURL  https://github.com/belowfrog/UserScripts/tree/master/github_copy_short_hash/user.js
// @updateURL    https://github.com/belowfrog/UserScripts/tree/master/github_copy_short_hash/user.js
// @version      0.2
// @grant        none
// ==/UserScript==

;(function () {
  'use strict'
  const copyBtns = document.querySelectorAll('button[data-clipboard-text]')
  copyBtns.forEach(node => {
    if (node.dataset.clipboardText.length) {
      const newNode = node.cloneNode(true)
      newNode.dataset.clipboardText = node.dataset.clipboardText.substr(0, 8)
      newNode.setAttribute('aria-label', 'copy 8-bit commit hash')
      node.parentNode.insertBefore(newNode, node)
    }
  })
})()
