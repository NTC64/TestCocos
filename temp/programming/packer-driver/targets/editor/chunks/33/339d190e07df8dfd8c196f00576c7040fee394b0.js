System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, tween, _dec, _class, _crd, ccclass, property, game;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "db4d6VRmnNJqbkUcqtl9I/f", "game", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'instantiate', 'tween', 'random']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("game", game = (_dec = ccclass('game'), _dec(_class = class game extends Component {
        start() {
          const maxX = 200;
          const minX = -200;
          const randomX = Math.random() * (maxX - minX) + minX;
          const endPosition = new Vec3(randomX, -126.931, 0);
          tween(this.node).to(1, {
            position: endPosition
          }).call(() => {
            this.node.destroy();
          }).start();
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=339d190e07df8dfd8c196f00576c7040fee394b0.js.map