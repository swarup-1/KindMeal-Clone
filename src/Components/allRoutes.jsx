import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import MealDeal from "../Pages/MealDeal"
import KindMoment from "../Pages/KindMoment"
import Recipies from "../Pages/Recipies"
import Directory from "../Pages/Directory"
import Articles from "../Pages/Articles"
import MobileApp from "../Pages/MobileApp"
import Help from "../Pages/Help"
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/"           element={<Home />} />
      <Route path="/mealdeal"   element={<MealDeal/>} />
      <Route path="/kindMoment" element={<KindMoment/>} />
      <Route path="/recipies"   element={<Recipies/>} />
      <Route path="/directory"  element={<Directory/>} />
      <Route path="/articles"   element={<Articles/>} />
      <Route path="/mobileapp"  element={<MobileApp/>} />
      <Route path="/help"       element={<Help/>} />
    </Routes>
  );
};
export default AllRoutes;
