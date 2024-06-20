import React, { FC } from "react";

interface Props {
  backgroundImage: string;
  title: string;
  className?: string;
}

const BlogTile: FC<Props> = ({ className = "", backgroundImage, title }) => {
  return (
    <div
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
      className={`${className} flex flex-col justify-end  px-7 pb-5 h-[320px] text-white w-full shadow-xl sm:min-w-[320px] transition-all hover:ease-in duration-500 blog-tile`}
    >
      <div className="w-[80%] mb-5">
        <p className="text-2xl -sm:text-xl font-bold">{title}</p>
      </div>
      <div>
        <p className="uppercase sm:text-xl border-b border-b-white pb-3">
          Learn more
        </p>
      </div>
    </div>
  );
};

export default BlogTile;
