/* eslint-disable max-len */
import { Bodies, Composite, engine } from '../components/Sketch';

export function Box(x, y, w, h){
    this.body = Bodies.rectangle(x, y, w, h);
    this.w = w;
    this.h = h;
    
    Composite.add(engine.world, this.body);
    
    this.show = function(p) {
        const pos = this.body.position;

        p.push();
        p.translate(pos.x, pos.y);
        p.rect(0, 0, this.w, this.h);
        p.pop();
    };
}
