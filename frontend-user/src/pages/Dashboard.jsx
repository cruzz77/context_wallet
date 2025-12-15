import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../api/axios';
import ContextCard from '../components/ContextCard';
import EmptyState from '../components/EmptyState';
import { Plus, Search, Loader2 } from 'lucide-react';

const Dashboard = () => {
    const [contexts, setContexts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState('');

    const fetchContexts = async () => {
        try {
            const { data } = await API.get('/context');
            setContexts(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (!query.trim()) {
                await fetchContexts();
                return;
            }
            const { data } = await API.get(`/context/search?q=${query}`);
            setContexts(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchContexts();
    }, []);

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-10 gap-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">My Memories</h1>
                    <p className="text-gray-500 mt-1 font-medium">Manage everything happening in your life.</p>
                </div>

                <div className="flex w-full md:w-auto gap-3">
                    <form onSubmit={handleSearch} className="relative flex-1 md:w-72">
                        <input
                            type="text"
                            placeholder="Search memories..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all bg-white shadow-sm hover:border-gray-300"
                        />
                        <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                    </form>

                    <Link to="/create" className="bg-brand-600 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/20 hover:shadow-brand-500/30 hover:-translate-y-0.5 font-semibold">
                        <Plus size={20} />
                        <span className="hidden sm:inline">Add New</span>
                    </Link>
                </div>
            </div>

            {loading ? (
                <div className="flex justify-center p-20">
                    <Loader2 className="animate-spin text-brand-500" size={32} />
                </div>
            ) : (
                <>
                    {contexts.length === 0 ? (
                        <EmptyState />
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {contexts.map((context) => (
                                <ContextCard key={context._id} context={context} />
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Dashboard;
