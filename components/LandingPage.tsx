import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#88529A] to-[#FFFFFF] w-full h-screen">
      <div className="grid place-content-center h-full w-full">
        <Image
          src={"/images/coralpayLogo.png"}
          alt="Landing Page"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default LandingPage;
