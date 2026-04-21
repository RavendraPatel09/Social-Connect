import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    password: '',
    role: 'creator' // default
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Signup submitted", formData);
    // TODO: Connect to explicit backend registration API
    // On success, redirect to login:
    // navigate('/login');
  };

  return (
    <div className="flex h-screen w-full items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="w-full max-w-md bg-slate-800/50 backdrop-blur-xl p-8 rounded-2xl border border-slate-700 z-10 shadow-2xl shadow-black/50 overflow-y-auto max-h-[95vh]">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Join SocialConnect</h2>
          <p className="text-slate-400">Create your professional profile today.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Display Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name or Brand"
              className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all outline-none text-white placeholder:text-slate-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all outline-none text-white placeholder:text-slate-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all outline-none text-white placeholder:text-slate-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-3">I am a...</label>
            <div className="grid grid-cols-2 gap-4">
              <label className={\`cursor-pointer py-3 px-4 rounded-xl border flex items-center justify-center font-medium transition-all \${formData.role === 'creator' ? 'bg-sky-500/20 border-sky-500 text-sky-400' : 'bg-slate-900/50 border-slate-700 text-slate-400 hover:bg-slate-800'}\`}>
                <input 
                  type="radio" 
                  name="role" 
                  value="creator" 
                  checked={formData.role === 'creator'}
                  onChange={handleChange} 
                  className="hidden" 
                />
                Creator
              </label>
              <label className={\`cursor-pointer py-3 px-4 rounded-xl border flex items-center justify-center font-medium transition-all \${formData.role === 'provider' ? 'bg-sky-500/20 border-sky-500 text-sky-400' : 'bg-slate-900/50 border-slate-700 text-slate-400 hover:bg-slate-800'}\`}>
                <input 
                  type="radio" 
                  name="role" 
                  value="provider" 
                  checked={formData.role === 'provider'}
                  onChange={handleChange} 
                  className="hidden" 
                />
                Service Provider
              </label>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-3 mt-4 bg-sky-600 hover:bg-sky-700 text-white font-medium flex justify-center items-center gap-2 rounded-xl transition-all shadow-lg shadow-sky-600/20"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-slate-400 text-sm">
          Already have an account? <Link to="/login" className="text-sky-400 hover:text-sky-300 font-medium">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
