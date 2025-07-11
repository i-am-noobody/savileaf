import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className="flex w-full min-h-screen">
      <Sidebar />
      <main className="w-full bg-[#f2f0f0]">
        <Outlet/>
      </main>
    </div>
  );
};

export default Layout;
