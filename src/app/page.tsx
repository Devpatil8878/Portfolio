"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import localfont from "next/font/local";

const gilroy = localfont({
  src: [
    {
      path: '../../public/fonts/Gilroy-SemiBold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-gilroy'
})

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  useEffect( () => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll' as any)).default;
        const scroll = new LocomotiveScroll({
          el: document.querySelector('[data-scroll-container]'),
          smooth: true,
        });

        // const handleScrollToProjects = () => {
        //   const targetElement = document.getElementById(targetId);
        //   if (targetElement) {
        //     scroll.scrollTo(targetElement);
        //   }
        // }

        return () => scroll.destroy();
      }
    )()

  }, [])

 

  useGSAP(() => {
  let cursor = document.addEventListener("mousemove", (dets) => {
      gsap.to(".cursor-follower", {
        x: dets.x,
        y: dets.y,
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
        start: "top 30%",
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
        start: "top 30%",
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
        start: "top 30%",
      },
      opacity: 0,
      duration:1.3,
      delay: 0.5,
      z: 10,
    })
    gsap.from(".docker", {
      x: 400,
      y: 110,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: `.tech-stack`,
        start: "top 30%",
      },
      opacity: 0,
      duration:1.3,
      delay: 0.5,
      z: 10,
    })
    gsap.from(".react", {
      x: -400,
      y: 110,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: `.tech-stack`,
        start: "top 30%",
      },
      opacity: 0,
      duration:1.2,
      delay: 0.5,
      z: 10,
    })
    gsap.from(".github", {
      x: -400,
      y: -110,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: `.tech-stack`,
        start: "top 30%",
      },
      opacity: 0,
      duration:1.3,
      delay: 0.5,
      z: 10,
    })
    gsap.from(".nodejs", {
      x: -700,
      y: -110,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: `.tech-stack`,
        start: "top 30%",
      },
      opacity: 0,
      duration:1.4,
      delay: 0.5,
      z: 10,
    })
    gsap.from(".tailwind", {
      x: -700,
      y: 60,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: `.tech-stack`,
        start: "top 30%",
      },
      opacity: 0,
      duration:1.4,
      delay: 0.5,
      z: 10,
    })
    gsap.from(".threejs", {
      x: -1000,
      y: 250,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: `.tech-stack`,
        start: "top 30%",
      },
      opacity: 0,
      duration:1.4,
      delay: 0.5,
      z: 10,
    })
    gsap.from(".mysql", {
      x: -1200,
      y: 250,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: `.tech-stack`,
        start: "top 30%",
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
      repeat: 100
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








  return (
    <div data-scroll-container className="max-w-[100vw] overflow-x-clip">
      <main className={` ${gilroy.className} max-w-screen h-screen pt-3 bg-black mybg bg-cover relative`}>
      <div className="cursor-follower mix-blend-difference w-[1.5rem] h-[1.5rem] rounded-full bg-white fixed z-[100]"></div>
         <nav className="rounded-[2.5rem] nav shining-border-element relative flex items-center  border-b-2 border-r-[2px] border-b-purple-900 border-r-blue-800 bg-zinc-950 w-[80%] h-[8%] m-auto">
          <h1 className="text-[1.5rem] dev text-white pl-[3rem]">Dev</h1>

          <div className="flex text-white gap-10 ml-[8rem]">
            <h2 className="cursor-pointer top-to-down-anim">Home</h2>
            <h2 className="cursor-pointer top-to-down-anim">Projects</h2>
            <h2 className="cursor-pointer top-to-down-anim">About</h2>
            <h2 className="cursor-pointer top-to-down-anim">Contact</h2>
          </div>

          <div className=" ml-[26rem] top-to-down-anim switch text-white">switch</div>

          <button className="contact-me ml-[2.1rem] top-to-down-anim text-white bg-purple-900 rounded-[3rem] py-[.7rem] px-[1.5rem]">
            Contact Me
          </button>
        </nav>

        <div className="flex">
          <div className="left w-[40%] h-[90vh] pl-[12rem] pt-[10rem] ">
            <div className="suptext text-zinc-400 text-3xl info">It is me guys</div>

            <div className="title mt-2 text-white text-[5rem] leading-[6rem] font-medium info">
              Full Stack Developer
            </div>

            <div className="subtext flex mt-2 ml-2 text-zinc-400">
              <div className="bg-zinc-400 w-0.5 h-[5.7rem] info"></div>
              <div className="ml-5 w-[7rem] text-[0.9rem] info">
                I am a Full stack Developer, and I work with Next.js.
              </div>
            </div>
          </div>

          <div className="right w-[60%] relative h-[90vh] ">
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

        <div className=" bg-black w-screen overflow-hidden flex h-screen pl-[6rem]">
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


        <div data-scroll className="tech-stack w-screen h-screen pl-[10rem] pt-[4rem] bg-black">
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


        <div className="w-screen min-h-screen bg-black text-white">
          <h1 className="text-9xl text-end mr-[15rem] pt-10">Projects</h1>

          <div className="flex w-screen">
            
          </div>
        </div>
      </main>
    </div>
  );
}
