System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, Input, Node, sounds, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, play;

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
      director = _cc.director;
      Input = _cc.Input;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      sounds = _unresolved_2.sounds;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7b9e8U+xXxALZNwavt8KCYv", "play", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Input', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("play", play = (_dec = ccclass('play'), _dec2 = property(_crd && sounds === void 0 ? (_reportPossibleCrUseOfsounds({
        error: Error()
      }), sounds) : sounds), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = class play extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "clip", _descriptor, this);

          _initializerDefineProperty(this, "play", _descriptor2, this);

          _initializerDefineProperty(this, "logo", _descriptor3, this);

          _initializerDefineProperty(this, "background", _descriptor4, this);
        }

        onLoad() {
          director.pause();
          this.play.on(Input.EventType.MOUSE_DOWN, this.onTouchStart, this);
        }

        start() {}

        onTouchStart(event) {
          if (event.getButton() === 0) {
            this.clip.onAudioQueue(0);
            director.resume();
            this.background.active = false;
            this.logo.active = false;
            this.play.active = false;
          }
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "clip", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "play", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "logo", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "background", [_dec5], {
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
//# sourceMappingURL=7221a8b76ae1cc0c894dac06e601fe999ab0069d.js.map