

    // ==UserScript==
    // @name        Oracle Signup Bypass
    // @namespace   Violentmonkey Scripts
    // @match       https://*.oracle.com/*
    // @grant       none
    // @license      MIT
    // @version     3.0
    // @author      - CypherpunkSamurai
    // @description        Download from Oracle videos without signup.
    // ==/UserScript==
     
    // This removes the disabled-class from the download links
    function remove_disable(e) {
      e.setAttribute("href", e.getAttribute("data-file").replace("download.oracle.com", "edelivery.oracle.com"));
    }
     
    document.querySelectorAll(".otable-w2 .license-link").forEach(remove_disable);

