import React, { FC, useRef, useState } from "react";
import { MdArrowRight } from "react-icons/md";

interface MenuItem {
  name: string;
  href?: string;
  links?: MenuItem[];
  isSub?: boolean;
  description?: { title: string; content: string };
}

interface Props {
  title: string;
  description?: string;
  image?: string;
  children: MenuItem[];
}

const NavbarItem: FC<Props> = ({ title, children }) => {
  const [showSubs, setShowSubs] = useState(false);
  const [hovered, setHovered] = useState(0);
  const [selected, setSelected] = useState<MenuItem | undefined>(undefined);
  const timeOutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  return (
    <div className="">
      <div
        onMouseEnter={() => setShowSubs(true)}
        onMouseLeave={() => {
          timeOutRef.current = setTimeout(() => {
            setShowSubs(false);
          }, 200);
        }}
        className="cursor-default hover:text-primary py-2 border-b-[1px] border-b-transparent hover:border-b-primary"
      >
        {title}
      </div>
      {showSubs && (
        <div className="x-padding absolute z-10 w-full  left-0 right-0">
          <div
            onMouseEnter={() => {
              if (timeOutRef.current) {
                clearTimeout(timeOutRef.current);
              }
              setShowSubs(true);
            }}
            onMouseLeave={() => {
              timeOutRef.current = setTimeout(() => {
                setShowSubs(false);
              }, 200);
            }}
            className=" mt-5 bg-white shadow-xl w-full flex justify-between"
          >
            <div className="min-w-[25%] border-r border-r-gray-100">
              {
                <ul className="flex flex-col">
                  {children.map((c, i) => {
                    const hasChild = (c.links?.length ?? -1) > 0;

                    return (
                      <li
                        key={i}
                        onMouseEnter={() => {
                          setHovered(i);
                          setSelected(c);
                        }}
                        className={`flex justify-between items-center cursor-pointer  ${i === hovered ? "text-primary bg-gray-100" : "text-pale"} px-4 ${i === children.length - 1 ? "" : ""} py-[10px]`}
                      >
                        <a
                          href={c.href ?? "#"}
                          className={`${hasChild ? "pointer-events-none" : ""} h-full w-full`}
                        >
                          {c.name}
                        </a>
                        {hasChild && (
                          <div>
                            <MdArrowRight size={18} />
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              }
            </div>
            {(selected?.links?.length ?? -1) > 0 && (
              <ul className="w-full">
                {selected?.links?.map((l, i) => {
                  return (
                    <li
                      key={i}
                      className="w-full flex justify-between  cursor-pointer hover:text-primary hover:bg-gray-100 text-pale px-4 py-[10px]"
                    >
                      <a href={l.href ?? "#"} className="w-full">
                        {l.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
            {(selected?.links?.length ?? -1) < 0 && (
              <div className="px-4 py-2 flex justify-start w-full">
                <div>
                  <h1 className="text-black font-bold mb-3">
                    {selected?.description?.title}
                  </h1>
                  <p className="text-pale">{selected?.description?.content}</p>
                </div>
              </div>
            )}
            <div className="min-w-[324px] min-h-[324px] bg-pale"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarItem;
