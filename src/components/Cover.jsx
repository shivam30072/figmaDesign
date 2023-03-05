import { CreateAccount } from './Files';

const Cover = ({ toggle, setToggle }) => {
  return (
    <div className="max-w-[1640px] mx-auto px-1">
      <div className="max-h-[444px] relative">
        <div className="absolute w-full h-full text-gray-200 max-h-[444px] bg-black/60 flex flex-col sm:justify-center justify-end">
          <button className="sm:hidden absolute right-2 top-2 border px-2 rounded hover:bg-white hover:text-black">
            Join group
          </button>
          <h1 className="px-4 font-bold sm:text-4xl text-sm">
            Computer Engineering
          </h1>
          <span className="px-4 font-light sm:text-xl text-[10px] text-gray-300 mb-4">
            142,765 Computer Engineers follow this
          </span>
        </div>
        <img
          className=" w-full max-h-[444px] "
          src="https://community-cdn-digitalocean-com.global.ssl.fastly.net/fURKRpeeN6XDWzQQm5WZrVRB"
          alt="image"
        />
      </div>

      <CreateAccount toggle={toggle} setToggle={setToggle} />
    </div>
  );
};

export default Cover;
