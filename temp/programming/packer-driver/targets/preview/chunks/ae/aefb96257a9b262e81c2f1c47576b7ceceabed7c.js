System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, input, Input, tween, _dec, _class, _crd, ccclass, MovingCircle;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      input = _cc.input;
      Input = _cc.Input;
      tween = _cc.tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1ed74JyXstCA5zZWVQsAReZ", "biControl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Vec3', 'input', 'Input', 'tween']);

      ({
        ccclass
      } = _decorator);

      _export("MovingCircle", MovingCircle = (_dec = ccclass('MovingCircle'), _dec(_class = class MovingCircle extends Component {
        constructor() {
          super(...arguments);
          this.isMovingBack = false;
        }

        start() {
          // Bắt đầu di chuyển hình tròn khi Scene được khởi tạo
          input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
          this.moveCircle(1);
        }

        moveCircle(moveTime) {
          if (this.isMovingBack) {
            tween(this.node).stop();
            this.isMovingBack = false;
          } // Vị trí ban đầu của hình tròn


          var startPosition = new Vec3(-203.75, -117.002, 0); // Vị trí kết thúc của hình tròn

          var endPosition = new Vec3(191.574, -117.002, 0); // Tween để di chuyển từ vị trí ban đầu đến vị trí kết thúc

          tween(this.node).stop().to(moveTime, {
            position: endPosition
          }).call(() => {
            // Gọi lại hàm moveCircle khi di chuyển kết thúc để hình tròn quay lại
            this.moveBack(1);
          }).start();
        }

        moveBack(moveTime) {
          if (!this.isMovingBack) {
            tween(this.node).stop();
            this.isMovingBack = true;
          } // Vị trí ban đầu của hình tròn


          var startPosition = new Vec3(-203.75, -117.002, 0); // Vị trí kết thúc của hình tròn

          var endPosition = new Vec3(191.574, -117.002, 0); // Tween để di chuyển từ vị trí kết thúc về vị trí ban đầu

          tween(this.node).stop().to(moveTime, {
            position: startPosition
          }).call(() => {
            // Gọi lại hàm moveCircle khi di chuyển kết thúc để bắt đầu chu kỳ mới
            this.moveCircle(1);
          }).start();
        }

        onMouseDown(event) {
          // Kiểm tra nếu người dùng click chuột trái
          var v = (191.574 + 203.75) / 60;
          var s = 0;

          if (event.getButton() === 0) {
            // Ngay lập tức đổi chiều khi click chuột trái
            tween(this.node).stop();

            if (this.isMovingBack) {
              if (this.node.position.x >= 0) {
                s = 191.574 - this.node.position.x;
                this.moveCircle(s / v / 60);
              } else {
                s = Math.abs(this.node.position.x) + 191.574;
                this.moveCircle(s / v / 60);
              }
            } else {
              if (this.node.position.x >= 0) {
                s = 203.75 + this.node.position.x;
                this.moveBack(s / v / 60);
              } else {
                s = 203.75 - Math.abs(this.node.position.x);
                this.moveBack(s / v / 60);
              }
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aefb96257a9b262e81c2f1c47576b7ceceabed7c.js.map