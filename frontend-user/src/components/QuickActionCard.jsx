import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const QuickActionCard = ({ icon, title, description, type, colorClass }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/create', { state: { type } });
    };

    return (
        <div
            onClick={handleClick}
            className="group bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-brand-200 cursor-pointer transition-all duration-200 flex flex-col items-start h-full"
        >
            <div className={`p-3 rounded-lg ${colorClass} bg-opacity-10 mb-4 group-hover:scale-110 transition-transform duration-200`}>
                {icon}
            </div>
            <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-brand-600 transition-colors">
                {title}
            </h3>
            <p className="text-sm text-gray-500 mb-4 flex-1">
                {description}
            </p>
            <div className="flex items-center text-xs font-bold text-brand-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                Start <ArrowRight size={14} className="ml-1" />
            </div>
        </div>
    );
};

export default QuickActionCard;
