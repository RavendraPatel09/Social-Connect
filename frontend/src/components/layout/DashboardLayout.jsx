import Sidebar from './Sidebar';
import BottomNav from './BottomNav';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-50">
      <Sidebar />
      <main className="flex-1 flex flex-col w-full max-w-[100vw] min-w-0 md:max-w-none md:pb-0 mb-16 md:mb-0">
        <div className="flex-1 w-full max-w-4xl mx-auto md:p-6 lg:p-8">
          {children}
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default DashboardLayout;
