"use strict";

var svg = module.exports = {};
svg.playSVG = "\n  <svg width=\"100%\" class=\"svg\" height=\"100%\" viewBox=\"0 0 36 36\" >\n    <path id=\"play-icon\" data-state=\"paused\"  d=\"M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28\" />\n  </svg>\n";

svg.pauseSVG = "\n  <svg class=\"svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 36 36\" >\n    <path id=\"pause-icon\" data-state=\"playing\" d=\"M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26\" />\n  </svg>\n";

svg.replaySVG = "\n  <svg  class=\"svg\" width=\"100%\" height=\"100%\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 1000 1000\" enable-background=\"new 0 0 1000 1000\" xml:space=\"preserve\">\n    <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>\n    <g><g transform=\"translate(0.000000,511.000000) scale(0.100000,-0.100000)\">\n      <path d=\"M5356.3,4203.8c-1247.8-153.1-2324.2-811.3-3000.7-1839.7c-379.4-578.2-596.5-1209-660.5-1933.4l-27.4-294.8H883.9c-431.9,0-783.9-6.9-783.9-18.3c0-9.2,477.6-493.7,1062.7-1078.7l1062.7-1062.7L3288.1-961.1C3873.1-376,4350.8,108.5,4350.8,117.6c0,11.4-356.5,18.3-790.7,18.3h-793l18.3,189.7C2831,876.3,2991,1338,3288.1,1779.1C4122.3,3026.9,5706,3472.5,7065.8,2841.8C7639.4,2578.9,8197,2035,8487.3,1461.4C8581,1274,8709,896.9,8754.7,666.1c48-246.8,54.8-811.3,9.1-1055.8C8567.3-1491.3,7788-2394,6720.7-2750.5c-315.4-107.4-541.6-139.4-941.6-139.4c-287.9,0-415.9,11.4-598.8,50.3c-523.3,112-973.6,335.9-1371.2,681c-75.4,68.6-148.5,123.4-160,123.4c-9.1,0-187.4-169.1-393.1-374.8c-434.2-434.2-420.5-363.4-105.1-628.5c852.4-710.7,1972.3-1055.8,3046.4-937c1627.2,176,2977.8,1257,3489.8,2790.4c457.1,1368.9,169.1,2843-777,3969.7C8322.7,3484,7417.8,4000.4,6503.6,4160.4C6197.4,4213,5619.2,4235.8,5356.3,4203.8z\"/>\n      <path d=\"M4990.7,124.5c0-1503.8,4.6-1794,32-1778c16,9.1,505.1,413.6,1085.6,895.8C7113.8,78.8,7161.8,122.2,7122.9,161c-80,75.4-2109.4,1757.5-2120.8,1757.5C4995.3,1918.5,4990.7,1111.8,4990.7,124.5z\"/>\n    </g></g>\n  </svg>\n";

svg.settingsSVG = "\n  <svg class=\"svg\" width=\"100%\" height=\"100%\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 268.765 268.765\" style=\"enable-background:new 0 0 268.765 268.765;\" xml:space=\"preserve\">\n    <g id=\"Settings\">\n      <g>\n        <path style=\"fill-rule:evenodd;clip-rule:evenodd;\" d=\"M267.92,119.461c-0.425-3.778-4.83-6.617-8.639-6.617\n          c-12.315,0-23.243-7.231-27.826-18.414c-4.682-11.454-1.663-24.812,7.515-33.231c2.889-2.641,3.24-7.062,0.817-10.133\n          c-6.303-8.004-13.467-15.234-21.289-21.5c-3.063-2.458-7.557-2.116-10.213,0.825c-8.01,8.871-22.398,12.168-33.516,7.529\n          c-11.57-4.867-18.866-16.591-18.152-29.176c0.235-3.953-2.654-7.39-6.595-7.849c-10.038-1.161-20.164-1.197-30.232-0.08\n          c-3.896,0.43-6.785,3.786-6.654,7.689c0.438,12.461-6.946,23.98-18.401,28.672c-10.985,4.487-25.272,1.218-33.266-7.574\n          c-2.642-2.896-7.063-3.252-10.141-0.853c-8.054,6.319-15.379,13.555-21.74,21.493c-2.481,3.086-2.116,7.559,0.802,10.214\n          c9.353,8.47,12.373,21.944,7.514,33.53c-4.639,11.046-16.109,18.165-29.24,18.165c-4.261-0.137-7.296,2.723-7.762,6.597\n          c-1.182,10.096-1.196,20.383-0.058,30.561c0.422,3.794,4.961,6.608,8.812,6.608c11.702-0.299,22.937,6.946,27.65,18.415\n          c4.698,11.454,1.678,24.804-7.514,33.23c-2.875,2.641-3.24,7.055-0.817,10.126c6.244,7.953,13.409,15.19,21.259,21.508\n          c3.079,2.481,7.559,2.131,10.228-0.81c8.04-8.893,22.427-12.184,33.501-7.536c11.599,4.852,18.895,16.575,18.181,29.167\n          c-0.233,3.955,2.67,7.398,6.595,7.85c5.135,0.599,10.301,0.898,15.481,0.898c4.917,0,9.835-0.27,14.752-0.817\n          c3.897-0.43,6.784-3.786,6.653-7.696c-0.451-12.454,6.946-23.973,18.386-28.657c11.059-4.517,25.286-1.211,33.281,7.572\n          c2.657,2.89,7.047,3.239,10.142,0.848c8.039-6.304,15.349-13.534,21.74-21.494c2.48-3.079,2.13-7.559-0.803-10.213\n          c-9.353-8.47-12.388-21.946-7.529-33.524c4.568-10.899,15.612-18.217,27.491-18.217l1.662,0.043\n          c3.853,0.313,7.398-2.655,7.865-6.588C269.044,139.917,269.058,129.639,267.92,119.461z M134.595,179.491\n          c-24.718,0-44.824-20.106-44.824-44.824c0-24.717,20.106-44.824,44.824-44.824c24.717,0,44.823,20.107,44.823,44.824\n          C179.418,159.385,159.312,179.491,134.595,179.491z\"/>\n      </g>\n    </g>\n  <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>\n  </svg>\n";

svg.arrowRightSVG = "\n  <svg class=\"svg\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"100%\" height=\"100%\" viewBox=\"0 0 50 80\" xml:space=\"preserve\">\n    <polyline fill=\"none\" stroke-width=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\" points=\"0.375,0.375 45.63,38.087 0.375,75.8 \"/>\n  </svg>\n";

svg.arrowLeftSVG = "\n  <svg class=\"svg\" class=\"svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 50 80\" xml:space=\"preserve\">\n    <polyline fill=\"none\" stroke-width=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\" points=\"45.63,75.8 0.375,38.087 45.63,0.375 \"/>\n  </svg> \n";

svg.fullScreenSVG = "\n  <svg class=\"svg\" width=\"100%\" height=\"100%\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 298.667 298.667\" style=\"enable-background:new 0 0 298.667 298.667;\" xml:space=\"preserve\">\n    <g>\n      <g>\n        <g>\n          <polygon points=\"42.667,192 0,192 0,298.667 106.667,298.667 106.667,256 42.667,256\"/>\n          <polygon points=\"0,106.667 42.667,106.667 42.667,42.667 106.667,42.667 106.667,0 0,0\"/>\n          <polygon points=\"192,0 192,42.667 256,42.667 256,106.667 298.667,106.667 298.667,0\"/>\n          <polygon points=\"256,256 192,256 192,298.667 298.667,298.667 298.667,192 256,192\"/>\n        </g>\n      </g>\n    </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>\n  </svg>\n";

svg.loopSVG = "\n<svg class=\"svg\" width=\"100%\" height=\"100%\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 32 32\" style=\"enable-background:new 0 0 32 32;\" xml:space=\"preserve\">\n  <g>\n    <g id=\"loop_x5F_alt3\">\n      <g>\n        <path d=\"M28,16v2c0,1.102-0.898,2-2,2H11.996L12,16l-8,6l8,6l-0.004-4H26c3.309,0,6-2.695,6-6v-2H28z\"/>\n        <path d=\"M4,14c0-1.105,0.898-2,2-2h14v4l7.992-6L20,4v4H6c-3.309,0-6,2.688-6,6v2h4V14z\"/>\n      </g>\n    </g>\n  </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>\n</svg>";