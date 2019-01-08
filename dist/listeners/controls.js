"use strict";

var _require = require("../helpers"),
    elid = _require.elid;

module.exports = function (_this) {
  elid("".concat(_this.name, "-controls")).onmouseover = function () {
    if (!_this.settings.loopActivated) {
      return;
    }

    _this.elements.loopBarStart.classList.remove("m-fadeOut");

    _this.elements.loopBarEnd.classList.remove("m-fadeOut");

    _this.elements.loopBarStart.classList.add("m-fadeIn");

    _this.elements.loopBarEnd.classList.add("m-fadeIn");
  };

  elid("".concat(_this.name, "-controls")).onmouseout = function (event) {
    var e = event.toElement || event.relatedTarget || event.target;

    if (isDescendant(this, e) || e === this) {
      return;
    }

    if (!_this.settings.loopActivated) {
      return;
    }

    _this.elements.loopBarStart.classList.add("m-fadeOut");

    _this.elements.loopBarEnd.classList.add("m-fadeOut");

    _this.elements.loopBarStart.classList.remove("m-fadeIn");

    _this.elements.loopBarEnd.classList.remove("m-fadeIn");
  };

  var twt = false;

  elid("".concat(_this.name, "-controls")).ontouchstart = function (event) {
    var e = event.toElement || event.relatedTarget || event.target;

    if (isDescendant(_this.elements.statusButton, e) || e === _this.elements.statusButton || isDescendant(_this.elements.settingsButton, e) || e === _this.elements.settingsButton || isDescendant(_this.elements.fullScreenButton, e) || e === _this.elements.fullScreenButton || isDescendant(_this.elements.loopButton, e) || e === _this.elements.loopButton || isDescendant(_this.elements.totalBar, e) || e === _this.elements.totalBar) {
      return;
    }

    _this.elements.volumeControl.className = "".concat(_this.name, "-volume-width-transition");
    _this.elements.volumeBar.className = "".concat(_this.name, "-volume-width-transition");
    _this.elements.volumeBarHelper.className = "".concat(_this.name, "-volume-width-transition");
    _this.elements.timeDisplay.className = "".concat(_this.name, "-time-width-transition");
    _this.elements.volumeCursor.className = "".concat(_this.name, "-volume-cursor-transition");
    twt = true;
  };

  window.addEventListener("touchstart", function (event) {
    var e = event.toElement || event.relatedTarget || event.target;

    if (isDescendant(elid("".concat(_this.name, "-controls")), e) || e === elid("".concat(_this.name, "-controls"))) {
      return;
    }

    if (twt) {
      _this.elements.volumeControl.className = "";
      _this.elements.volumeBar.className = "";
      _this.elements.volumeBarHelper.className = "";
      _this.elements.timeDisplay.className = "";
      _this.elements.volumeCursor.className = "";
    }
  }); // elid(`${_this.name}-left-controls`).ontouchstart = function (event) {
  //   const e = event.toElement || event.relatedTarget || event.target;
  //     if (isDescendant(_this.elements.statusBtn, e) || e === _this.elements.statusBtn) {
  //       return false;
  //     }
  //     return "";
  // };
};

function isDescendant(parent, child) {
  var node = child.parentNode;

  while (node != null) {
    if (node == parent) {
      return true;
    }

    node = node.parentNode;
  }

  return false;
}