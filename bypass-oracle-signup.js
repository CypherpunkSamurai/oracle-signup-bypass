// ==UserScript==
// @name        Oracle Signup Bypass
// @namespace   Violentmonkey Scripts
// @match       https://*.oracle.com/*
// @grant       none
// @license      MIT
// @version     1.0
// @author      - CypherpunkSamurai
// @description        Download from Oracle videos without signup.
// ==/UserScript==

// This removes the disabled-class from the download links
document.querySelectorAll(".otable-w2 .license-link").forEach(e => {
  e.classList = ["license-link" "icn-download"];
});
