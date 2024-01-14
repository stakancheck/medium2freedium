// ==UserScript==
// @name         Medium to Freedium
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Replace medium.com with freedium.cfd
// @author       Stakancheck
// @match        https://medium.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Create a button
    var button = document.createElement('button');
    button.textContent = 'freedium';
    button.style.position = 'fixed';
    button.style.right = '10px';
    button.style.bottom = '10px';
    button.style.zIndex = 9999;

    // Add click event to the button
    button.addEventListener('click', function() {
        // Replace medium.com with freedium.cfd in the current URL
        var newUrl = window.location.href.replace('medium.com', 'freedium.cfd');
        // Open the new URL in the same tab
        window.location.href = newUrl;
    });

    // Add the button to the body of the document
    document.body.appendChild(button);
})();
