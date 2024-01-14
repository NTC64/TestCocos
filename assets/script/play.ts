import { _decorator, Component, director,Input, Node } from 'cc';
const { ccclass, property } = _decorator;
import { sounds } from './sounds';
@ccclass('play')
export class play extends Component {
    @property(sounds)
    public clip: sounds;
    @property(Node)
    play: Node=null;
    @property(Node)
    logo: Node=null;
    @property(Node)
    background: Node=null;
    onLoad() {
        director.pause();
        this.play.on(Input.EventType.MOUSE_DOWN, this.onTouchStart, this);
    }
    start() {
    }
    onTouchStart(event) {
        if (event.getButton() === 0) {
            this.clip.onAudioQueue(0);
            director.resume();
     
        this.background.active=false;
        this.logo.active=false;
        this.play.active=false;
  
        }
    }
    update(deltaTime: number) {
        
    }
}


