System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, tween, Quat, _dec, _class, _crd, ccclass, property, Square;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
      Quat = _cc.Quat;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "db4d6VRmnNJqbkUcqtl9I/f", "square", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'instantiate', 'tween', 'random', 'Quat', 'quat', 'Collider2D', 'Contact2DType', 'IPhysics2DContact']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Square", Square = (_dec = ccclass('Square'), _dec(_class = class Square extends Component {
        start() {
          const maxX = 50;
          const minX = -50;
          const randomX = Math.random() * (maxX - minX) + minX;
          const endPosition = new Vec3(randomX, -750, 0);
          tween(this.node).to(2, {
            position: endPosition,
            rotation: new Quat(0, 0, 1, 0.5)
          }).call(() => {
            this.node.destroy();
          }).start();
        }

        squareDestroy() {
          this.node.destroy();
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bc378d8afbba41cefc512035963c508db0e2bf51.js.map