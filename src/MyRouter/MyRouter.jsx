import { Route, Routes } from "react-router-dom";
import { Chat, Login, SignUp } from "../server";

const MyRouter = () => {
  return (
    <>
      <Routes>
        <Route index element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};
export { MyRouter };
