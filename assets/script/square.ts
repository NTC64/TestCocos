import { _decorator, Component, Node,Vec3,instantiate, tween ,random, Quat, quat, Collider2D, Contact2DType, IPhysics2DContact } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Square')
export class Square extends Component {
    
    start() {
        const maxX = 50;
        const minX = -50;
        const randomX = Math.random() * (maxX - minX) + minX;
        const endPosition = new Vec3(randomX, -750, 0);
        
        
        tween(this.node)
        .to(2, { position: endPosition ,rotation: new Quat(0,0,1,0.5)})
      
        .call(()=>{
            
            this.node.destroy();
        })
        .start();
        
    }
    squareDestroy() {
        this.node.destroy();
    }
    update(deltaTime: number) {
        
    }
}


