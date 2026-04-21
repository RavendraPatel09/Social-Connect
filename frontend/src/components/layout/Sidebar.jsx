import { Link, useLocation } from 'react-router-dom';
import { Home, Compass, PlusSquare, MessageSquare, User, Bell } from 'lucide-react';
import { mockUser } from '../../data/mockData';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Feed', icon: Home, path: '/dashboard' },
    { label: 'Explore', icon: Compass, path: '/explore' },
    { label: 'Create Post', icon: PlusSquare, path: '/post' },
    { label: 'Messages', icon: MessageSquare, path: '/chat', badge: 2 },
    { label: 'Profile', icon: User, path: `/profile/${mockUser.id}` },
  ];

  return (
    <div className="hidden md:flex flex-col w-64 h-screen border-r border-slate-800 bg-slate-900/50 backdrop-blur-xl sticky top-0 px-4 py-8">
      {/* Logo */}
      <Link to="/dashboard" className="mb-10 px-2 flex items-center gap-2">
         <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-sky-400">
          SocialConnect
         </span>
      </Link>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname.startsWith(item.path);

          return (
            <Link 
              key={item.label}
              to={item.path}
              className={`flex items-center gap-4 px-3 py-3 rounded-xl transition-all duration-200 ${isActive ? 'bg-violet-600/10 text-violet-400 font-semibold' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}`}
            >
              <div className="relative">
                <Icon size={24} className={`${isActive ? 'text-violet-400' : ''}`} />
                {item.badge && (
                  <span className="absolute -top-1 -right-1 bg-sky-500 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="text-lg">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* User Mini Profile */}
      <div className="mt-auto pt-6 border-t border-slate-800 flex items-center gap-3 px-2">
        <img src={mockUser.avatar} alt="Avatar" className="w-10 h-10 rounded-full border border-slate-700 object-cover" />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-white truncate">{mockUser.name}</p>
          <p className="text-xs text-slate-400 truncate">{mockUser.handle}</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
