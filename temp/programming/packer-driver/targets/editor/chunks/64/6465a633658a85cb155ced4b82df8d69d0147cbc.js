System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Collider2D, Contact2DType, Node, Color, Sprite, Label, director, Square, Screen, sounds, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, collier;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSquare(extras) {
    _reporterNs.report("Square", "./square", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScreen(extras) {
    _reporterNs.report("Screen", "./scene", _context.meta, extras);
  }

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
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      Node = _cc.Node;
      Color = _cc.Color;
      Sprite = _cc.Sprite;
      Label = _cc.Label;
      director = _cc.director;
    }, function (_unresolved_2) {
      Square = _unresolved_2.Square;
    }, function (_unresolved_3) {
      Screen = _unresolved_3.Screen;
    }, function (_unresolved_4) {
      sounds = _unresolved_4.sounds;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c77c591LjNMc69Ge+Ad8FAs", "collision", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Collider2D', 'Contact2DType', 'IPhysics2DContact', 'Node', 'Color', 'Sprite', 'Label', 'find', 'director', 'Prefab', 'instantiate', 'Scene']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("collier", collier = (_dec = ccclass('collier'), _dec2 = property(_crd && sounds === void 0 ? (_reportPossibleCrUseOfsounds({
        error: Error()
      }), sounds) : sounds), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: _crd && Square === void 0 ? (_reportPossibleCrUseOfSquare({
          error: Error()
        }), Square) : Square
      }), _dec8 = property({
        type: Node
      }), _dec9 = property({
        type: Node
      }), _dec10 = property({
        type: _crd && Screen === void 0 ? (_reportPossibleCrUseOfScreen({
          error: Error()
        }), Screen) : Screen
      }), _dec(_class = (_class2 = class collier extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "clip", _descriptor, this);

          _initializerDefineProperty(this, "scoreNode", _descriptor2, this);

          _initializerDefineProperty(this, "resultNode", _descriptor3, this);

          _initializerDefineProperty(this, "lineNode", _descriptor4, this);

          _initializerDefineProperty(this, "circleNode", _descriptor5, this);

          _initializerDefineProperty(this, "squareNode", _descriptor6, this);

          _initializerDefineProperty(this, "tryAgainNode", _descriptor7, this);

          _initializerDefineProperty(this, "gameNode", _descriptor8, this);

          _initializerDefineProperty(this, "screen", _descriptor9, this);

          this.score = 0;
          this.highestScore = 0;
          this.checkGameOver = false;
        }

        onLoad() {
          localStorage.setItem("best", this.highestScore.toString());
          this.checkGameOver = false;
        }

        start() {
          let collider = this.getComponent(Collider2D);
          collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }

        onBeginContact(selfCollider, ortherCollider, contact) {
          if (ortherCollider.name === "square<BoxCollider2D>" && ortherCollider.getComponent(Sprite).color.toHEX() === 'dd4247') {
            this.score++;
            ortherCollider.getComponent(Sprite).color = new Color(255, 255, 255, 0);
            this.scoreNode.getComponent(Label).string = this.score.toString();
            this.clip.onAudioQueue(2);
          } else {
            // this.squareNode.squareDestroy();
            this.showScore();
            this.screen.hideAllSquares();
            director.pause();
            this.clip.onAudioQueue(5);
            this.resetScore();
          }
        }

        showScore() {
          this.resultNode.getChildByName("backgroundResults").active = true;
          this.resultNode.getChildByName("topScore").active = true;
          this.resultNode.getChildByName("endScore").active = true;
          this.tryAgainNode.active = true;

          if (this.score > this.highestScore) {
            this.highestScore = this.score;
            localStorage.setItem("best", this.highestScore.toString());
            this.clip.onAudioQueue(3);
          }

          this.resultNode.getChildByName("topScore").getComponent(Label).string = "Top score: " + localStorage.getItem("best");
          this.resultNode.getChildByName("endScore").getComponent(Label).string = this.score.toString();
        }

        resetScore() {
          this.score = 0;
          this.scoreNode.getComponent(Label).string = "0";
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "clip", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scoreNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "resultNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lineNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "circleNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "squareNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "tryAgainNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "gameNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "screen", [_dec10], {
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
//# sourceMappingURL=6465a633658a85cb155ced4b82df8d69d0147cbc.js.map