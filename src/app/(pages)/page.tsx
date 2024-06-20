"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import BlogTile from "@/components/home/BlogTile";
import BsSection from "@/components/home/BsSection";
import DigitalBankCard from "@/components/home/DGBankCard";
import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const bannersCount = 4;
const HomePage = () => {
  const [currentBanner, setCurrentBanner] = useState(1);
  const canBackBanner = currentBanner > 1;
  const canForwardBanner = currentBanner < bannersCount;

  return (
    <div className="min-h-full w-full overflow-hidden">
      <Navbar />
      <div
        className="h-[750px]  shadow-t-only text-white"
        style={{
          backgroundImage: `url('assets/images/banners/${currentBanner}.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="backdrop-blur-xs bg-black/50 h-full w-full flex flex-col justify-between items-center px-5 -sm:px-[3%]">
          <div></div>
          <div className="flex justify-between w-full items-center">
            <div>
              <MdOutlineArrowBackIosNew
                size={33}
                className="active:text-gray-300"
                onClick={() =>
                  canBackBanner
                    ? setCurrentBanner(currentBanner - 1)
                    : setCurrentBanner(bannersCount)
                }
              />
            </div>
            <div className="x-padding flex justify-between items-end w-full gap-24">
              <div>
                <h2 className="font-bold text-5xl mb-5 -sm:text-2xl">
                  Heirs Energies celebrates its third anniversary
                </h2>
                <p className="mb-5 text-2xl -sm:text-base">
                  Milestones in production growth, transformative community
                  engagement and a strong safety record
                </p>
                <Button label="Get more" primary />
              </div>
              <div className="-la:hidden">
                <DigitalBankCard />
              </div>
            </div>
            <div className="-scale-x-[100%]">
              <MdOutlineArrowBackIosNew
                size={33}
                className="active:text-gray-300"
                onClick={() =>
                  canForwardBanner
                    ? setCurrentBanner(currentBanner + 1)
                    : setCurrentBanner(1)
                }
              />
            </div>
          </div>
          <div>
            <div className="flex gap-3 mb-5">
              {Array.from(Array(bannersCount)).map((c, i) => {
                return (
                  <FaCircle
                    size={12}
                    key={i}
                    onClick={() => setCurrentBanner(i + 1)}
                    className={i + 1 === currentBanner ? "text-primary" : ""}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 bg-white">
        <div className="x-padding flex -sm:flex-col -sm:gap-5 justify-between gap-12 items-center">
          <div className="text-black -sm:text-center">
            <p className="text-4xl font-bold -sm:mb-4">Our Banking Offers</p>
            <p className="text-pale text-xl">
              Find out how UBA services can transform your finances
            </p>
          </div>
          <div className="flex -sm:flex-col gap-16 -sm:gap-5 text-pale items-center">
            <div className="flex flex-col items-center">
              <figure className="">
                <img
                  src="/assets/images/svgs/Open-An-Account-uba.svg"
                  alt=""
                  className="hover:scale-125 active:scale-100 transition-all duration-200 hover:ease-in"
                />
              </figure>
              <h3>Opening an account</h3>
            </div>
            <div className="flex flex-col items-center">
              <figure>
                <img
                  src="/assets/images/svgs/help-and-support.svg"
                  alt=""
                  className="hover:scale-125 active:scale-100 transition-all duration-200 hover:ease-in"
                />
              </figure>
              <h3>Help support</h3>
            </div>
            <div className="flex flex-col items-center pt-5">
              <figure>
                <img
                  src="/assets/images/svgs/subsidiaries-mobile-banking-uba.svg"
                  className="hover:scale-125 active:scale-100 transition-all duration-200 hover:ease-in"
                  width={80}
                  alt=""
                />
              </figure>
              <h3>Mobile banking</h3>
            </div>
            <div className="flex flex-col items-center">
              <figure>
                <img
                  src="/assets/images/svgs/bank-with-uba.svg"
                  alt=""
                  className="hover:scale-125 active:scale-100 transition-all duration-200 hover:ease-in"
                />
              </figure>
              <h3>Bank with uba</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center -la:flex-col -la:items-center gap-5 x-padding py-8">
        <div>
          <BlogTile
            title="We meet your deepest needs by offering you a range of banking options tailored to your personality."
            backgroundImage="assets/images/blog/uba-diaspora.jpg"
            className="mb-5 hover:bg-[length:120%]"
          />
          <div className="h-[320px] w-[390px] -la:w-full flex flex-col justify-center px-10 bg-white mb-5 shadow-xl la:hidden">
            <h3 className="text-primary text-2xl mb-3">Digital Banking</h3>
            <p className="text-pale mb-2">
              You can easily and securely access your bank account information.
            </p>
            <Button primary label="Learn more" className="w-fit" />
          </div>
          <div className="flex justify-between gap-5 -la:flex-col ">
            <BlogTile
              title="Saving Accounts"
              backgroundImage="assets/images/blog/UBA-Cameroon-Digital-Banking.jpg"
              className="hover:bg-[length:250%]"
            />
            <BlogTile
              title="Business solutions"
              backgroundImage="assets/images/blog/UBA-Corporate-solutions-2.jpg "
              className="hover:bg-[length:120%]"
            />
          </div>
        </div>
        <div className="">
          <div className="h-[320px] w-[390px] flex flex-col justify-center px-10 bg-white mb-5 shadow-xl -la:hidden">
            <h3 className="text-primary text-2xl mb-3">Digital Banking</h3>
            <p className="text-pale mb-2">
              You can easily and securely access your bank account information.
            </p>
            <Button primary label="Learn more" className="w-fit" />
          </div>
          <div className="h-[320px] w-[390px] -la:w-full bg-primary shadow-xl px-10 flex flex-col justify-center text-white">
            <h3 className="text-xl mb-3">How can we help you?</h3>
            <Input
              placeholder="Your full name"
              className="mb-2"
              inputClassName="!py-[5px]"
            />
            <div className="flex gap-2 mb-2 items-center [&>*]:w-1/2 w-full">
              <Input placeholder="Email" inputClassName="!py-[5px]" />
              <Input placeholder="Phone number" inputClassName="!py-[5px]" />
            </div>
            <select
              name="interest"
              id="interest"
              className="py-[7px] bg-white text-gray-400 px-2 rounded-md mb-5 focus:outline-1 focus:outline-gray-400"
            >
              <option value={undefined}>Select an interest</option>
              <option value="investments">Investments</option>
            </select>
            <div className="flex gap-2 items-center mb-2">
              <input type="checkbox" name="terms" id="terms" />
              <p className="text-sm">
                I accept{" "}
                <a href="#" className="underline">
                  terms and conditions
                </a>
              </p>
            </div>
            <button
              type="button"
              className="w-full py-[5px] border-white border-2 bg-transparent rounded-md uppercase"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="-sm:hidden">
        <BsSection />
      </div>
      <div className="py-20 bg-prepale -sm:hidden">
        <div className="x-padding">
          <div className="h-[394px] w-[610px] flex flex-col justify-center px-10 bg-white shadow-xl">
            <h3 className="font-bold text-2xl mb-3">
              Faire de la banque une expérience inédite
            </h3>
            <p className="text-pale mb-4">
              We're constantly looking for new ways to make banking simpler,
              smarter and better.
              <br />
              <br /> UBA's online banking services give you unlimited and secure
              access to your account, anytime, anywhere, on your computer,
              tablet, smartphone or any other mobile device. Welcome to banking
              on the move
            </p>
            <Button primary label="Learn more" className="w-fit" />
          </div>
        </div>
      </div>

      <div className="bg-white la:hidden">
        <div className="x-padding py-10">
          <h1 className="text-2xl font-bold mb-5">
            Banking solutions for your needs
          </h1>
          <div className=" text-pale text-[18px] mb-16">
            <p className="flex gap-5 pb-2 border-b items-center ">
              <IoArrowForwardCircleSharp size={25} className="text-black" />
              <a href="#">Digital solutions</a>
            </p>
            <p className="flex gap-5 py-2 border-b items-center ">
              <IoArrowForwardCircleSharp size={25} className="text-black" />
              <a href="#">Payment technologies</a>
            </p>
            <p className="flex gap-5 pt-2 items-center">
              <IoArrowForwardCircleSharp size={25} className="text-black" />
              <a href="#">Safety information</a>
            </p>
          </div>
          <h1 className="text-2xl font-bold mb-5">
            Make banking a new experience
          </h1>
          <div className="text-pale text-[18px] mb-5">
            <p>
              We're constantly looking for new ways to make banking simpler,
              smarter and better.
            </p>
            <br />
            <p>
              UBA's online banking services give you unlimited and secure access
              to your account, anytime, anywhere, on your computer, tablet,
              smartphone or any other mobile device. Welcome to banking on the
              move!
            </p>
          </div>
          <Button primary label="Learn more" />
        </div>
      </div>

      <div className="bg-gradient-to-tr from-gray-100 to-gray-400 py-7 text-white [&_a]:font-bold  ">
        <div className="x-padding flex flex-col items-center justify-center text-center">
          <h1 className="font-bold text-xl mb-2">UBA CALL CENTER</h1>
          <p className="mb-2 text-center">
            If you have a request, query, complaint or suggestion, contact us!
          </p>
          <p>
            Telephone: <a href="tel:+237233506782">+237 233 50 67 82</a>
          </p>
          <p>
            Fax: <a href="tel:+23733433707">+237 33 43 37 07</a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:cfccameroon@ubagroup.com">
              cfccameroon@ubagroup.com
            </a>
          </p>
        </div>
      </div>

      <div className="bg-primary-end py-7 text-white [&_a]:font-bold  ">
        <div className="x-padding flex flex-col items-center justify-center text-center">
          <h1 className="font-bold text-xl mb-2">
            DO YOU HAVE A REPORT TO MAKE?
          </h1>
          <p className="mb-2">Contact us, it's anonymous!</p>
          <p>
            Short number: <a href="tel:8032">8032</a>
          </p>
          <p>
            Telephone & Whatsapp:{" "}
            <a href="tel:+23409062986197">+234 0 90 62 98 61 97</a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:whistleblowingcmr@ubagroup.com">
              whistleblowingcmr@ubagroup.com
            </a>{" "}
            or{" "}
            <a href="mailto:securitymonitoring@ubagroup.com">
              securitymonitoring@ubagroup.com
            </a>{" "}
            or <a href="mailto:itrisk@ubagroup.com">itrisk@ubagroup.com</a>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
