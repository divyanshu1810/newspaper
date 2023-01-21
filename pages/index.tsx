import Head from "next/head";
import { useState } from "react";
import Newscards from "@/components/cards/newscards";
import Link from "next/link";
let cat = "sports";

export default function Home(props: any) {
  const [category, setCategory] = useState(cat);

  cat = category;
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
      <Head>
        <title>SwenPapers</title>
      </Head>
      <div className="md:text-7xl text-6xl font-primary text-center py-10">
        News Cards
      </div>
      <div className="border-b-4 md:text-xs lg:text-lg py-1 border-t-2 border-black flex justify-evenly">
        <div>DEV PUBLICATIONS</div>
        <div className=" hidden space-x-10 md:flex ">
          <Link href="/health">
            <div
              className=" cursor-pointer"
              onClick={() => setCategory("health")}
            >
              Health
            </div>
          </Link>
          <Link href="/business">
            <div
              className=" cursor-pointer"
              onClick={() => setCategory("business")}
            >
              Business
            </div>
          </Link>
          <Link href="/entertainment">
            <div
              className=" cursor-pointer"
              onClick={() => setCategory("entertainment")}
            >
              Entertainment
            </div>
          </Link>
          <Link href="science">
            <div
              className=" cursor-pointer"
              onClick={() => setCategory("science")}
            >
              Science
            </div>
          </Link>
          <Link href="/technology">
            <div
              className=" cursor-pointer"
              onClick={() => setCategory("technology")}
            >
              Technology
            </div>
          </Link>
          <Link href="/sports">
            <div
              className=" cursor-pointer"
              onClick={() => setCategory("sports")}
            >
              Sports
            </div>
          </Link>
        </div>
        <div>
          {`INDIA
          ${day} 
            ${monthArray[month - 1].toUpperCase()}
           ${year}`}
        </div>
      </div>
      <div className=" flex justify-evenly flex-wrap">
        {props.news.map((element: any, index: number) => {
          return (
            <div key={index}>
              <Newscards
                author={element.author ? element.author : "Unknown"}
                image={element.urlToImage}
                title={
                  element.title && element.title.length > 60
                    ? element.title.substring(0, 60) + "..."
                    : element.title
                }
                about={
                  element.description && element.description.length > 120
                    ? element.description.substring(0, 120) + "..."
                    : element.description
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://swenpaper.vercel.app/api/api?category=${cat}`
  );
  const posts = await res.json();
  return {
    props: {
      news: posts.name,
    },
  };
}
