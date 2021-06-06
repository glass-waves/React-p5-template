import React, { createRef, useEffect } from 'react';
import p5 from 'p5';

export const SketchComponent = () => {
    const myRef = createRef();

    const Sketch = (p) => {
        p.setup = () => {
            p.createCanvas(800, 800);
        };
        let xS = 0;
        let yS = 0;

        p.draw = () => {
            p.background(0);
            p.colorMode(p.HSB);
            p.fill(yS / 4, 255, 255);
            p.noStroke();
            p.noCursor();
            p.ellipse(p.mouseX, p.mouseY, xS);
            if(xS > 800) xS = 0;
            if(yS > 800) yS = 0;
            xS++;
            yS++;
        };
    };

    useEffect(() => {
        const myp5 = new p5(Sketch, myRef.current);
        return myp5;
    }, []);

    return <div ref={myRef}></div>;
};
