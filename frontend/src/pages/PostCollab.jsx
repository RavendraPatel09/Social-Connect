import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Send, Loader2 } from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';
import { useNavigate } from 'react-router-dom';

const PostCollab = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: '', platform: 'Instagram', budget: '', description: '' });
  const [isEnhancing, setIsEnhancing] = useState(false);

  const handleEnhance = () => {
    if (!formData.description) return;
    setIsEnhancing(true);
    
    // Simulate AI rewriting
    setTimeout(() => {
      setFormData(prev => ({
        ...prev,
        description: \`Looking for an experienced \${prev.platform} specialist who can elevate this project to the next level. \n\nMust have proven experience. The ideal outcome should include high-engagement strategies tailored for my target audience. \n\nBudget is strictly \${prev.budget || 'open'}. DM me if interested!\`
      }));
      setIsEnhancing(false);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mock Post Created");
    navigate('/dashboard');
  };

  return (
    <DashboardLayout>
      <div className="pt-6 pb-20 md:pb-6 px-4 md:px-0">
        <h1 className="text-3xl font-bold mb-8 text-white">Create Collaboration Post</h1>
        
        <div className="max-w-2xl bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Title</label>
              <input 
                value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})}
                type="text" placeholder="e.g. Need Reel Editor for Travel Vlog"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500" required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Target Platform</label>
                <select 
                  value={formData.platform} onChange={e => setFormData({...formData, platform: e.target.value})}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 appearance-none"
                >
                  <option>Instagram</option>
                  <option>YouTube</option>
                  <option>TikTok</option>
                  <option>Twitter / X</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Budget</label>
                <input 
                  value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})}
                  type="text" placeholder="e.g. $500 or RevShare"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500" required
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-slate-300">Description</label>
                <button 
                  type="button"
                  onClick={handleEnhance}
                  disabled={isEnhancing || !formData.description}
                  className="text-xs flex items-center gap-1 bg-violet-600/20 hover:bg-violet-600/40 text-violet-400 px-3 py-1.5 rounded-lg transition-colors font-semibold disabled:opacity-50"
                >
                  {isEnhancing ? <Loader2 size={14} className="animate-spin" /> : <Sparkles size={14} />}
                  AI Enhance Description
                </button>
              </div>
              <textarea 
                value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})}
                rows="6" placeholder="Describe exactly what you are looking for..."
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500" required
              ></textarea>
            </div>

            <motion.button 
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-violet-600 hover:bg-violet-500 text-white font-bold py-4 rounded-xl flex justify-center items-center gap-2 transition-colors shadow-lg shadow-violet-600/20"
            >
              <Send size={20} /> Publish Request
            </motion.button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PostCollab;
