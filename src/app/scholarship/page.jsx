import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/Footer";


export const metadata = {
    title: 'Register | Women in Data Conference 2025',
    description: 'Apply for the Women in Data (WiD) 2025 Conference Scholarship! This opportunity supports aspiring women in data to participate in the conference, fostering inclusivity and enabling access to impactful discussions and networking. Turn your data dreams into reality!',
    openGraph: {
      title: 'Register | Women in Data Conference 2025',
      description: 'Apply for the Women in Data (WiD) 2025 Conference Scholarship! This opportunity supports aspiring women in data to participate in the conference, fostering inclusivity and enabling access to impactful discussions and networking. Turn your data dreams into reality!',
      url: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/homepage.png` ,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/homepage.png`,
          width: 1200,
          height: 630,
          alt: 'Women in Data Conference Banner',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Women in Data Conference',
      description: 'Apply for the Women in Data (WiD) 2025 Conference Scholarship! This opportunity supports aspiring women in data to participate in the conference, fostering inclusivity and enabling access to impactful discussions and networking. Turn your data dreams into reality!',
      images: [`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/homepage.png`],
    },
  }

export default function Register() {
    return (
        <>
            <Navbar />
            <section id="register" className="mt-16 py-20 pb-4 px-4 bg-[#f1f1f1] ">
                <div className="container mx-auto max-w-6xl text-center">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Register for WiD 2025 Conference Scholarship: Empowering Women in Data"</h1>
                    <p className="text-lg text-gray-700 mb-6">
                    Complete the registration form to secure your spot at the Women in Data (WiD) Conference 2025. We can’t wait to welcome you!
                    </p>

                    <div className="relative w-full" style={{ paddingBottom: '6.25%' }}>
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdwrSv7BzvbAbVg5RkzVwC4hP4Y5ZPPDtyTCtVikAhRcDc7xA/viewform?embedded=true" className="w-full" height="4927" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}