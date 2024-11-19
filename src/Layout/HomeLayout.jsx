import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Latestnews from "../Components/Latestnews";
import LeftNavbar from "../Components/Layoutcomponent/leftNavbar";
import RightNav from "../Components/Layoutcomponent/RightNav";
import Navbar from "../Components/Navbar";
import SocialLogin from "../Components/SocialLogin";

const HomeLayout = () => {
  return (
    <div className="font-Poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <Latestnews></Latestnews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-2">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12">
        <aside className="left col-span-3">
            <LeftNavbar>
               
            </LeftNavbar>
        </aside>
        <section className=" col-span-6">

            <Outlet></Outlet>
            </section>
        <aside className="right col-span-3">
            <RightNav>
                
            </RightNav>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
