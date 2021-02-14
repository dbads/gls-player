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

  // show some content near search input
  // const input = $('input[name=q]');
  // $('input[name=q]').val('nice bayy');

  const tooltip = $(
    '<div role="region" style="z-index: 1" tabindex="999" aria-label="Steps"><div data-iridize-role="title" class="popover-title"><div class="view-less-container"><div class="view-less"><button class="icon-chevron-down" aria-label="View less contents" ></button></div><button aria-label="Close" data-iridize-role="closeBt">&#10005;</button></div></div><div class="popover-content"><div data-iridize-id="content"></div><div class="view-more"><button class="icon-chevron-up" aria-label="View more contents" ></button></div></div><div class="stFooter" data-iridize-id="footer"><div><span class="steps-count">Step <span data-iridize-role="stepCount"></span>/<span data-iridize-role="stepsCount"></span></span><button tabindex="999" class="prev-btn default-later-btn" data-iridize-role="laterBt">Remind me later</button><span class="powered-by">Powered by </span></div><div data-iridize-role="nextBtPane"><button tabindex="999" class="prev-btn default-prev-btn" data-iridize-role="prevBt" aria-label="" >Back</button><a tabindex="999" role="button" aria-label="" class="next-btn" data-iridize-role="nextBt" href="javascript:void(0);">Next</a></div></div></div>',
  );

  // const newButton = $('<button id="btn" class="btn">Noice button</button>'); // new button
  // const newSpan = $('<span>START</span>').addClass('spn'); // new <span> with class="spn"

  const customTooltip = $(
    '<div id="step1"><tr><td><button id="back" class="btn btn-primary">Back</button></td><td><button id="back" class="btn btn-primary">Next</button></td</tr></div>',
  );

  // Welcome tooltip
  const welcome = $(
    '<div id="step1" style="background-color: #85CAF6; border-radius: 5%; border: 2px solid black; display: inline-block; padding: 10px;"><h3 style="color: white;">Welcome to Google.com</h3><button class="back" style="background-color: #4CAF50;border: none;color: white;padding: 5px 5px;text-align: center;text-decoration: none;display: inline-block;font-size: 12px;margin: 0px 5px 5px 5px;cursor: pointer;">Back </button><button class="next" style="background-color: #4CAF50;border: none;color: white;padding: 5px 5px;text-align: center;text-decoration: none;display: inline-block;font-size: 12px;margin: 0px;cursor: pointer;">Next </button><span style="float:right;height: 16px;width: 16px;display: inline-block;background-color: #85CAF6;position: relative;transform: rotate(134deg);bottom: -29px;border-width: inherit;border-style: solid;border-color: black black #85CAF6 #85CAF6;"></span></div>',
  );
  welcome.insertBefore('.k1zIA');

  // handle click on back or next
  $('.next').on('click', function () {
    // insert the "newSpan" at the beginning inside all DIVs with class="cls"
    $('#step1').hide();
  });
  // ----------------*****--------------

  console.log('done.');
}
