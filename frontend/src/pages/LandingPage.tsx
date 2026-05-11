import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <div className="min-h-screen bg-[#0B1120] text-white overflow-hidden">

            {/* NAVBAR */}
            <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">

                {/* LOGO */}
                <h1 className="text-3xl font-bold tracking-tight">
                    Shortify
                </h1>

                {/* NAV LINKS */}
                <div className="hidden md:flex items-center gap-10 text-gray-300 font-medium">

                    <a href="#" className="hover:text-white transition">
                        Features
                    </a>

                    <a href="#" className="hover:text-white transition">
                        Analytics
                    </a>

                    <a href="#" className="hover:text-white transition">
                        Pricing
                    </a>

                </div>

                {/* ACTION BUTTONS */}
                <div className="flex items-center gap-4">

                    <button className="text-gray-300 hover:text-white transition font-medium">
                        Login
                    </button>

                    <button className="border border-white/10 bg-white/5 hover:bg-white/10 transition px-5 py-2 rounded-xl font-semibold">
                        Sign Up
                    </button>

                    <Link
                        to="/dashboard"
                        className="bg-purple-500 hover:bg-purple-600 transition px-5 py-2 rounded-xl font-semibold"
                    >
                        Dashboard
                    </Link>

                </div>

            </nav>

            {/* HERO */}
            <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between gap-16">

                {/* LEFT */}
                <div className="flex-1">

                    <p className="text-purple-400 font-semibold mb-4">
                        Smart URL Management
                    </p>

                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                        Shorten Links. <br />
                        Track Everything.
                    </h1>

                    <p className="text-gray-400 text-lg mb-8 max-w-xl">
                        Powerful URL shortening platform with analytics, tracking, and performance insights.
                    </p>

                    <div className="flex gap-4">

                        <Link
                            to="/dashboard"
                            className="bg-purple-500 hover:bg-purple-600 transition px-8 py-4 rounded-2xl font-semibold"
                        >
                            Start Free
                        </Link>

                        <button className="border border-white/10 bg-white/5 hover:bg-white/10 transition px-8 py-4 rounded-2xl font-semibold">
                            Live Demo
                        </button>

                    </div>

                </div>

                {/* RIGHT */}
                <div className="flex-1 relative flex justify-center">

                    {/* Glow */}
                    <div className="absolute w-[420px] h-[420px] bg-purple-500/20 blur-3xl rounded-full"></div>

                    {/* Card */}
                    <div className="relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 w-full max-w-md shadow-2xl">

                        <div className="space-y-5">

                            <div className="bg-[#111827] p-5 rounded-2xl">
                                <p className="text-sm text-gray-400 mb-2">
                                    Short URL
                                </p>

                                <p className="text-purple-400 font-semibold">
                                    short.ly/ab12cd
                                </p>
                            </div>

                            <div className="bg-[#111827] p-5 rounded-2xl">
                                <p className="text-sm text-gray-400 mb-2">
                                    Total Clicks
                                </p>

                                <p className="text-4xl font-bold">
                                    12,483
                                </p>
                            </div>

                            <div className="bg-[#111827] p-5 rounded-2xl">
                                <p className="text-sm text-gray-400 mb-3">
                                    Performance
                                </p>

                                <div className="w-full bg-[#1F2937] rounded-full h-3">
                                    <div className="bg-purple-500 h-3 rounded-full w-3/4"></div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </section>
            {/* FEATURES SECTION */}
            <section className="max-w-7xl mx-auto px-6 py-24">

                <div className="text-center mb-16">

                    <p className="text-purple-400 font-semibold mb-4">
                        FEATURES
                    </p>

                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        Everything You Need
                    </h2>

                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Powerful tools to shorten links, monitor traffic, and analyze performance in real-time.
                    </p>

                </div>

                {/* FEATURE CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* CARD 1 */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition">

                        <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6">
                            🔗
                        </div>

                        <h3 className="text-2xl font-semibold mb-4">
                            Smart URL Shortening
                        </h3>

                        <p className="text-gray-400 leading-relaxed">
                            Generate clean and trackable short links instantly with optimized performance.
                        </p>

                    </div>

                    {/* CARD 2 */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition">

                        <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6">
                            📊
                        </div>

                        <h3 className="text-2xl font-semibold mb-4">
                            Real-Time Analytics
                        </h3>

                        <p className="text-gray-400 leading-relaxed">
                            Track clicks, traffic, and link performance through a clean analytics dashboard.
                        </p>

                    </div>

                    {/* CARD 3 */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition">

                        <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6">
                            ⚡
                        </div>

                        <h3 className="text-2xl font-semibold mb-4">
                            Fast Performance
                        </h3>

                        <p className="text-gray-400 leading-relaxed">
                            Built with modern technologies for fast redirects and scalable performance.
                        </p>

                    </div>

                </div>

            </section>

        </div>
    );
}

export default LandingPage;