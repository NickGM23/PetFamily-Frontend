import { Outlet } from "react-router-dom";
import Navigation from "../Navigation";
import { ContentBlock } from "./ContentBlock";
import Footer from "../Footer";

export type Props = {
  children: React.ReactNode;
};

const styles = {
  main: {
    backgroundColor: "lightgray",
    width: "100%",
  },
  inputText: {
    padding: "10px",
    color: "red",
  },
};

export function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex px-8 py-5 grow" style={styles.main}>
        <ContentBlock>
          <Outlet />
        </ContentBlock>
      </main>
      <Footer />
    </div>
  );
}
