/* eslint-disable max-len */
import React, { createRef, useEffect } from 'react';
import Matter from 'matter-js';
import p5 from 'p5';
export const Engine = Matter.Engine;
export const Runner = Matter.Runner;
export const Bodies = Matter.Bodies;
export const Composite = Matter.Composite;   
export const engine = Engine.create();
export const runner = Runner.create();
engine.gravity.y = - 0.05;
import { Box } from '../matter js/box';

export const SketchComponent = () => {
    const myRef = createRef();
    const boxes = [];
    
    useEffect(() => {
        const myp5 = new p5(Sketch, myRef.current);
        return myp5;
    }, []);
   
    const Sketch = (p) => {
        p.setup = () => {
            p.createCanvas(800, 800);
            Runner.run(runner, engine); 
        };
            
        p.mouseDragged = () => {
            boxes.push(new Box(p.mouseX, p.mouseY, 20, 20)); 
        };

        p.draw = () => {
            p.background(0);
            p.fill('#F8B195');
            
            for(let i = 0; i < boxes.length; i++){
                boxes[i].show(p);
            }
        };  
    };

    return <div ref={myRef}></div>;
};
