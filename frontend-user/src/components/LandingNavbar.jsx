import { Link } from 'react-router-dom';

const LandingNavbar = () => {
    return (
        <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm">
                            C
                        </div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-700 to-accent-600">
                            Context Wallet
                        </span>
                    </Link>

                    {/* Navigation Buttons */}
                    <div className="flex items-center gap-4">
                        <Link
                            to="/login"
                            className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors"
                        >
                            Login
                        </Link>
                        <Link
                            to="/register"
                            className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default LandingNavbar;
