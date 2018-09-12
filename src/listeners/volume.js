const { addListener, removeListener } = require(`../helpers`);

const svg = require("../html/svg");

module.exports = _this => {
  _this.elements.volumeBtn.onclick = () => {
    if (_this.settings.volumeMute) {
      _this.elements.volumeBarActive.style.width =
        _this.settings.previousVolume * 100 + `%`;
      _this.clip.setVolume(_this.settings.previousVolume);
      _this.settings.volumeMute = false;
      const SVG = document.createElement(`span`);
      SVG.innerHTML = svg.volumeSVG;
      _this.elements.volumeBtn.getElementsByTagName(`svg`)[0].replaceWith(SVG);
    } else {
      _this.settings.volumeMute = true;
      _this.elements.volumeBarActive.style.width = `0%`;
      _this.clip.setVolume(0);
      const SVG = document.createElement(`span`);
      SVG.innerHTML = svg.volumeMuteSVG;
      _this.elements.volumeBtn.getElementsByTagName(`svg`)[0].replaceWith(SVG);
    }
  };

  _this.listeners.onCursorMoveVolumeBar = e => {
    e.preventDefault();
    const clientX = e.clientX || ((e.touches || [])[0] || {}).clientX;
    const viewportOffset = _this.elements.volumeBarHelper.getBoundingClientRect();
    let positionX = clientX - viewportOffset.left;

    if (positionX < 0) {
      positionX = 0;
    } else if (positionX > _this.elements.volumeBarHelper.offsetWidth) {
      positionX = _this.elements.volumeBarHelper.offsetWidth;
    }
    _this.settings.volume = Number(
      (positionX / _this.elements.volumeBarHelper.offsetWidth).toFixed(2)
    );
    _this.elements.volumeBarActive.style.width =
      _this.settings.volume * 100 + `%`;
    _this.clip.setVolume(_this.settings.volume);

    if (_this.settings.volume > 0) {
      _this.settings.volumeMute = false;
      const SVG = document.createElement(`span`);
      SVG.innerHTML = svg.volumeSVG;
      _this.elements.volumeBtn.getElementsByTagName(`svg`)[0].replaceWith(SVG);
    } else if (_this.settings.volume === 0) {
      _this.settings.volumeMute = true;
      const SVG = document.createElement(`span`);
      SVG.innerHTML = svg.volumeMuteSVG;
      _this.elements.volumeBtn.getElementsByTagName(`svg`)[0].replaceWith(SVG);
    }
  };

  _this.listeners.onMouseUpVolumeBar = e => {
    e.preventDefault();
    if (_this.settings.volume > 0) {
      _this.settings.previousVolume = _this.settings.volume;
    }
    removeListener(`mouseup`, _this.listeners.onMouseUpVolumeBar, false);
    removeListener(`touchend`, _this.listeners.onMouseUpVolumeBar, false);
    removeListener(`mousemove`, _this.listeners.onCursorMoveVolumeBar, false);
    removeListener(`touchmove`, _this.listeners.onCursorMoveVolumeBar, false);
  };

  _this.listeners.onMouseDownVolumeBar = e => {
    e.preventDefault();
    _this.listeners.onCursorMoveVolumeBar(e);
    addListener(`mouseup`, _this.listeners.onMouseUpVolumeBar, false);
    addListener(`touchend`, _this.listeners.onMouseUpVolumeBar, false);
    addListener(`mousemove`, _this.listeners.onCursorMoveVolumeBar, false);
    addListener(`touchmove`, _this.listeners.onCursorMoveVolumeBar, false);
  };

  _this.elements.volumeBarHelper.addEventListener(
    `mousedown`,
    _this.listeners.onMouseDownVolumeBar,
    false
  );
  _this.elements.volumeCursor.addEventListener(
    `mousedown`,
    _this.listeners.onMouseDownVolumeBar,
    false
  );
  _this.elements.volumeBarHelper.addEventListener(
    `touchstart`,
    _this.listeners.onMouseDownVolumeBar,
    {
      passive: false
    },
    false
  );
  _this.elements.volumeCursor.addEventListener(
    `touchstart`,
    _this.listeners.onMouseDownVolumeBar,
    {
      passive: false
    },
    false
  );
};
