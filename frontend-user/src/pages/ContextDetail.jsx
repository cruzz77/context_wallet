import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../api/axios';
import { ArrowLeft, Trash2, Edit2, Loader2, Save } from 'lucide-react';

const ContextDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [context, setContext] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);

    // Edit state
    const [formData, setFormData] = useState({});

    useEffect(() => {
        const fetchContext = async () => {
            try {
                const { data } = await API.get(`/context/${id}`);
                setContext(data);
                setFormData({
                    ...data,
                    tags: data.tags ? data.tags.join(', ') : '',
                    relatedPeople: data.relatedPeople ? data.relatedPeople.join(', ') : ''
                });
            } catch (error) {
                console.error(error);
                alert('Item not found');
                navigate('/dashboard');
            } finally {
                setLoading(false);
            }
        };
        fetchContext();
    }, [id, navigate]);

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this memory?')) {
            try {
                await API.delete(`/context/${id}`);
                navigate('/dashboard');
            } catch (error) {
                console.error(error);
                alert('Failed to delete');
            }
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const tagsArray = typeof formData.tags === 'string' ? formData.tags.split(',').map(t => t.trim()).filter(Boolean) : formData.tags;
            const peopleArray = typeof formData.relatedPeople === 'string' ? formData.relatedPeople.split(',').map(p => p.trim()).filter(Boolean) : formData.relatedPeople;

            const { data } = await API.put(`/context/${id}`, {
                ...formData,
                tags: tagsArray,
                relatedPeople: peopleArray
            });
            setContext(data);
            setIsEditing(false);
        } catch (error) {
            console.error(error);
            alert('Failed to update');
        }
    };

    if (loading) return <div className="p-20 text-center"><Loader2 className="animate-spin inline text-blue-500" /></div>;
    if (!context) return null;

    return (
        <div className="max-w-3xl mx-auto">
            <button onClick={() => navigate(-1)} className="flex items-center text-gray-500 hover:text-gray-800 mb-6">
                <ArrowLeft size={18} className="mr-1" /> Back
            </button>

            {isEditing ? (
                // EDIT MODE
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h2 className="text-xl font-bold mb-4">Edit Memory</h2>
                    <form onSubmit={handleUpdate}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                            <input name="title" value={formData.title} onChange={handleChange} className="w-full p-2 border rounded" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                            <textarea name="description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded" rows="4" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Tags</label>
                            <input name="tags" value={formData.tags} onChange={handleChange} className="w-full p-2 border rounded" />
                        </div>
                        <div className="flex justify-end gap-3 mt-4">
                            <button type="button" onClick={() => setIsEditing(false)} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">Cancel</button>
                            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-2"><Save size={16} /> Save</button>
                        </div>
                    </form>
                </div>
            ) : (
                // VIEW MODE
                <div className="bg-white p-8 rounded-lg shadow-md border relative">
                    <div className="absolute top-6 right-6 flex gap-2">
                        <button onClick={() => setIsEditing(true)} className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition">
                            <Edit2 size={20} />
                        </button>
                        <button onClick={handleDelete} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition">
                            <Trash2 size={20} />
                        </button>
                    </div>

                    <span className="uppercase tracking-wider text-xs font-semibold text-gray-500">{context.type}</span>
                    <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-4">{context.title}</h1>

                    {context.eventDate && (
                        <div className="mb-6 text-sm text-gray-500">
                            Event Date: {new Date(context.eventDate).toLocaleDateString()}
                        </div>
                    )}

                    <div className="prose max-w-none text-gray-700 mb-8 whitespace-pre-wrap">
                        {context.description}
                    </div>

                    <div className="border-t pt-6">
                        <div className="mb-4">
                            <h3 className="text-sm font-semibold text-gray-500 mb-2">Tags</h3>
                            <div className="flex flex-wrap gap-2">
                                {context.tags && context.tags.length > 0 ? (
                                    context.tags.map((tag, i) => (
                                        <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">#{tag}</span>
                                    ))
                                ) : <span className="text-gray-400 text-sm">No tags</span>}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-gray-500 mb-2">Related People</h3>
                            <div className="flex flex-wrap gap-2">
                                {context.relatedPeople && context.relatedPeople.length > 0 ? (
                                    context.relatedPeople.map((person, i) => (
                                        <span key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">{person}</span>
                                    ))
                                ) : <span className="text-gray-400 text-sm">No related people</span>}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContextDetail;
