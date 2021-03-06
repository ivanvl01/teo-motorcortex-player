const MotorCortex = require("@kissmybutton/motorcortex");
const TestPluginDefinition = require("./testPlugin/main");
const Player = require("../src/index");

const TestPlugin = MotorCortex.loadPlugin(TestPluginDefinition);

// Configure clip
const config = {
  css: `
    #one {
      font-size:40px;
      text-align:center;
      font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
      color:#4b475f;
      
    }
    .container {
      background-color:black;
      display:flex;
      justify-content:center;
      align-items:center;
      height: 100%;
      background-color:#292929;
      border:2px solid black;
    }
  `,
  html: `<div class="container">
    <div id="one" class="element">Motorcortex Player-Test Plugin</div>
  </div>`,
  host: document.getElementById("clip"),
  containerParams: {
    width: "70%",
    height: "100%"
  },
  audio: "off"
};

// Create clip
const clip = new MotorCortex.Clip(config);
const animation_1 = new TestPlugin.TestIncident(
  {
    animatedAttrs: {
      left: 800,
      opacity: 0
    }
  },
  {
    id: "animation_1",
    selector: "#one",
    duration: 60000
  }
);
const animation_2 = new TestPlugin.TestIncident(
  {
    animatedAttrs: {
      left: 800,
      opacity: 0
    }
  },
  {
    id: "animation_2",
    selector: "#one",
    duration: 60000
  }
);
const animation_3 = new TestPlugin.TestIncident(
  {
    animatedAttrs: {
      left: 800,
      opacity: 0
    }
  },
  {
    id: "animation_3",
    selector: "#one",
    duration: 60000
  }
);

clip.addIncident(animation_1, 0);
clip.addIncident(animation_2, 60000);
clip.addIncident(animation_3, 120000);
window.clip = clip;
// Add clip to timer
new Player({
  // theme: "mc-blue",
  clip,
  preview: true,
  showVolume: true,
  speedValues: [
    8,
    3,
    "d",
    -4,
    -2,
    -1,
    "dd",
    -0.5,
    0,
    0.5,
    1,
    2,
    4,
    32,
    -32,
    1.2
  ],
  buttons: {}
});
