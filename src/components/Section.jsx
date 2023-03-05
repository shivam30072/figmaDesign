import React from "react";

const Section = () => {
  return (
    <div className="max-w-[1000px] mx-auto max-h-[100px] flex justify-between mt-6 border-b-2 pb-2">
      <div className="hidden sm:flex list-none cursor-pointer">
        <li className="font-bold mr-4 ">All posts(32)</li>
        <li className="font-light mr-4 hover:text-slate-400">Article</li>
        <li className="font-light mr-4 hover:text-slate-400">Event</li>
        <li className="font-light mr-4 hover:text-slate-400">Education</li>
        <li className="font-light hover:text-slate-400">Job</li>
      </div>
      <div className="hidden sm:flex">
        <button className="border border-black rounded mr-4 px-1 font-bold bg-gray-300">
          Write a Post
        </button>
        <button className="border border-black rounded mr-4 px-1 font-bold bg-blue-500 ">
          join group
        </button>
      </div>
      <div className="ml-2 sm:hidden">
        <span className="font-bold">Posts(326)</span>
      </div>
      <section className="flex border bg-gray-300 px-1 mr-2 sm:hidden">
        Filter: All
        <img
          src="https://cdn-icons-png.flaticon.com/512/2609/2609201.png"
          alt="icon"
          className="w-[10px] h-[10px] mt-2 ml-1"
        />
      </section>
    </div>
  );
};

export default Section;
