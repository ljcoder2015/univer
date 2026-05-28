import {
  UniverActionRecorderPlugin
} from "./chunk-SZHFA5RI.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-JBZGO2SJ.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-A422M2XX.js";
import {
  UniverUniscriptPlugin
} from "./chunk-IHDQ7BNV.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-42CPELEF.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-ZDLF7XQN.js";
import "./chunk-57SCL377.js";
import {
  UniverDebuggerPlugin
} from "./chunk-HZZNSLBV.js";
import "./chunk-VS4IHITR.js";
import {
  UniverWatermarkPlugin
} from "./chunk-Y65XFGY6.js";
import "./chunk-FZXUB2YP.js";
import "./chunk-BN223HPL.js";
import "./chunk-Q33QYGSC.js";
import "./chunk-BGYQPHWI.js";
import "./chunk-TBW7DA3U.js";
import "./chunk-OUPAFTZU.js";
import "./chunk-EGU5CICW.js";
import "./chunk-YI67N2NN.js";
import "./chunk-OXQW5F2S.js";
import "./chunk-GMC4FNZY.js";
import "./chunk-6BJ26NAD.js";
import "./chunk-4JSWIADO.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-24OICD5T.js";

// src/sheets-multi-units/very-lazy.ts
var IS_E2E = false;
function getVeryLazyPlugins() {
  const plugins = [
    [UniverActionRecorderPlugin],
    [UniverSheetsHyperLinkUIPlugin],
    [UniverSheetsSortUIPlugin],
    [UniverSheetsCrosshairHighlightPlugin],
    [UniverSheetsFindReplacePlugin],
    [UniverWatermarkPlugin]
  ];
  if (!IS_E2E) {
    plugins.push([UniverDebuggerPlugin]);
    plugins.push([UniverUniscriptPlugin, {
      getWorkerUrl(_, label) {
        if (label === "json") {
          return "/vs/language/json/json.worker.js";
        }
        if (label === "css" || label === "scss" || label === "less") {
          return "/vs/language/css/css.worker.js";
        }
        if (label === "html" || label === "handlebars" || label === "razor") {
          return "/vs/language/html/html.worker.js";
        }
        if (label === "typescript" || label === "javascript") {
          return "/vs/language/typescript/ts.worker.js";
        }
        return "/vs/editor/editor.worker.js";
      }
    }]);
  }
  return plugins;
}
export {
  getVeryLazyPlugins as default
};
