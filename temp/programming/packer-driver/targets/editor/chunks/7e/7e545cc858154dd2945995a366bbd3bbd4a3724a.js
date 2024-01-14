System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Prefab, instantiate, macro, Vec3, Sprite, Color, director, Input, collier, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, Screen;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfcollier(extras) {
    _reporterNs.report("collier", "./collision", _context.meta, extras);
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
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      macro = _cc.macro;
      Vec3 = _cc.Vec3;
      Sprite = _cc.Sprite;
      Color = _cc.Color;
      director = _cc.director;
      Input = _cc.Input;
    }, function (_unresolved_2) {
      collier = _unresolved_2.collier;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "538f2TAFc5MKoRiJN8GpgLj", "scene", undefined); // Screen.ts


      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'instantiate', 'macro', 'RigidBody2D', 'Vec3', 'Sprite', 'BoxCollider2D', 'Color', 'Quat', 'director', 'Input', 'Director']);

      // Assuming the class is named 'Square'
      ({
        ccclass,
        property
      } = _decorator);

      _export("Screen", Screen = (_dec = ccclass('Screen'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(_crd && collier === void 0 ? (_reportPossibleCrUseOfcollier({
        error: Error()
      }), collier) : collier), _dec(_class = (_class2 = class Screen extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "squarePrefab", _descriptor, this);

          _initializerDefineProperty(this, "tryAgain", _descriptor2, this);

          _initializerDefineProperty(this, "results", _descriptor3, this);

          _initializerDefineProperty(this, "game", _descriptor4, this);

          _initializerDefineProperty(this, "collier", _descriptor5, this);

          this.squareCount = 0;
          // Biến đếm
          this.squares = [];
        }

        onLoad() {
          this.initSquare();
          this.tryAgain.active = false;
          this.results.getChildByName("endScore").active = false;
          this.results.getChildByName("topScore").active = false;
          this.results.getChildByName("backgroundResults").active = false;
        }

        initSquare() {
          this.schedule(this.createSquare, 1, macro.REPEAT_FOREVER, 1);
        }

        start() {
          console.log('Prefab:', this.squarePrefab);
          this.tryAgain.on(Input.EventType.MOUSE_DOWN, this.onTouchStart, this);
        }

        onTouchStart(event) {
          if (event.getButton() === 0) {
            director.resume();
            this.initSquare();
            this.resetGame();
          }
        }

        resetGame() {
          this.tryAgain.active = false;
          this.results.getChildByName("endScore").active = false;
          this.results.getChildByName("topScore").active = false;
          this.results.getChildByName("backgroundResults").active = false;
        }

        createSquare() {
          const randomX = Math.random() * 400 - 200;
          const position = new Vec3(randomX, 421.611, 0);
          const squareNode = instantiate(this.squarePrefab);
          this.node.addChild(squareNode);
          this.squares.push(squareNode);
          squareNode.setPosition(position);
          const sprite = squareNode.getChildByName("square").getComponent(Sprite); // Lấy component Sprite của squareNode
          // Nếu là mỗi 5 cái thì đặt màu đỏ, ngược lại là màu đen

          if (this.squareCount % 5 === 0 && this.squareCount !== 0) {
            sprite.color = new Color(221, 66, 71, 255); // Màu đỏ
          } else {
            sprite.color = new Color(53, 53, 63, 255); // Màu đen
          }

          this.squareCount++;
        }

        hideAllSquares() {
          const squaresContainer = this.node; // Thay bằng node cha của các square

          squaresContainer.children.forEach(child => {
            if (child.name === "square") {
              try {
                child.getChildByName("square").destroy();
              } catch (error) {}
            }
          });
        }

        update(deltaTime) {// Logic cập nhật nếu cần
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "squarePrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tryAgain", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "results", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "game", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "collier", [_dec6], {
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
//# sourceMappingURL=7e545cc858154dd2945995a366bbd3bbd4a3724a.js.map