import { Link } from 'react-router-dom';
import { Plus, User, Link as LinkIcon, MessageCircle, Calendar } from 'lucide-react';
import QuickActionCard from './QuickActionCard';

const EmptyState = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 shadow-sm mb-12">
                <div className="w-20 h-20 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="bg-brand-100 p-4 rounded-full">
                        <Plus size={32} className="text-brand-600" />
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Your memory starts here
                </h2>
                <p className="text-gray-500 max-w-md mx-auto mb-8">
                    Add your first context and never forget important details regarding people, meetings, or promises again.
                </p>

                <Link
                    to="/create"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                    <Plus size={20} />
                    Add your first memory
                </Link>
            </div>

            <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 px-1">
                    Quick Actions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <QuickActionCard
                        icon={<User size={24} className="text-brand-600" />}
                        title="Add Person"
                        description="Remember details about someone new you met."
                        type="person"
                        colorClass="bg-brand-100"
                    />
                    <QuickActionCard
                        icon={<LinkIcon size={24} className="text-green-600" />}
                        title="Save Link"
                        description="Bookmark a URL with context on why it matters."
                        type="link"
                        colorClass="bg-green-100"
                    />
                    <QuickActionCard
                        icon={<MessageCircle size={24} className="text-orange-600" />}
                        title="Record Promise"
                        description="Track commitments made to others."
                        type="promise"
                        colorClass="bg-orange-100"
                    />
                    <QuickActionCard
                        icon={<Calendar size={24} className="text-purple-600" />}
                        title="Meeting Note"
                        description="Capture key takeaways from a discussion."
                        type="meeting"
                        colorClass="bg-purple-100"
                    />
                </div>
            </div>

            {/* Skeleton for recent activity to make it feel alive */}
            <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 px-1 opacity-50">
                    Recent Activity Placeholder
                </h3>
                <div className="border-l-2 border-gray-100 ml-3 space-y-8 pl-8 py-2 opacity-40 select-none pointer-events-none">
                    <div className="relative">
                        <div className="absolute -left-[39px] bg-gray-100 h-5 w-5 rounded-full border-4 border-white"></div>
                        <div className="bg-white p-4 rounded-lg border border-gray-100">
                            <div className="h-4 bg-gray-100 rounded w-1/3 mb-2"></div>
                            <div className="h-3 bg-gray-50 rounded w-full"></div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-[39px] bg-gray-100 h-5 w-5 rounded-full border-4 border-white"></div>
                        <div className="bg-white p-4 rounded-lg border border-gray-100">
                            <div className="h-4 bg-gray-100 rounded w-1/4 mb-2"></div>
                            <div className="h-3 bg-gray-50 rounded w-2/3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmptyState;
