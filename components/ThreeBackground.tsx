import React, { useEffect, useRef, useCallback } from 'react';

// --- Global Helpers and Constants ---
const TAU = Math.PI * 2;
const rand = (n: number) => Math.random() * n;
const randRange = (n: number) => Math.random() * n - n * 0.5;
const fadeInOut = (t: number, ttl: number) => {
    const half = ttl / 2;
    return Math.abs(t - half) / half * -1 + 1;
};

// --- CONFIGURATION ---
const particleCount = 400;
const particlePropCount = 9;
const particlePropsLength = particleCount * particlePropCount;
const baseTTL = 200;
const rangeTTL = 300;
const baseSpeed = 0.1;
const rangeSpeed = 0.2;
const baseRadius = 0.1;
const rangeRadius = 4;
const baseHue = 200;
const rangeHue = 60;
const backgroundColor = 'hsla(220,40%,5%,1)';

// --- UTILS ---
const drawStar = (ctx: CanvasRenderingContext2D, x: number, y: number, outerRadius: number) => {
    const spikes = 5;
    const innerRadius = outerRadius * 0.4;
    ctx.beginPath();
    let rot = TAU / 4;
    for (let i = 0; i < spikes; i++) {
        ctx.lineTo(x + Math.cos(rot) * outerRadius, y + Math.sin(rot) * outerRadius);
        rot += TAU / (spikes * 2);
        ctx.lineTo(x + Math.cos(rot) * innerRadius, y + Math.sin(rot) * innerRadius);
        rot += TAU / (spikes * 2);
    }
    ctx.closePath();
    ctx.fill();
};

export const ThreeBackground: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const canvasBufferRef = useRef<HTMLCanvasElement | null>(null);
    const ctxRef = useRef<{ a: CanvasRenderingContext2D | null, b: CanvasRenderingContext2D | null }>({ a: null, b: null });
    const centerRef = useRef<number[]>([0, 0]);
    const tickRef = useRef<number>(0);
    const particlePropsRef = useRef<Float32Array | null>(null);
    const animationFrameRef = useRef<number>();
    
    // NEW: Track scroll position for parallax
    const scrollRef = useRef<number>(0);

    const initParticle = useCallback((i: number, canvas: HTMLCanvasElement, center: number[], particleProps: Float32Array) => {
        let x, y, vx, vy, life, ttl, speed, radius, hue;

        x = rand(canvas.width);
        y = rand(canvas.height); 
        vx = randRange(baseSpeed + rand(rangeSpeed));
        vy = randRange(baseSpeed + rand(rangeSpeed));
        life = 0;
        ttl = baseTTL + rand(rangeTTL);
        speed = 0;
        radius = baseRadius + rand(rangeRadius);
        hue = baseHue + rand(rangeHue);

        particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
    }, []);

    const drawParticle = useCallback((x: number, y: number, life: number, ttl: number, radius: number, hue: number) => {
        const ctxA = ctxRef.current.a;
        if (!ctxA) return;

        ctxA.save();
        ctxA.fillStyle = `hsla(${hue},100%,70%,${fadeInOut(life, ttl)})`; 
        drawStar(ctxA, x, y, radius);
        ctxA.restore();
    }, []);

    const updateParticle = useCallback((i: number, particleProps: Float32Array, tick: number, canvasA: HTMLCanvasElement) => {
        const i2=1+i, i3=2+i, i4=3+i, i5=4+i, i6=5+i, i8=7+i, i9=8+i;
        let x, y, vx, vy, life, ttl, radius, hue;

        x = particleProps[i];
        y = particleProps[i2];
        vx = particleProps[i3];
        vy = particleProps[i4];
        life = particleProps[i5];
        ttl = particleProps[i6];
        radius = particleProps[i8];
        hue = particleProps[i9];

        // --- PARALLAX LOGIC STARTS HERE ---
        
        // 1. Calculate Parallax Speed based on Radius (Depth)
        // Larger stars (closer) move faster (0.2x scroll). Smaller stars (farther) move slower.
        const parallaxSpeed = radius * 0.2; 

        // 2. Calculate Render Y
        // We take the particle's natural position (y) minus the scroll offset.
        // We use Modulo (%) to make it wrap around the screen height infinitely.
        const scrollOffset = scrollRef.current * parallaxSpeed;
        let renderY = (y - scrollOffset) % canvasA.height;
        
        // Javascript modulo can be negative, this ensures it wraps correctly
        if (renderY < 0) renderY += canvasA.height;

        // Draw at the calculated render position, not the absolute position
        drawParticle(x, renderY, life, ttl, radius, hue);

        // --- LOGIC ENDS ---

        // Update actual position for natural drift
        x += vx;
        y += vy;
        life++;

        // Keep the absolute Y bound within canvas height to prevent float overflow over long periods
        if (y > canvasA.height) y -= canvasA.height;
        if (y < 0) y += canvasA.height;

        particleProps[i] = x;
        particleProps[i2] = y;
        particleProps[i5] = life;

        // Only check X bounds for reset. Y bounds are handled by the infinite wrap above.
        const checkBoundsX = (x: number) => (x > canvasA.width || x < 0);

        (checkBoundsX(x) || life > ttl) && initParticle(i, canvasA, centerRef.current, particleProps);
    }, [drawParticle, initParticle]);

    const draw = useCallback(() => {
        const particleProps = particlePropsRef.current;
        const ctxB = ctxRef.current.b;
        const ctxA = ctxRef.current.a;
        const canvasA = canvasRef.current;

        if (!particleProps || !ctxB || !ctxA || !canvasA) {
            animationFrameRef.current = window.requestAnimationFrame(draw);
            return;
        }

        tickRef.current++;
        ctxA.clearRect(0, 0, canvasA.width, canvasA.height);

        ctxB.fillStyle = backgroundColor;
        ctxB.fillRect(0, 0, canvasA.width, canvasA.height);

        for (let i = 0; i < particlePropsLength; i += particlePropCount) {
            updateParticle(i, particleProps, tickRef.current, canvasA);
        }
        
        ctxB.save();
        ctxB.filter = 'blur(8px)';
        ctxB.globalCompositeOperation = 'lighter';
        ctxB.drawImage(canvasA, 0, 0);
        ctxB.restore();

        ctxB.save();
        ctxB.globalCompositeOperation = 'lighter';
        ctxB.drawImage(canvasA, 0, 0);
        ctxB.restore();

        animationFrameRef.current = window.requestAnimationFrame(draw);
    }, [updateParticle]);

    const resize = useCallback(() => {
        const { innerWidth, innerHeight } = window;
        const canvasA = canvasRef.current;
        const canvasB = canvasBufferRef.current;
        
        if (!canvasA || !canvasB) return;

        canvasA.width = innerWidth;
        canvasA.height = innerHeight;
        canvasB.width = innerWidth;
        canvasB.height = innerHeight;
        
        centerRef.current[0] = 0.5 * innerWidth;
        centerRef.current[1] = 0.5 * innerHeight;
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const canvasA = document.createElement('canvas');
        const canvasB = document.createElement('canvas');
        
        canvasB.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        `;

        container.appendChild(canvasB);
        canvasRef.current = canvasA;
        canvasBufferRef.current = canvasB;
        ctxRef.current.a = canvasA.getContext('2d');
        ctxRef.current.b = canvasB.getContext('2d');
        particlePropsRef.current = new Float32Array(particlePropsLength);

        // --- NEW: Scroll Listener ---
        const handleScroll = () => {
            scrollRef.current = window.scrollY;
        };
        window.addEventListener('scroll', handleScroll);

        resize(); 
        
        const particleProps = particlePropsRef.current;
        if (canvasA) {
            for (let i = 0; i < particlePropsLength; i += particlePropCount) {
                initParticle(i, canvasA, centerRef.current, particleProps);
            }
        }
        
        draw();

        window.addEventListener('resize', resize);
        
        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('scroll', handleScroll); // Cleanup scroll
            window.cancelAnimationFrame(animationFrameRef.current!);
            if (container.contains(canvasB)) {
                container.removeChild(canvasB);
            }
        };
    }, [draw, resize, initParticle]);

    return (
        <div ref={containerRef} className="fixed top-0 left-0 w-full h-full">
            <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-black/60" />
        </div>
    );
};