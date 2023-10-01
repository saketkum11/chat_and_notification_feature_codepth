import { Route, Routes } from "react-router-dom";
import { Chat, Home } from "../server";

const MyRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  );
};
export { MyRouter };
