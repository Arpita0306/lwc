import { parseFragment, registerTemplate } from "lwc";
let $fragment1;
const $hoisted1 = parseFragment`<table${1}${2}><tbody${1}${2}><tr${1}${2}></tr></tbody></table>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const { st: api_static_fragment } = $api;
  return [api_static_fragment($fragment1 || ($fragment1 = $hoisted1()), 1)];
  /*LWC compiler vX.X.X*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
