import Head from "next/head";
import Newscards from "@/components/cards/newscards";
import Header from "@/components/shared/header";

export default function Home(props: any) {
  return (
    <div>
      <Head>
        <title>SwenPapers</title>
      </Head>
      <Header />
      <div className="  lg:pt-48 pt-44 flex justify-evenly flex-wrap bg-[#046A38] pb-10">
        {props.news.map((element: any, index: number) => {
          return (
            <div key={index}>
              <Newscards
                source={element.source.name}
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
                url={element.url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://swenpaper.vercel.app/api/base`);
  const posts = await res.json();
  return {
    props: {
      news: posts.name,
    },
  };
}
