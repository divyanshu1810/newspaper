import Link from "next/link";
import React, { FunctionComponent } from "react";
interface Newstype {
  url: string;
  image: string;
  title: string;
  about: string;
  author: string;
}
const Newscards: FunctionComponent<Newstype> = ({
  image,
  title,
  url,
  about,
  author,
}: Newstype) => {
  return (
    <Link href={url}>
      <div className="max-w-xs rounded bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-lg drop-shadow-lg overflow-hidden shadow-lg mx-10 my-10 ">
        <div className="flex justify-center ">
          <picture>
            <img
              className=" max-h-40 w-screen"
              src={image ? image : "news/image.webp"}
              alt="Mountain"
            />
          </picture>
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white">{title}</div>
          <p className="text-gray-300 text-base">{about}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {author}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Newscards;
