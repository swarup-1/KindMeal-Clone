import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import MealDeal from "../Pages/MealDeal"
import KindMoment from "../Pages/KindMoment"
import Recipes from "../Pages/Recipes"
import Directory from "../Pages/Directory"
import Articles from "../Pages/Articles"
import MobileApp from "../Pages/MobileApp"
import Help from "../Pages/Help"
import Signup from "../Pages/Signup"
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/"           element={<Home />} />
      <Route path="/mealdeal"   element={<MealDeal/>} />
      <Route path="/kindMoment" element={<KindMoment/>} />
      <Route path="/recipes"   element={<Recipes/>} />
      <Route path="/directory"  element={<Directory/>} />
      <Route path="/articles"   element={<Articles/>} />
      <Route path="/mobileapp"  element={<MobileApp/>} />
      <Route path="/help"       element={<Help/>} />
      <Route path="/signup"       element={<Signup/>} />
    </Routes>
  );
};
export default AllRoutes;
