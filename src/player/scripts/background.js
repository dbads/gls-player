$('#startGLS').on('click', function () {
  // send request to startGLS to current active tab, google.com in this case
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (tabs[0].id) {
      // startGLS only if google.com is opened in current tab
      if (tabs[0].url === 'https://www.google.com/') {
        const request = 'start GLS';
        chrome.tabs.sendMessage(tabs[0].id, request, function (response) {
          console.log(tabs[0]);
          console.log(response);
          // restrict starting gls while its already running
          if (response.status === 'success') {
            console.log(response.message);
            $('#startGLS').prop('disabled', true);
          }
        });
      } else {
        // show error message
        $('#error').css('display', 'block');

        // hide message about 3 seconds
        setTimeout(() => {
          $('#error').css('display', 'none');
        }, 1000);
      }
    } else {
      // log about this
      console.log('No active tab.');
    }
  });
});
