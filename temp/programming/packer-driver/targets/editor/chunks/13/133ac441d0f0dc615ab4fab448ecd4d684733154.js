System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, RenderFlow, _dec, _class, _crd, ccclass, property, custom_render_flow;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      RenderFlow = _cc.RenderFlow;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "df2d7oGXGZD/LtyAWA9kab8", "custom-render-flow", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'RenderFlow']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("custom_render_flow", custom_render_flow = (_dec = ccclass("custom_render_flow"), _dec(_class = class custom_render_flow extends RenderFlow {
        rebuild() {}

        destroy() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=133ac441d0f0dc615ab4fab448ecd4d684733154.js.map