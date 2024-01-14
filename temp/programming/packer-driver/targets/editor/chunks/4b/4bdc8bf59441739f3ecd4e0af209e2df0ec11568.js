System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, input, Input, tween, sounds, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, MovingCircle;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfsounds(extras) {
    _reporterNs.report("sounds", "./sounds", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      input = _cc.input;
      Input = _cc.Input;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      sounds = _unresolved_2.sounds;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "509511EnT9A/6+3IPwvIJ6m", "circle", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Vec3', 'input', 'Input', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MovingCircle", MovingCircle = (_dec = ccclass('MovingCircle'), _dec2 = property(_crd && sounds === void 0 ? (_reportPossibleCrUseOfsounds({
        error: Error()
      }), sounds) : sounds), _dec(_class = (_class2 = class MovingCircle extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "clip", _descriptor, this);

          this.isMovingBack = false;
          this.myTween = null;
        }

        start() {
          input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
          this.moveCircle(1);
        }

        moveCircle(moveTime) {
          if (this.isMovingBack) {
            tween(this.node).stop();
            this.isMovingBack = false;
          }

          const startPosition = new Vec3(-196.558, -126.931, 0);
          const endPosition = new Vec3(197.03, -126.931, 0);
          this.myTween = tween(this.node).to(moveTime, {
            position: endPosition
          }).call(() => {
            this.clip.onAudioQueue(4);
            this.moveBack(1);
          }).start();
        }

        moveBack(moveTime) {
          if (!this.isMovingBack) {
            tween(this.node).stop();
            this.isMovingBack = true;
          }

          const startPosition = new Vec3(-196.558, -126.931, 0);
          const endPosition = new Vec3(197.03, -126.931, 0);
          this.myTween = tween(this.node).to(moveTime, {
            position: startPosition
          }).call(() => {
            this.clip.onAudioQueue(4);
            this.moveCircle(1);
          }).start();
        }

        onMouseDown(event) {
          const v = (197.03 + 196.558) / 60;
          let s = 0;

          if (event.getButton() === 0) {
            this.clip.onAudioQueue(1);
            this.myTween.stop();

            if (this.isMovingBack) {
              if (this.node.position.x >= 0) {
                s = 197.04 - this.node.position.x;
                this.moveCircle(s / v / 60);
              } else {
                s = Math.abs(this.node.position.x) + 197.03;
                this.moveCircle(s / v / 60);
              }
            } else {
              if (this.node.position.x >= 0) {
                s = 196.558 + this.node.position.x;
                this.moveBack(s / v / 60);
              } else {
                s = 196.559 - Math.abs(this.node.position.x);
                this.moveBack(s / v / 60);
              }
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "clip", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4bdc8bf59441739f3ecd4e0af209e2df0ec11568.js.map