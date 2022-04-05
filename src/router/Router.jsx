import { Route, Routes } from "react-router-dom";

import { Top } from "../components/pages/Top";
import { Profile } from "../components/pages/Profile";
import { Skill } from "../components/pages/Skill";
import { Work } from "../components/pages/Work";
import { Contact } from "../components/pages/Contact";
import { Page404 } from "../components/pages/Page404";

export const Router = () => {
  return (
    // react-router-dom ver.6~
    <Routes>
      <Route index element={<Top />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/skill" element={<Skill />} />
      <Route path="/work" element={<Work />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
