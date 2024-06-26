"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import localfont from "next/font/local";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const gilroy = localfont({
  src: [
    {
      path: '../../public/fonts/Gilroy-SemiBold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-gilroy'
})

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Home() {

  let scroll: any;

  useEffect( () => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll' as any)).default;
        scroll = new LocomotiveScroll({
          el: document.querySelector('[data-scroll-container]'),
          smooth: true,
          multiplier: 0.1
        });

        return () => scroll.destroy();
      }
    )()

  }, [])


  const handleScrollToProjects = () => {
    const targetElement = document.getElementById('Projects');
    if (targetElement) {
      gsap.to(window, { duration: 0.1, scrollTo: targetElement });
    }
  }
  const handleScrollToAbout = () => {
    const targetElement = document.getElementById('About');
    if (targetElement) {
      gsap.to(window, { duration: 1, scrollTo: targetElement });
    }
  }
  const handleScrollToTechstack = () => {
    const targetElement = document.getElementById('Techstack');
    if (targetElement) {
      gsap.to(window, { duration: 1.5, scrollTo: targetElement });
    }
  }
  const handleScrollToHireMe = () => {
    const targetElement = document.getElementById('HireMe');
    if (targetElement) {
      gsap.to(window, { duration: 2, scrollTo: targetElement });
    }
  }
  const handleScrollToHome = () => {
    const targetElement = document.getElementById('Home');
    if (targetElement) {
      gsap.to(window, { duration: 0.1, scrollTo: targetElement });
    }
  }
  const handleScrollToContact = () => {
    const targetElement = document.getElementById('Contact');
    if (targetElement) {
      gsap.to(window, { duration: 2, scrollTo: targetElement });
    }
  }

          
 
  let xscale = 1;
  let yscale = 1;

  let xprev = 0;
  let yprev = 0;

  let timeout;

  useGSAP(() => {


      // document.addEventListener("mousemove", function(dets){
      //   clearTimeout(timeout);

      //   xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev)
      //   yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev)

      //   xprev = dets.clientX;
      //   yprev = dets.clientY;

      //   console.log(xscale, yscale);

      //   timeout = setTimeout(() => {
      //     gsap.to(".cursor-follower", {
      //       scale: 1,
      //     })
      //   }, 100);
      // })
    

      let cursor = document.addEventListener("mousemove", (dets) => {
        gsap.to(".cursor-follower", {
          x: dets.x - 15,
          y: dets.y - 30,
          ease: "back.out(2.5)",
        })
      })

  })
  

  useGSAP(()=>{
  
    gsap.from(".express", {
      x: 200,
      y: -60,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: `.tech-stack`,
        start: "top 0%",
        end: "bottom -190%",
        scrub: true,
        pin: true
      },
      opacity: 0,
      duration:1.2,
      delay: 0.5,
      z: 10,
    })
    gsap.from(".mongodb", {
      x: 200,
      y: 30,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: `.tech-stack`,
        start: "top 0%",
        end: "bottom -150%",
        scrub: true,
      },
      opacity: 0,
      duration:1.2,
      delay: 0.5,
      z: 10,
    })
    gsap.from(".figma", {
      x: 400,
      y: -110,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: `.tech-stack`,
        start: "top 0%",
        end: "bottom -150%",
        scrub: true,
      },
      opacity: 0,
      duration:1.3,
      delay: 0.5,
      z: 10,
    })
    gsap.from(".docker", {
      x: 400,
      y: 70,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: `.tech-stack`,
        start: "top 0%",
        end: "bottom -150%",
        scrub: true,
      },
      opacity: 0,
      duration:1.3,
      delay: 0.5,
      z: 10,
    })
    gsap.from(".react", {
      x: -300,
      y: 110,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: `.tech-stack`,
        start: "top 0%",
        end: "bottom -150%",
        scrub: true,
      },
      opacity: 0,
      duration:1.2,
      delay: 0.5,
      z: 10,
    })
    gsap.from(".github", {
      x: -300,
      y: -110,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: `.tech-stack`,
        start: "top 0%",
        end: "bottom -150%",
        scrub: true,
      },
      opacity: 0,
      duration:1.3,
      delay: 0.5,
      z: 10,
    })
    gsap.from(".nodejs", {
      x: -500,
      y: -110,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: `.tech-stack`,
        start: "top 0%",
        end: "bottom -150%",
        scrub: true,
      },
      opacity: 0,
      duration:1.4,
      delay: 0.5,
      z: 10,
    })
    gsap.from(".tailwind", {
      x: -600,
      y: 60,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: `.tech-stack`,
        start: "top 0%",
        end: "bottom -150%",
        scrub: true,
      },
      opacity: 0,
      duration:1.4,
      delay: 0.5,
      z: 10,
    })
    gsap.from(".threejs", {
      x: -700,
      y: 250,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: `.tech-stack`,
        start: "top 0%",
        end: "bottom -150%",
        scrub: true,
      },
      opacity: 0,
      duration:1.4,
      delay: 0.5,
      z: 10,
    })
    gsap.from(".mysql", {
      x: -800,
      y: 200,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: `.tech-stack`,
        start: "top 0%",
        end: "bottom -150%",
        scrub: true,
      },
      opacity: 0,
      duration:1.4,
      delay: 0.5,
      z: 10,
    })
    gsap.to(".next", {
      x: 0,
      y: -8,
      duration:1,
      delay: 0.5,
      yoyo: true,
      repeat: Infinity
    })


    gsap.from(".nav", {
      ease: "back.out(1.7)",
      stagger: 0.1,
      opacity: 0,
      duration:0.8,
    })
    gsap.from(".dev", {
      scale: 0,
      ease: "back.out(1.7)",
      stagger: 0.1,
      opacity: 0,
      duration:0.8,
    })  
    gsap.from(".top-to-down-anim", {
      y: -50,
      ease: "back.out(1.7)",
      stagger: 0.1,
      opacity: 0,
      duration:1,
    })
    gsap.from(".info", {
      y: 300,
      scale: 0.5,
      stagger: 0.2,
      opacity: 0,
      duration:1,
    })
    gsap.from(".about", {
      y: 300,
      scale: 0.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".about-main",
        start: "top 30%"
      },
      opacity: 0,
      duration:1,
    })
    
  })


  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const mybutton = document.querySelector<HTMLDivElement>("#upArrow");

    const scrollFunction = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.onscroll = scrollFunction;

    return () => {
      window.onscroll = null;
    };
  }, []);

  let diffrot = 0;
  let rotate = 0;

  useEffect(() => {
    document.querySelectorAll(".elem").forEach(function(elem) {

      elem.addEventListener("mouseleave", function() {
        gsap.to(elem.querySelector("img"), {
          display: 'none',
          duration: 0.3,
          opacity: 0,
        });
      });

      elem.addEventListener("mousemove", function(dets) {
        let diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate
        rotate = dets.clientX
      

        gsap.to(elem.querySelector("img"), {
          display: "block",
          duration: 0.3, 
          opacity: 1,
          top: diff,
          left: dets.clientX,
          rotate: gsap.utils.clamp(-20, 20, diffrot*.5)
        });
      });
    });
  
  }, []);
  











  return (
    <div data-scroll-container className="max-w-[100vw] overflow-x-clip">
      <main id="Home" className={` ${gilroy.className} max-w-screen h-screen pt-3 bg-black mybg bg-cover relative`}>
      <div className="cursor-follower pointer-events-none mix-blend-difference w-[1.5rem] h-[1.5rem] rounded-full bg-white fixed z-[100]"></div>
      <div id="upArrow" onClick={handleScrollToHome} className={` ${isVisible ? "block" : 'hidden'} w-[2.5rem] cursor-pointer h-[2.5rem] fixed bottom-[4rem] right-[4rem] bg-black z-[90] rounded-full`}>
        <img src="/up-arrow.png" className="scale-50 opacity-80"/>
      </div>
         <nav className="rounded-[2.5rem] nav shining-border-element relative flex items-center  border-b-2 border-r-[2px] border-b-purple-900 border-r-blue-800 bg-zinc-950 w-[80%] h-[8%] m-auto">
          <h1 className="text-[1.5rem] dev text-white pl-[3rem]">Dev</h1>

          <div className="flex text-white gap-10 ml-[8rem]">
            <h2 onClick={handleScrollToHome} className="cursor-pointer top-to-down-anim">Home</h2>
            <h2 onClick={handleScrollToProjects} className="cursor-pointer top-to-down-anim">Projects</h2>
            <h2 onClick={handleScrollToAbout} className="cursor-pointer top-to-down-anim">About</h2>
            <h2 onClick={handleScrollToContact} className="cursor-pointer top-to-down-anim">Contact</h2>
          </div>

          <div className=" ml-[26rem] top-to-down-anim switch text-white">switch</div>

          <button onClick={handleScrollToHireMe} className="contact-me ml-[2.1rem] top-to-down-anim text-white bg-purple-900 rounded-[3rem] py-[.7rem] px-[1.5rem]">
            Hire me
          </button>
        </nav>

        <div className="flex-col flex lg:flex-row items-center lg:items-start">
          <div className="left lg:w-[40%] w-full text-center lg:text-start h-[90vh] pt-[20%] lg:pl-[12vw] lg:pt-[3vw] flex flex-col justify-center">
            <div className="suptext text-zinc-400 text-[5vw] lg:text-[1.875vw] info">It is me guys</div>
            <div className="title mt-2 text-white text-[15vw] lg:text-[5vw] lg:leading-[6vw] font-medium info">
              Full Stack Developer
            </div>
            <div className="subtext w-full flex justify-center lg:justify-start mt-2 ml-2 text-zinc-400">
              <div className="bg-zinc-400 min-w-[0.125vw] h-[5.7vw] hidden lg:block info"></div>
              <div className="lg:ml-5 w-[30vw] lg:w-[7vw] text-[4vw] lg:text-[0.9vw] info self-center">
                I am a Full stack Developer, and I work with Next.js.
              </div>
            </div>
          </div>


          <div className="right hidden lg:block w-[60%] relative h-[90vh] ">
            <div className="absolute bottom-0 right-[12rem]">
              <img src="/bg_bubble.png" alt="" className="w-[40rem]" />
              <img
                src="/bubble.png"
                alt=""
                className="w-[5rem] next absolute top-5 right-[5rem] z-10"
              />
              <img
                src="/right line.png"
                alt=""
                className="w-[12.5rem] absolute top-5 right-[-2.5rem] rotate-[2deg] z-[1]"
              />
              <img
                src="/left line.png"
                alt=""
                className="w-[11rem] absolute top-[6.4rem] left-[-4.5rem] rotate-[-16deg] z-[0]"
              />
            </div>
          </div>
        </div>


        <div id="TechStack" data-scroll className="tech-stack w-screen h-screen pl-[10rem] pt-[4rem] bg-black">
          <h1 className="text-[5rem] mb-10 text-zinc-300">Tech stack </h1>

          <div className="card-container flex gap-8 text-white lg:pl-[1rem] mr-[10vw] m-auto">

            <div className="flex flex-col items-end pt-[4rem]">
              <div className="flex">
                <div className="docker card-bg min-w-[10rem] m-5 mt-[-2rem] h-[10rem] rounded-3xl flex pt-[.5rem] border-zinc-600 border-l-2 border-t-2">
                  <img src="/docker.png" className="fill-white m-auto scale-105" alt="" />
                </div>
                <div className="mongodb card-bg min-w-[7em] mb-5 h-[7rem] rounded-3xl flex border-zinc-600 border-l-2 border-t-2">
                  <img src="/mongodb.png" className="fill-white m-auto scale-100" alt="" />
                </div> 
              </div>

              <div className="flex">
                <div className="figma card-bg min-w-[8rem] m-1 mr-[2rem] h-[8rem] rounded-3xl flex border-zinc-600 border-l-2 border-t-2 ">
                  <img src="/figma.png" className="fill-white m-auto scale-50" alt="" />
                </div>
                <div className="express card-bg w-[10rem] h-[5rem] rounded-3xl flex pt-[.5rem] border-zinc-600 border-l-2 border-t-2">
                  <img src="/express.png" className="fill-white m-auto scale-75" alt="" />
                </div>
              </div>
              
            </div>


            <div className="next card-bg min-w-[15rem] row-span-4 mt-[5rem] border-zinc-600 border-l-2 z-20 border-t-2 h-[10rem] rounded-3xl flex">
              <img src="/nextjs.png" className="fill-white m-auto scale-125" alt="" />
            </div>

            <div className="flex-col flex-wrap">
              <div className="react card-bg mb-5 min-w-[10rem] h-[10rem] rounded-3xl flex border-zinc-600 border-l-2 border-t-2 ">
                <img src="/react.gif" className="fill-white m-auto scale-50" alt="" />
              </div>
              <div className="github card-bg min-w-[7rem] h-[7rem] rounded-3xl flex border-zinc-600 border-l-2 border-t-2 ">
                <img src="/github.png" className="fill-white m-auto scale-50" alt="" />
              </div>
              
            </div>

            <div className="flex flex-col mt-[-5rem]">
              <div className="threejs card-bg min-w-[7rem] h-[7rem] rounded-3xl flex border-zinc-600 border-l-2 border-t-2 self-end">
                <img src="/threejs.png" className="fill-white m-auto scale-75" alt="" />
              </div>
              <div className="tailwind card-bg min-w-[15rem] mb-5 mt-5 h-[5rem] rounded-3xl flex border-zinc-600 border-l-2 border-t-2">
                <img src="/tailwind.png" className="fill-white m-auto scale-75" alt="" />
              </div>
              <div className="nodejs card-bg w-[10rem] min-w-[10rem] h-[10rem] rounded-3xl flex border-zinc-600 border-l-2 border-t-2">
                <img src="/nodejs.png" className="fill-white m-auto scale-50" alt="" />
              </div>
            </div>


            <div className="mysql card-bg min-w-[7rem] h-[7rem] rounded-3xl flex border-zinc-600 border-l-2 border-t-2 ">
              <img src="/mysql.png" className="fill-white m-auto scale-50" alt="" />
            </div>
            
            
            

            

          </div>

            
        </div>


        <div id="Projects" className="w-screen min-h-screen bg-black text-white">
          <h1 className="text-9xl text-end mr-[15rem] pt-10 mb-[10vh]">Projects</h1>

          <div className="w-screen mt-[3vh] elem">
            <img src="/images/photo-1717705422478-0b42e89e06b7.avif"  />
            <h1>saaqi</h1>
            <h5>2024</h5>
          </div>
          <div className="w-screen mt-[3vh] elem elemlast">
          <img src="/images/photo-1718215005618-ca55ae919d15.avif"  />
            <h1>saaqi</h1>
            <h5>2024</h5>
          </div>
        </div>




        <div id="About" className=" bg-black w-screen overflow-hidden flex h-screen pl-[6rem]">
          <div className="left w-[50vw] relative h-screen flex">
            <img src="/purple_back.png" className="w-[50rem] h-[50rem] absolute left-[-23rem] bottom-[-15rem] z-[0]" />
            <div className="pic w-[35rem] relative h-[35rem] rounded-full z-[2] bg-[url('/about_me_pic.png')] bg-cover m-auto">
              <img src="/bigger_ball.png" className="w-[8rem] h-[8rem] absolute left-[-1rem] z-[1] bottom-[1.5rem]" />
            </div>
          </div>

          <div className="right  about-main w-[50vw] relative h-full pt-[5rem]">
            <div className="w-[80rem] bg-[url('/pink_back.png')] h-[60rem] absolute right-[-25rem] bottom-[-20rem]">
            </div>
            <div className="w-[80rem] bg-[url('/purple_back.png')] h-[60rem] absolute right-[-20rem] bottom-[0rem]">
            </div>
            <div className="w-[20rem] h-[4.8rem] bg-[url('/dots_back.png')]  absolute right-[0rem] bottom-[5rem]">
            </div>


            <h1 className="about text-[9rem] w-[9rem] leading-[8.5rem] text-white ml-[-10rem] absolute z-10">About Me</h1>
            <h3 className="about text-zinc-400 absolute text-[1rem] w-[27rem] mt-[20rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At quia fugiat sunt nesciunt! Numquam pariatur consequuntur corrupti, ipsam eaque dolorum veniam aspernatur quia nemo ex, quae enim deleniti sint? Consequatur, illo maiores magnam dolor iure ea? Nemo voluptatum quam modi vero tempore deleniti architecto voluptas.
            </h3>
            <button className="about w-[10rem] h-[3rem] bg-[#D018B8] mt-[32rem] rounded-full text-white font-semibold">
              Contact Me
            </button>
            
          </div>
        </div>
      </main>
    </div>
  );
}
