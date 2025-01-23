import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/Footer";


export const metadata = {
    title: 'Register | Women in Data Conference 2025',
    description: 'Register for the Women in Data (WiD) Conference 2025! Secure your spot at this impactful event where professionals, policymakers, and data enthusiasts come together to transform promises into progress using data-driven solutions.',
    openGraph: {
      title: 'Register | Women in Data Conference 2025',
      description: 'Register for the Women in Data (WiD) Conference 2025! Secure your spot at this impactful event where professionals, policymakers, and data enthusiasts come together to transform promises into progress using data-driven solutions.',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Register | Women in Data Conference',
      description: 'Register for the Women in Data (WiD) Conference 2025! Secure your spot at this impactful event where professionals, policymakers, and data enthusiasts come together to transform promises into progress using data-driven solutions.',
    },
  }

export default function Register() {
    return (
        <>
            <Navbar />
            <section id="register" className="mt-16 py-20 pb-4 px-4 bg-[#f1f1f1] ">
                <div className="container mx-auto max-w-6xl text-center">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Register for the WiD Conference 2025</h1>
                    <p className="text-lg text-gray-700 mb-6">
                        Fill out the registration form below to secure your spot at the WiD Conference 2025. We look forward to seeing you there!
                    </p>

                    <div className="relative w-full" style={{ paddingBottom: '6.25%' }}>
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScSyG74rsGLqR-FrGs7R42PFHwnuMa_R7UtiZQW1nP9l5hi1g/viewform" className="w-full" height="4927" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}