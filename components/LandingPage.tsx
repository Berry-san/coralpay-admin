import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#88529A] to-[#FFFFFF] w-full h-screen text-white relative overflow-hidden">
      {/* Top nav */}
      <nav className="absolute top-6 right-6 flex items-center gap-4 z-20">
        <Link
          href="/login"
          className="bg-black text-white px-6 py-3 rounded-md text-sm"
        >
          Login
        </Link>
      </nav>

      {/* Dashboard Screenshot */}
      <div className="absolute -bottom-40 w-full flex justify-center z-0">
        <Image
          src="/images/dashboardImage.png" // Update with actual path
          alt="Dashboard Preview"
          width={1000}
          height={600}
          className="rounded-t-xl w-[90vw] shadow-2xl"
        />
      </div>
    </div>
  );
};

export default LandingPage;
