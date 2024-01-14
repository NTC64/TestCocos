import { _decorator, Component,Collider2D,Contact2DType,IPhysics2DContact ,Node,Color, Sprite, Label, find, director, Prefab, instantiate, Scene } from 'cc';
import { Square } from './square';
const { ccclass, property } = _decorator;
import { Screen } from './scene';
import { sounds } from './sounds';
@ccclass('collier')
export class collier extends Component {
    @property(sounds)
    public clip: sounds;
    @property({ type: Node })
    scoreNode: Node = null;
    @property({ type: Node })
    resultNode: Node = null;
    @property({ type: Node })
    lineNode: Node = null;
    @property({ type: Node })
    circleNode: Node = null;
    @property({ type: Square })
    squareNode: Square = null;
    @property({ type: Node })
    tryAgainNode: Node = null;
    @property({ type: Node })
    gameNode: Node = null;
    @property({ type: Screen })
    screen: Screen = null;
    public score: number=0;
    private highestScore: number = 0;
    private checkGameOver:boolean=false;
    onLoad(){
        localStorage.setItem("best",this.highestScore.toString());
        this.checkGameOver=false;
    }
    start() {
        let collider=this.getComponent(Collider2D);
        collider.on(Contact2DType.BEGIN_CONTACT,this.onBeginContact,this);
    }
    onBeginContact(selfCollider: Collider2D, ortherCollider: Collider2D,contact:IPhysics2DContact | null){
        if(ortherCollider.name==="square<BoxCollider2D>" && ortherCollider.getComponent(Sprite).color.toHEX()==='dd4247'){
           this.score++;
         
           ortherCollider.getComponent(Sprite).color=new Color(255,255,255,0);
          
           this.scoreNode.getComponent(Label).string=this.score.toString();
           this.clip.onAudioQueue(2);
        }
        else{
            // this.squareNode.squareDestroy();
            this.showScore();
           this.screen.hideAllSquares();
            director.pause();
            this.clip.onAudioQueue(5)
            
            this.resetScore();
        }
    }
    showScore(){
        this.resultNode.getChildByName("backgroundResults").active=true;
        this.resultNode.getChildByName("topScore").active=true;
        this.resultNode.getChildByName("endScore").active=true;
        this.tryAgainNode.active=true;
        if (this.score > this.highestScore) {
            this.highestScore = this.score;
            localStorage.setItem("best",this.highestScore.toString());
            this.clip.onAudioQueue(3);
        }
        this.resultNode.getChildByName("topScore").getComponent(Label).string ="Top score: "+ localStorage.getItem("best");
        this.resultNode.getChildByName("endScore").getComponent(Label).string=this.score.toString();
        
    }
    resetScore(){
        this.score=0;
        this.scoreNode.getComponent(Label).string="0";
    }
    update(deltaTime: number) {
     
    }
}


