import { Outlet } from "react-router-dom";
import { UserContextProvider } from "../../contexts/Usercontext";
import TopNav from "../navbar/TopNav";


export function Layout() {
  return (
    <main>
      <UserContextProvider>
        <TopNav/>

        <section className="body">
            <Outlet/>
        </section>
      </UserContextProvider>
    </main>
  );
}
