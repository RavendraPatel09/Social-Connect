import { motion } from 'framer-motion';
import { ExternalLink, Camera, PlaySquare, Users, Star, Award, Sparkles } from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';
import { mockUser } from '../data/mockData';

const Profile = () => {
  return (
    <DashboardLayout>
      <div className="pt-6 pb-20 md:pb-6 px-4 md:px-0">
        
        {/* Profile Banner */}
        <div className="relative rounded-2xl overflow-hidden h-48 md:h-64 mb-16 bg-gradient-to-r from-violet-600 to-sky-500">
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Avatar overlapped */}
          <div className="absolute -bottom-12 left-6 md:left-12">
            <div className="p-1.5 bg-slate-950 rounded-full">
              <img src={mockUser.avatar} className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-slate-900" />
            </div>
          </div>
          
          <div className="absolute top-4 right-4">
             <button className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2">
               <Sparkles size={16} /> AI Optimize Profile
             </button>
          </div>
        </div>

        {/* Profile Info */}
        <div className="px-6 md:px-12 mb-10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white">{mockUser.name}</h1>
              <p className="text-slate-400">{mockUser.handle} • <span className="bg-sky-500/20 text-sky-400 px-2 py-0.5 rounded text-sm uppercase tracking-wider">{mockUser.role}</span></p>
            </div>
            
            <div className="flex gap-3">
              <button className="bg-violet-600 hover:bg-violet-500 text-white font-semibold py-2 px-6 rounded-xl transition-all shadow-lg shadow-violet-600/20">
                Message
              </button>
              <button className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold py-2 px-6 rounded-xl transition-all">
                Share
              </button>
            </div>
          </div>

          <p className="mt-6 text-slate-300 text-lg max-w-2xl leading-relaxed">
            {mockUser.bio}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 md:px-12 mb-12">
          
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex items-center gap-4">
            <div className="bg-pink-500/10 p-3 rounded-xl text-pink-500"><Camera size={24} /></div>
            <div><p className="text-sm text-slate-400">Instagram</p><p className="text-xl font-bold text-white">{mockUser.platforms.instagram}</p></div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex items-center gap-4">
            <div className="bg-red-500/10 p-3 rounded-xl text-red-500"><PlaySquare size={24} /></div>
            <div><p className="text-sm text-slate-400">YouTube</p><p className="text-xl font-bold text-white">{mockUser.platforms.youtube}</p></div>
          </div>
          
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex items-center gap-4">
            <div className="bg-sky-500/10 p-3 rounded-xl text-sky-500"><Users size={24} /></div>
            <div><p className="text-sm text-slate-400">TikTok</p><p className="text-xl font-bold text-white">{mockUser.platforms.tiktok}</p></div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex items-center gap-4">
            <div className="bg-emerald-500/10 p-3 rounded-xl text-emerald-500"><Star size={24} /></div>
            <div><p className="text-sm text-slate-400">Rating</p><p className="text-xl font-bold text-white">4.9 / 5</p></div>
          </div>

        </div>

        {/* Portfolio / Recent Work (Mock Grid) */}
        <div className="px-6 md:px-12">
          <h2 className="text-2xl font-bold text-white mb-6">Recent Collaborations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-slate-800 rounded-xl aspect-video relative group overflow-hidden border border-slate-700">
                <img src={`https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=500&sig=${item}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-semibold flex items-center gap-2"><Award size={18} /> View Case Study</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default Profile;
