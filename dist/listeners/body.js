"use strict";

var _require = require("../helpers"),
    el = _require.el,
    elid = _require.elid;

module.exports = function (_this) {
  document.addEventListener("fullscreenchange", function () {
    _this.elements.mcPlayer.classList.toggle("full-screen");

    _this.clip.props.host.classList.toggle("full-screen");

    if (_this.options.preview) {
      _this.setPreviewDimentions();
    }
  });
  document.addEventListener("webkitfullscreenchange", function () {
    _this.elements.mcPlayer.classList.toggle("full-screen");

    _this.clip.props.host.classList.toggle("full-screen");

    if (_this.options.preview) {
      _this.setPreviewDimentions();
    }
  });
  document.addEventListener("mozfullscreenchange", function () {
    _this.elements.mcPlayer.classList.toggle("full-screen");

    _this.clip.props.host.classList.toggle("full-screen");

    if (_this.options.preview) {
      _this.setPreviewDimentions();
    }
  });
  document.addEventListener("MSFullscreenChange", function () {
    _this.elements.mcPlayer.classList.toggle("full-screen");

    _this.clip.props.host.classList.toggle("full-screen");

    if (_this.options.preview) {
      _this.setPreviewDimentions();
    }
  });
  el("body")[0].addEventListener("click", function (e) {
    if (e.target.className === "".concat(_this.name, "-speed-value")) {
      var speedDisplay = e.target.dataset.speedValue - 0;
      _this.clip.executionSpeed = e.target.dataset.speedValue;
      _this.clip.speed == 1 ? speedDisplay = "Normal" : speedDisplay = _this.clip.speed;
      _this.elements.speedCurrent.innerHTML = speedDisplay;
      var step = 1 / (_this.options.speedValues.length - 1);
      var positionY = (e.target.dataset.zone * step - 1) * -1 * ((_this.options.speedValues.length - 1) * 16);
      elid("".concat(_this.name, "-speed-cursor")).style.top = positionY + "px";
    }
  });
};