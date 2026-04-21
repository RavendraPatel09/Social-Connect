import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star } from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';
import { mockSuggestedUsers } from '../../data/mockData';

const Explore = () => {
  const [search, setSearch] = useState('');

  // Duplicate users for grid visual purposes
  const allUsers = [...mockSuggestedUsers, ...mockSuggestedUsers, ...mockSuggestedUsers].map((u, i) => ({...u, _id: i}));

  return (
    <DashboardLayout>
      <div className="pt-6 pb-20 md:pb-6 px-4 md:px-0">
        <h1 className="text-3xl font-bold mb-6 text-white text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-500 inline-block">Discover Talent</h1>
        
        {/* Search Bar */}
        <div className="flex gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search by skills, platform, or niche..."
              className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-4 rounded-xl flex items-center gap-2 border border-slate-700 transition-colors">
            <Filter size={20} /> <span className="hidden sm:inline">Filters</span>
          </button>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {['Video Editors', 'Thumbnail Designers', 'Social Managers', 'SEO Experts'].map((cat, i) => (
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              key={cat} 
              className={\`p-4 rounded-2xl cursor-pointer text-center font-semibold bg-gradient-to-br \${i % 2 === 0 ? 'from-slate-800 to-slate-900 border border-slate-700 hover:border-violet-500' : 'from-violet-900/40 to-slate-900 border border-violet-900/50 hover:border-violet-500'}\`}
            >
              {cat}
            </motion.div>
          ))}
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allUsers.map((user, idx) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              key={user._id} 
              className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition-all flex flex-col items-center text-center"
            >
              <img src={user.avatar} className="w-24 h-24 rounded-full object-cover mb-4 ring-4 ring-slate-800" />
              <h3 className="text-xl font-bold text-white">{user.name}</h3>
              <p className="text-slate-400 text-sm mb-3">{user.handle}</p>
              
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                <Star fill="currentColor" size={16} />
                <span className="font-bold">4.9</span>
                <span className="text-slate-500 text-sm ml-1">(24 reviews)</span>
              </div>

              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {user.skills.map(skill => (
                  <span key={skill} className="bg-sky-500/10 text-sky-400 text-xs px-2 py-1 rounded-lg border border-sky-500/20">
                    {skill}
                  </span>
                ))}
              </div>

              <button className="w-full bg-slate-800 hover:bg-violet-600 border border-slate-700 hover:border-violet-500 transition-all py-2 rounded-xl font-semibold mt-auto">
                View Profile
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </DashboardLayout>
  );
};

export default Explore;
