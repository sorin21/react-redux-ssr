import React from 'react';

const Home = () => {
  return (
    <div>
      <div>I am the Super Dooper Home component</div>
      <button onClick={() => console.log("Hi there!")}>Press Me</button>
    </div>
  );
};

export default Home;