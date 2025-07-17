import "./About.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const VanshdeepGroup = () => {

    const [ref, inView] = useInView({
    triggerOnce: true, // only trigger once
    threshold: 0.9     // trigger when 90% of the component is in view
  });

  return (
    <div className="vanshdeep-container" ref={ref}>
      <h1 className="title">Vanshdeep Group</h1>
      <p className="elucidation">
        Built on a legacy of trust, quality, and forward thinking, Vanshdeep Group has been shaping Jaipur’s urban landscape since 2013.
        From elegant boutique residences to expansive townships, we’ve consistently delivered thoughtfully designed spaces with impeccable
        execution. With a vision to make luxury more accessible and meaningful, Vanshdeep Group is known for building vibrant,
        future-ready communities. Our portfolio spans residential and hospitality developments, each one rooted in quality and care.
        Over the past decade, we’ve redefined modern living—one landmark at a time.
      </p>

      <p className="tags">BOUTIQUE RESIDENCES | EXPANSIVE TOWNSHIPS | 5 STAR STUDIOS</p>

      <div className="stats">
        <div className="stat-item">
          <div className="stat-number"> {inView && <CountUp end={13} duration={5} suffix="+" />}</div>
          <div className="stat-label">YEARS OF EXPERIENCE</div>
        </div>
        <div className="stat-item">
          <div className="stat-number"> {inView && <CountUp end={18} duration={5} suffix="+" />}</div>
          <div className="stat-label">PROJECTS SUCCESSFULLY DELIVERED</div>
        </div>
        <div className="stat-item">
          <div className="stat-number"> {inView && <CountUp end={7187} duration={4} suffix="+" />}</div>
          <div className="stat-label">ACRES OF LAND DEVELOPED</div>
        </div>
      </div>
    </div>
  );
};

export default VanshdeepGroup;
