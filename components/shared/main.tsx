import React, { FunctionComponent } from "react";
import Newscards from "../cards/newscards";
import useFetch from "../hooks/useFetch";
const Main: FunctionComponent = (props) => {
  console.log(props);
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const monthArray: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div>
      <div className="md:text-7xl text-6xl font-primary text-center py-10">
        News Cards
      </div>
      <div className=" lg:mx-20 mx-4 border-b-4 md:text-xs lg:text-lg py-1 border-t-2 border-black flex justify-evenly">
        <div>DEV PUBLICATIONS</div>
        <div className=" hidden space-x-10 md:flex ">
          <div className=" cursor-pointer">Health</div>
          <div className=" cursor-pointer">Business</div>
          <div className=" cursor-pointer">Entertainment</div>
          <div className=" cursor-pointer">Science</div>
          <div className=" cursor-pointer">Technology</div>
          <div className=" cursor-pointer">Sports</div>
        </div>
        <div>
          {`INDIA
          ${day} 
            ${monthArray[month - 1].toUpperCase()}
           ${year}`}
        </div>
      </div>
      <div className=" flex justify-evenly flex-wrap">
        <Newscards />
      </div>
    </div>
  );
};
export default Main;

export async function getServerSideProps() {
  const res = await fetch(
    "https://swenpaper.vercel.app/api/api?category=sports"
  );
  const news = await res.json();
  return {
    props: {
      news: news,
    },
  };
  console.log(news);
}
