import { MessageInfo, Input } from "../server";

const Message = () => {
  return (
    <>
      <div className="h-screen ">
        <section className="border-b-2 mt-12">
          <ul className="flex  items-center gap-4 pb-4 pl-4">
            <li>
              <img
                className="w-12 h-12 object-cover rounded-full"
                src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aHVtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </li>
            <li>Rajesh Kumar</li>
          </ul>
        </section>
        <section>
          <MessageInfo />
        </section>
        <section>
          <Input />
        </section>
      </div>
    </>
  );
};
export { Message };
2;
