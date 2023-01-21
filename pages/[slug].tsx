import Head from "next/head";
import Newscards from "@/components/cards/newscards";
import Link from "next/link";

export default function Home(props: any) {
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
      <div className="md:text-7xl text-white text-6xl font-primary text-center py-10 bg-[#FF671F]">
        The Indian Times
      </div>
      <div className="border-b-4 text-[#06038D] bg-white md:text-xs lg:text-lg py-1 border-t-2 border-black flex justify-evenly">
        <div>DEV PUBLICATIONS</div>
        <div className=" hidden space-x-10 md:flex ">
          <Link href="/health">
            <div className=" cursor-pointer">Health</div>
          </Link>
          <Link href="/business">
            <div className=" cursor-pointer">Business</div>
          </Link>
          <Link href="/entertainment">
            <div className=" cursor-pointer">Entertainment</div>
          </Link>
          <Link href="science">
            <div className=" cursor-pointer">Science</div>
          </Link>
          <Link href="/technology">
            <div className=" cursor-pointer">Technology</div>
          </Link>
          <Link href="/sports">
            <div className=" cursor-pointer">Sports</div>
          </Link>
        </div>
        <div>
          {`INDIA
          ${day} 
            ${monthArray[month - 1].toUpperCase()}
           ${year}`}
        </div>
      </div>
      <div className=" flex justify-evenly flex-wrap bg-[#046A38]">
        {props.news.map((element: any, index: number) => {
          return (
            <div key={index}>
              <Newscards
                author={
                  element.author && element.author ? element.author : "Unknown"
                }
                image={
                  element.urlToImage && element.urlToImage
                    ? element.urlToImage
                    : "/news/image.webp"
                }
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

export async function getServerSideProps(context: any) {
  try {
    const res = await fetch(
      `https://swenpaper.vercel.app/api/api?category=${context.params.slug}`
    );
    const posts = await res.json();
    return {
      props: {
        news: posts.name,
      },
    };
  } catch (error) {
    console.log("There is some props errors");
  }
}
