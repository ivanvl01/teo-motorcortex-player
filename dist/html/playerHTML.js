"use strict";

module.exports = function (config) {
  return "\n  <div class=\"pointer-event-panel\" id=\"" + config.name + "-pointer-event-panel\"></div>\n  <div class=\"grad\"></div>\n  <div class=\"background\"></div>\n  <div id=\"" + config.name + "-controls\">\n    <div id=\"" + config.name + "-totalbar\">\n      <div id=\"" + config.name + "-hover-display\">\n        <div id=\"" + config.name + "-hover-millisecond\"></div>\n      </div>\n      <div id=\"" + config.name + "-loopbar\">\n        <div class=\"" + config.name + "-loop-boundaries\" id=\"" + config.name + "-loopbar-start\">\n        </div>\n        <div class=\"" + config.name + "-loop-boundaries\" id=\"" + config.name + "-loopbar-end\">\n        </div>\n        <div id=\"" + config.name + "-helperbar\"></div>\n        <div id=\"" + config.name + "-runningbar\">\n          <div id=\"" + config.name + "-cursor\"></div>\n        </div>\n      </div>\n    </div>\n    <div id=\"" + config.name + "-left-controls\">\n      <div id=\"" + config.name + "-status-btn\">\n        " + config.svg.playSVG + "\n        <span id=\"" + config.name + "-indicator\"></span>\n      </div>\n      <div id=\"" + config.name + "-volume\">\n        <div id=\"" + config.name + "-volume-btn\">\n          " + config.svg.volumeSVG + "\n        </div>\n        <div id=\"" + config.name + "-volumebar-helper\"></div>\n        <div id=\"" + config.name + "-volumebar\">\n            <div id=\"" + config.name + "-volumebar-active\">\n              <div id=\"" + config.name + "-volume-cursor\"></div>\n            </div>\n        </div>\n      </div>\n      <div id=\"" + config.name + "-time-display\">\n        <span id=\"" + config.name + "-time-current\"></span>\n        <span id=\"" + config.name + "-time-separator\"></span>\n        <span id=\"" + config.name + "-time-total\"></span>\n      </div>\n    </div>\n    <div id=\"" + config.name + "-loop-time\">\n      <span id=\"" + config.name + "-loopbar-start-time\" class=\"" + config.name + "-loopbar-time\"></span>\n      <span>:</span>\n      <span id=\"" + config.name + "-loopbar-end-time\" class=\"" + config.name + "-loopbar-time\"></span>\n    </div>\n    <div id=\"" + config.name + "-loop-btn\">" + config.svg.loopSVG + "</div>\n    <div id=\"" + config.name + "-settings-btn\">" + config.svg.settingsSVG + "</div>\n    <div id=\"" + config.name + "-full-screen-btn\">" + config.svg.fullScreenSVG + "</div>\n  </div>\n  <div id=\"" + config.name + "-settings-panel\">\n    <ul id=\"" + config.name + "-main-settings\">\n      <li id=\"" + config.name + "-settings-pointer-events\">\n        <label>Pointer Events</label>\n        <label class=\"switch settings-switch\">\n          <input id=\"" + config.name + "-pointer-events-checkbox\" type=\"checkbox\">\n          <span class=\"slider round\"></span>\n        </label>\n      </li>\n      <li id=\"" + config.name + "-settings-preview\">\n        <label>Show Preview</label>\n        <label class=\"switch settings-switch\">\n          <input id=\"" + config.name + "-show-preview-checkbox\" type=\"checkbox\">\n          <span class=\"slider round\"></span>\n        </label>\n      </li>\n      <li id=\"" + config.name + "-settings-indicator\">\n        <label>Show Indicator</label>\n        <label class=\"switch settings-switch\">\n          <input id=\"" + config.name + "-show-indicator-checkbox\" type=\"checkbox\">\n          <span class=\"slider round\"></span>\n        </label>\n      </li>\n      <li id=\"" + config.name + "-settings-volume\">\n        <label>Show Volume</label>\n        <label class=\"switch settings-switch\">\n          <input id=\"" + config.name + "-show-volume-checkbox\" type=\"checkbox\">\n          <span class=\"slider round\"></span>\n        </label>\n      </li>\n      <li id=\"" + config.name + "-settings-speed-show\">\n        <label>Speed</label>\n        <div class=\"" + config.name + "-speed-btn\">" + config.svg.arrowRightSVG + "</div>\n        <span id=\"" + config.name + "-speed-current\"></span>\n      </li>\n    </ul>\n    <ul id=\"" + config.name + "-speed-settings\">\n      <li id=\"" + config.name + "-settings-speed-hide\">\n        <div class=\"" + config.name + "-speed-btn\">" + config.svg.arrowLeftSVG + "</div>\n        <label id=" + config.name + "-speed-runtime>Speed</label>\n      </li>\n      <li>\n        <div id=\"" + config.name + "-speed-value-helperbar\"></div>\n        <div id=\"" + config.name + "-speed-value-bar\">\n          <div class=\"" + config.name + "-speed-value-step\" id=\"" + config.name + "-speed-cursor\">\n            <div></div>\n          </div>\n        </div>\n        <div id=\"" + config.name + "-speed-value\">\n        </div>\n      </li>\n    </ul>\n  </div>\n";
};