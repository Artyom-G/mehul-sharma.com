import { useEffect, useRef } from "react";
import './Home.scss';
import meImage from './me.png';
import box2 from './CityGuessr.png';
import box1 from './Blueprint.jpg';
import box3 from './PopulationVI.png';

export const Home = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animId;
        const mouse = { x: null, y: null };

        const setSize = () => {
            canvas.width  = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setSize();

        const onResize     = () => setSize();
        const onMouseMove  = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
        const onMouseLeave = ()  => { mouse.x = null; mouse.y = null; };

        window.addEventListener('resize',     onResize);
        window.addEventListener('mousemove',  onMouseMove);
        window.addEventListener('mouseleave', onMouseLeave);

        const COUNT     = window.innerWidth < 768 ? 45 : 80;
        const CONNECT   = 140;
        const REPEL     = 100;

        class Particle {
            constructor() { this.reset(); }
            reset() {
                this.x      = Math.random() * canvas.width;
                this.y      = Math.random() * canvas.height;
                this.bvx    = (Math.random() - 0.5) * 0.5;
                this.bvy    = (Math.random() - 0.5) * 0.5;
                this.vx     = this.bvx;
                this.vy     = this.bvy;
                this.r      = Math.random() * 1.8 + 0.7;
                this.alpha  = Math.random() * 0.45 + 0.25;
                this.phase  = Math.random() * Math.PI * 2;
                this.pSpeed = 0.012 + Math.random() * 0.018;
            }
            update(t) {
                if (mouse.x !== null) {
                    const dx = this.x - mouse.x;
                    const dy = this.y - mouse.y;
                    const d  = Math.sqrt(dx * dx + dy * dy);
                    if (d < REPEL && d > 0) {
                        const f = (REPEL - d) / REPEL;
                        this.vx += (dx / d) * f * 0.7;
                        this.vy += (dy / d) * f * 0.7;
                    }
                }
                this.vx = this.vx * 0.93 + this.bvx * 0.07;
                this.vy = this.vy * 0.93 + this.bvy * 0.07;
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < 0)              { this.x = 0;              this.bvx =  Math.abs(this.bvx); }
                if (this.x > canvas.width)   { this.x = canvas.width;   this.bvx = -Math.abs(this.bvx); }
                if (this.y < 0)              { this.y = 0;              this.bvy =  Math.abs(this.bvy); }
                if (this.y > canvas.height)  { this.y = canvas.height;  this.bvy = -Math.abs(this.bvy); }
                this.curAlpha = this.alpha * (0.7 + 0.3 * Math.sin(t * this.pSpeed + this.phase));
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(180, 100, 255, ${this.curAlpha})`;
                ctx.fill();
            }
        }

        const particles = Array.from({ length: COUNT }, () => new Particle());
        let t = 0;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            t++;

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const d  = Math.sqrt(dx * dx + dy * dy);
                    if (d < CONNECT) {
                        const a = (1 - d / CONNECT) * 0.2;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(160, 80, 240, ${a})`;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }
            }

            for (const p of particles) { p.update(t); p.draw(); }
            animId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize',     onResize);
            window.removeEventListener('mousemove',  onMouseMove);
            window.removeEventListener('mouseleave', onMouseLeave);
        };
    }, []);

    return (
    <div className="Home">
        <canvas ref={canvasRef} className="particles-canvas" />

        <h1 className="Home_title">
            Hello, I am Mehul and <br /> Welcome to my Portfolio!
        </h1>

        {/* About Me Section */}
        <div className="about-me-section">
            <div className="about-me">
                <h2>About Me</h2>
                <div className="my-picture">
                    <img src={meImage} alt="Mehul Sharma" />
                </div>
                <div className="about-me-text">
                <p>Hi, I'm Mehul! I'm studying Computer Science at Waterloo and Business Administration at Laurier, and I love building projects that are cool but can also help people. I've worked with UW Blueprint to improve a volunteer platform for 500+ users, supported DBM Systems by streamlining global operations, and developed websites and tools for the Lazaridis Society and international case competitions. I also enjoy creating personal projects like a city guessing game powered by AI and a world population visualizer. What excites me most is collaborating with great teams, solving problems, and turning ideas into products people actually use.
                </p>
                </div>
            </div>
        </div>

        <div className="highlight-container">
            <h1 className="personal-highlights">
                Personal Highlights
            </h1>

            <div className="higlights-content">
                <div className="big-box" onClick={() => window.location.href="/Project/Uw%20Blueprint"}>
                    <img src={box1} alt="featured project 1"/>
                </div>

                <div className="two-buttons">
                    <div className="small-box" onClick={() => window.location.href="/Project/CityGuessr"}>
                        <img src={box2} alt="featured project 2"/>
                    </div>
                    <div className="small-box" onClick={() => window.location.href="/Project/Worldpop"}>
                        <img src={box3} alt="featured project 3"/>
                    </div>
                </div>
            </div>

            <button className="contact-button" onClick={() => window.location.href="./contact"}>
                Contact me
            </button>
        </div>
    </div>
    );
};
