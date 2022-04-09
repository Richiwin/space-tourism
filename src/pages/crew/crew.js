import Header from "../../sharedComponents/Header";
import { AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";

export default function Crew() {
  return (
    <div
      className={`flex sm:min-h-screen sm:h-full h-screen flex-col bg-black w-full bg-cover md:bg-crew-tablet sm:bg-crew-mobile bg-crew-desktop`}>
      <Header />
      <div className="flex sm:flex-1 flex-row md:flex-col sm:!flex-col-reverse px-[120px] md:px-8 h-full justify-between sm:pt-4 sm:pb-12">
        <AnimatePresence exitBeforeEnter>
          <Outlet />
        </AnimatePresence>
      </div>
    </div>
  );
}
