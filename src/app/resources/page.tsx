import Link from "next/link";
import GoldParticles from "../../components/GoldParticles";
import { link } from "fs";

const nonTechResources = [
  {
    name: "Finance",
    link: "https://drive.google.com/folderview?id=1WoGx7oPXahvE76faj2uq5vygeeRGtyus",
    linkText: "Google Drive",
  },
  {
    name: "Finance",
    link: "https://drive.google.com/drive/folders/18WEe443J2d-OyPiwQkt29KwKj9gF1T3A?usp=sharing",
    linkText: "Google Drive",
  },
  {
    name: "Consulting",
    link: "https://drive.google.com/drive/mobile/folders/1NLV_Db_SBpjleFt2vmlpmjst7gq9dYsB?usp=sharing",
    linkText: "Google Drive",
  },
  {
    name: "Zerodha Varsity",
    link: "https://drive.google.com/folderview?id=1_jOIFqHc7B4iFhjsxtIkJSbyGUWWWnvq",
    linkText: "Google Drive",
  },
  {
    name: "CFA L1 Dec'17 Mind Maps",
    link: "http://www.mediafire.com/file/zbbw0cqvc8d5wn5/FREE_CFA_MIND_MAPS_LEVEL_1-_2017.pdf",
    linkText: "Mediafire PDF",
  },
  {
    name: "FRM L1 GARP",
    link: "https://drive.google.com/open?id=1JRtpT2ivEeCSp7lF0wRRJjhyZdGd6XEq",
    linkText: "Google Drive",
  },
  {
    name: "Consulting Fundae",
    link: "https://drive.google.com/file/d/1oVSuqyKMbRwQDRepD-CaxQ63nbBDVv_M/view?usp=drivesdk",
    linkText: "Google Drive",
  },
  {
    name: "Investopedia",
    link: "https://drive.google.com/open?id=1aYZmvtHI7GWk124gQrE4Mp07soYJdS6Y",
    linkText: "Google Drive",
  },
];

const techResources = [
  {
    name: "NLP with Deep Learning",
    link: "https://www.youtube.com/watch?v=DzpHeXVSC5I&list=PLoROMvodv4rOaMFbaqxPDoLWjDaRAdP9D",
    linkText: "Youtube Playlist",
  },
  {
    name: "Machine Learning Course",
    link: "https://www.youtube.com/watch?v=jGwO_UgTS7I&list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU",
    linkText: "Youtube Playlist",
  },
  {
    name: "Deep Generative Models",
    link: "https://docs.google.com/document/d/163lUL1Q0c7ai_5lb8MSDihIU8-BlUkZjD5bH3LjMvrY/edit?usp=sharing",
    linkText: "Youtube Playlist",
  },
  {
    name: "Neural Networks",
    link: "https://www.youtube.com/playlist?list=PLblh5JKOoLUIxGDQs4LFFD--41Vzf-ME1",
    linkText: "Youtube Playlist",
  },
  {
    name: "Complete Javascript Course",
    link: "https://www.youtube.com/watch?v=EerdGm-ehJQ&list=WL&index=28",
    linkText: "Youtube Video",
  },
  {
    name: "Complete React Course (Watch upto 17 hours)",
    link: "https://www.youtube.com/watch?v=M9O5AjEFzKw&list=WL&index=27&t=62969s",
    linkText: "Youtube Video",
  },
  {
    name: "Backend Development with Node js",
    link: "https://www.youtube.com/watch?v=gxHXPmePnvo&list=WL&index=11&t=42698s",
    linkText: "Youtube Video",
  },
];

const miscellaneousResources = [
  {
    name: "Guesstimates",
    link: "https://drive.google.com/file/d/1BEjrfPaR7iYB_jubtaFixibX_AfqaFu1/view?usp=drivesdk",
    linkText: "Google Drive",
  },
  {
    name: "UPSC",
    link: "https://docs.google.com/document/d/163lUL1Q0c7ai_5lb8MSDihIU8-BlUkZjD5bH3LjMvrY/edit?usp=sharing",
    linkText: "Google Doc",
  },
  {
    name: "Virtual Stock Markets",
    link: "https://drive.google.com/file/d/1-kFJK4NhE0IITkEQGLZhkd2s6cWHLnvr/view?usp=drivesdk",
    linkText: "Google Drive",
  },
  {
    name: "KGP Life Fundae",
    link: "https://drive.google.com/file/d/1kBlD7nzxGPMzzHP90bFhnTmnKHmdVo5M/view?usp=drivesdk",
    linkText: "Google Drive",
  },
  {
    name: "Resources by Magicmeets",
    link: "https://drive.google.com/folderview?id=11Pp9SWpVUUNKHCR0nGGoqiossLyli3Dm",
    linkText: "Google Drive",
  },
];

export default function Resources() {
  return (
    <div className="min-h-[250px] bg-[#181818] text-[#FFF8E4] py-12 px-6 relative">
      {/* Background elements */}
      <div className="fixed inset-0 bg-[url('/pexels-pixabay-235992.jpg')] opacity-5 bg-cover bg-center pointer-events-none z-[1]"></div>
      <div className="fixed inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/50 to-[#181818] pointer-events-none z-[1]"></div>

      {/* Gold particles background */}
      <GoldParticles />
      <div className="min-h-screen flex flex-col items-center justify-center text-[#FFF8E4] px-4 relative z-[3]">
        <h1 className="text-4xl font-bold mb-6 text-[#FFBB00]">Resources</h1>
        <p className="text-lg text-center max-w-xl mb-6">
          Here you'll find a curated sheet of all useful resources across all
          profiles. Bookmark it and refer to it regularly.
        </p>
        {/* Resources Table */}
        <div className="w-full max-w-7xl px-2 md:px-4 mx-auto">
          <div className="grid grid-cols-[65%_35%] md:grid-cols-[30%_50%_20%] w-full rounded-xl overflow-hidden border border-yellow-400 bg-[#1a1a1a]/60 backdrop-blur-md shadow-xl">
            {/* Profile Column */}
            <div className="hidden md:block border-r md:border-r-[1.5px] border-yellow-400">
              <h2 className="p-4 text-sm md:text-base bg-yellow-400 font-semibold text-[#181818] rounded-tl-xl">
                Profile
              </h2>
              <h2 className="h-80 p-4 text-sm md:text-base flex flex-col justify-center border-b border-yellow-400/60">
                Non Tech
              </h2>
              <h2 className="h-[280px] p-4 text-sm md:text-base flex flex-col justify-center border-b border-yellow-400/60">
                Tech
              </h2>
              <h2 className="h-[200px] p-4 text-sm md:text-base flex flex-col justify-center border-b border-yellow-400/60">
                Miscellaneous
              </h2>
            </div>

            {/* Topic Column */}
            <div className="border-r md:border-r-[1.5px] border-yellow-400">
              <h2 className="p-4 text-sm md:text-base bg-yellow-400 font-semibold text-[#181818]">
                Topic
              </h2>
              {[
                ...nonTechResources,
                ...techResources,
                ...miscellaneousResources,
              ].map((resource, index) => (
                <div
                  key={index}
                  className="p-4 h-10 text-sm md:text-base border-b border-yellow-400/40 whitespace-nowrap overflow-hidden text-ellipsis hover:bg-yellow-100/5 transition-colors duration-200"
                >
                  {resource.name}
                </div>
              ))}
            </div>

            {/* Link Column */}
            <div>
              <h2 className="p-4 text-sm md:text-base bg-yellow-400 font-semibold text-[#181818] rounded-tr-xl">
                Link
              </h2>
              {[
                ...nonTechResources,
                ...techResources,
                ...miscellaneousResources,
              ].map((resource, index) => (
                <div
                  key={index}
                  className="p-4 h-10 text-sm md:text-base border-b border-yellow-400/40 whitespace-nowrap overflow-hidden text-ellipsis hover:bg-yellow-100/5 transition-colors duration-200"
                >
                  <Link
                    href={resource.link}
                    target="_blank"
                    className="text-yellow-300 hover:text-yellow-400 hover:underline transition-all duration-200"
                  >
                    {resource.linkText}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Link href="/" className="text-[#FFBB00] hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
