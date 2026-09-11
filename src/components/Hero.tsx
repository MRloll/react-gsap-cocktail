import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

interface IProps {}

const Hero = ({}: IProps) => {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplit = new SplitText(
      ".subtitle, .cool, .view-cocktail-link",
      { type: "lines" },
    );

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.1,
      delay: 1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0);
  }, []);
  return (
    <>
      <section id="hero" className="noisy ">
        <h1 className="title"> MOJITO</h1>
        <img
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5">
              <p className="cool">Cool, Crisp, Classic</p>
              <p className="subtitle">
                Sip the spirit <br /> of Summer
              </p>
            </div>
          </div>
          <div className="view-cocktails">
            <p className="subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, minima sequi! Natus possimus corporis quaerat mollitia,
              dolores facere, dolor unde accusantium quod per.
            </p>
            <a className="view-cocktail-link" href="#cocktails">
              view cocktails
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
