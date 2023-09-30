import { Route, Routes } from "react-router-dom";
import { Home } from "../server";

const MyRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
export { MyRouter };
