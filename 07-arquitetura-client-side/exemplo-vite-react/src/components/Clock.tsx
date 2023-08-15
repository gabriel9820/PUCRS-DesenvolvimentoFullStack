import { useEffect, useState } from "react";

export function Clock() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    function tick() {
      setCurrentDate(new Date());
    }

    const timer = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h1>Relógio</h1>
      <h2>{currentDate.toLocaleTimeString()}</h2>
    </>
  );
}
