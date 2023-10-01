import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <main>
      <section className=" max-w-md  border-2 border-zinc-300 p-8  m-auto  mt-40">
        <div>
          <form action="" className="">
            <h1 className="text-4xl text-left ">Create Account</h1>
            <div className="flex flex-col gap-4 mt-12">
              <input
                type="text"
                placeholder="Rohan Raj"
                className="border-2 border-black p-3  text-sm"
              />
            </div>
            <div className="flex flex-col gap-4 mt-12">
              <input
                type="email"
                placeholder="explore123@gmail.com"
                className="border-2 border-black p-3  text-sm"
              />
            </div>
            <div className="flex flex-col gap-4 mt-8">
              <input
                type="password"
                placeholder="explore#123"
                className=" border-2 border-black p-3 text-sm"
              />
            </div>
            <button className="w-full border-2 bg-black text-white rounded-lg text-sm px-4 py-3 mt-8">
              SIGN UP
            </button>
          </form>
        </div>
        <Link className=" mt-4" to="/login">
          Already Have Account?
        </Link>
      </section>
    </main>
  );
};

export { SignUp };
