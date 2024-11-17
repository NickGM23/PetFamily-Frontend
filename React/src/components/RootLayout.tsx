import { Outlet } from "react-router-dom";
import Navigation from "../Navigation";
import { ContentBlock } from "./ContentBlock";
import Footer from "../Footer";
import { ToastContainer } from "react-toastify";

export type Props = {
  children: React.ReactNode;
};

export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <div>
        <Navigation />
      </div>
      <main className="m-2 flex-1 pb-16">
        <ContentBlock>
          <Outlet />
        </ContentBlock>
      </main>
      <div className="flex-1">
        <Footer />
      </div>
      <ToastContainer />
    </div>
  );
}
