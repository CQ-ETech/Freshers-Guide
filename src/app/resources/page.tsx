import Link from "next/link";
import GoldParticles from "../../components/GoldParticles";

export default function Resources() {
  return (
    <div className="min-h-[250px] bg-[#181818] text-[#FFF8E4] py-12 px-6 relative">
      {/* Background elements */}
      <div className="fixed inset-0 bg-[url('/pexels-pixabay-235992.jpg')] opacity-5 bg-cover bg-center pointer-events-none z-[1]"></div>
      <div className="fixed inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/50 to-[#181818] pointer-events-none z-[1]"></div>

      {/* Gold particles background */}
      <GoldParticles />
      <div className="min-h-screen flex flex-col items-center justify-center text-[#FFF8E4] px-4 relative z-[3]">
        <h1 className="text-4xl font-bold mb-6 text-[#FFBB00]">📚 Resources</h1>
        <p className="text-lg text-center max-w-xl mb-6">
          Here you'll find a curated sheet of all useful resources across all
          profiles. Bookmark it and refer to it regularly.
        </p>
        {/* Resources Table */}
        <div className="overflow-x-auto w-full max-w-2xl mb-8">
          <table className="min-w-full border border-[#FFBB00] rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-[#FFBB00] text-[#181818]">
                <th className="py-2 px-4 text-left">Profile</th>
                <th className="py-2 px-4 text-left">Module</th>
                <th className="py-2 px-4 text-left">Link</th>
              </tr>
            </thead>
            <tbody className="bg-[#232323]">
              <tr>
                <td className="py-2 px-4 border-b border-[#FFBB00]/30">
                  Non-Tech
                </td>

                <td>
                  <tr>
                    <td className="py-2 px-4 border-b border-[#FFBB00]/30">
                      Finance
                    </td>
                    <td className="py-2 px-4 border-b border-[#FFBB00]/30">
                      <a
                        href="https://drive.google.com/folderview?id=1WoGx7oPXahvE76faj2uq5vygeeRGtyus"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FFD600] hover:underline"
                      >
                        Google Drive
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-[#FFBB00]/30">
                      Finance
                    </td>
                    <td className="py-2 px-4 border-b border-[#FFBB00]/30">
                      <a
                        href="https://drive.google.com/drive/folders/18WEe443J2d-OyPiwQkt29KwKj9gF1T3A?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FFD600] hover:underline"
                      >
                        Google Drive
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-[#FFBB00]/30">
                      Consulting
                    </td>
                    <td className="py-2 px-4 border-b border-[#FFBB00]/30">
                      <a
                        href="https://drive.google.com/drive/mobile/folders/1NLV_Db_SBpjleFt2vmlpmjst7gq9dYsB?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FFD600] hover:underline"
                      >
                        Google Drive
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-[#FFBB00]/30">
                      Zerodha Varsity
                    </td>
                    <td className="py-2 px-4 border-b border-[#FFBB00]/30">
                      <a
                        href="https://drive.google.com/folderview?id=1_jOIFqHc7B4iFhjsxtIkJSbyGUWWWnvq"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FFD600] hover:underline"
                      >
                        Google Drive
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-[#FFBB00]/30">
                      CFA L1 Dec'17 Mind Maps
                    </td>
                    <td className="py-2 px-4 border-b border-[#FFBB00]/30">
                      <a
                        href="http://www.mediafire.com/file/zbbw0cqvc8d5wn5/FREE_CFA_MIND_MAPS_LEVEL_1-_2017.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FFD600] hover:underline"
                      >
                        Mediafire PDF
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-[#FFBB00]/30">
                      FRM L1 GARP
                    </td>
                    <td className="py-2 px-4 border-b border-[#FFBB00]/30">
                      <a
                        href="https://drive.google.com/open?id=1JRtpT2ivEeCSp7lF0wRRJjhyZdGd6XEq"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FFD600] hover:underline"
                      >
                        Google Drive
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-[#FFBB00]/30">
                      Consulting Fundae
                    </td>
                    <td className="py-2 px-4 border-b border-[#FFBB00]/30">
                      <a
                        href="https://drive.google.com/file/d/1oVSuqyKMbRwQDRepD-CaxQ63nbBDVv_M/view?usp=drivesdk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FFD600] hover:underline"
                      >
                        Google Drive
                      </a>
                    </td>
                  </tr>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-[#FFBB00]/30">Tech</td>
                <td>
                  <tr>
                    <td className="py-2 px-4 border-b border-[#FFBB00]/30">
                      Investopedia
                    </td>

                    <td className="py-2 px-4 border-b border-[#FFBB00]/30">
                      <a
                        href="https://drive.google.com/open?id=1aYZmvtHI7GWk124gQrE4Mp07soYJdS6Y"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FFD600] hover:underline"
                      >
                        Google Drive
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-[#FFBB00]/30">
                      NLP with Deep Learning
                    </td>
                    <td className="py-2 px-4 border-b border-[#FFBB00]/30">
                      <a
                        href="https://www.youtube.com/watch?v=DzpHeXVSC5I&list=PLoROMvodv4rOaMFbaqxPDoLWjDaRAdP9D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FFD600] hover:underline"
                      >
                        Youtube Playlist
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-[#FFBB00]/30">
                      Machine Learning Course
                    </td>
                    <td className="py-2 px-4 border-b border-[#FFBB00]/30">
                      <a
                        href="https://www.youtube.com/watch?v=jGwO_UgTS7I&list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FFD600] hover:underline"
                      >
                        Youtube Playlist
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-2 px-4 border-b border-[#FFBB00]/30">
                      Deep Generative Models
                    </td>
                    <td className="py-2 px-4 border-b border-[#FFBB00]/30">
                      <a
                        href="https://docs.google.com/document/d/163lUL1Q0c7ai_5lb8MSDihIU8-BlUkZjD5bH3LjMvrY/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FFD600] hover:underline"
                      >
                        Youtube Playlist
                      </a>
                    </td>
                  </tr>
                </td>
              </tr>

              <tr>
                <td className="py-2 px-4 border-b border-[#FFBB00]/30">
                  Miscellaneous
                </td>
                <td>
                  <tr>
                    <td className="py-2 px-4 border-b border-[#FFBB00]/30">
                      Investopedia
                    </td>

                    <td className="py-2 px-4 border-b border-[#FFBB00]/30">
                      <a
                        href="https://drive.google.com/open?id=1aYZmvtHI7GWk124gQrE4Mp07soYJdS6Y"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FFD600] hover:underline"
                      >
                        Google Drive
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-[#FFBB00]/30">
                      Guesstimates
                    </td>
                    <td className="py-2 px-4 border-b border-[#FFBB00]/30">
                      <a
                        href="https://drive.google.com/file/d/1BEjrfPaR7iYB_jubtaFixibX_AfqaFu1/view?usp=drivesdk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FFD600] hover:underline"
                      >
                        Google Drive
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-[#FFBB00]/30">
                      UPSC
                    </td>
                    <td className="py-2 px-4 border-b border-[#FFBB00]/30">
                      <a
                        href="https://docs.google.com/document/d/163lUL1Q0c7ai_5lb8MSDihIU8-BlUkZjD5bH3LjMvrY/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FFD600] hover:underline"
                      >
                        Google Doc
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-[#FFBB00]/30">
                      Virtual Stock Markets
                    </td>
                    <td className="py-2 px-4 border-b border-[#FFBB00]/30">
                      <a
                        href="https://drive.google.com/file/d/1-kFJK4NhE0IITkEQGLZhkd2s6cWHLnvr/view?usp=drivesdk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FFD600] hover:underline"
                      >
                        Google Drive
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-2 px-4 border-b border-[#FFBB00]/30">
                      KGP Life Fundae
                    </td>
                    <td className="py-2 px-4 border-b border-[#FFBB00]/30">
                      <a
                        href="https://drive.google.com/file/d/1kBlD7nzxGPMzzHP90bFhnTmnKHmdVo5M/view?usp=drivesdk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FFD600] hover:underline"
                      >
                        Google Drive
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-[#FFBB00]/30">
                      Resources by Magicmeets
                    </td>
                    <td className="py-2 px-4 border-b border-[#FFBB00]/30">
                      <a
                        href="https://drive.google.com/folderview?id=11Pp9SWpVUUNKHCR0nGGoqiossLyli3Dm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FFD600] hover:underline"
                      >
                        Google Drive
                      </a>
                    </td>
                  </tr>
                </td>
              </tr>
            </tbody>
          </table>
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
