// @ts-nocheck
console.log('hello there from content---');

// listen for request to start GLS
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log('got a message ---');
  console.log(sender.tab ? 'from a content script:' + sender.tab.url : 'from the extension');
  console.log(request);
  sendResponse('Starting GLS ...');
});

// when GLS has completed send message to extension
// chrome.runtime.sendMessage('GLS is completed.', function (response) {
//   console.log(response);
// });
