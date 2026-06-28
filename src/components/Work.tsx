import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const workItems = [
  {
    title: "AutoPulse",
    category: "Data Analytics",
    image: "/images/react.webp",
    tools: "Python, SQL, Pandas, Power BI",
  },
  {
    title: "Hotel Booking Demand Analysis",
    category: "Business Intelligence",
    image: "/images/node.webp",
    tools: "Python, Pandas, NumPy, Power BI",
  },
  {
    title: "Real-Time Messaging Platform",
    category: "Full Stack",
    image: "/images/next.webp",
    tools: "React, Node.js, Express, MongoDB, WebSocket",
  },
  {
    title: "react-big-schedule",
    category: "Open Source",
    image: "/images/mongo.webp",
    tools: "React, JavaScript, State Management",
  },
];

const Work = () => {
  useGSAP(() => {
    const section = document.querySelector(".work-section") as HTMLElement | null;
    const flex = document.querySelector(".work-flex") as HTMLElement | null;

    if (!section || !flex) return;

    const boxes = Array.from(flex.children) as HTMLElement[];
    const totalWidth = boxes.reduce((sum, box) => sum + box.offsetWidth, 0);
    const travelDistance = Math.max(totalWidth - section.clientWidth + 160, 0);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${travelDistance}`,
        scrub: 1.2,
        pin: true,
        id: "work",
      },
    });

    timeline.to(flex, {
      x: -travelDistance,
      ease: "power2.out",
      duration: 1,
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {workItems.map((item, index) => (
            <div className="work-box" key={item.title}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{item.tools}</p>
              </div>
              <WorkImage image={item.image} alt={item.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
