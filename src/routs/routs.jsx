import { Routes, Route } from "react-router-dom";
import Search from "../pages/search/search";
import UserInfo from "../pages/userInfo/userInfo";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/userInfo" element={<UserInfo />} />
    </Routes>
  );
}

export default AppRoutes;
