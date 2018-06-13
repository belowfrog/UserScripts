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
// @version      1.0
// @grant        none
// ==/UserScript==

;(function () {
  'use strict'
  const ARIA_LABEL_HINT = 'copy 8-bit commit hash'
  const SUBSTR_LENGTH = 8
  const USE_COPY_NODE = !!document.querySelector('clipboard-copy')

  // button[data-clipboard-text]
  function handleCopyBtn (btn) {
    if (btn.dataset.clipboardText) {
      const newNode = btn.cloneNode(true)
      newNode.dataset.clipboardText = btn.dataset.clipboardText.substr(0, SUBSTR_LENGTH)
      newNode.setAttribute('aria-label', ARIA_LABEL_HINT)
      btn.parentNode.insertBefore(newNode, btn)
    }
  }

  // clipboard-copy
  function handleCopyNode (copyNode) {
    if (copyNode.value) {
      const newNode = copyNode.cloneNode(true)
      newNode.value = copyNode.value.substr(0, SUBSTR_LENGTH)
      newNode.setAttribute('aria-label', ARIA_LABEL_HINT)
      copyNode.parentNode.insertBefore(newNode, copyNode)
    }
  }

  const copyBtns = USE_COPY_NODE
    ? document.querySelectorAll('clipboard-copy')
    : document.querySelectorAll('button[data-clipboard-text]')

  copyBtns.forEach(node => {
    if (node.tagName === 'BUTTON') handleCopyBtn(node)
    else if (node.tagName === 'CLIPBOARD-COPY') handleCopyNode(node)
  })
})()
