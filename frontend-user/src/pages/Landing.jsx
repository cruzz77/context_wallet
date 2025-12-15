import { Link } from 'react-router-dom';
import LandingNavbar from '../components/LandingNavbar';
import { Brain, Clock, Shield, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

const Landing = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-brand-100 selection:text-brand-900">
            <LandingNavbar />

            {/* Hero Section */}
            <header className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-40">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

                {/* Background Gradient Blob */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-200/40 rounded-full blur-[100px] animate-pulse"></div>
                    <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-accent-200/40 rounded-full blur-[100px] delay-1000 animate-pulse"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-100 text-brand-600 text-xs font-bold uppercase tracking-wide mb-8 shadow-sm hover:shadow-md transition-shadow cursor-default">
                        <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                        Now Publicly Available
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-gray-900">
                        A <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600">universal memory layer</span> <br className="hidden md:block" />
                        for your digital life.
                    </h1>

                    <p className="max-w-2xl mx-auto text-xl text-gray-500 mb-10 leading-relaxed font-medium">
                        Context Wallet acts as your second brain. It effortlessly remembers people, conversations, and context so you don't have to.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/register"
                            className="group w-full sm:w-auto px-8 py-4 bg-brand-600 text-white rounded-xl font-semibold text-lg hover:bg-brand-700 transition-all shadow-brand-500/25 shadow-lg hover:shadow-brand-500/40 hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            Get Started Free
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/login"
                            className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-semibold text-lg hover:bg-gray-50 hover:text-gray-900 transition-all hover:border-gray-300 flex items-center justify-center shadow-sm"
                        >
                            Log In
                        </Link>
                    </div>

                    <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500 font-medium">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={18} className="text-brand-500" />
                            <span>Free for early adopters</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={18} className="text-brand-500" />
                            <span>No credit card required</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Features Section */}
            <section className="py-24 bg-gray-50/50 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                            Why Context Wallet?
                        </h2>
                        <p className="max-w-2xl mx-auto text-lg text-gray-500">
                            Stop relying on fragmented notes and your own memory.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard
                            icon={<Brain className="w-6 h-6 text-accent-600" />}
                            title="Total Recall"
                            description="Instantly recall details about people, meetings, and past conversations."
                            color="bg-accent-50"
                        />
                        <FeatureCard
                            icon={<Sparkles className="w-6 h-6 text-amber-500" />}
                            title="Contextual Magic"
                            description="AI surface relevant info exactly when you need it, without searching."
                            color="bg-amber-50"
                        />
                        <FeatureCard
                            icon={<Clock className="w-6 h-6 text-brand-600" />}
                            title="Timeline Memory"
                            description="View your interactions in a chronological timeline that makes sense."
                            color="bg-brand-50"
                        />
                        <FeatureCard
                            icon={<Shield className="w-6 h-6 text-emerald-600" />}
                            title="Private & Secure"
                            description="Your external brain is encrypted and private. Your data is yours alone."
                            color="bg-emerald-50"
                        />
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-24 bg-white border-t border-gray-100 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                            How it works
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-brand-200 to-transparent -z-10 border-t-2 border-dashed border-gray-200"></div>

                        <Step
                            number="01"
                            title="Connect Data"
                            description="Sync your calendar, emails, and notes. Or just input data manually."
                        />
                        <Step
                            number="02"
                            title="AI Processing"
                            description="Our engine connects the dots, building a knowledge graph of your life."
                        />
                        <Step
                            number="03"
                            title="Instant Context"
                            description="Ask questions or get proactive briefs before your next meeting."
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-[#0A0A0A] text-white overflow-hidden relative">
                {/* Glow effects */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-900/40 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                        Ready to upgrade your memory?
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
                        Join thousands of users who have already offloaded their memory to Context Wallet.
                    </p>
                    <Link
                        to="/register"
                        className="inline-block px-10 py-5 bg-white text-black rounded-xl font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl shadow-white/10"
                    >
                        Start for free
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-brand-600 rounded flex items-center justify-center text-white text-xs font-bold shadow-sm">C</div>
                        <span className="font-semibold text-gray-900">Context Wallet</span>
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                        &copy; {new Date().getFullYear()} Context Wallet Inc. All rights reserved.
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-400 hover:text-brand-600 transition-colors">Twitter</a>
                        <a href="#" className="text-gray-400 hover:text-brand-600 transition-colors">GitHub</a>
                        <a href="#" className="text-gray-400 hover:text-brand-600 transition-colors">Terms</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

// Helper Components
const FeatureCard = ({ icon, title, description, color }) => (
    <div className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 hover:-translate-y-1">
        <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-500 leading-relaxed">{description}</p>
    </div>
);

const Step = ({ number, title, description }) => (
    <div className="text-center bg-white p-6 rounded-2xl relative z-10 md:bg-transparent">
        <div className="w-16 h-16 bg-white border border-gray-100 text-brand-600 rounded-2xl shadow-lg flex items-center justify-center text-2xl font-bold mx-auto mb-6 transform hover:rotate-3 transition-transform duration-300">
            {number}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-500 font-medium">{description}</p>
    </div>
);

export default Landing;
