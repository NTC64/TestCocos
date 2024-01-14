System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Prefab, Vec3, tween, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, FallingBlocks;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3aa50mcp2pD6K69w3PS1W+b", "square", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Prefab', 'Vec3', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FallingBlocks", FallingBlocks = (_dec = ccclass('FallingBlocks'), _dec2 = property({
        type: Prefab
      }), _dec(_class = (_class2 = class FallingBlocks extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "blockPrefab", _descriptor, this);
        }

        start() {
          tween(this.node).to(1, {
            position: new Vec3(0, 0, 0)
          }).call(() => {
            // Khi di chuyển kết thúc, hủy bỏ khối
            this.node.destroy();
          }).start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "blockPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=269415969aeffd236db8ed6dac4dc45867244b28.js.map