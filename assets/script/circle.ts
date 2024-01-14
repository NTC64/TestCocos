import { _decorator, Component, Vec3, input, Input, tween } from 'cc';
import { sounds } from './sounds';
const { ccclass,property } = _decorator;

@ccclass('MovingCircle')
export class MovingCircle extends Component {
    @property(sounds)
    public clip: sounds;
    private isMovingBack: boolean = false;
    private myTween: any = null;
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
        this.myTween=tween(this.node)
            .to(moveTime, { position: endPosition })
            .call(() => {
                this.clip.onAudioQueue(4);
                this.moveBack(1);
            })
            .start();
    }

    moveBack(moveTime) {
        if (!this.isMovingBack) {
            tween(this.node).stop();
            this.isMovingBack = true;
        }
        const startPosition = new Vec3(-196.558, -126.931, 0);
        const endPosition = new Vec3(197.03, -126.931, 0);
       this.myTween= tween(this.node)
            .to(moveTime, { position: startPosition })
            .call(() => {
                this.clip.onAudioQueue(4);
                this.moveCircle(1);
            })
            .start();
    }
    onMouseDown(event) {
        const v= (197.03+196.558)/60;
        let s=0;
        if (event.getButton() === 0) {
            this.clip.onAudioQueue(1);
          this.myTween.stop();
            if (this.isMovingBack) {
                if(this.node.position.x >=0){
                    s = 197.04-this.node.position.x;
                    this.moveCircle((s/v)/60);
                }
                else{
                    s=Math.abs(this.node.position.x)+197.03;
                    this.moveCircle((s/v)/60);
                }
            } else {
                if(this.node.position.x >=0){
                  
                    s = 196.558+this.node.position.x;
                    this.moveBack((s/v)/60);
                }
                else{
                    s=196.559-Math.abs(this.node.position.x);
                    this.moveBack((s/v)/60);
                }
            
            }
        }
    }
}