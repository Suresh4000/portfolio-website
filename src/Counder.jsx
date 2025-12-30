import { useEffect, useState } from "react";
import './Counder.css';
const Counder = () => {
  const stats = [
    { id: 1, number: 5, label: "Projects Completed" },
    { id: 2, number: 70, label: "Happy Clients" },
    { id: 3, number: 99.00, label: "Success Rate" },
    { id: 4, number: 12, label: "Years Experience" },
  ];

  // Counter logic inside this component
  const Counter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const incrementTime = Math.floor(duration / end);
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }, [end, duration]);

    return <div className="counter">{count.toLocaleString()}</div>;
  };

  return (
        <div className="global-container">

    <div className="grid-container">
      {stats.map((item) => (
        <div className="grid-item" key={item.id}>
          <Counter end={item.number} duration={1000} />
          <p className="grid-label">{item.label}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Counder;
