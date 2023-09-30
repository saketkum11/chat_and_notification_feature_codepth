const Home = () => {
  return (
    <>
      <main>
        <section className=" max-w-md border-2 rounded-3xl p-8 text-white m-auto  mt-40">
          <div>
            <form action="" className="">
              <h1 className="text-xl font-bold">Log in</h1>
              <div className="flex flex-col gap-4 mt-12">
                <label htmlFor="" className=" text-left text-md">
                  Email
                </label>
                <input type="email" className=" bg-zinc-800 p-2 rounded-lg" />
              </div>
              <div className="flex flex-col gap-4 mt-8">
                <label htmlFor="" className=" text-left text-md">
                  Password
                </label>
                <input
                  type="password"
                  className=" bg-zinc-800 p-2 rounded-lg"
                />
              </div>
              <button className=" border-2 rounded-lg bg-zinc-800bg-zinc-800 px-4 py-2 mt-8">
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};
export { Home };
