
console.log(' ');

console.log('111.js is workingin fine ..................');

console.log(' ');

console.log('what root node of any document: ', );

const rootNode = document.getRootNode();

const allChildofRootElement = rootNode.childNodes;

console.log(' ', );

console.log(allChildofRootElement);

console.log(' ');

htmlElementNode = allChildofRootElement[1];

console.log(htmlElementNode);

const allChildOfHTMLElementNode = htmlElementNode.childNodes;

console.log(' ');

console.log(allChildOfHTMLElementNode);

const headElementNode = allChildOfHTMLElementNode[0];

console.log(' ');

console.log(headElementNode);

console.log(' ');

const text1ElementNode = allChildOfHTMLElementNode[1];

console.log(text1ElementNode);

console.log(' ');

const bodyElementNode = allChildOfHTMLElementNode[2];

console.log(bodyElementNode);

console.log(' ');

const parentNodeOfHead = headElementNode.parentNode;

console.log(parentNodeOfHead);

console.log(' ');

const nextSiblingHead = headElementNode.nextSibling;

console.log(nextSiblingHead.nextSibling);

const headChild = headElementNode.childNodes;

console.log(headChild);

console.log(' ');

const headerMainHeading = document.querySelector('#main-heading');

console.log(headerMainHeading);

headerMainHeading.parentNode.parentNode.style.backgroundColor= 'red';

console.log(' ');

const section = document.head;

console.log(section.childNodes);

console.log(section.children);
