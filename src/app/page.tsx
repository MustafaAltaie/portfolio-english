'use client';

import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Educations from "./components/Educations/Educations";
import Experiences from "./components/Experiences/Experiences";

const Home = () => {

  return (
    <main>
      <Header />
      <Profile />
      <Educations />
      <Experiences />
    </main>
  )
}

export default Home;