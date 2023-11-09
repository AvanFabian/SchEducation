import React from "react";
import Image from "next/image";
import panduan from "@/public/assets/panduan.png";
import {
  bintang_level,
  gembok_level,
  bubblechat_mulai,
} from "@/public/assets/mainpage_icons";

const mainpage = () => {
  return (
    <div className="flex flex-col min-h-screen lg:max-w-[600px] align-top mr-6">
      <div className="w-full bg-gradient-to-l from-[#bc998e] to-[#8B6B61] mt-4 py-5 px-3 rounded-xl">
        <div className="grid grid-cols-2 w-full">
          <div className="flex flex-col align-middle my-auto">
            <h1 className="text-[#fffdf1] text-md font-bold mb-2 capitalize subpixel-antialiased">
              Matematika bagian 1
            </h1>
            <h2 className="text-[#fffdf1] text-xs font-normal subpixel-antialiased">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
          </div>
          <div className="flex justify-end items-center">
            <div className="flex flex-row w-max gap-2 cursor-pointer items-center px-2 py-2 h-max bg-transparent border-[3px] border-b-[5px] hover:opacity-75 border-[#49494962] rounded-xl">
              <Image src={panduan} width={30} height={32} alt="WISE Edu Logo" />
              <h2 className="text-[#ffffff] text-[14px] font-bold uppercase">
                Panduan Belajar
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-16 mb-4 gap-28">
        <div className="flex flex-row">
          <Image
            src={bubblechat_mulai}
            width={109}
            height={32}
            alt="WISE Edu Logo"
            className="absolute left-[425px] top-[205px] z-30 animate-bounce"
          />
          <div className="m-auto flex flex-col">
            <button className="absolute flex z-20 hover:translate-y-[12px] transition-all rounded-full m-auto w-max py-3 px-4 h-max bg-[#8B6B61]">
              <div className="">
                <Image
                  src={bintang_level}
                  width={35}
                  height={32}
                  alt="WISE Edu Logo"
                />
              </div>
            </button>
            <button className="z-10 mt-2 flex transition-all rounded-full w-max py-3 px-4 h-max bg-[#b98879]">
              <Image
                src={bintang_level}
                width={35}
                height={32}
                alt="WISE Edu Logo"
              />
            </button>
          </div>
          <div className="m-auto flex flex-col">
            <button className="absolute flex z-20 hover:translate-y-[12px] transition-all rounded-full m-auto w-max py-3 px-4 h-max bg-[#796565]">
              <Image
                src={gembok_level}
                width={35}
                height={32}
                alt="WISE Edu Logo"
              />
            </button>
            <button className="z-10 mt-2 flex transition-all rounded-full w-max py-3 px-4 h-max bg-[#4d3c37]">
              <Image
                src={gembok_level}
                width={35}
                height={32}
                alt="WISE Edu Logo"
              />
            </button>
          </div>
          <div className="m-auto flex flex-col">
            <button className="absolute flex z-20 hover:translate-y-[12px] transition-all rounded-full m-auto w-max py-3 px-4 h-max bg-[#796565]">
              <Image
                src={gembok_level}
                width={35}
                height={32}
                alt="WISE Edu Logo"
              />
            </button>
            <button className="z-10 mt-2 flex transition-all rounded-full w-max py-3 px-4 h-max bg-[#4d3c37]">
              <Image
                src={gembok_level}
                width={35}
                height={32}
                alt="WISE Edu Logo"
              />
            </button>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="m-auto flex flex-col">
            <button className="absolute flex z-20 hover:translate-y-[12px] transition-all rounded-full m-auto w-max py-3 px-4 h-max bg-[#8B6B61]">
              <Image
                src={bintang_level}
                width={35}
                height={32}
                alt="WISE Edu Logo"
              />
            </button>
            <button className="z-10 mt-2 flex transition-all rounded-full w-max py-3 px-4 h-max bg-[#b98879]">
              <Image
                src={bintang_level}
                width={35}
                height={32}
                alt="WISE Edu Logo"
              />
            </button>
          </div>
          <div className="m-auto flex flex-col">
            <button className="absolute flex z-20 hover:translate-y-[12px] transition-all rounded-full m-auto w-max py-3 px-4 h-max bg-[#796565]">
              <Image
                src={gembok_level}
                width={35}
                height={32}
                alt="WISE Edu Logo"
              />
            </button>
            <button className="z-10 mt-2 flex transition-all rounded-full w-max py-3 px-4 h-max bg-[#4d3c37]">
              <Image
                src={gembok_level}
                width={35}
                height={32}
                alt="WISE Edu Logo"
              />
            </button>
          </div>
          <div className="m-auto flex flex-col">
            <button className="absolute flex z-20 hover:translate-y-[12px] transition-all rounded-full m-auto w-max py-3 px-4 h-max bg-[#796565]">
              <Image
                src={gembok_level}
                width={35}
                height={32}
                alt="WISE Edu Logo"
              />
            </button>
            <button className="z-10 mt-2 flex transition-all rounded-full w-max py-3 px-4 h-max bg-[#4d3c37]">
              <Image
                src={gembok_level}
                width={35}
                height={32}
                alt="WISE Edu Logo"
              />
            </button>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="m-auto flex flex-col">
            <button className="absolute flex z-20 hover:translate-y-[12px] transition-all rounded-full m-auto w-max py-3 px-4 h-max bg-[#8B6B61]">
              <Image
                src={gembok_level}
                width={35}
                height={32}
                alt="WISE Edu Logo"
              />
            </button>
            <button className="z-10 mt-2 flex transition-all rounded-full w-max py-3 px-4 h-max bg-[#b98879]">
              <Image
                src={gembok_level}
                width={35}
                height={32}
                alt="WISE Edu Logo"
              />
            </button>
          </div>
          <div className="m-auto flex flex-col">
            <button className="absolute flex z-20 hover:translate-y-[12px] transition-all rounded-full m-auto w-max py-3 px-4 h-max bg-[#796565]">
              <Image
                src={gembok_level}
                width={35}
                height={32}
                alt="WISE Edu Logo"
              />
            </button>
            <button className="z-10 mt-2 flex transition-all rounded-full w-max py-3 px-4 h-max bg-[#4d3c37]">
              <Image
                src={gembok_level}
                width={35}
                height={32}
                alt="WISE Edu Logo"
              />
            </button>
          </div>
          <div className="m-auto flex flex-col">
            <button className="absolute flex z-20 hover:translate-y-[12px] transition-all rounded-full m-auto w-max py-3 px-4 h-max bg-[#796565]">
              <Image
                src={gembok_level}
                width={35}
                height={32}
                alt="WISE Edu Logo"
              />
            </button>
            <button className="z-10 mt-2 flex transition-all rounded-full w-max py-3 px-4 h-max bg-[#4d3c37]">
              <Image
                src={gembok_level}
                width={35}
                height={32}
                alt="WISE Edu Logo"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default mainpage;
