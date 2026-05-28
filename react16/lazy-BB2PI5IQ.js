import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-ZDYFITRK.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-BJSWGGNT.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-KCCOK6P7.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-HL673RFD.js";
import "./chunk-KQYANNBU.js";
import "./chunk-HSKID3FM.js";
import "./chunk-57SCL377.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-VS4IHITR.js";
import "./chunk-WFNK2WW3.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-FZXUB2YP.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-MN335666.js";
import "./chunk-3H64B4ZE.js";
import "./chunk-Q33QYGSC.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-5HGWZDYU.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-BGYQPHWI.js";
import "./chunk-DXLJTXCB.js";
import "./chunk-TBW7DA3U.js";
import "./chunk-EGU5CICW.js";
import "./chunk-YI67N2NN.js";
import "./chunk-OXQW5F2S.js";
import "./chunk-GMC4FNZY.js";
import "./chunk-6BJ26NAD.js";
import "./chunk-4JSWIADO.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-24OICD5T.js";

// src/sheets-no-worker/lazy.ts
function getLazyPlugins() {
  return [
    [UniverDocsDrawingUIPlugin],
    [UniverDocsMentionUIPlugin],
    [UniverSheetsNumfmtUIPlugin],
    [UniverThreadCommentUIPlugin],
    [UniverSheetsThreadCommentUIPlugin],
    [UniverSheetsNoteUIPlugin],
    [UniverSheetsTableUIPlugin],
    [UniverSheetsFormulaUIPlugin],
    [UniverSheetsDataValidationUIPlugin],
    [UniverSheetsConditionalFormattingUIPlugin],
    [UniverSheetsFilterUIPlugin, { useRemoteFilterValuesGenerator: false }],
    [UniverSheetsDrawingUIPlugin]
  ];
}
export {
  getLazyPlugins as default
};
