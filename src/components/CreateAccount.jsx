import logo from "./logo.svg";

const CreateAccount = ({ toggle, setToggle }) => {
  return (
    <div
      className={` ${
        toggle ? "-translate-y-12" : "-translate-y-[650px]"
        } transition duration-700 absolute top-[40%] sm:left-[20%] md:left-[30%] xl:left-[35%] w-[500px] mx-auto bg-white rounded-lg border border-slate-400 flex`}
    >
      <form className="w-full h-full">
        <h1 className="text-center font-bold text-2xl">Create Account</h1>
        <div className="flex flex-col items-start ml-6 mt-3">
          <input
            className="border bg-[#D9D9DB] h-[35px] rounded w-[200px]  mb-2"
            type="text"
            placeholder="First Name"
          />
          <input
            className="border bg-[#D9D9DB] h-[35px] rounded w-[200px] mb-2"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div className="flex flex-col items-start ml-6 w-full">
          <input
            className="border bg-[#D9D9DB] h-[35px] rounded w-[200px] mb-2"
            type="email"
            placeholder="shivam@mail.com"
          />
          <input
            className="border bg-[#D9D9DB] h-[35px] rounded w-[200px] mb-2"
            type="password"
            placeholder="Password"
          />
          <input
            className="border bg-[#D9D9DB] h-[35px] rounded w-[200px] mb-2"
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <div className="ml-6 w-full flex flex-col">
          <button className="mb-1 py-1 border w-[200px] rounded-2xl bg-[#2F6CE5] text-white">
            Create Account
          </button>
          <button className="py-1 border w-[200px] rounded  text-black flex m-[4px] pl-1">
            <img
              className="w-[20px] pt-1 "
              src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
            />
            <span className="ml-1 font-bold">sign in with google</span>
          </button>
        </div>
      </form>
      <img
        className="w-[300px] border h-[280px] mt-8 mr-6 bg-blue-400 rounded-lg"
        src={logo}
        alt="logo"
      />
      <img
        onClick={() => {
          setToggle(!toggle);
        }}
        className="w-[20px] h-[20px] cursor-pointer"
        src="https://cdn-icons-png.flaticon.com/512/3024/3024525.png"
        alt="icon"
      />
    </div>
  );
};

export default CreateAccount;
