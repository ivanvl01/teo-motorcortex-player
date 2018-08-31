const themes = {
  default: {
    "settings-background-color": "whitesmoke",
    "hms-background-color": "whitesmoke",
    "background-color": "whitesmoke",
    "grad-height": "0px",
    color: "black",
    "svg-color": "black",
    "loopbar-color": "#808086",
    "speedbar-color": "#666",
    "runningbar-color": "red",
    "cursor-color": "red",
    "speedbar-cursor-color": "red",
    "button-opacity": "0.8",
    "hover-color": "rgba(200, 200, 200, 0.5)",
    "slider-off-color": "#ccc",
    "slider-on-color": "red",
    "preview-border": "1px solid rgba(0,0,0,1)",
    border: "1px solid rgba(255,255,255,0.2)",
    "controls-border": "none",
    "svg-selected-color": "red"
  },
  dark: {
    "settings-background-color": "black",
    "hms-background-color": "black",
    "background-color": "black",
    "grad-height": "0px",
    color: "white",
    "svg-color": "white",
    "loopbar-color": "#808086",
    "speedbar-color": "#666",
    "runningbar-color": "red",
    "cursor-color": "red",
    "speedbar-cursor-color": "red",
    "button-opacity": "0.8",
    "hover-color": "rgba(90, 90, 90, 0.5)",
    "slider-off-color": "#ccc",
    "slider-on-color": "red",
    "preview-border": "1px solid rgba(0,0,0,1)",
    border: "1px solid rgba(255,255,255,0.2)",
    "controls-border": "none",
    "svg-selected-color": "red"
  },
  whiteGold: {
    "settings-background-color": "white",
    "hms-background-color": "white",
    "background-color": "white",
    "grad-height": "0px",
    color: "#a17f1a",
    "svg-color": "#a17f1a",
    "loopbar-color": "#808086",
    "speedbar-color": "#666",
    "runningbar-color": "#a17f1a",
    "cursor-color": "#a17f1a",
    "speedbar-cursor-color": "#a17f1a",
    "button-opacity": "0.8",
    "hover-color": "rgba(200, 200, 200, 0.5)",
    "slider-off-color": "#ccc",
    "slider-on-color": "#a17f1a",
    "preview-border": "1px solid rgba(0,0,0,1)",
    border: "1px solid rgba(255,255,255,0.2)",
    "controls-border": "none",
    "svg-selected-color": "red"
  },
  darkGold: {
    "settings-background-color": "black",
    "hms-background-color": "black",
    "background-color": "black",
    "grad-height": "0px",
    color: "#a17f1a",
    "svg-color": "#a17f1a",
    "loopbar-color": "#808086",
    "speedbar-color": "#666",
    "runningbar-color": "#a17f1a",
    "cursor-color": "#a17f1a",
    "speedbar-cursor-color": "#a17f1a",
    "button-opacity": "0.8",
    "hover-color": "rgba(90, 90, 90, 0.5)",
    "slider-off-color": "#ccc",
    "slider-on-color": "#a17f1a",
    "preview-border": "1px solid rgba(0,0,0,1)",
    border: "1px solid rgba(255,255,255,0.2)",
    "controls-border": "none",
    "svg-selected-color": "red"
  },
  transparent: {
    "background-color": "transparent",
    "settings-background-color": "rgba(0,0,0,0.5)",
    "hms-background-color": "rgba(0,0,0,0.5)",
    "preview-border": "1px solid rgba(0,0,0,1)",
    color: "white",
    "grad-height": "60px",
    "svg-color": "white",
    "loopbar-color": "#808086",
    "speedbar-color": "#666",
    "runningbar-color": "red",
    "cursor-color": "red",
    "speedbar-cursor-color": "red",
    "button-opacity": "0.8",
    "hover-color": "rgba(200, 200, 200, 0.5)",
    "slider-off-color": "#ccc",
    "slider-on-color": "red",
    border: "1px solid rgba(255,255,255,0.1)",
    "controls-border": "1px solid rgba(255,255,255,0.1)",
    "svg-selected-color": "red"
  },
  "on-top": {
    "controls-bottom": "0px",
    "settings-panel-bottom": "45px",
    "controls-position": "0px"
  },
  "position-default": {
    "controls-bottom": "-40px",
    "settings-panel-bottom": "5px",
    "controls-position": "40px"
  }
};

module.exports = theme => themes[theme];
