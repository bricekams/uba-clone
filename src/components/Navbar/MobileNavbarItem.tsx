import React, { FC, useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";

interface MenuItem {
  name: string;
  href?: string;
  links?: MenuItem[];
}

interface Props {
  className?: string;
  title: string;
  children: MenuItem[];
  isSub?: boolean;
}

const MobileNavbarItem: FC<Props> = ({ title, children, isSub = false }) => {
  const hasChild = children.length > 0;
  const [dropped, setDropped] = useState(false);

  return (
    <div className="px-3 font-roboto">
      <div
        className={`text-pale flex ${isSub ? "gap-10" : `justify-between py-2 border-t-[1px] border-t-gray-400`}`}
      >
        <h3 className={`text-sm ${dropped ? "text-black" : ""}`}>{title}</h3>
        {hasChild && (
          <>
            {!dropped ? (
              <button type="button" onClick={() => setDropped(true)}>
                <MdAdd />
              </button>
            ) : (
              <button type="button" onClick={() => setDropped(false)}>
                <MdRemove />
              </button>
            )}
          </>
        )}
      </div>
      {dropped && !isSub && <div className="h-[1px] bg-gray-400 w-full"></div>}
      {hasChild && dropped && (
        <div className="pl-3">
          {children.map((c, i) => {
            return (
              <div
                key={i}
                className={`pt-3 ${i === children.length - 1 ? "pb-3" : ""}`}
              >
                <MobileNavbarItem
                  title={c.name}
                  // eslint-disable-next-line react/no-children-prop
                  children={c.links ?? []}
                  isSub
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MobileNavbarItem;
