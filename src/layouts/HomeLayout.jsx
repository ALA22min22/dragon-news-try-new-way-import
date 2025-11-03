import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homelayout/LeftAside";
import RighAside from "../components/homelayout/RighAside";
import Loading from "../components/Loading";

const HomeLayout = () => {
  const { state } = useNavigation();   // outlate e loading show koranor jonno.
  return (
    <div>
      <header>
        <Header></Header>
        {import.meta.env.VITE_name}
        <section className="w-11/12 mx-auto my-3">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto my-3">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="w-11/12 mx-auto my-3  grid grid-cols-12 gap-5">
        <aside className="col-span-3 h-fit sticky top-0">   {/* look CSS is important & unique */}
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          {state == 'loading' ? <Loading></Loading> : <Outlet></Outlet>}
        </section>
        <aside className="col-span-3 h-fit sticky top-0">   {/* look CSS is important & unique */}
          <RighAside></RighAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
