'use client'

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/Footer";


export default function Register() {
    return (
        <>
            <Navbar />
            <section id="register" className="py-20 pb-4 px-4 bg-[#f1f1f1] ">
                <div className="container mx-auto max-w-6xl text-center">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Register for the WiD Conference 2025</h1>
                    <p className="text-lg text-gray-700 mb-6">
                        Fill out the registration form below to secure your spot at the WiD Conference 2025. We look forward to seeing you there!
                    </p>

                    <div className="relative w-full" style={{ paddingBottom: '6.25%' }}> {/* Maintain 16:9 Aspect Ratio */}
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScSyG74rsGLqR-FrGs7R42PFHwnuMa_R7UtiZQW1nP9l5hi1g/viewform?embedded=true" className="w-full" height="4927" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}