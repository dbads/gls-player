$('#startGLS').on('click', function () {
  // send request to startGLS to current active tab, google.com in this case
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (tabs[0].id) {
      const request = 'start GLS';
      chrome.tabs.sendMessage(tabs[0].id, request, function (response) {
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
