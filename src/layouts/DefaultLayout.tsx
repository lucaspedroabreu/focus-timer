import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

export function DefaultLayout() {
  return (
    <div className="layout-container">
        <div className="center-element flex rounded-lg flex-col bg-theme-gray-800 w-full max-w-6xl h-[calc(100vh-10rem)]">
          <Header />
          <Outlet />
        </div>
    </div>
  )
}
