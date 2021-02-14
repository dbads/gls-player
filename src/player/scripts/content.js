// listen for request to start GLS from extension
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  sendResponse({ message: 'Starting GLS ...', status: 'success' });
  startGLS();
});

/**
 * tooltip creation, handle back/next/cancel operations
 */
function startGLS() {
  console.log('GLS in progress ...');

  // to keep track of all the steps/tooltips
  const stepCount = 4;
  // to keep track of the current open steps/tooltips
  let currentStep = 1;

  // STEP:1 Welcome tooltip
  const welcomeTooltip = $(
    '<div id="step1" style="background-color: rgb(133, 202, 246); border-radius: 5%; border: 2px solid black; display: inline-block; padding: 10px; margin-top: 26px; margin-left: -166px;"><h3 style="color: #163658;">Welcome to Google.com</h3><span class="cross" style="color: #080808;float: right;top: -56px;position: relative;right: -12px;border-radius: 50%;cursor: pointer;width: 17px;font-size: 12px;"> ✖ </span><button class="next" style="background-color: #4CAF50;border: none;color: white;padding: 5px 5px;text-align: center;text-decoration: none;display: inline-block;font-size: 12px;margin: 0px;cursor: pointer;border-radius: 6px;position: relative;right: -149px;bottom: -3px;z-index: 1;">Next ❯</button><span style="float:right;height: 16px;width: 16px;display: inline-block;background-color: #85CAF6;position: relative;transform: rotate(134deg);bottom: -24px;border-width: inherit;border-style: solid;border-color: black black #85CAF6 #85CAF6;"></span></div>',
  );
  // insert Welcome Tooltip before Google Logo
  welcomeTooltip.insertBefore('.k1zIA');
  // ----------------*****--------------

  // STEP:2 Images Search tooltip
  const imageSearchTooltip = $(
    '<div id="step2" class="hide" style="background-color: rgb(133, 202, 246); border-radius: 5%; border: 2px solid black; display: inline-block; padding: 10px; margin: 47px; position: absolute; right: 0px;"><h3 style="color: #163658;">Click Images to go to image section</h3><span class="cross" style="color: #080808;float: right;top: -1px;position: inherit;right: 0px;border-radius: 50%;cursor: pointer;width: 17px;font-size: 12px;"> ✖ </span><button class="back" style="background-color: #4CAF50;border: none;color: white;padding: 5px 5px;text-align: center;text-decoration: none;display: inline-block;font-size: 12px;margin: 0px 5px 5px 5px;cursor: pointer;border-radius: 6px;position: absolute;left: 1px;bottom: 1px;">❮ Back </button><button class="next" style="background-color: #4CAF50;border: none;color: white;padding: 5px 5px;text-align: center;text-decoration: none;display: inline-block;font-size: 12px;margin: 0px;cursor: pointer;border-radius: 6px;position: absolute;right: 7px;bottom: 7px;">Next ❯</button><span style="left: 168px;height: 16px;width: 16px;display: inline-block;background-color: #85CAF6;position: relative;transform: rotate(134deg);bottom: 77px;border-width: inherit;border-style: solid;border-color: #85CAF6 #85CAF6 black black;"></span></div>',
  );
  imageSearchTooltip.insertAfter('.gb_Zd, .gb_Ta, .gb_Kd');
  $('#step2').hide();
  // ----------------*****--------------

  // STEP:3 Search input tooltip
  const searchInputTooltip = $(
    '<div id="step3" style="background-color: rgb(133, 202, 246);border-radius: 5%;border: 2px solid black;display: inline-block;padding: 10px;margin: 16px;position: absolute;left: -194px;top: 48px;"><h3 style="color: #163658;">Enter a search query here and click ENTER!</h3><span class="cross" style="color: #080808;float: right;top: -58px;position: relative;right: -9px;border-radius: 50%;cursor: pointer;width: 17px;"> ✖ </span><button class="back" style="background-color: #4CAF50;border: none;color: white;padding: 5px 5px;text-align: center;text-decoration: none;display: inline-block;font-size: 12px;margin: 0px 5px 5px 5px;cursor: pointer;border-radius: 6px;position: relative;left: -5px;bottom: -6px;">❮ Back </button><button class="next" style="background-color: #4CAF50;border: none;color: white;padding: 5px 5px;text-align: center;text-decoration: none;display: inline-block;font-size: 12px;margin: 0px;cursor: pointer;border-radius: 6px;position: relative;left: 241px;bottom: -6px;">Next ❯</button><span style="left: 214px;height: 16px;width: 16px;display: inline-block;background-color: #85CAF6;transform: rotate(134deg);bottom: 72px;border-width: inherit;border-style: solid;border-color: #85CAF6 #85CAF6 black black;position: relative;"></span></div>',
  );
  searchInputTooltip.insertAfter('.RNNXgb');
  $('#step3').hide();
  // ----------------*****--------------

  // STEP:4 Voice Search input tooltip
  const voiceSearchTooltip = $(
    '<div id="step4" style="background-color: rgb(133, 202, 246); border-radius: 5%; border: 2px solid black; display: inline-block; padding: 10px; margin: 16px; position: absolute; right: -166px; top: -134px;"><h3 style="color: #163658;">Click to search by voice!</h3><span class="cross" style="color: #080808;float: right;top: -58px;position: relative;right: -9px;border-radius: 50%;cursor: pointer;width: 17px;"> ✖ </span><button class="back" style="background-color: #4CAF50;border: none;color: white;padding: 5px 5px;text-align: center;text-decoration: none;display: inline-block;font-size: 12px;margin: 0px 5px 5px 5px;cursor: pointer;border-radius: 6px;position: relative;left: -9px;bottom: -6px;z-index: 1;">❮ Back </button><span style="right: 41px;height: 16px;width: 16px;display: inline-block;background-color: #85CAF6;transform: rotate(134deg);bottom: -33px;border-width: inherit;border-style: solid;border-color: black black #85CAF6 #85CAF6;position: relative;"></span></div>',
  );
  voiceSearchTooltip.insertAfter('.RNNXgb');
  $('#step4').hide();
  // ----------------*****--------------

  // handle click on back/ next/cross button on Tooltips
  $('.next').on('click', function (e) {
    e.preventDefault();
    const nextStep = currentStep + 1;
    if (nextStep <= stepCount) {
      $('#step' + currentStep).hide();
      $('#step' + nextStep).show();
      currentStep = nextStep;
    }
  });

  $('.back').on('click', function (e) {
    e.preventDefault();
    const prevStep = currentStep - 1;
    if (prevStep >= 1) {
      $('#step' + currentStep).hide();
      $('#step' + prevStep).show();
      currentStep = prevStep;
    }
  });

  $('.cross').on('click', function (e) {
    e.preventDefault();
    for (let i = 1; i <= stepCount; ++i) {
      $('#step' + i).remove();
    }
  });
  // ----------------*****--------------
}
