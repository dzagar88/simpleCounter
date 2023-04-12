import React, { useState, useEffect } from "react";

const SecondsCounter = ({ seconds }) => {
  return (
    <div className="text-center">
      <div className="main">
        <h1>Check Out My Counter:</h1>
        <br />
        <h3>{seconds}</h3>
      </div>
    </div>
  );
};

const Home = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <SecondsCounter seconds={seconds} />;
};

export default Home;
