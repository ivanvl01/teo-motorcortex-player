const svg = (module.exports = {});
svg.playSVG = `
  <svg width="100%" class="svg" height="100%" viewBox="0 0 36 36" >
    <path id="play-icon" data-state="paused"  d="M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28" />
  </svg>
`;
svg.dcSVG = `
  <svg class="svg" width="100%" height="100%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   viewBox="0 0 400 400" style="enable-background:new 0 0 286.374 286.374;" xml:space="preserve">
<path stroke-width="10.00" stroke-linecap="butt" stroke-linejoin="miter" opacity="1" d="M 120.17407989501953 162.04714965820312 L 121.16549682617188 320.6739196777344 Q 279.79229736328125 321.66534423828125 280.78369140625 241.36053466796875 Q 281.77508544921875 161.05572509765625 439.41046142578125 160.06431579589844 L 439.41046142578125 200.71243286132812 Q 281.7751159667969 163.03857421875 280.78369140625 241.36053466796875 Q 279.7922668457031 319.6824951171875 159.8307647705078 281.0172424316406 L 158.83935546875 198.72959899902344 Q 281.7751159667969 161.05572509765625 280.78369140625 241.36053466796875 Q 279.7922668457031 321.66534423828125 440.40185546875 320.6739196777344 L 440.40185546875 280.02581787109375 Q 280.78369140625 321.66534423828125 280.78369140625 241.36053466796875 C 280.78369140625 161.05572509765625 161.8135986328125 161.05572509765625 120.17407989501953 162.04714965820312 Z" selected="true" transform="matrix(1 0 0 1 0 0)"></path></svg>`;

svg.pauseSVG = `
  <svg class="svg" width="100%" height="100%" viewBox="0 0 36 36" >
    <path id="pause-icon" data-state="playing" d="M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26" />
  </svg>
`;

svg.replaySVG = `
  <svg class="svg" width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
    <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
    <g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
      <path d="M5356.3,4203.8c-1247.8-153.1-2324.2-811.3-3000.7-1839.7c-379.4-578.2-596.5-1209-660.5-1933.4l-27.4-294.8H883.9c-431.9,0-783.9-6.9-783.9-18.3c0-9.2,477.6-493.7,1062.7-1078.7l1062.7-1062.7L3288.1-961.1C3873.1-376,4350.8,108.5,4350.8,117.6c0,11.4-356.5,18.3-790.7,18.3h-793l18.3,189.7C2831,876.3,2991,1338,3288.1,1779.1C4122.3,3026.9,5706,3472.5,7065.8,2841.8C7639.4,2578.9,8197,2035,8487.3,1461.4C8581,1274,8709,896.9,8754.7,666.1c48-246.8,54.8-811.3,9.1-1055.8C8567.3-1491.3,7788-2394,6720.7-2750.5c-315.4-107.4-541.6-139.4-941.6-139.4c-287.9,0-415.9,11.4-598.8,50.3c-523.3,112-973.6,335.9-1371.2,681c-75.4,68.6-148.5,123.4-160,123.4c-9.1,0-187.4-169.1-393.1-374.8c-434.2-434.2-420.5-363.4-105.1-628.5c852.4-710.7,1972.3-1055.8,3046.4-937c1627.2,176,2977.8,1257,3489.8,2790.4c457.1,1368.9,169.1,2843-777,3969.7C8322.7,3484,7417.8,4000.4,6503.6,4160.4C6197.4,4213,5619.2,4235.8,5356.3,4203.8z"/>
      <path d="M4990.7,124.5c0-1503.8,4.6-1794,32-1778c16,9.1,505.1,413.6,1085.6,895.8C7113.8,78.8,7161.8,122.2,7122.9,161c-80,75.4-2109.4,1757.5-2120.8,1757.5C4995.3,1918.5,4990.7,1111.8,4990.7,124.5z"/>
    </g></g>
  </svg>
`;

svg.volumeSVG = `
  <svg class="svg" width="100%" height="100%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   viewBox="0 0 286.374 286.374" style="enable-background:new 0 0 286.374 286.374;" xml:space="preserve">
    <g id="Volume_2">
      <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M233.636,26.767l-33.372,28.5c25.659,21.07,42.006,52.616,42.006,87.92
        c0,35.305-16.347,66.851-42.006,87.921l33.372,28.499c32.324-28.869,52.738-70.268,52.738-116.421
        C286.374,97.034,265.96,55.635,233.636,26.767z M177.737,74.513l-34.69,29.64c15.14,6.818,27.19,21.681,27.19,39.034
        s-12.05,32.216-27.19,39.034l34.69,29.64c21.294-15.717,36.051-40.586,36.051-68.674C213.788,115.099,199.03,90.23,177.737,74.513z
         M108.672,48.317L44.746,98.441H17.898C4.671,98.441,0,103.268,0,116.34v53.695c0,13.072,4.951,17.898,17.898,17.898h26.848
        l63.926,50.068c7.668,4.948,16.558,6.505,16.558-7.365V55.683C125.23,41.813,116.34,43.37,108.672,48.317z"/>
    </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
  </svg>
`;

svg.volumeMuteSVG = `
  <svg class="svg" width="100%" height="100%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   viewBox="0 0 286.277 286.277" style="enable-background:new 0 0 286.277 286.277;" xml:space="preserve">
    <g id="Volume_none">
      <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M245.102,143.151l36.98-37.071c5.593-5.605,5.593-14.681,0-20.284
        l-10.124-10.142c-5.593-5.604-14.655-5.604-20.247,0l-36.98,37.071l-36.977-37.043c-5.594-5.603-14.654-5.603-20.247,0
        l-10.124,10.143c-5.594,5.603-5.594,14.679,0,20.282l36.987,37.053l-36.961,37.051c-5.591,5.604-5.591,14.681,0,20.284
        l10.126,10.141c5.593,5.604,14.654,5.604,20.247,0l36.96-37.05l36.97,37.035c5.592,5.605,14.654,5.605,20.247,0l10.124-10.141
        c5.593-5.603,5.593-14.68,0-20.282L245.102,143.151z M108.674,48.296L44.747,98.42H17.9c-13.228,0-17.899,4.826-17.899,17.898
        L0,142.719l0.001,27.295c0,13.072,4.951,17.898,17.899,17.898h26.847l63.927,50.068c7.667,4.948,16.557,6.505,16.557-7.365V55.662
        C125.23,41.792,116.341,43.349,108.674,48.296z"/>
    </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
  </svg>
`;

svg.settingsSVG = `
  <svg class="svg" width="100%" height="100%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 268.765 268.765" style="enable-background:new 0 0 268.765 268.765;" xml:space="preserve">
    <g id="Settings">
      <g>
        <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M267.92,119.461c-0.425-3.778-4.83-6.617-8.639-6.617
          c-12.315,0-23.243-7.231-27.826-18.414c-4.682-11.454-1.663-24.812,7.515-33.231c2.889-2.641,3.24-7.062,0.817-10.133
          c-6.303-8.004-13.467-15.234-21.289-21.5c-3.063-2.458-7.557-2.116-10.213,0.825c-8.01,8.871-22.398,12.168-33.516,7.529
          c-11.57-4.867-18.866-16.591-18.152-29.176c0.235-3.953-2.654-7.39-6.595-7.849c-10.038-1.161-20.164-1.197-30.232-0.08
          c-3.896,0.43-6.785,3.786-6.654,7.689c0.438,12.461-6.946,23.98-18.401,28.672c-10.985,4.487-25.272,1.218-33.266-7.574
          c-2.642-2.896-7.063-3.252-10.141-0.853c-8.054,6.319-15.379,13.555-21.74,21.493c-2.481,3.086-2.116,7.559,0.802,10.214
          c9.353,8.47,12.373,21.944,7.514,33.53c-4.639,11.046-16.109,18.165-29.24,18.165c-4.261-0.137-7.296,2.723-7.762,6.597
          c-1.182,10.096-1.196,20.383-0.058,30.561c0.422,3.794,4.961,6.608,8.812,6.608c11.702-0.299,22.937,6.946,27.65,18.415
          c4.698,11.454,1.678,24.804-7.514,33.23c-2.875,2.641-3.24,7.055-0.817,10.126c6.244,7.953,13.409,15.19,21.259,21.508
          c3.079,2.481,7.559,2.131,10.228-0.81c8.04-8.893,22.427-12.184,33.501-7.536c11.599,4.852,18.895,16.575,18.181,29.167
          c-0.233,3.955,2.67,7.398,6.595,7.85c5.135,0.599,10.301,0.898,15.481,0.898c4.917,0,9.835-0.27,14.752-0.817
          c3.897-0.43,6.784-3.786,6.653-7.696c-0.451-12.454,6.946-23.973,18.386-28.657c11.059-4.517,25.286-1.211,33.281,7.572
          c2.657,2.89,7.047,3.239,10.142,0.848c8.039-6.304,15.349-13.534,21.74-21.494c2.48-3.079,2.13-7.559-0.803-10.213
          c-9.353-8.47-12.388-21.946-7.529-33.524c4.568-10.899,15.612-18.217,27.491-18.217l1.662,0.043
          c3.853,0.313,7.398-2.655,7.865-6.588C269.044,139.917,269.058,129.639,267.92,119.461z M134.595,179.491
          c-24.718,0-44.824-20.106-44.824-44.824c0-24.717,20.106-44.824,44.824-44.824c24.717,0,44.823,20.107,44.823,44.824
          C179.418,159.385,159.312,179.491,134.595,179.491z"/>
      </g>
    </g>
  <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
  </svg>
`;

svg.arrowRightSVG = `
  <svg class="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 50 80" xml:space="preserve">
    <polyline fill="none" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "/>
  </svg>
`;

svg.arrowLeftSVG = `
  <svg class="svg" class="svg" width="100%" height="100%" viewBox="0 0 50 80" xml:space="preserve">
    <polyline fill="none" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375 "/>
  </svg> 
`;

svg.fullScreenSVG = `
  <svg class="svg" width="100%" height="100%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 298.667 298.667" style="enable-background:new 0 0 298.667 298.667;" xml:space="preserve">
    <g>
      <g>
        <g>
          <polygon points="42.667,192 0,192 0,298.667 106.667,298.667 106.667,256 42.667,256"/>
          <polygon points="0,106.667 42.667,106.667 42.667,42.667 106.667,42.667 106.667,0 0,0"/>
          <polygon points="192,0 192,42.667 256,42.667 256,106.667 298.667,106.667 298.667,0"/>
          <polygon points="256,256 192,256 192,298.667 298.667,298.667 298.667,192 256,192"/>
        </g>
      </g>
    </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
  </svg>
`;

svg.loopSVG = `
<svg class="svg" width="100%" height="100%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
  <g>
    <g id="loop_x5F_alt3">
      <g>
        <path d="M28,16v2c0,1.102-0.898,2-2,2H11.996L12,16l-8,6l8,6l-0.004-4H26c3.309,0,6-2.695,6-6v-2H28z"/>
        <path d="M4,14c0-1.105,0.898-2,2-2h14v4l7.992-6L20,4v4H6c-3.309,0-6,2.688-6,6v2h4V14z"/>
      </g>
    </g>
  </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
</svg>`;

svg.loadingSVG = `<svg class="lds-spinner" width="80px"  height="80px"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="background: none;"><g transform="rotate(0 50 50)">
  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(30 50 50)">
  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(60 50 50)">
  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(90 50 50)">
  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(120 50 50)">
  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(150 50 50)">
  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(180 50 50)">
  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(210 50 50)">
  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(240 50 50)">
  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(270 50 50)">
  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(300 50 50)">
  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(330 50 50)">
  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
  </rect>
</g></svg>`;
