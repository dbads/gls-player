$('#startGLS').on('click', function () {
  // start gls
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log('sending message from back...');
    if (tabs[0].id) {
      chrome.tabs.sendMessage(tabs[0].id, 'Start GLS', function (response) {
        console.log(response);
        // restrict starting gls while its already running
        if (response.status === 'success') {
          console.log(response.message);
          $('#startGLS').prop('disabled', true);
        }
      });
    } else {
      console.log('No active tab.');
    }
  });
});
