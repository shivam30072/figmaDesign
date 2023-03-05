import React from "react";

const ProfileCard = () => {
  return (
    <div className="max-w-[1000px] mx-auto flex justify-between">
      <div className="w-full">
        <div className=" sm:max-w-[600px]  h-[420px] border mt-6 rounded">
          <img
            src="https://images.unsplash.com/photo-1649232164568-e931a6966d13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NXx8fGVufDB8fHx8&w=1000&q=80"
            className="w-full h-[50%] "
          />

          <div>
            <span className="m-3">✍️ Article</span>
            <h3 className="m-3 font-bold text-xl">
              What if famous brands had regular fonts? Meet RegulaBrands!
            </h3>
            <p className="m-3">
              I’ve worked in UX for the better part of a decade. From now on, I
              plan to rei…
            </p>
          </div>

          <div className="flex justify-between">
            <div className="flex">
              <img
                className="ml-3 w-[40px] rounded-full"
                src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
              />
              <span className="mt-2 ml-2 font-bold">Shivam kumar</span>
            </div>
            <div className="flex">
              <img
                className="w-[20px] h-[20px] mt-1"
                src="https://cdn-icons-png.flaticon.com/512/829/829117.png"
              />
              <span className="ml-1 mr-4"> 3.6k views</span>
              <img
                className="w-[25px] h-[20px] mr-2 mt-1 bg-slate-300 p-[1px]"
                src="https://cdn-icons-png.flaticon.com/512/1358/1358023.png"
              />
            </div>
          </div>
        </div>

        <div className=" sm:max-w-[600px] h-[420px] border mt-6 rounded">
          <img
            src="https://wallpaperaccess.com/full/40429.jpg"
            className="w-full h-[50%] "
          />

          <div>
            <span className="m-3">🗓️ Meetup</span>
            <h3 className="m-3 font-bold text-xl">
              Finance & Investment Elite Social Mixer @Lujiazui
            </h3>
            <p className="m-3">
              I’ve worked in UX for the better part of a decade. From now on, I
              plan to rei...
            </p>
          </div>

          <div className="flex justify-between">
            <div className="flex">
              <img
                className="ml-3 w-[40px] rounded-full"
                src="https://cdn-icons-png.flaticon.com/512/3001/3001764.png"
              />
              <span className="mt-2 ml-2 font-bold">Ronal Jones</span>
            </div>
            <div className="flex">
              <img
                className="w-[20px] h-[20px] mt-1"
                src="https://cdn-icons-png.flaticon.com/512/829/829117.png"
              />
              <span className="ml-1 mr-4"> 3.6k views</span>
              <img
                className="w-[25px] h-[20px] mr-2 mt-1 bg-slate-300 p-[1px]"
                src="https://cdn-icons-png.flaticon.com/512/1358/1358023.png"
              />
            </div>
          </div>
        </div>

        <div className="sm:max-w-[600px] h-[420px] border mt-6 rounded">
          <img
            src="https://cdn.pixabay.com/photo/2018/03/04/09/51/space-3197611__340.jpg"
            className="w-full h-[50%] "
          />

          <div>
            <span className="m-3">🔬️ Education</span>
            <h3 className="m-3 font-bold text-xl">
              Tax Benefits for Investment under National Pension Scheme launched
              by Government
            </h3>
            <p className="m-3">
              I’ve worked in UX for the better part of a decade. From now on, I
              plan to rei…
            </p>
          </div>

          <div className="flex justify-between">
            <div className="flex">
              <img
                className="ml-3 w-[40px] rounded-full"
                src="https://cdn-icons-png.flaticon.com/512/2922/2922561.png"
              />
              <span className="mt-2 ml-2 font-bold">Sarah West</span>
            </div>
            <div className="flex">
              <img
                className="w-[20px] h-[20px] mt-1"
                src="https://cdn-icons-png.flaticon.com/512/829/829117.png"
              />
              <span className="ml-1 mr-4"> 1.4k views</span>
              <img
                className="w-[25px] h-[20px] mr-2 mt-1 bg-slate-300 p-[1px]"
                src="https://cdn-icons-png.flaticon.com/512/1358/1358023.png"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:mr-4 sm:mt-6 md:flex">
        <input
          type="text"
          className="border-b-2 border-slate-200 outline-0 h-[21px]"
          placeholder="add location"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/1250/1250615.png"
          className="w-[15px] h-[15px]"
        />
      </div>
    </div>
  );
};

export default ProfileCard;
