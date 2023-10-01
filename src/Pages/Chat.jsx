import { Message, Nav } from "../server";

const Chat = () => {
  return (
    <>
      <main className="grid grid-cols-9 ">
        <nav className="col-span-2 border-r-2 h-screen">
          <Nav />
        </nav>
        <aside className="col-span-7 ">
          <Message />
        </aside>
      </main>
    </>
  );
};

export { Chat };
