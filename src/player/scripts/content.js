console.log('hello there from content---');

// listen for request to start GLS
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // console.log('got a message ---');
  // console.log(sender.tab ? 'from a content script:' + sender.tab.url : 'from the extension');
  console.log('New message from extension : ', request);
  sendResponse('Starting GLS ...');
  startGLS();
});

// when GLS has completed send message to extension
// chrome.runtime.sendMessage('GLS is completed.', function (response) {
//   console.log(response);
// });

function startGLS() {
  console.log('working on gls ...');

  const stepCount = 3;
  let currentStep = 1;
  // Welcome tooltip
  const welcome = $(
    '<div id="step1" style="background-color: #85CAF6;border-radius: 5%;border: 2px solid black;display: inline-block;padding: 10px;margin-top: 26px;margin-left: -166px;"><h3 style="color: white;">Welcome to Google.com</h3><button class="back" style="background-color: #4CAF50;border: none;color: white;padding: 5px 5px;text-align: center;text-decoration: none;display: inline-block;font-size: 12px;margin: 0px 5px 5px 5px;cursor: pointer;">Back </button><button class="next" style="background-color: #4CAF50;border: none;color: white;padding: 5px 5px;text-align: center;text-decoration: none;display: inline-block;font-size: 12px;margin: 0px;cursor: pointer;">Next </button><span style="float:right;height: 16px;width: 16px;display: inline-block;background-color: #85CAF6;position: relative;transform: rotate(134deg);bottom: -29px;border-width: inherit;border-style: solid;border-color: black black #85CAF6 #85CAF6;"></span></div>',
  );
  welcome.insertBefore('.k1zIA');
  // ----------------*****--------------

  // Images Search tooltip
  const imageSearch = $(
    '<div id="step2" class="hide" style="background-color: #85CAF6;border-radius: 5%;border: 2px solid black;display: inline-block;padding: 10px;margin: 47px;position: absolute;right: 0;"><h3 style="color: white;">Click Images to go to image section</h3><button class="back" style="background-color: #4CAF50;border: none;color: white;padding: 5px 5px;text-align: center;text-decoration: none;display: inline-block;font-size: 12px;margin: 0px 5px 5px 5px;cursor: pointer;">Back </button><button class="next" style="background-color: #4CAF50;border: none;color: white;padding: 5px 5px;text-align: center;text-decoration: none;display: inline-block;font-size: 12px;margin: 0px;cursor: pointer;">Next </button><span style="left: 87px;height: 16px;width: 16px;display: inline-block;background-color: #85CAF6;position: relative;transform: rotate(134deg);bottom: 77px;border-width: inherit;border-style: solid;border-color: #85CAF6 #85CAF6 black black;"></span></div>',
  );
  imageSearch.insertAfter('.gb_Zd, .gb_Ta, .gb_Kd');
  $('#step2').hide();

  // Images Search tooltip
  const searchQuery = $(
    '<div id="step3" style="background-color: #85CAF6;border-radius: 5%;border: 2px solid black;display: inline-block;padding: 10px;margin: 16px;position: absolute;left: -187px;top: 48px;"><h3 style="color: white;">Enter a search query here and click ENTER!</h3><button class="back" style="background-color: #4CAF50;border: none;color: white;padding: 5px 5px;text-align: center;text-decoration: none;display: inline-block;font-size: 12px;margin: 0px 5px 5px 5px;cursor: pointer;">Back </button><button class="next" style="background-color: #4CAF50;border: none;color: white;padding: 5px 5px;text-align: center;text-decoration: none;display: inline-block;font-size: 12px;margin: 0px;cursor: pointer;">Next </button><span style="left: 163px;height: 16px;width: 16px;display: inline-block;background-color: #85CAF6;position: relative;transform: rotate(134deg);bottom: 72px;border-width: inherit;border-style: solid;border-color: #85CAF6 #85CAF6 black black;"></span></div>',
  );
  searchQuery.insertAfter('.RNNXgb');
  $('#step3').hide();

  // handle click on back or next
  $('.next').on('click', function (e) {
    e.preventDefault();
    const nextStep = currentStep + 1;
    if (nextStep > 1 && nextStep <= stepCount) {
      $('#step' + currentStep).hide();
      $('#step' + nextStep).show();
      currentStep = nextStep;
    }
  });

  $('.back').on('click', function (e) {
    e.preventDefault();
    const prevStep = currentStep - 1;
    if (prevStep >= 1 && prevStep <= stepCount) {
      $('#step' + currentStep).hide();
      $('#step' + prevStep).show();
      currentStep = prevStep;
    }
  });
  // ----------------*****--------------

  console.log('done.');
}
