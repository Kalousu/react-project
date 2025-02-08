import { useEffect, useRef } from 'react'

function FirstBackground(){
    const canvasRef = useRef(null);

    useEffect(() => {
        // canvas definition
        const canvas = canvasRef.current;
        const c = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;


        //clearing screen || adding trail effect
        function clearScreen(){
            c.fillStyle = "rgba(3, 7, 18, 0.2)";
            c.fillRect(0, 0, canvas.width, canvas.height);
        }

        class Particle{
            constructor(){
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.dy = Math.random() * 1.25 + 1.5;
            }

            draw(){
                c.beginPath();
                c.arc(this.x, this.y, 1, 0, 2 * Math.PI);
                c.fillStyle = "rgb(255, 255, 255)";
                c.fill();
                c.closePath();
            }

            update(){
                if(this.y < canvas.height){
                    this.y += this.dy;
                }else {
                    this.x = Math.random() * canvas.width;
                    this.y = 0;
                }
            }
        }

        let particles = []

        for(let i = 0; i < 200; i++){
            particles.push(new Particle())
        }

        //main loop function
        function playAnimation(){
            for(const particle of particles){
                particle.draw();
                particle.update();
            }
            clearScreen();
            requestAnimationFrame(playAnimation);
        }

        //main loop call
        playAnimation();

        //demount + stop animation
        return () => {
            cancelAnimationFrame(playAnimation);
        }
    })

    return(
        <>
            <canvas ref={canvasRef} className='absolute top-0 left-0 w-full h-full bg-gray-950'></canvas>
        </>
    )
}

export default FirstBackground;