import { parseFragment, registerTemplate } from "lwc";
let $fragment1;
const $hoisted1 = parseFragment`<p${1}${2}>Test slot content</p>`;
const stc0 = {
  key: 0,
};
const stc1 = {
  attrs: {
    name: "test",
  },
  key: 1,
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const { st: api_static_fragment, s: api_slot, h: api_element } = $api;
  return [
    api_element("section", stc0, [
      api_slot(
        "test",
        stc1,
        [
          api_static_fragment(
            $fragment1 || ($fragment1 = $hoisted1()),
            "@test:3"
          ),
        ],
        $slotset
      ),
    ]),
  ];
  /*LWC compiler vX.X.X*/
}
export default registerTemplate(tmpl);
tmpl.slots = ["test"];
tmpl.stylesheets = [];
