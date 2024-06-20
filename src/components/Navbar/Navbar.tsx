import { CONFIG } from "@/config/app.config";
import React, { FC, useEffect, useState } from "react";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import CountrySwitcher from "@/components/CountrySwitcher";
import { BiLock, BiSearch } from "react-icons/bi";
import Button from "@/components/common/Button";
import Hamburger from "hamburger-react";
import MobileNavbarItem from "./MobileNavbarItem";
import NavbarItem from "./NavbarItem";

interface Props {
  background?: string;
  mobileMenuOpen?: boolean;
}

const Navbar: FC<Props> = ({ mobileMenuOpen: isOpen }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(isOpen ?? false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [width, setWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100 && !hasScrolled) {
        setHasScrolled(true);
      }
      if (window.scrollY < 100) {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    setWidth(window.innerWidth);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isMobile = !!width && width < 640;

  return (
    <div
      className={`w-full fixed left-0 right-0 z-20 top-0 ${hasScrolled || mobileMenuOpen ? "ease-in duration-200 bg-white shadow-2xl" : ""}`}
    >
      <nav
        className={`flex gap-10 items-center ${hasScrolled || mobileMenuOpen ? "text-black" : "text-white"} x-padding py-2`}
      >
        <div className="flex flex-col gap-2 w-full py-2">
          <div className="flex justify-between font-roboto uppercase font-bold text-[10px] tracking-wide items-center">
            <ul className="flex  gap-7 items-center -sm:hidden">
              {CONFIG.links.top.map((l, i) => {
                return (
                  <li key={i}>
                    <a
                      className="hover:text-gray-400"
                      href={!!l.href ? l.href : "#"}
                    >
                      {l.name}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="sm:hidden lg+:flex">
              <LocaleSwitcher />
            </div>
            <div className="hidden lg+:flex">
              <CountrySwitcher />
            </div>
            <BiSearch size={19} />
          </div>
          <div className="h-[1px] bg-gray-400 w-full"></div>
          <div className="font-roboto text-sm">
            <div className="flex gap-7 items-center sm:justify-between -sm:justify-between la:justify-start">
              <div className="flex items-center gap-3">
                <div className="sm:hidden">
                  <Hamburger
                    toggled={mobileMenuOpen}
                    size={25}
                    direction="right"
                    toggle={() => setMobileMenuOpen(!mobileMenuOpen)}
                  />
                </div>
                <Button
                  primary
                  label={isMobile ? "Login" : "Online Bank"}
                  icon={<BiLock size={17} />}
                  className="uppercase"
                />
              </div>

              <ul className="flex gap-7 items-center -sm:hidden">
                {CONFIG.links.navbar.map((l, i) => {
                  return (
                    <div key={i}>
                      {/* eslint-disable-next-line react/no-children-prop */}
                      <NavbarItem title={l.name} children={l.links ?? []} />
                    </div>
                  );
                })}
              </ul>
              <div className="sm:hidden">
                <a href={CONFIG.routes.index}>
                  <img
                    width={90}
                    src="/assets/images/svgs/logo-uba.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="-la:hidden">
          <a href={CONFIG.routes.index}>
            <img src="/assets/images/svgs/logo-uba.svg" alt="" />
          </a>
        </div>
      </nav>
      <div
        className={`${mobileMenuOpen ? "text-opacity-100" : "hidden text-opacity-0 "} transition-opacity duration-200 ease-in`}
      >
        {CONFIG.links.navbar.map((l, i) => {
          return (
            // eslint-disable-next-line react/no-children-prop
            <MobileNavbarItem children={l.links ?? []} title={l.name} key={i} />
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
