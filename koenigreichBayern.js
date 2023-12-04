// ==UserScript==
// @name        Königreich Bayern
// @description Replaces every occurrence of "Bayern" with "Königreich Bayern" and "Söder" with "König Ludiwg II von Bayern"
//
// @version     1.0.0
// @license     free
// @author      Boss Of Trees
// @homepage	https://github.com/Boss-of-Trees/Bayern-Usercript
// @encoding    utf-8
//
// @namespace   Boss Of Trees
// @include     *
// @match       *
// @run-at      document-start
// ==/UserScript==

function getAllTextNodes(node) {
    var textNodes = [];
    if(node.nodeType === Node.TEXT_NODE){
        textNodes.push(node);
    } else {
        var children = node.childNodes;
        for(var i = 0; i < children.length; i++){
            textNodes = textNodes.concat(getAllTextNodes(children[i]));
        }
    }
    return textNodes;
}

function replaceText() {
    var allTextNodes = getAllTextNodes(document);
    allTextNodes.forEach(function (node){

        node.nodeValue = node.nodeValue.replace(/Bayern|Freistaat Bayern/g, "Königreich Bayern");

        node.nodeValue = node.nodeValue.replace(/Söder|Markus Söder|Ministerpräsident Markus Söder/g, "König Ludwig II von Bayern");
      
    	});
}

window.onload = replaceText();
