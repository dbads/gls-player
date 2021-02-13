// @ts-nocheck
console.log('from background---');

$('#startGLS').on('click', function () {
  console.log('hello--- back');

  // start gls
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log('sending message from back...');
    chrome.tabs.sendMessage(tabs[0].id, 'Start GLS', function (response) {
      console.log(response);
    });
  });
});
