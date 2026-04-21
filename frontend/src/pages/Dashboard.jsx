import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Heart, Share2, Sparkles, UserPlus } from 'lucide-react';
import { mockFeedPosts, mockSuggestedUsers } from '../data/mockData';
import DashboardLayout from '../components/layout/DashboardLayout';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Explore');

  return (
    <DashboardLayout>
      <div className="pt-6 pb-20 md:pb-6 px-4 md:px-0">
        
        {/* Header Tabs */}
        <div className="flex gap-6 border-b border-slate-800 mb-6 pb-2 overflow-x-auto no-scrollbar">
          {['Explore', 'Requests', 'Following'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-lg font-bold pb-2 transition-colors relative whitespace-nowrap ${activeTab === tab ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div layoutId="dashboard-tab" className="absolute bottom-0 left-0 right-0 h-1 bg-violet-500 rounded-t-xl" />
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Feed Column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {mockFeedPosts.map((post, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                key={post.id} 
                className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h4 className="font-bold text-white leading-tight">{post.author.name}</h4>
                      <p className="text-sm text-slate-400">{post.author.handle} • {post.timePosted}</p>
                    </div>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${post.author.role === 'creator' ? 'bg-sky-500/20 text-sky-400' : 'bg-amber-500/20 text-amber-400'}`}>
                    {post.author.role}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-slate-300 mb-4">{post.content}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-emerald-500/10 text-emerald-400 text-sm px-3 py-1 rounded-lg border border-emerald-500/20">Budget: {post.budget}</span>
                  {post.tags.map(tag => (
                    <span key={tag} className="bg-slate-800 text-slate-300 text-sm px-3 py-1 rounded-lg">#{tag}</span>
                  ))}
                </div>

                <div className="flex items-center gap-6 pt-4 border-t border-slate-800 text-slate-400">
                  <button className="flex items-center gap-2 hover:text-rose-400 transition-colors">
                    <Heart size={20} /> <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-sky-400 transition-colors">
                    <MessageCircle size={20} /> <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-white transition-colors ml-auto border border-slate-700 hover:border-violet-500 px-4 py-1.5 rounded-lg active:scale-95">
                    Connect
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: AI Suggestions */}
          <div className="hidden lg:flex flex-col gap-6">
            <div className="bg-gradient-to-br from-violet-600/20 to-sky-600/10 border border-violet-500/30 rounded-2xl p-5 backdrop-blur-xl">
              <div className="flex items-center gap-2 mb-4 text-violet-400">
                <Sparkles size={20} />
                <h3 className="font-bold">AI Smart Matches</h3>
              </div>
              <p className="text-sm text-slate-300 mb-4">Based on your recent search for "Video Editor"</p>
              
              <div className="flex flex-col gap-4">
                {mockSuggestedUsers.map(user => (
                  <div key={user.id} className="flex items-center justify-between bg-slate-900/50 p-3 rounded-xl border border-slate-700/50">
                    <div className="flex items-center gap-3 max-w-[65%]">
                      <img src={user.avatar} className="w-10 h-10 rounded-full object-cover" />
                      <div className="min-w-0">
                        <p className="font-bold text-sm text-white truncate">{user.name}</p>
                        <p className="text-xs text-sky-400 truncate">{user.skills[0]}</p>
                      </div>
                    </div>
                    <button className="bg-violet-600 hover:bg-violet-500 p-2 rounded-lg text-white transition-colors">
                      <UserPlus size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <h3 className="font-bold mb-4">Trending Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['#TikTokEditor', '#ThumbnailArtist', '#GrowthHacking', '#UGC', '#VFX'].map(tag => (
                  <span key={tag} className="text-sm px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-full cursor-pointer text-slate-300 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
