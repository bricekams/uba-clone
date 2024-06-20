import { CONFIG } from "@/config/app.config";
import React, { FC } from "react";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer: FC = () => {
  return (
    <div className="bg-[#222222] w-full text-gray-400">
      <div className="pt-12 pb-6 x-padding w-full">
        <div className="sm:flex gap-5 mb-14">
          {CONFIG.links.footer
            .filter((s) => s.name.toLocaleLowerCase() !== "relate")
            .map((section, i) => {
              return (
                <div key={i} className="sm:w-1/5 -sm:mb-5">
                  <h2 className="text-xl font-semibold text-white mb-3">
                    {section.name}
                  </h2>
                  <ul className="flex flex-col gap-2">
                    {section.links.map((l, i) => {
                      return (
                        <li key={i}>
                          <a href={l.href ?? "#"} className="">
                            {l.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          <div className="sm:w-1/5">
            <h2 className="text-xl font-semibold text-white mb-3">Relate</h2>
            <ul className="flex gap-2 text-white">
              <li className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-white">
                <FaFacebookF />
              </li>
              <li className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-white">
                <FaInstagramSquare />
              </li>
              <li className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-white">
                <FaTwitter />
              </li>
              <li className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-white">
                <FaLinkedin />
              </li>
              <li className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-white">
                <FaYoutube />
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-400 h-[1px] w-full"></div>
        <div className="my-7">
          <p className=" text-center">
            UBA Cameroon is approved and regulated by the Central Bank of
            Cameroon
          </p>
        </div>
        <div className="bg-gray-400 h-[1px] w-full mb-7"></div>
        <div className="sm:flex sm:justify-between ">
          <div className="-sm:mb-5 -sm:text-center">
            <p>&copy; 2024 United Bank for Africa. All Rights Reserved.</p>
          </div>
          <ul className="sm:flex gap-5 items-center">
            <ul className="flex gap-3 -sm:mb-5 -sm:justify-center">
              <li>
                <a href="#">Sitemap</a>
              </li>
              <li>
                <a href="">Terms and conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
            <li className="text-xl uppercase font-bold text-white -sm:flex -sm:justify-center">
              <img src="assets/images/svgs/UBA-Logo-white-footer.svg" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
