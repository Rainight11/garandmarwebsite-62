"use client"
import { useState, useEffect } from "react"
import {
  Music,
  Play,
  Users,
  Mail,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Calendar,
  Award,
  Copy,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function GarMarRecords() {
  const [isVisible, setIsVisible] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("giarmosbusinessemail@gmail.com")
      setCopied(true)
      setTimeout(() => setCopied(false), 2000) // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy email: ", err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
            GAR & MAR
          </div>
          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-[#02ffe9] transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("music")}
              className="hover:text-[#02ffe9] transition-colors cursor-pointer"
            >
              Music
            </button>
            <button
              onClick={() => scrollToSection("artists")}
              className="hover:text-[#02ffe9] transition-colors cursor-pointer"
            >
              Artists
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-[#02ffe9] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-cyan-300/10"></div>
        <div
          className={`text-center z-10 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-[#02ffe9] via-white to-[#02ffe9] bg-[length:200%_100%] bg-clip-text text-transparent animate-[gradient_3s_ease-in-out_infinite] text-center">
            GAR & MAR
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">{"𝘙𝘦𝘷𝘪𝘷𝘪𝘯𝘨 𝘵𝘩𝘦 𝘎𝘰𝘭𝘥𝘦𝘯 𝘌𝘳𝘢 𝘰𝘧 𝘔𝘶𝘴𝘪𝘤."}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("music")}
              className="bg-[#02ffe9] text-black hover:bg-[#02ffe9]/80 transform hover:scale-105 transition-all font-bold"
            >
              <Play className="mr-2 h-5 w-5" />
              Listen Now
            </Button>
            <Button
              size="lg"
              onClick={() => scrollToSection("artists")}
              className="bg-[#02ffe9] text-black hover:bg-[#02ffe9]/80 transform hover:scale-105 transition-all font-bold"
            >
              <Users className="mr-2 h-5 w-5" />
              Meet the Artists
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#02ffe9]/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-[#02ffe9]/30 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-[#02ffe9]/10 rounded-full animate-pulse"></div>
      </section>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>

      {/* Streaming Services Section */}
      <section id="music" className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-[#02ffe9] to-white bg-clip-text text-transparent">
            STREAM NOW
          </h2>

          {/* Giarmo (GAR) */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-3xl font-bold text-[#02ffe9] text-center mb-6">GIARMO</h3>
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/artist/33SocQNqYYoSkGUIEpAah1?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
              <a
                href="https://music.apple.com/us/artist/giarmo/1695747641"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-[#FA233B] to-[#FB5C74] text-white px-6 py-3 rounded-full hover:opacity-80 transform hover:scale-105 transition-all font-bold"
              >
                <Music className="h-5 w-5" />
                Apple Music
              </a>
              <a
                href="https://music.youtube.com/channel/UCQgf8rpSAQgBjRL_hbcLLyg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#FF0000] text-white px-6 py-3 rounded-full hover:bg-[#FF0000]/80 transform hover:scale-105 transition-all font-bold"
              >
                <Youtube className="h-5 w-5" />
                YouTube Music
              </a>
            </div>
          </div>

          {/* Marquess (MAR) */}
          <div className="max-w-4xl mx-auto mb-8">
            <h3 className="text-3xl font-bold text-[#02ffe9] text-center mb-6">MARQUESS</h3>
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/artist/3G2kx56hZ1lbakUShTT0Sn?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
              <a
                href="https://music.apple.com/us/artist/marquess/1425655372"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-[#FA233B] to-[#FB5C74] text-white px-6 py-3 rounded-full hover:opacity-80 transform hover:scale-105 transition-all font-bold"
              >
                <Music className="h-5 w-5" />
                Apple Music
              </a>
              <a
                href="https://music.youtube.com/channel/UCSaTLZXVouH029hTWO0mHSA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#FF0000] text-white px-6 py-3 rounded-full hover:bg-[#FF0000]/80 transform hover:scale-105 transition-all font-bold"
              >
                <Youtube className="h-5 w-5" />
                YouTube Music
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Artists Section - Moved after streaming */}
      <section id="artists" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-[#02ffe9] to-white bg-clip-text text-transparent">
            THE ARTISTS
          </h2>

          {/* Artist 1 - GAR (Giarmo) */}
          <div className="max-w-6xl mx-auto mb-16">
            <Card className="bg-gradient-to-br from-black to-gray-900 border-[#02ffe9]/30 hover:border-[#02ffe9] transition-all duration-500 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="bg-gradient-to-br from-[#02ffe9]/10 to-black p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#02ffe9] shadow-2xl">
                        <img src="/images/giarmo-profile.jpg" alt="Giarmo" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex justify-center space-x-4">
                        <a href="https://www.instagram.com/real_giarmo/" target="_blank" rel="noopener noreferrer">
                          <Button
                            size="lg"
                            variant="ghost"
                            className="text-[#02ffe9] hover:text-white hover:bg-[#02ffe9]/20"
                          >
                            <Instagram className="h-6 w-6" />
                          </Button>
                        </a>
                        <a href="https://x.com/real_giarmo" target="_blank" rel="noopener noreferrer">
                          <Button
                            size="lg"
                            variant="ghost"
                            className="text-[#02ffe9] hover:text-white hover:bg-[#02ffe9]/20"
                          >
                            <Twitter className="h-6 w-6" />
                          </Button>
                        </a>
                        <a href="https://www.youtube.com/@Giarmo223" target="_blank" rel="noopener noreferrer">
                          <Button
                            size="lg"
                            variant="ghost"
                            className="text-[#02ffe9] hover:text-white hover:bg-[#02ffe9]/20"
                          >
                            <Youtube className="h-6 w-6" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center bg-black">
                    <h3 className="text-4xl font-bold mb-4 text-[#02ffe9]">GIARMO</h3>
                    <p className="text-xl text-white mb-6 leading-relaxed">
                      Jeremy Schweigert, known by the alias Giarmo, is a young artist and producer based in BC, Canada.
                      While primarily recognized as a rapper, he aims beyond the boundaries of the genre, experimenting
                      with diverse vocal and production styles. Giarmo is known for his high energy, creative flows, and
                      versatility.
                    </p>
                    <div className="giarmo-second-bio">
                      “Music isn’t just an expression; it’s a conversation between the heart and the universe. It’s the
                      space where silence speaks louder than words and sound can change the very air we breathe. To
                      create is to connect with something greater than yourself.” — Giarmo
                    </div>

                    <style jsx>{`
  .giarmo-second-bio {
    font-style: italic;
    color: #ccc;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
  }
`}</style>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-gray-300">
                        <MapPin className="h-5 w-5 text-[#02ffe9]" />
                        <span>Based in BC, Canada</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <Calendar className="h-5 w-5 text-[#02ffe9]" />
                        <span>Rising since 2023</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <Award className="h-5 w-5 text-[#02ffe9]" />
                        <span>Known for: High energy, creative flows, and versatility</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Button
                        onClick={() => scrollToSection("music")}
                        className="bg-[#02ffe9] text-black hover:bg-[#02ffe9]/80 font-bold"
                      >
                        <Play className="mr-2 h-4 w-4" />
                        Listen to Giarmo
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Artist 2 - MAR (Marquess) */}
          <div className="max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-black to-gray-900 border-[#02ffe9]/30 hover:border-[#02ffe9] transition-all duration-500 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 flex flex-col justify-center order-2 md:order-1 bg-black">
                    <h3 className="text-4xl font-bold mb-4 text-[#02ffe9]">MARQUESS</h3>
                    <p className="text-xl text-white mb-6 leading-relaxed">
                      Marquess, alongside Giarmo, is an artist and producer based in BC, Canada. He started strong,
                      quickly developing advanced production skills and a distinct voice. Marquess is known for
                      experimenting with unique genres and vocal styles, as well as his complex wordplay and innovative
                      musical approach.
                    </p>
                    <div className="giarmo-second-bio">
                      “The soul of music is not in the notes we play, but in the silence we embrace between them. Every
                      beat is a heartbeat, every lyric a whisper of truth, and every song a reflection of the world
                      we’re still discovering.” — Marquess
                    </div>

                    <style jsx>{`
  .giarmo-second-bio {
    font-style: italic;
    color: #ccc;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
  }
`}</style>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-gray-300">
                        <MapPin className="h-5 w-5 text-[#02ffe9]" />
                        <span>Based in BC, Canada</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <Calendar className="h-5 w-5 text-[#02ffe9]" />
                        <span>Rising since 2024</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <Award className="h-5 w-5 text-[#02ffe9]" />
                        <span>Known for: Complex wordplay and innovative musical approach</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Button
                        onClick={() => scrollToSection("music")}
                        className="bg-[#02ffe9] text-black hover:bg-[#02ffe9]/80 font-bold"
                      >
                        <Play className="mr-2 h-4 w-4" />
                        Listen to Marquess
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-[#02ffe9]/10 to-black p-8 flex items-center justify-center order-1 md:order-2">
                    <div className="text-center">
                      <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#02ffe9] shadow-2xl">
                        <img src="/images/marquess-profile.jpg" alt="Marquess" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex justify-center space-x-4">
                        <a href="https://www.instagram.com/marquess.music/" target="_blank" rel="noopener noreferrer">
                          <Button
                            size="lg"
                            variant="ghost"
                            className="text-[#02ffe9] hover:text-white hover:bg-[#02ffe9]/20"
                          >
                            <Instagram className="h-6 w-6" />
                          </Button>
                        </a>
                        <a href="https://www.youtube.com/@MarquessEpicMusic" target="_blank" rel="noopener noreferrer">
                          <Button
                            size="lg"
                            variant="ghost"
                            className="text-[#02ffe9] hover:text-white hover:bg-[#02ffe9]/20"
                          >
                            <Youtube className="h-6 w-6" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#02ffe9] to-white bg-clip-text text-transparent">
            {"NEED SOMETHING FROM US?"}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mr-auto mb-12 mt-0 border-0 px-1">
            {"Have a question? Maybe two? Or just looking to collab? We gotchu!"}
            <br />
            {"Contact us below! ↓"}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-[#02ffe9] text-black hover:bg-[#02ffe9]/80 transform hover:scale-105 transition-all"
            >
              <Mail className="mr-2 h-5 w-5" />
              giarmosbusinessemail@gmail.com
            </Button>
            <Button
              size="lg"
              onClick={copyEmailToClipboard}
              className="bg-[#02ffe9] text-black hover:bg-[#02ffe9]/80 transform hover:scale-105 transition-all"
            >
              {copied ? (
                <>
                  <Check className="mr-2 h-5 w-5" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-5 w-5" />
                  Copy Email 📎
                </>
              )}
            </Button>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/garandmarreacords/" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-[#02ffe9] text-black hover:bg-[#02ffe9]/80 transform hover:scale-105 transition-all font-bold"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.youtube.com/@GarAndMar" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-[#02ffe9] text-black hover:bg-[#02ffe9]/80 transform hover:scale-105 transition-all font-bold"
                >
                  <Youtube className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© 2024 GAR & MAR Records LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
