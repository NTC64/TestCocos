// Screen.ts
import { _decorator, Component, Node, Prefab, instantiate,macro,RigidBody2D ,Vec3,Sprite,BoxCollider2D,Color, Quat, director, Input, Director } from 'cc';
import { Square } from './square'; // Assuming the class is named 'Square'
const { ccclass, property } = _decorator;
import { collier } from './collision';
@ccclass('Screen')
export class Screen extends Component {
  
  @property(Prefab)
  squarePrefab: Prefab = null;
  @property(Node)
  tryAgain: Node=null;
  @property(Node)
  results: Node=null;
  @property(Node)
  game: Node=null;
  @property(collier)
  collier: collier=null;
  private squareCount: number = 0; // Biến đếm
  private squares: Node[] = [];
  onLoad() {
   this.initSquare();
    this.tryAgain.active=false;
    this.results.getChildByName("endScore").active=false;
    this.results.getChildByName("topScore").active=false;
    this.results.getChildByName("backgroundResults").active=false;

}
    initSquare(){
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
      if (this.squareCount % 5 === 0 && this.squareCount!==0) {
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
            } catch (error) {
              
            }
            
          }
      });
 
    
}
  update(deltaTime: number) {
    // Logic cập nhật nếu cần
   
    
  }
}
