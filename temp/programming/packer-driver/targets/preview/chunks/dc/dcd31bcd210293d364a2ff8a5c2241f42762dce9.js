System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, animation, _dec, _class, _crd, ccclass, property, AnimationGraphComponent;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      animation = _cc.animation;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "06e12aLgQJDc4wrZLo0go1m", "AnimationGraphComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'animation']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AnimationGraphComponent", AnimationGraphComponent = (_dec = ccclass("AnimationGraphComponent"), _dec(_class = class AnimationGraphComponent extends animation.StateMachineComponent {
        /**
         * Called right after a motion state is entered.
         * @param controller The animation controller it within.
         * @param motionStateStatus The status of the motion.
         */
        onMotionStateEnter(controller, motionStateStatus) {// Can be overrode
        }
        /**
         * Called when a motion state is about to exit.
         * @param controller The animation controller it within.
         * @param motionStateStatus The status of the motion.
         */


        onMotionStateExit(controller, motionStateStatus) {// Can be overrode
        }
        /**
         * Called when a motion state updated except for the first and last frame.
         * @param controller The animation controller it within.
         * @param motionStateStatus The status of the motion.
         */


        onMotionStateUpdate(controller, motionStateStatus) {// Can be overrode
        }
        /**
         * Called right after a state machine is entered.
         * @param controller The animation controller it within.
         */


        onStateMachineEnter(controller) {// Can be overrode
        }
        /**
         * Called right after a state machine is entered.
         * @param controller The animation controller it within.
         */


        onStateMachineExit(controller) {// Can be overrode
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dcd31bcd210293d364a2ff8a5c2241f42762dce9.js.map