import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { LogOut, Plus } from 'lucide-react';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="bg-white border-b border-gray-100 flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8 sticky top-0 z-30 shadow-sm/50 backdrop-blur-sm bg-white/80">
            <Link to="/dashboard" className="flex items-center gap-2 group">
                <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:bg-brand-700 transition-colors">
                    C
                </div>
                <span className="text-lg font-bold text-gray-900 tracking-tight">
                    Context Wallet
                </span>
            </Link>

            <div className="flex items-center gap-4">
                {user && (
                    <>
                        <div className="flex items-center gap-3 mr-2">
                            <div className="w-8 h-8 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-700 font-bold text-xs uppercase">
                                {user.name.charAt(0)}
                            </div>
                            <span className="text-sm font-medium text-gray-700 hidden md:block">{user.name}</span>
                        </div>
                        <div className="h-4 w-px bg-gray-200 hidden sm:block"></div>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-red-600 hover:bg-red-50 px-3 py-2 rounded-lg transition-all"
                        >
                            <LogOut size={16} />
                            <span className="hidden sm:inline">Sign out</span>
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
