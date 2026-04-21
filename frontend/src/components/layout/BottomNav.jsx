import { Link, useLocation } from 'react-router-dom';
import { Home, Compass, PlusSquare, MessageSquare, User } from 'lucide-react';

const BottomNav = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Feed', icon: Home, path: '/dashboard' },
    { label: 'Explore', icon: Compass, path: '/explore' },
    { label: 'Post', icon: PlusSquare, path: '/post' },
    { label: 'Chat', icon: MessageSquare, path: '/chat', badge: 2 },
    { label: 'Profile', icon: User, path: '/profile/u1' },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 border-t border-slate-800 bg-slate-900/90 backdrop-blur-lg z-50 px-6 flex items-center justify-between pb-safe">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname.startsWith(item.path);

        return (
          <Link 
            key={item.label} 
            to={item.path} 
            className={\`flex flex-col items-center justify-center gap-1 w-12 h-full transition-colors \${isActive ? 'text-violet-400' : 'text-slate-400'}\`}
          >
            <div className="relative">
              <Icon size={24} />
              {item.badge && (
                <span className="absolute -top-1 -right-1 bg-sky-500 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </div>
            {/* <span className="text-[10px]">{item.label}</span> // Optional text */}
          </Link>
        );
      })}
    </div>
  );
};

export default BottomNav;
