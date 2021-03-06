// @ts-nocheck
__5szm2kaj({
  success: 1,
  error: 0,
  data: {
    structure: {
      classes: "",
      url: "",
      steps: [
        {
          route: "0",
          id: "1",
          uid: "985-1",
          action: {
            type: "tip",
            contents: {
              "#content":
                "<p>Welcome to <em><strong>Google</strong></em>!</p>\n",
            },
            roleTexts: {},
            placement: "right",
            classes: "showPrevBt",
            selector: "#hplogo",
            stepOrdinal: 1,
            onlyOneTip: true,
            watchSelector: true,
            warningTimeout: 3000,
            exposeType: "both",
            fixed: false,
            watchDog: true,
            wdInterval: 400,
          },
          followers: [
            {
              condition: "true",
              next: "3",
            },
          ],
        },
        {
          route: "0",
          id: "3",
          uid: "49-2",
          next: {
            selector: '.gb_g:contains("Images")',
            event: "click",
          },
          action: {
            type: "tip",
            contents: {
              "#content":
                "<p>Click <strong>Images</strong> to go to images section</p>\n",
            },
            roleTexts: {},
            placement: "right",
            classes: "hideNextBt showPrevBt",
            selector: '.gb_g:contains("Images")',
            stepOrdinal: 2,
            onlyOneTip: true,
            watchSelector: true,
            warningTimeout: 3000,
            exposeType: "both",
            fixed: false,
            watchDog: true,
            wdInterval: 400,
          },
          followers: [
            {
              condition: "true",
              next: "4",
            },
          ],
        },
        {
          route: "0",
          id: "4",
          uid: "313-1",
          action: {
            type: "tip",
            contents: {
              "#content": "<p>Enter a search query here and click ENTER!</p>\n",
            },
            roleTexts: {},
            placement: "bottom",
            classes: "showPrevBt",
            selector: '[name="q"]',
            stepOrdinal: 3,
            onlyOneTip: true,
            watchSelector: true,
            warningTimeout: 3000,
            exposeType: "both",
            fixed: false,
            watchDog: true,
            wdInterval: 400,
          },
          followers: [
            {
              condition: "true",
              next: "5",
            },
          ],
        },
        {
          route: "0",
          id: "5",
          uid: "91-1",
          action: {
            type: "tip",
            contents: {
              "#content": "<p>Click here to search</p>\n",
            },
            roleTexts: {
              nextBt: "Done",
            },
            placement: "right",
            classes: "showPrevBt",
            selector: 'input[value="Google Search"]',
            stepOrdinal: 3,
            onlyOneTip: true,
            watchSelector: true,
            warningTimeout: 3000,
            exposeType: "both",
            fixed: false,
            watchDog: true,
            wdInterval: 400,
          },
          followers: [
            {
              condition: "true",
              next: "eol0",
            },
          ],
        },
        {
          route: "0",
          id: "eol0",
          action: {
            type: "closeScenario",
            stepOrdinal: 5,
            onlyOneTip: false,
            watchSelector: false,
            warningTimeout: 3000,
            exposeType: "both",
            fixed: false,
          },
          followers: [],
          uid: "226-1",
        },
      ],
    },
    tiplates: {
      tip: (
        <div role="region" tabindex="999" aria-label="Steps">
          <div data-iridize-role="title" class="popover-title">
            <div class="view-less-container">
              <div class="view-less">
                <button
                  class="icon-chevron-down"
                  aria-label="View less contents"></button>
              </div>
              <button aria-label="Close" data-iridize-role="closeBt">
                &#10005;
              </button>
            </div>
          </div>
          <div class="popover-content">
            <div data-iridize-id="content"></div>
            <div class="view-more">
              <button
                class="icon-chevron-up"
                aria-label="View more contents"></button>
            </div>
          </div>
          <div class="stFooter" data-iridize-id="footer">
            <div>
              <span class="steps-count">
                Step <span data-iridize-role="stepCount"></span>/
                <span data-iridize-role="stepsCount"></span>
              </span>
              <button
                tabindex="999"
                class="prev-btn default-later-btn"
                data-iridize-role="laterBt">
                Remind me later
              </button>
              <span class="powered-by">Powered by </span>
            </div>
            <div data-iridize-role="nextBtPane">
              <button
                tabindex="999"
                class="prev-btn default-prev-btn"
                data-iridize-role="prevBt"
                aria-label="">
                Back
              </button>
              <a
                tabindex="999"
                role="button"
                aria-label=""
                class="next-btn"
                data-iridize-role="nextBt"
                href="javascript:void(0);">
                Next
              </a>
            </div>
          </div>
        </div>
      ),
      hoverTip: (
        <div
          role="region"
          tabindex="999"
          aria-label="Hover Tip"
          class="ir-hoverTip">
          <div data-iridize-role="title" class="popover-title">
            <button aria-label="Close" data-iridize-role="closeBt">
              &#10005;
            </button>
          </div>
          <div class="popover-content">
            <div data-iridize-id="content"></div>
          </div>
          <div class="stFooter" data-iridize-id="footer">
            <div>
              <span class="steps-count">
                Step <span data-iridize-role="stepCount"></span>/
                <span data-iridize-role="stepsCount"></span>
              </span>
              <button
                tabindex="999"
                class="prev-btn default-later-btn"
                data-iridize-role="laterBt">
                Remind me later
              </button>
              <span class="powered-by">Powered by </span>
            </div>
            <div data-iridize-role="nextBtPane">
              <button
                tabindex="999"
                class="prev-btn default-prev-btn"
                data-iridize-role="prevBt"
                aria-label="">
                Back
              </button>
              <a
                tabindex="999"
                role="button"
                class="next-btn"
                data-iridize-role="nextBt"
                href="javascript:void(0);"
                aria-label="">
                Next
              </a>
            </div>
          </div>
        </div>
      ),
    },
    css:
      '/*START DYNAMIC*/@import url(//guidedlearning.oracle.com/player/edge/static/fonts/ir-lato.css);/*END DYNAMIC*/\n    \n    \r\n    \r\n    \r\n    \r\n        /*BASE IRIDIZE THEME CSS*/\r\n\r\n    div.sttip div.tooltip div.popover-inner {\r\n        background: #fff;\r\n        padding: 0px;\r\n        border-radius: 4px;\r\n    border: 1px solid #C8C8C8;\r\n    border: 1px solid rgba(150, 150, 150, .5);\r\n        -webkit-background-clip: padding-box;\r\n        /* for Safari */\r\n        background-clip: padding-box;\r\n        -webkit-box-shadow: none;\r\n        -moz-box-shadow: none;\r\n        box-shadow: none;\r\n        /* for IE9+, Firefox 4+, Opera, Chrome */\r\n        /*-webkit-box-shadow: none;\r\n        -moz-box-shadow: none;\r\n        box-shadow: none;*/\r\n    }\r\n\r\n    div.sttip div.tooltip.in.top div.tooltip-arrow {\r\n        bottom: -3px;\r\n        border-top: 27px solid;\r\n        border-left: 16px inset transparent;\r\n        border-right: 16px inset transparent;\r\n        z-index: -1;\r\n        width: 2px;\r\n        margin-left: -19px;\r\n        margin-bottom: 0px;\r\n    }\r\n\r\n    div.sttip div.tooltip.in.top div.tooltip-arrow.second-arrow {\r\n        bottom: -3px;\r\n        border-top: 22px solid;\r\n        border-left: 13px inset transparent;\r\n        border-right: 13px inset transparent;\r\n        margin-left: -15px;\r\n        z-index: 1;\r\n    }\r\n\r\n    div.sttip div.tooltip.in.right div.tooltip-arrow {\r\n        border-right: 27px solid;\r\n        left: -3px;\r\n        border-bottom: 16px inset transparent;\r\n        border-top: 16px inset transparent;\r\n        z-index: -1;\r\n        height: 2px;\r\n        margin-top: -17px;\r\n    }\r\n\r\n    div.sttip div.tooltip.in.right div.tooltip-arrow.second-arrow {\r\n        border-right: 22px solid;\r\n        left: -3px;\r\n        border-bottom: 13px inset transparent;\r\n        border-top: 13px inset transparent;\r\n        margin-top: -13px;\r\n        z-index: 1;\r\n    }\r\n\r\n    div.sttip div.tooltip.in.bottom div.tooltip-arrow {\r\n        border-bottom: 27px solid;\r\n        border-left: 16px inset transparent;\r\n        border-right: 16px inset transparent;\r\n        top: -3px;\r\n        margin-left: -19px;\r\n        z-index: -1;\r\n        width: 2px;\r\n    }\r\n\r\n    div.sttip div.tooltip.in.bottom div.tooltip-arrow.second-arrow {\r\n        border-bottom: 22px solid;\r\n        border-left: 13px inset transparent;\r\n        border-right: 13px inset transparent;\r\n        top: -3px;\r\n        margin-left: -15px;\r\n        z-index: 1;\r\n    }\r\n\r\n    div.sttip div.tooltip.in.left div.tooltip-arrow {\r\n        border-left: 27px solid;\r\n        border-bottom: 16px inset transparent;\r\n        border-top: 16px inset transparent;\r\n        right: -3px;\r\n        height: 2px;\r\n        z-index: -1;\r\n        margin-top: -17px;\r\n    }\r\n\r\n    div.sttip div.tooltip.in.left div.tooltip-arrow.second-arrow {\r\n        border-left: 22px solid;\r\n        border-bottom: 13px inset transparent;\r\n        border-top: 13px inset transparent;\r\n        right: -3px;\r\n        margin-top: -13px;\r\n        z-index: 1;\r\n    }\r\n\r\n    div.sttip div.tooltip.in.bottom-left div.tooltip-arrow {\r\n       margin-top:0;\r\n    }\r\n\r\n    div.sttip div.tooltip.in.top-right div.tooltip-arrow {\r\n        left: 11%\r\n    }\r\n\r\n    div.sttip div.tooltip.in.bottom-right div.tooltip-arrow {\r\n        left: 11%;\r\n        margin-top:0;\r\n    }\r\n\r\n    div.sttip div.tooltip div.popover-title {\r\n        overflow: visible;\r\n        background: none;\r\n    }\r\n      div.sttip .panel-container .guide-content .guide-search-textbox{\r\n          padding:0px 0px 5px 0px;\r\n}\r\n\r\n\r\n      div.sttip .panel-container .guide-content .guide-search-results{\r\noverflow-y:auto;\r\nmax-height: 232px;\r\nwidth:235px;\r\n}\r\n\r\n\r\n\r\ndiv.sttip .panel-container .guide-content .iridize-start-panel { background: url(\'//d2p93rcsj9dwm5.cloudfront.net/static/tipcms/img/startpanelicons.png\') no-repeat top left; width: 20px; height: 20px;  display: inline-block; vertical-align:top; margin-top:2px; margin-right:5px; }\r\ndiv.sttip .panel-container .guide-content .iridize-start-panel.knowledge-base { background-position: 0 0; }\r\ndiv.sttip .panel-container .guide-content .iridize-start-panel.link { background-position: 0 -20px; }\r\ndiv.sttip .panel-container .guide-content .iridize-start-panel.video { background-position:0 -60px; }\r\ndiv.sttip .panel-container .guide-content .iridize-start-panel.walkthrough { background-position: 0 -40px; }\r\n\r\n\r\n    div.sttip .panel-container .guide-content {\r\n        font-family: ir-lato,sans-serif;\r\n        color: #222222;\r\n        font-size: 14px;\r\n        line-height: 1.6;\r\n        min-height: 120px;\r\n        padding-bottom: 25px;\r\n       padding-left:25px\r\n    }\r\n    div.sttip .panel-container .guide-content-header-text{\r\n        padding: 0px 0px;\r\n        font-size: 12px;\r\n    }\r\n\r\n    div.sttip .panel-container .guide-content .search-textbox{\r\n        width:180px;\r\n        padding:0px 10px 0px 0px;\r\n        margin-top:12px;\r\n        background: url("//d2p93rcsj9dwm5.cloudfront.net/static/tipcms/img/search_icon.png") top right no-repeat;\r\n        padding-right:30px;\r\n        border-bottom:solid 1px #D8D8D8;\r\n        outline:none;\r\n        height:24px;\r\n        border-radius:0px;\r\n    }\r\n   .search-textbox:focus{\r\n             outline:none;\r\n    }\r\n\r\n    div.sttip .panel-container .guide-content .no-results{\r\n        width:160px;\r\n\r\n        padding:15px 10px 0px 0px;\r\n    }\r\n    div.sttip .panel-container .guide-content ul {\r\n        list-style-type: none;\r\n        padding: 0px;    }\r\n\r\n    div.sttip .panel-container .guide-content li {\r\n        padding: 10px 10px 0px 0px;\r\n        position: relative;\r\n        cursor: pointer;\r\n    }\r\n\r\n    div.sttip .panel-container .guide-content li .item-line {\r\n        display: block;\r\n        margin-top: 5px;\r\n        border-bottom: 1px solid #F0F0F0;\r\n    }\r\n\r\n    div.sttip .panel-container .guide-content li:last-child .item-line {\r\n      /*  visibility: hidden */\r\n    }\r\n\r\n    div.sttip .guide-list .item-text {\r\n        display: inline-block;\r\n        width: auto;\r\n        cursor: pointer;\r\n        border-radius: 4px;\r\n        line-height: 25px;\r\n        padding: 5px 2px;\r\n          }\r\n\r\n    div.sttip .guide-list .item-icon,\r\n    .icon-remove {\r\n        display: none;\r\n        opacity: .7;\r\n        transition: opacity .2s;\r\n        top: 50%;\r\n        position: absolute;\r\n        margin-top: -9px;\r\n    }\r\n\r\n    div.sttip button{\r\n        outline: none;\r\n        outline-style: none;\r\n    }\r\n\r\n    div.sttip div.tooltip div.popover-title a[data-iridize-role=closeBt],\r\n    div.sttip div.tooltip div.popover-title [data-iridize-role=closeBt] {\r\n        margin-right: 0px;\r\n        margin-top: 15px;\r\n        font-weight: 400;\r\n        transition: font-weight .3s;\r\n        text-decoration:none;\r\n        font-size: 10px;\r\n        float: right;\r\n        opacity: .7;\r\n    }\r\n\r\n    div.sttip div.tooltip div.popover-title a[data-iridize-role=closeBt]:hover,\r\n    div.sttip div.tooltip div.popover-title [data-iridize-role=closeBt]:hover,\r\n    div.sttip div.tooltip div.popover-title [data-iridize-role=closeBt]:focus {\r\n        opacity: 1;\r\n        font-weight:700;\r\n    }\r\n\r\n    div.sttip .panel-container .guide-content li:hover > .item-icon {\r\n        opacity: .8\r\n    }\r\n\r\n    div.sttip .guide-list .item-icon i {\r\n        cursor: pointer\r\n    }\r\n\r\n    div.sttip .panel-container .guide-content li:last-child {\r\n        border-bottom: none\r\n    }\r\n\r\n    div.sttip .panel-container .guide-content li {\r\n        transition: background .2s, color .2s\r\n    }\r\n\r\n    div.sttip .panel-container .guide-content li:hover {\r\n        background: #FFFFFF;\r\n        color: #222222;\r\n    }\r\n\r\n    div.sttip .panel-container .guide-footer {\r\n        font-family: ir-lato,sans-serif;\r\n        background: #1b3b3f;\r\n        padding: 5px 0px;\r\n    }\r\n\r\n    div.sttip .panel-container .guide-footer p {\r\n        line-height: 35px;\r\n        height: 35px;\r\n        text-align: center;\r\n        font-size: 12px;\r\n        color: #666666;\r\n    }\r\n    div.sttip .panel-container .guide-footer p:hover {\r\n        color: #222222;\r\n    }\r\n\r\n    div.sttip .panel-container .guide-header {\r\n        font-family: ir-lato,sans-serif;\r\n        color: #222222;\r\n        font-weight: bold;\r\n        /*text-transform: uppercase;*/\r\n        font-size: 16px;\r\n        padding: 25px 15px 15px 25px;\r\n        /*letter-spacing: 1px;*/\r\n    }\r\n\r\n    div.sttip.panel {\r\n        overflow: hidden;\r\n        top: 350px;\r\n        position: fixed;\r\n    }\r\n\r\n    div.sttip.panel.rightPanel {\r\n        right: 0px;\r\n        width: 300px;\r\n    }\r\n\r\n    div.sttip.panel.leftPanel {\r\n        width: 300px\r\n    }\r\n\r\n    div.sttip.rightPanel .panel-container {\r\n        padding-left: 4px\r\n    }\r\n\r\n    div.sttip.leftPanel .panel-container {\r\n        padding-right: 4px\r\n    }\r\n\r\n    div.sttip.rightPanel .panel-container .guide-list {\r\n        float: left;\r\n        border-radius: 0px 0px 0px 4px;\r\n    }\r\n\r\n    div.sttip.leftPanel .panel-container .guide-list {\r\n        float: left;\r\n        border-radius: 0px 0px 4px 0px;\r\n        border-right: 1px solid;\r\n    }\r\n\r\n    div.sttip .panel-container .guide-list {\r\n        display: inline-block;\r\n        color: #222222;\r\n        background: #FFFFFF;\r\n        width: 258px;\r\n        position: relative;\r\n        z-index: 1;\r\n    }\r\n\r\n    div.sttip .panel-container {\r\n        position: relative;\r\n        overflow: hidden;\r\n        display: inline-block;\r\n        padding-bottom: 6px;\r\n    }\r\n\r\n    div.sttip .panel-container,\r\n    div.sttip.rightPanel.panel-opened {\r\n        width: 380px\r\n    }\r\n\r\n    div.sttip.rightPanel.panel-closed {\r\n        width: 48px\r\n    }\r\n\r\n    div.sttip.leftPanel.panel-opened {\r\n        left: -1px\r\n    }\r\n\r\n    div.sttip.leftPanel.panel-closed {\r\n        left: -260px\r\n    }\r\n\r\n    div.sttip.rightPanel.panel-close {\r\n        -webkit-transition: width 400ms cubic-bezier(0.175, 0.885, 0.320, 1);\r\n        /* older webkit */\r\n\r\n        -webkit-transition: width 400ms cubic-bezier(0.175, 0.885, 0.320, 1.275);\r\n        -moz-transition: width 400ms cubic-bezier(0.175, 0.885, 0.320, 1.275);\r\n        -ms-transition: width 400ms cubic-bezier(0.175, 0.885, 0.320, 1.275);\r\n        -o-transition: width 400ms cubic-bezier(0.175, 0.885, 0.320, 1.275);\r\n        transition: width 400ms cubic-bezier(0.175, 0.885, 0.320, 1.275);\r\n        /* easeOutBack */\r\n    }\r\n\r\n    div.sttip.rightPanel.panel-open {\r\n        -webkit-transition: width 400ms cubic-bezier(0.600, 0, 0.735, 0.045);\r\n        /* older webkit */\r\n\r\n        -webkit-transition: width 400ms cubic-bezier(0.600, -0.280, 0.735, 0.045);\r\n        -moz-transition: width 400ms cubic-bezier(0.600, -0.280, 0.735, 0.045);\r\n        -ms-transition: width 400ms cubic-bezier(0.600, -0.280, 0.735, 0.045);\r\n        -o-transition: width 400ms cubic-bezier(0.600, -0.280, 0.735, 0.045);\r\n        transition: width 400ms cubic-bezier(0.600, -0.280, 0.735, 0.045);\r\n        /* easeInBack */\r\n    }\r\n\r\n    div.sttip.leftPanel.panel-close {\r\n        -webkit-transition: left 400ms cubic-bezier(0.175, 0.885, 0.320, 1);\r\n        /* older webkit */\r\n\r\n        -webkit-transition: left 400ms cubic-bezier(0.175, 0.885, 0.320, 1.275);\r\n        -moz-transition: left 400ms cubic-bezier(0.175, 0.885, 0.320, 1.275);\r\n        -ms-transition: left 400ms cubic-bezier(0.175, 0.885, 0.320, 1.275);\r\n        -o-transition: left 400ms cubic-bezier(0.175, 0.885, 0.320, 1.275);\r\n        transition: left 400ms cubic-bezier(0.175, 0.885, 0.320, 1.275);\r\n        /* easeOutBack */\r\n    }\r\n\r\n    div.sttip.leftPanel.panel-open {\r\n        -webkit-transition: left 400ms cubic-bezier(0.600, 0, 0.735, 0.045);\r\n        /* older webkit */\r\n\r\n        -webkit-transition: left 400ms cubic-bezier(0.600, -0.280, 0.735, 0.045);\r\n        -moz-transition: left 400ms cubic-bezier(0.600, -0.280, 0.735, 0.045);\r\n        -ms-transition: left 400ms cubic-bezier(0.600, -0.280, 0.735, 0.045);\r\n        -o-transition: left 400ms cubic-bezier(0.600, -0.280, 0.735, 0.045);\r\n        transition: left 400ms cubic-bezier(0.600, -0.280, 0.735, 0.045);\r\n        /* easeInBack */\r\n    }\r\n\r\n    div.sttip .panel-container .flap {\r\n        cursor: pointer;\r\n        padding: 10px 10px 10px 10px;\r\n        display: inline-block;\r\n        -webkit-box-shadow: none !important;\r\n        -moz-box-shadow: none !important;\r\n        box-shadow: none !important;\r\n        width: 20px;\r\n        position: relative;\r\n        z-index: 2;\r\n        margin-top: 0px;\r\n        transition: background .2s;\r\n    }\r\n\r\n    div.sttip .panel-container .flap:hover,\r\n    div.sttip .panel-container .flap:focus {\r\n        background: #477b82\r\n    }\r\n\r\n    div.sttip .panel-container .flap > .flap-text {\r\n        font-family: Ariel,sans-serif;\r\n        font-size: 12px;\r\n        font-weight: 700;\r\n        line-height: 1.1;\r\n        color: #FFFFFF;\r\n        width: 1em;\r\n        text-align: center;\r\n        cursor: pointer;\r\n    }\r\n\r\n    div.sttip.rightPanel .panel-container .flap {\r\n        border-right: none;\r\n        float: left;\r\n        border-width: 0px;\r\n        border-radius: 4px 0px 0px 4px;\r\n        color: #FFF;\r\n        left: 1px;\r\n    }\r\n\r\n    div.sttip.leftPanel .panel-container .flap {\r\n        border-left: none;\r\n        border-width: 0px;\r\n        border-radius: 0px 4px 4px 0px;\r\n        color: #FFF;\r\n        right: 1px;\r\n    }\r\n\r\n    div.sttip div.tooltip.in.right {\r\n        margin-left: 8px;\r\n        padding-left: 18px;\r\n    }\r\n\r\n    div.sttip div.tooltip.in.left {\r\n        margin-left: -16px;\r\n        padding-right: 18px;\r\n    }\r\n\r\n    div.sttip div.tooltip.in.top {\r\n        margin-top: -16px;\r\n        padding-bottom: 18px;\r\n    }\r\n\r\n    div.sttip div.tooltip.in.bottom {\r\n        margin-top: 8px;\r\n        padding-top: 18px;\r\n    }\r\n    /* CUSTOM THEME */\r\n\r\n    div.sttip div.tooltip a,\r\n    div.sttip div.tooltip div.popover-content,\r\n    div.sttip div.tooltip div.popover-inner,\r\n    div.sttip div.tooltip div.stFooter,\r\n    div.sttip .panel-container .guide-content,\r\n    div.sttip .panel-container .guide-footer {\r\n        font-family: ir-lato,sans-serif;\r\n        color: #222222;\r\n        font-size: 14px;\r\n    }\r\n\r\n    div.sttip div.tooltip a{\r\n         text-decoration: underline;\r\n    }\r\n\r\n    div.sttip div.tooltip div.popover-content,\r\n    div.sttip div.tooltip div.popover-inner,\r\n    div.sttip div.tooltip div.stFooter,\r\n    div.sttip .panel-container .guide-content,\r\n    div.sttip .panel-container .guide-footer {\r\n        font-weight: normal;\r\n    }\r\n\r\n    div.sttip div.tooltip div.popover-content {\r\n        background: #fff;\r\n        padding: 0px 25px 0px 25px;\r\n    }\r\n\r\n    div.sttip div.tooltip div.popover-content [data-iridize-id="content"] {\r\n        padding-bottom: 25px;\r\n        display: block;\r\n    }\r\n    /* arrow colors*/\r\n\r\n    div.sttip div.tooltip.in.right div.tooltip-arrow {\r\n        border-right-color: #C8C8C8;\r\n        border-right-color: rgba(150, 150, 150, .5);\r\n        /*opacity:0.3;*/\r\n    }\r\n\r\n    div.sttip div.tooltip.in.bottom div.tooltip-arrow {\r\n        border-bottom-color: #C8C8C8;\r\n        border-bottom-color: rgba(150, 150, 150, .5);\r\n        /*opacity:0.3;*/\r\n    }\r\n\r\n    div.sttip div.tooltip.in.left div.tooltip-arrow {\r\n        border-left-color: #C8C8C8;\r\n        border-left-color: rgba(150, 150, 150, .5);\r\n        /*opacity:0.3;*/\r\n    }\r\n\r\n    div.sttip div.tooltip.in.top div.tooltip-arrow {\r\n        border-top-color: #C8C8C8;\r\n        border-top-color: rgba(150, 150, 150, .5);\r\n        /*opacity:0.3;*/\r\n    }\r\n\r\n    div.sttip div.tooltip.in.right div.tooltip-arrow.second-arrow {\r\n        display: block;\r\n        border-right-color: #fff;\r\n        width: 0px;\r\n        height: 0px;\r\n        opacity: 1;\r\n    }\r\n\r\n    div.sttip div.tooltip.in.bottom div.tooltip-arrow.second-arrow {\r\n        display: block;\r\n        border-bottom-color: #fff;\r\n        width: 0px;\r\n        height: 0px;\r\n        opacity: 1;\r\n    }\r\n\r\n    div.sttip div.tooltip.in.left div.tooltip-arrow.second-arrow {\r\n        display: block;\r\n        border-left-color: #fff;\r\n        width: 0px;\r\n        height: 0px;\r\n        opacity: 1;\r\n    }\r\n\r\n    div.sttip div.tooltip.in.top div.tooltip-arrow.second-arrow {\r\n        display: block;\r\n        border-top-color: #1b3b3f;\r\n        width: 0px;\r\n        height: 0px;\r\n        opacity: 1;\r\n    }\r\n    /* top-left with Next btn the background is different*/\r\n\r\n    div.sttip div.tooltip.in.top.top-left div.tooltip-arrow.second-arrow {\r\n        display: block;\r\n        border-top-color: #477b82;\r\n        width: 0px;\r\n        height: 0px;\r\n        opacity: 1;\r\n    }\r\n    /* top-left without next btn is the same as default*/\r\n\r\n    div.sttip div.tooltip.in.top.top-left.hideNextBt div.tooltip-arrow.second-arrow {\r\n        display: block;\r\n        border-top-color: #1b3b3f;\r\n        width: 0px;\r\n        height: 0px;\r\n        opacity: 1;\r\n    }\r\n\r\n    div.stBorderDiv {\r\n        background-color: #1b3b3f !important;\r\n        -webkit-box-shadow: 0 0 7px #477b82 !important;\r\n        -moz-box-shadow: 0 0 7px #477b82 !important;\r\n        box-shadow: 0 0 7px #477b82 !important;\r\n    }\r\n\r\n    div div.sttip .panel-container .guide-list {\r\n        -webkit-box-shadow: none;\r\n        -moz-box-shadow: none;\r\n        box-shadow: none;\r\n        border: 1px solid #C8C8C8;\r\n        border: 1px solid rgba(150, 150, 150, .5);\r\n        color: #222222;\r\n        background: #fff;\r\n        /*-webkit-box-shadow: 0 1px 3px #CCC;\r\n    -moz-box-shadow: 0 1px 3px #CCC;\r\n    box-shadow: 0 1px 3px #CCC;*/\r\n    }\r\n\r\n    div.sttip .panel-container .flap {\r\n        background: #1b3b3f;\r\n        border: 0px solid #222222;\r\n    }\r\n\r\n    div.sttip div.tooltip div.stFooter div,\r\n    div.sttip div.tooltip div.stFooter a,\r\n    div.sttip div.tooltip div.stFooter p {\r\n        font-size: 12px;\r\n        color: #FFFFFF;\r\n        text-decoration: none;\r\n        border:none;\r\n    }\r\n    div.sttip div.tooltip div.stFooter .default-later-btn:hover,\r\n    div.sttip div.tooltip div.stFooter .default-later-btn:focus {\r\n        text-decoration: underline;\r\n    }\r\n    div.sttip div.tooltip div.stFooter div {\r\n        display: inline-block;\r\n    }\r\n\r\n    div.sttip div.tooltip div.stFooter .powered-by {\r\n        display: none;\r\n    }\r\n\r\n    div.sttip div.tooltip div.stFooter {\r\n        height: 35px;\r\n        padding: 0px 0px 0px 15px;\r\n        margin-top: 0px;\r\n        text-align: left;\r\n        line-height: 35px;\r\n        background: #1b3b3f;\r\n    }\r\n\r\n    div.sttip div.tooltip div.stFooter .next-btn {\r\n        min-width: 26px;\r\n        padding-right: 14px;\r\n        padding-left: 14px;\r\n        display: inline-block;\r\n        text-align: center;\r\n        text-decoration: none;\r\n        background: #477b82;\r\n        font-weight: bold;\r\n        position:relative;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n        max-width: 42px;\r\n    }\r\n    div.sttip div.tooltip .next-btn--choice,    div.sttip div.tooltip div.popover-content .next-btn {\r\n        min-width: 26px;\r\n        line-height: 24px;\r\n        padding-right: 4px;\r\n        padding-left: 4px;\r\n        border-radius: 4px;\r\n        display: inline-block;\r\n        text-align: center;\r\n        text-decoration: none;\r\n        background: #477b82;\r\n        font-weight: bold;\r\n        font-size: 12px;\r\n        color: #FFFFFF;\r\n        text-decoration: none;\r\n        border:none;\r\n        margin-bottom: 2px;\r\n        margin-top: 2px;\r\n    }\r\n\r\n\r\n    div.sttip div.tooltip.hideNextBt .stFooter .next-btn {\r\n        display: none;\r\n    }\r\n\r\n    div.sttip div.tooltip div.stFooter .next-btn:after {\r\n        position: absolute;\r\n        content:"\\bb";\r\n        -webkit-transition: all 0.3s;\r\n        -moz-transition: all 0.3s;\r\n        transition: all 0.3s;\r\n        right: 10px;\r\n        font-size:14px;\r\n        opacity: 0;\r\n        visibility:hidden;\r\n    }\r\n\r\n    div.sttip div.tooltip div.stFooter .next-btn:hover:after,\r\n    div.sttip div.tooltip div.stFooter .next-btn:focus:after {\r\n        right: 7px;\r\n        opacity: 1;\r\n        visibility:visible;\r\n    }\r\n\r\n    div.sttip div.tooltip.showPrevBt .stFooter .default-prev-btn {\r\n        min-width: 26px;\r\n        padding-right: 14px;\r\n        padding-left: 14px;\r\n        display: inline-block;\r\n        text-align: center;\r\n        text-decoration: none;\r\n        font-weight: bold;\r\n        position:relative;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n        max-width: 42px;\r\n    }\r\n\r\n    div.sttip div.tooltip div.stFooter .default-prev-btn:before {\r\n        content:"\\ab";\r\n        position: absolute;\r\n        -webkit-transition: all 0.3s;\r\n        -moz-transition: all 0.3s;\r\n        transition: all 0.3s;\r\n        left: 7px;\r\n        font-size:14px;\r\n        opacity: 0;\r\n        visibility:hidden;\r\n    }\r\n\r\n    div.sttip div.tooltip div.stFooter .default-prev-btn:hover:before,\r\n    div.sttip div.tooltip div.stFooter .default-prev-btn:focus:before {\r\n        left: 4px;\r\n        opacity: 1;\r\n        visibility:visible;\r\n    }\r\n\r\n    div.sttip div.tooltip div.popover-title {\r\n        overflow: visible;\r\n        height: 25px;\r\n        padding: 0px 15px 0px 25px;\r\n    }\r\n\r\n\r\n    div.sttip div.tooltip div.stFooter div[data-iridize-role="nextBtPane"] {\r\n        float: right;\r\n        display: inline-flex;\r\n    }\r\n\r\n    div.sttip .showLaterBt .stFooter .steps-count {\r\n        display: none;\r\n    }\r\ndiv.sttip .hideStepsCount .stFooter .steps-count{\r\n\tdisplay:none;\r\n}\r\n\r\n    /* Visibility hidden for closed guide list fix*/\r\n    div.sttip.panel-closed .panel-container .guide-list {\r\n        visibility: hidden;\r\n        max-height:0px;\r\n    }\r\n    /* effectively infinite max-height, so it won\'t limit anything*/\r\n    div.sttip .panel-container .guide-list{\r\n        max-height:1000px;\r\n    }\r\n    div.sttip.panel-close .panel-container .guide-list {\r\n          -webkit-transition: visibility 0ms step-end 600ms, max-height 0ms step-end 600ms;\r\n        -mox-transition: visibility 0ms step-end 600ms, max-height 0ms step-end 600ms;\r\n        -ms-transition: visibility 0ms step-end 600ms, max-height 0ms step-end 600ms;\r\n        -o-transition: visibility 0ms step-end 600ms, max-height 0ms step-end 600ms;\r\n        transition: visibility 0ms step-end 600ms, max-height 0ms step-end 600ms;\r\n    }\r\n\r\n    div.sttip.rightPanel.panel-closed {\r\n        width: 44px;\r\n    }\r\n\r\n/* end visibility hidden fix*/\r\n\r\n\r\n\r\n\r\n/* hide disabled back button*/\r\ndiv.sttip div.tooltip.showPrevBt .stFooter .default-prev-btn.disabled {\r\n    display:none;\r\n}\r\n\r\n/* resets needed trying to work on a site with bootstrap */\r\ndiv.sttip .tooltip.top:before,\r\ndiv.sttip .tooltip.right:before,\r\ndiv.sttip .tooltip.top:before,\r\ndiv.sttip .tooltip.top-right:before,\r\ndiv.sttip .tooltip.top-left:before,\r\ndiv.sttip .tooltip.left:before,\r\ndiv.sttip .tooltip:before,\r\ndiv.sttip .tooltip.bottom-right:before,\r\ndiv.sttip .tooltip.bottom-left:before\r\n {\r\nborder:none;\r\n}\r\n/* end of bootstrap resets */\r\n\r\n/* start panel border*/\r\ndiv.sttip.panel .panel-container .guide-list,\r\ndiv.sttip.panel .panel-container .flap {\r\n  -webkit-box-shadow: none;\r\n  -moz-box-shadow: none;\r\n  box-shadow: none;\r\n  border-left: 1px solid;\r\n  border-bottom: 1px solid;\r\n  border-top: 1px solid;\r\n  border-color:#C8C8C8;\r\n  border-color:rgba(150, 150, 150, 0.5);\r\n}\r\n/* end panel border*/\r\n\r\ndiv.sttip table, div.sttip tr, div.sttip td {\r\n  border: 1px solid black;\r\n  padding: 6px 9px;\r\n}\r\n\r\n@media (max-width: 1024px) { .ir-survey .ir-credit { font-size:9px; } .ir-survey .ir-survey-question { font-size:1.14em; } .ir-survey .ir-survey-answer.ir-survey-sad, .ir-survey-answer.ir-survey-sad:hover { width: 30px; height: 30px; background-size: 30px; } .ir-survey .ir-survey-answer.ir-survey-happy, .ir-survey-answer.ir-survey-happy:hover { width: 30px; height: 30px; background-size: 30px; } .ir-survey .ir-survey-answer { width:30px; height:30px; font-size:1em; background-size:30px;} body > .ir-survey{ width:428px; } .ir-survey.ir-survey__center { padding: 35px 53px 35px 53px; margin-left:-267px; } }\r\n\r\n@media (max-width: 610px) {.ir-survey .ir-credit { font-size:9px; } .ir-survey .ir-survey-question { font-size:1em; line-height: 9px; } .ir-survey .ir-survey-answer.ir-survey-sad, .ir-survey-answer.ir-survey-sad:hover { width: 30px; height: 30px; background-size: 30px; } .ir-survey .ir-survey-answer.ir-survey-happy, .ir-survey-answer.ir-survey-happy:hover { width: 30px; height: 30px; background-size: 30px; } .ir-survey .ir-survey-answer { font-size:1em; width:30px; height:30px; background-size:30px;} body > .ir-survey{ width:293px;} .ir-survey.ir-survey__center { padding: 9px 10px 9px 10px;  margin-left:-156px; } }\r\n\r\n/** handle guide names with multiple lines **/\r\n/* make guide name appear to the right of the icon and not below it */\r\n.guide-list span.guide-list__guide-name {\r\n    display: inline-block;\r\n    line-height: 18px;\r\n    width: 185px;\r\n    cursor: inherit;\r\n}\r\n\r\n/************ start feedback widget styles  *************/\r\n    .ir-survey {\r\n        z-index: 122828282882;\r\n        width: 610px;\r\n        font-family: "ir-lato", sans-serif;\r\n        text-align: center;\r\n        background: rgba(0, 0, 0, 0.4);\r\n        border-radius: 5px;\r\n        padding: 50px 75px 50px 75px;\r\n    }\r\n\r\n    .ir-survey-layout {}\r\n\r\n    .ir-pushRight {\r\n        float: right;\r\n    }\r\n\r\n    .ir-survey a {\r\n        text-decoration: none;\r\n    }\r\n\r\n    .ir-color-inherit {\r\n        color: inherit;\r\n    }\r\n\r\n    .ir-survey-close {\r\n        overflow: hidden;\r\n    }\r\n\r\n    .ir-survey-content {\r\n        background-color: #F2F2F2;\r\n        padding: 9px 9px 16px 9px;\r\n        border-radius: 10px 10px 0 0;\r\n        font-family: "ir-lato", sans-serif;\r\n        font-size: 16px;\r\n    }\r\n\r\n    .ir-credit {\r\n        background-color: #1b3b3f;\r\n        font-weight: 900;\r\n        border-radius: 0 0 10px 10px;\r\n        font-size: 12px;\r\n        color: white;\r\n        text-align: center;\r\n        padding: 1px;\r\n    }\r\n\r\n    .ir-credit a {\r\n        color: #fff;\r\n    }\r\n\r\n    .ir-credit a:hover {\r\n        color: #fff;\r\n    }\r\n\r\n    .ir-survey-answer {\r\n        font-size: 14pt;\r\n        font-weight: bold;\r\n        width: 36px;\r\n        margin: 2px;\r\n        height: 36px;\r\n        border-width: 1px;\r\n        border-style: solid;\r\n        border-color: #A4A4A4;\r\n        border-radius: 36px;\r\n        text-decoration: none;\r\n        display: inline-block;\r\n        color: #505050;\r\n        line-height: 1.95em;\r\n        text-align: center;\r\n    }\r\n\r\n    .ir-survey-answer:hover {\r\n        color: #fff;\r\n        background-color: #1b3b3f;\r\n        border-color: #1b3b3f\r\n    }\r\n\r\n    .ir-survey-question {\r\n        color: #000;\r\n        font-weight: 500;\r\n        font-size: 1em;\r\n        text-align: center;\r\n        margin-top: 0px;\r\n        margin-bottom: 10px;\r\n        line-height: 33px;\r\n    }\r\n\r\n    .ir-float-container {\r\n        overflow: hidden\r\n    }\r\n\r\n    body>.ir-survey__top {\r\n        position: fixed;\r\n        top: 0px;\r\n        left: 0px;\r\n        right: 0px;\r\n    }\r\n\r\n    body>.ir-survey__bottom {\r\n        position: fixed;\r\n        bottom: 0px;\r\n        left: 0px;\r\n        right: 0px;\r\n    }\r\n\r\n    body>.ir-survey__center {\r\n        position: fixed;\r\n        top: 50%;\r\n        left: 50%;\r\n        margin-top: -9em;\r\n        margin-left: -380px;\r\n    }\r\n/************ end feedback widget styles  *************/\r\n\r\n/****** modal panel and onboarding widget defaults. *************/\r\n.ir-todoList.in {\r\n    z-index: 99;\r\n}\r\n\r\n.ir-todoList-launcher ,\r\n.ir-helpWidget-launcher{\r\n    position: fixed;\r\n    bottom: 20px;\r\nwidth:60px;\r\nheight:60px;\r\n    z-index: 99;\r\nborder-radius:50%;\r\nbackground-color: #477b82;\r\ncursor:pointer;\r\n}\r\n\r\n.ir-todoList-launcher {\r\n    left: 20px;\r\n}\r\n\r\n.ir-helpWidget-launcher {\r\n    right: 20px;\r\n}\r\n\r\n/*with a button it is more accessible to keyboard users. */\r\n.ir-todoList-launcher-button,\r\n.ir-helpWidget-launcher-button{\r\n    width: 100%;\r\n    height: auto;\r\n    background-size: 50px 50px;\r\n    background-position: center center;\r\n    border: none;\r\n    top: 0;\r\n    bottom: 0;\r\n    position: absolute;\r\n    background-repeat: no-repeat;\r\n    padding: 0;\r\n    background-color: transparent;\r\n}\r\n\r\n.ir-todoList-launcher-button{\r\n      background-image: url(https://d2p93rcsj9dwm5.cloudfront.net/static/tipcms/img/todo.png);\r\n}\r\n\r\n.ir-helpWidget-launcher-button {\r\n      background-image: url(https://d2p93rcsj9dwm5.cloudfront.net/static/tipcms/img/todo.png);\r\n}\r\n\r\n.ir-todoList-launcher-button:focus, .ir-helpWidget-launcher-button:focus{\r\noutline:none;\r\n}\r\n\r\n.ir-helpWidget-launcher:hover,\r\n.ir-helpWidget-launcher:focus,\r\n.ir-todoList-launcher:hover,\r\n.ir-todoList-launcher:focus{\r\nopacity:0.9;\r\noutline:none;\r\n}\r\n\r\ndiv.sttip.panel.modalPanel{\r\n    left: -999px;\r\n}\r\n\r\ndiv.sttip.modalPanel .panel-container {\r\n    width: auto;\r\n}\r\n\r\ndiv.sttip.panel.modalPanel .panel-container .guide-list {\r\n    border: 1px solid rgba(150, 150, 150, 0.5);\r\n}\r\n\r\n.sttip.panel.modalPanel.panel-open.panel-opened.bind-results {\r\n    left: 50%;\r\n    margin-left: -150px;\r\n    top: 100px;\r\n}\r\n\r\ndiv.sttip  .ir-helpWidget-close {\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 5px;\r\n    text-decoration: none;\r\n}\r\n\r\n    div.sttip.modalPanel.panel-open {\r\n        -webkit-transition: left 400ms ease-out;\r\n        /* older webkit */\r\n\r\n        -webkit-transition: left 400ms ease-out;\r\n        -moz-transition: left 400ms ease-out;\r\n        -ms-transition: left 400ms ease-out;\r\n        -o-transition: left 400ms ease-out;\r\n        transition: left 400ms ease-out;\r\n        /* easeInBack */\r\n    }\r\n\r\n\r\n    div.ir-marker {\r\n        /*changing this will affect the color of the help icon*/\r\n        background-color: #ff0000;\r\n    }\r\n\r\n\r\n\r\n    div.ir-beacon:before {\r\n        box-shadow: 0px 0px 2px 2px #ff0000;\r\n    }\r\n\r\n\r\n\r\n/**** TODO WIDGET ******/\r\n.ir-todoList {\r\ndisplay: inline-block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: -9999px;\r\n    bottom: 20px;\r\n    height: 0px;\r\n    border-radius: 5px;\r\n    direction: ltr;\r\n    background: white;\r\n    border: 1px solid rgba(150, 150, 150, 0.5);\r\n    font-family: ir-lato,sans-serif;\r\n    color: #222222;\r\n    width: 0;\r\n}\r\n\r\n.ir-todoList.in{\r\n    width: 280px;\r\n    padding: 24px 24px 6px 24px;\r\n    transition: 500ms;\r\n    height: auto;\r\n    left: 65px;\r\n    bottom: 65px;\r\n    top: auto;\r\n}\r\n\r\n.ir-todoList-header {\r\n    font-size: 21px;\r\n    margin-bottom: 15px;\r\n    text-align: center;\r\n}\r\n\r\n.ir-todoList-footer {\r\n    color: gray;\r\n    margin-top: 18px;\r\n    direction: rtl;\r\n    font-size: 10px;\r\n}\r\n\r\n.ir-todoList-guideName{\r\n    font-size: 16px;\r\n    cursor: pointer;\r\ncolor:#222222;\r\n   width: 85%;\r\n   margin-left: 9px;\r\n}\r\n\r\n.ir-completedGuide .ir-icon-todo {\r\n    background: black;\r\n}\r\n\r\n.ir-todoList-item.engaged .ir-todoList-guideName {\r\n    text-decoration: line-through;\r\n}\r\n\r\n.ir-todoList-progress {\r\n    border: 1px solid #1b3b3f;\r\n    height: 9px;\r\n    line-height: 0;\r\n}\r\n\r\n.ir-todoList-progress-complete {\r\n    height: 100%;\r\n    width:0;\r\n    display: inline-block;\r\n    background-color: #1b3b3f;\r\n    transition: width 2s;\r\n    float:left;\r\n}\r\n\r\n.ir-todoList-motivation {\r\n    font-size: 14px;\r\n    line-height: 18px;\r\n    border-radius: 5px;\r\n    padding: 6px;\r\n    color: white;\r\n    background: #1b3b3f;\r\n}\r\n\r\n.ir-todoList-list {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin-left:0;\r\n}\r\n\r\n.ir-todoList-item {\r\n    border-radius: 5px;\r\n    padding: 6px;\r\n    margin: 0;\r\n}\r\n\r\n.ir-todoList-item:hover {\r\n    background: #f5f5f5;\r\n}\r\n\r\n.ir-icon-todo {\r\n    border: 2px solid black;\r\n    width: 16px;\r\n    height: 16px;\r\n    display: inline-block;\r\n    margin-right: 6px;\r\n    vertical-align: middle;\r\n    border-radius: 10px;\r\n}\r\n\r\n.ir-todoList-item.engaged .ir-icon-todo{\r\n    background: black;\r\n}\r\n\r\n.ir-todoList .ir-close {\r\n    float: right;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n.ir-todoList-items {\r\n    margin-top:10px;\r\n    margin-bottom:10px;\r\n}\r\n\r\n.ir-reset-tasklist-button {\r\n    margin-top: 9px;\r\n    display: block;\r\n    font-size: 11px;\r\n    text-align: right;\r\n    color: #1b3b3f;\r\n}\r\n\r\n.guide-footer p,\r\n.ir-todoList-footer,\r\n.ir-credit span {\r\n    visibility: hidden;\r\n}\r\n\r\n.ir-todoList-launcher-button:focus {\r\n    outline: none;\r\n}\r\n\r\n/* fusion uses crazy z-indexes */\r\ndiv.stBorderDiv {\r\n\tz-index: 2147483649;\r\n}\r\n\r\ndiv.sttip .tooltip {\r\n    z-index: 2147483650;\r\n}\r\n\r\ndiv.ir-beacon,\r\ndiv.ir-marker,\r\ndiv.sttip.panel {\r\n    z-index: 2147483646;\r\n}\r\n\r\ndiv.sttip .panel-container .guide-header.ir-items-header {\r\n    padding: 10px 0px 0px 0px;\r\n}\r\n\r\ndiv.sttip .panel-container .guide-content .guide-search-results {\r\n    width: 250px;\r\n}\r\n\r\ndiv.sttip .panel-container .guide-list {\r\n    width: 275px;\r\n}\r\n\r\ndiv.sttip .panel-container, div.sttip.rightPanel.panel-opened {\r\n    width: 322px;\r\n}\r\n\r\ntextarea.ir-fieldInput {\r\n    line-height: 1.5em;\r\n    padding: 2%;\r\n    max-width: 95%;\r\n    font-family: \'Open Sans\', Helvetica, Arial, sans-serif;\r\n}\r\n\r\ndiv.sttip .panel-container .guide-footer .ir__guide-footer__help-link {\r\n    font-size: 14px;\r\n    line-height: 21px;\r\n    height: auto;\r\nvisibility: visible;\r\ncolor:white;\r\n}\r\n\r\ndiv.sttip .panel-container .guide-footer .ir__guide-footer__help-link:hover {\r\n    color: white;\r\n}\r\n\r\nbutton.ir-button-no-styling {\r\n   background: none;\r\n   color: inherit;\r\n   border: none;\r\n   padding: 0;\r\n   cursor: pointer;\r\n   outline: inherit;\r\n   display: inline-block;\r\n   text-align: left;\r\n}\r\n\r\n.ir-todoList-listItem {\r\n    margin-bottom: 9px;\r\n}\r\n\r\n/**** START new_css.css appended to theme ****/\r\n/**** TODO WIDGET ******/\r\ndiv.sttip.ir-todoList {\r\ndisplay: inline-block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: -9999px;\r\n    bottom: 20px;\r\n    height: 0px;\r\n    border-radius: 5px;\r\n    direction: ltr;\r\n    background: white;\r\n    border: 1px solid rgba(150, 150, 150, 0.5);\r\n    font-family: ir-lato,sans-serif;\r\n    color: #222222;\r\n    width: 0;\r\n}\r\n\r\ndiv.sttip.ir-todoList.in{\r\n    width: 280px;\r\n    padding: 24px 24px 6px 24px;\r\n    transition: 500ms;\r\n    height: auto;\r\n    left: 65px;\r\n    bottom: 65px;\r\n    top: auto;\r\n}\r\n\r\ndiv.sttip .ir-todoList-header {\r\n    font-size: 21px;\r\n    margin-bottom: 15px;\r\n    text-align: center;\r\n}\r\n\r\ndiv.sttip .ir-todoList-footer {\r\n    color: gray;\r\n    margin-top: 18px;\r\n    direction: rtl;\r\n    font-size: 10px;\r\n}\r\n\r\ndiv.sttip .ir-todoList-guideName{\r\n    font-size: 16px;\r\n    cursor: pointer;\r\ncolor:#222222;\r\n}\r\n\r\ndiv.sttip .ir-completedGuide .ir-icon-todo {\r\n    background: black;\r\n}\r\n\r\ndiv.sttip .ir-todoList-item.engaged .ir-todoList-guideName {\r\n    text-decoration: line-through;\r\n}\r\n\r\ndiv.sttip .ir-todoList-progress {\r\n    border: 1px solid #477b82;\r\n    height: 9px;\r\n    line-height: 0;\r\n}\r\n\r\ndiv.sttip .ir-todoList-progress-complete {\r\n    height: 100%;\r\n    width:0;\r\n    display: inline-block;\r\n    background-color: #477b82;\r\n    transition: width 2s;\r\n    float:left;\r\n}\r\n\r\ndiv.sttip .ir-todoList-motivation {\r\n    font-size: 14px;\r\n    line-height: 18px;\r\n    border-radius: 5px;\r\n    padding: 6px;\r\n    color: white;\r\n    background: #477b82;\r\n}\r\n\r\ndiv.sttip .ir-todoList-list {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin-left:0;\r\n}\r\n\r\ndiv.sttip .ir-todoList-item {\r\n    border-radius: 5px;\r\n    padding: 6px;\r\n    margin: 0;\r\n}\r\n\r\ndiv.sttip .ir-todoList-item:hover {\r\n    background: #f5f5f5;\r\n}\r\n\r\ndiv.sttip .ir-icon-todo {\r\n    border: 2px solid black;\r\n    width: 16px;\r\n    height: 16px;\r\n    display: inline-block;\r\n    margin-right: 6px;\r\n    vertical-align: middle;\r\n    border-radius: 10px;\r\n}\r\n\r\ndiv.sttip .ir-todoList-item.engaged .ir-icon-todo{\r\n    background: black;    \r\n}\r\n\r\ndiv.sttip a.ir-close {\r\n    float: right;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    color:#222222;\r\n}\r\ndiv.sttip .ir-todoList-items {\r\n    margin-top:10px;\r\n    margin-bottom:10px;\r\n}\r\n\r\ndiv.sttip button.ir-reset-tasklist-button {\r\n    margin-top: 9px;\r\n    color: #12bc8d;\r\n    cursor:pointer;\r\n}\r\ndiv.sttip button.ir-reset-tasklist-button:hover {\r\n    margin-top: 9px;\r\n    color: #222222;\r\n}\r\n\r\n/**** END new_css.css appended to theme ****/\r\n\r\ndiv.sttip .guide-list .ir-todoList-guideName.item-text {\r\n    width: 100%;\r\n    display: block;\r\n}\r\n\r\n/**** START tasklist_css_fixes_030718_2.css appended to theme ****/\r\ndiv.sttip .panel-container .guide-content .iridize-start-panel.tasklist { \r\n\tbackground-position: 0 -80px; \r\n} \r\n\r\n.ir-todoList-launcher-button:focus {\r\n    outline: none;\r\n}\r\n\r\n.ir-todoList-launcher-button {\r\n    cursor: pointer;\r\n}\r\n\r\ndiv.sttip .guide-list .item-text.ir-todoList-guideName {\r\n    width: 100%;\r\n}\r\n\r\ndiv.sttip .guide-list .ir-reset-tasklist-button:hover {\r\n    background: none;\r\n    text-decoration: underline;\r\n}\r\n\r\n\r\n/**** END tasklist_css_fixes_030718_2.css appended to theme ****/\r\n\r\n/** top/bottom help widget location ***/\r\ndiv.sttip.panel.bottomPanel{\r\n    position:fixed;\r\n    bottom:0px;\r\n    right: 140px;\r\n    top: auto;\r\n}\r\n\r\ndiv.sttip.panel.topPanel {\r\n    position:fixed;\r\n    right: 60px;\r\n    bottom:auto;\r\n    top: 0px;\r\n}\r\n\r\ndiv.sttip.panel.topPanel .panel-container .guide-list {\r\n border-right: 1px solid rgba(150, 150, 150, 0.5);\r\n}\r\n\r\n\r\ndiv.sttip.panel.bottomPanel .panel-container .flap,\r\ndiv.sttip.panel.topPanel .panel-container .flap{\r\n    width:auto;\r\n    display: block;\r\n}\r\n\r\ndiv.sttip.panel.bottomPanel .panel-container .flap > .flap-text,\r\ndiv.sttip.panel.topPanel .panel-container .flap > .flap-text{\r\n    width:auto;\r\n}\r\n\r\ndiv.sttip.bottomPanel.panel-closed,\r\ndiv.sttip.topPanel.panel-closed{\r\n    height: 35px;\r\n}\r\n\r\ndiv.sttip.bottomPanel.panel-closed,\r\ndiv.sttip.topPanel.panel-closed{\r\n    height: 35px;\r\n}\r\n\r\ndiv.sttip.bottomPanel.panel-opened,\r\ndiv.sttip.topPanel.panel-opened{\r\n    height: 422px;\r\n}\r\n\r\ndiv.sttip.bottomPanel.panel-close,\r\ndiv.sttip.topPanel.panel-close {\r\n    -webkit-transition: height 400ms cubic-bezier(0.175, 0.885, 0.320, 1);\r\n    -webkit-transition: height 400ms cubic-bezier(0.175, 0.885, 0.320, 1.275);\r\n    -moz-transition: height 400ms cubic-bezier(0.175, 0.885, 0.320, 1.275);\r\n    -ms-transition: height 400ms cubic-bezier(0.175, 0.885, 0.320, 1.275);\r\n    -o-transition: height 400ms cubic-bezier(0.175, 0.885, 0.320, 1.275);\r\n    transition: height 400ms cubic-bezier(0.175, 0.885, 0.320, 1.275);\r\n}\r\n\r\ndiv.sttip.bottomPanel.panel-open,\r\ndiv.sttip.topPanel.panel-open {\r\n    -webkit-transition: height 400ms cubic-bezier(0.600, 0, 0.735, 0.045);\r\n    -webkit-transition: height 400ms cubic-bezier(0.600, -0.280, 0.735, 0.045);\r\n    -moz-transition: height 400ms cubic-bezier(0.600, -0.280, 0.735, 0.045);\r\n    -ms-transition: height 400ms cubic-bezier(0.600, -0.280, 0.735, 0.045);\r\n    -o-transition: height 400ms cubic-bezier(0.600, -0.280, 0.735, 0.045);\r\n    transition: height 400ms cubic-bezier(0.600, -0.280, 0.735, 0.045);\r\n}\r\n\r\ndiv.sttip.bottomPanel .panel-container,\r\ndiv.sttip.topPanel .panel-container{\r\n    width: auto;\r\n}\r\n\r\n/** END top/bottom help widget location ***/\r\n\r\n\r\ndiv.sttip.leftPanel.panel-closed { left:-277px; }\r\n\r\ndiv.sttip.panel.leftPanel {     width:320px; } \r\n\r\ndiv.sttip.leftPanel .panel-container .flap {     width:15px;  }\r\n\r\ndiv.sttip.panel.bottomPanel .panel-container .guide-list {\r\n    border-right: 1px solid rgba(150, 150, 150, 0.5);\r\n}\r\n\r\n.iridize-step-guide-frame {\r\n\tborder-right: solid 5px #1b3b3f;\r\n}\r\n\r\n.iridizeStepGuideCloserButton a {\r\n    background-color: #1b3b3f; \r\n}\r\n    \n\n    \n\n    \n    \n\n    ',
    settings: {
      guide_type: "WAL",
      system: false,
    },
  },
});
