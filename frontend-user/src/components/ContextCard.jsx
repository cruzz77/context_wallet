import { Link } from 'react-router-dom';
import { Calendar, User, Link as LinkIcon, FileText, MessageCircle, Clock } from 'lucide-react';
import classNames from 'classnames';

const ContextCard = ({ context }) => {
    const getTypeConfig = (type) => {
        switch (type) {
            case 'meeting':
                return { icon: Calendar, color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-l-purple-500' };
            case 'person':
                return { icon: User, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-l-blue-500' };
            case 'link':
                return { icon: LinkIcon, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-l-emerald-500' };
            case 'promise':
                return { icon: MessageCircle, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-l-amber-500' };
            default:
                return { icon: FileText, color: 'text-gray-600', bg: 'bg-gray-50', border: 'border-l-gray-400' };
        }
    };

    const config = getTypeConfig(context.type);
    const Icon = config.icon;

    return (
        <Link to={`/context/${context._id}`} className="block group h-full">
            <div className={`bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-200 transition-all duration-200 h-full flex flex-col overflow-hidden relative pl-1`}>
                {/* Colored Left Strip */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${config.border} rounded-l-xl`}></div>

                <div className="p-5 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-3">
                        <div className={`p-2 rounded-lg ${config.bg} ${config.color} bg-opacity-50`}>
                            <Icon size={18} />
                        </div>
                        <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider flex items-center gap-1">
                            <Clock size={10} />
                            {new Date(context.createdAt).toLocaleDateString()}
                        </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 truncate group-hover:text-brand-600 transition-colors">
                        {context.title}
                    </h3>

                    {context.description && (
                        <p className="text-gray-500 text-sm line-clamp-3 mb-4 flex-1 leading-relaxed">
                            {context.description}
                        </p>
                    )}

                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-50">
                        <span className={classNames("text-[10px] px-2 py-0.5 rounded-md font-semibold uppercase tracking-wide border border-transparent", config.bg, config.color)}>
                            {context.type}
                        </span>
                        {context.tags && context.tags.map((tag, idx) => (
                            <span key={idx} className="text-[10px] bg-gray-50 border border-gray-100 text-gray-500 px-2 py-0.5 rounded-md font-medium">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ContextCard;
