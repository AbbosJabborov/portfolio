import React, { useState, useEffect } from "react";
import {
  ExternalLink,
  Github,
  Mail,
  Gamepad2,
  Code2,
  Zap,
  Play,
} from "lucide-react";

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "Don't Touch My Dacha",
      status: "MVP-Ready",
      description:
        "Russian culture simulator with physics-based gameplay. Responsible for UI and gameplay programming in a team of 6.",
      tags: ["C#", "Gameplay", "UI"],
      link: "https://tryvoxstudio.com",
      mediaType: "video", // "image", "video", or "gif"
      media: "https://www.youtube.com/embed/VIDEO_ID_HERE", // Replace with actual YouTube embed URL
      placeholder: "🏚️",
    },
    {
      title: "Co-Op Tetris",
      status: "Published",
      description:
        "Unique multiplayer twist on classic Tetris with cooperative mechanics. Central scale maintains balance between two players.",
      tags: ["C#", "Multiplayer", "Game Mechanics"],
      link: "https://itch.io",
      mediaType: "image",
      media:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23344e41' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='%23dad7cd' text-anchor='middle' dominant-baseline='middle' font-family='monospace' font-weight='bold'%3ECo-Op Tetris%3C/text%3E%3C/svg%3E",
      placeholder: "🎮",
    },
    {
      title: "Wire Rush",
      status: "Published",
      description:
        "Hyper-casual puzzle game with connect-dot logic. Published on Play Store with Line Renderer and Scriptable Objects.",
      tags: ["C#", "Puzzle", "Mobile"],
      link: "https://play.google.com",
      mediaType: "image",
      media:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%233a5a40' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='%23dad7cd' text-anchor='middle' dominant-baseline='middle' font-family='monospace' font-weight='bold'%3EWire Rush%3C/text%3E%3C/svg%3E",
      placeholder: "⚡",
    },
    {
      title: "You Are Not Alone",
      status: "Game Jam Winner",
      description:
        "2.5D game created in 48 hours for GameFest 2025. 2nd place from 24 submissions. Won 10M UZS and a laptop.",
      tags: ["GameJam", "2.5D", "Design"],
      link: "https://itch.io",
      mediaType: "image",
      media:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23588157' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='40' fill='%23dad7cd' text-anchor='middle' dominant-baseline='middle' font-family='monospace' font-weight='bold'%3E🏆 You Are Not Alone%3C/text%3E%3C/svg%3E",
      placeholder: "🏆",
    },
    {
      title: "Desire Lines",
      status: "Early Prototype",
      description:
        "PSX-style taxi driving game with low-res dithering, color quantization, and world-integrated UI. Baked and mixed lighting.",
      tags: ["PSX Aesthetic", "UI Design", "Lighting"],
      link: "https://tontostudio.com",
      mediaType: "video",
      media: "https://www.youtube.com/embed/VIDEO_ID_HERE", // Replace with actual YouTube embed URL
      placeholder: "🚕",
    },
    {
      title: "Snakey Bakey",
      status: "Stopped",
      description:
        "Mobile puzzle game with spline-based character. Level management via Scriptable Objects with smooth DoTween animations.",
      tags: ["Spline", "Animation", "Puzzle"],
      link: null,
      mediaType: "image",
      media:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23a3b18a' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='%23344e41' text-anchor='middle' dominant-baseline='middle' font-family='monospace' font-weight='bold'%3ESnakey Bakey%3C/text%3E%3C/svg%3E",
      placeholder: "🐍",
    },
  ];

  const skills = [
    {
      category: "Programming",
      items: [
        "C#",
        "Unity",
        "Git/Git Flow",
        "Scriptable Objects",
        "FishNet",
        "VContainer",
        "UniTask",
        "DoTween",
      ],
    },
    {
      category: "Game Design",
      items: [
        "3C Game Design",
        "Gameplay Programming",
        "UX Design",
        "Rapid Prototyping",
        "Game Mechanics",
        "Level Design",
      ],
    },
    {
      category: "Soft Skills",
      items: [
        "Proactive & Self-Motivated",
        "Critical Thinking",
        "Excellent Communication",
        "Small Team Collaboration",
        "Problem Solving",
      ],
    },
  ];

  const experience = [
    {
      company: "Tonto Studio",
      role: "Remote Game Programmer",
      period: "Jun 2025 - Present",
      description:
        "Developing indie games: 2D multiplayer battle royale (mobile) and PSX-style taxi driving game (Steam).",
    },
    {
      company: "TryVox Studio",
      role: "Part-Time C# Game Programmer",
      period: "Jun 2025 - Aug 2025",
      description:
        "Team of 6 creating 'Don't Touch My Dacha', a Russian culture simulator. Responsible for UI and gameplay programming.",
    },
    {
      company: "HexForge",
      role: "Remote Game Developer",
      period: "Oct 2025 - Jan 2026",
      description:
        "Created complete UI from scratch and fixed bugs while adding features for an existing project.",
    },
    {
      company: "ITIC Games",
      role: "C# Unity Developer (Part Time)",
      period: "Dec 2024 - Jun 2025",
      description:
        "Developed 6 prototypes, published 2 games on Play Store (200+ downloads). Regular code reviews with supervisor.",
    },
  ];

  const MediaComponent = ({ project }) => {
    if (project.mediaType === "video") {
      return (
        <div
          className="relative w-full aspect-video rounded-lg overflow-hidden bg-[#344e41] group cursor-pointer"
          onClick={() => setActiveVideo(project.media)}
        >
          <iframe
            width="100%"
            height="100%"
            src={project.media}
            title={project.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="pointer-events-none"
          />
          {!project.media.includes("youtube") && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-all">
              <Play className="w-16 h-16 text-[#dad7cd] opacity-80" />
            </div>
          )}
        </div>
      );
    }

    if (project.mediaType === "gif" || project.mediaType === "image") {
      return (
        <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-[#3a5a40] group cursor-pointer">
          <img
            src={project.media}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#344e41]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      );
    }

    return null;
  };

  return (
    <div
      className="min-h-screen bg-[#344e41] text-[#dad7cd] font-sans overflow-x-hidden"
      style={{
        "--color-primary": "#dad7cd",
        "--color-secondary": "#a3b18a",
        "--color-accent": "#588157",
        "--color-dark": "#3a5a40",
        "--color-darker": "#344e41",
      }}
    >
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#a3b18a]/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#588157]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-0 w-96 h-96 bg-[#a3b18a]/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#344e41]/90 backdrop-blur-md border-b border-[#a3b18a]/30" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#a3b18a]">Abbos.dev</div>
          <div className="flex gap-6">
            <a
              href="mailto:abbosjabborov12@gmail.com"
              className="hover:text-[#a3b18a] transition-colors text-[#dad7cd]"
            >
              Contact
            </a>
            <a
              href="https://github.com"
              className="hover:text-[#a3b18a] transition-colors text-[#dad7cd]"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-black tracking-tight text-[#dad7cd]">
              Game Developer
              <br />
              <span className="text-[#a3b18a]">& Creative Programmer</span>
            </h1>
            <p className="text-xl text-[#a3b18a] max-w-2xl mx-auto leading-relaxed">
              Building immersive gameplay experiences with{" "}
              <span className="text-[#588157]">C# & Unity</span>. Passionate
              about game mechanics, UX design, and cozy indie aesthetics.
              Currently shipping games at{" "}
              <span className="text-[#588157]">Tonto Studio</span>.
            </p>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#projects"
              className="px-8 py-3 bg-[#588157] hover:bg-[#3a5a40] text-[#dad7cd] rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="https://github.com"
              className="px-8 py-3 border-2 border-[#a3b18a] text-[#a3b18a] rounded-lg font-semibold hover:bg-[#a3b18a]/10 transition-all"
            >
              GitHub Profile
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8 text-sm">
            <div className="p-4 bg-[#3a5a40]/60 rounded-lg border border-[#a3b18a]/30 backdrop-blur">
              <Gamepad2 className="w-6 h-6 mx-auto mb-2 text-[#a3b18a]" />
              <p className="font-semibold text-[#dad7cd]">10+ Projects</p>
              <p className="text-[#a3b18a] text-xs">
                Published & In Development
              </p>
            </div>
            <div className="p-4 bg-[#3a5a40]/60 rounded-lg border border-[#a3b18a]/30 backdrop-blur">
              <Code2 className="w-6 h-6 mx-auto mb-2 text-[#588157]" />
              <p className="font-semibold text-[#dad7cd]">2+ Years</p>
              <p className="text-[#a3b18a] text-xs">Professional Experience</p>
            </div>
            <div className="p-4 bg-[#3a5a40]/60 rounded-lg border border-[#a3b18a]/30 backdrop-blur">
              <Zap className="w-6 h-6 mx-auto mb-2 text-[#a3b18a]" />
              <p className="font-semibold text-[#dad7cd]">Full Stack</p>
              <p className="text-[#a3b18a] text-xs">Code, Design & Gameplay</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-[#a3b18a]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative py-20 px-6 bg-gradient-to-b from-transparent to-[#3a5a40]/30"
      >
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-bold text-[#dad7cd]">
              Featured Projects
            </h2>
            <p className="text-[#a3b18a] text-lg">
              A selection of games shipped, published, and in development
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group relative bg-[#3a5a40]/50 border border-[#a3b18a]/30 rounded-xl overflow-hidden hover:border-[#588157]/60 transition-all duration-300 hover:shadow-lg backdrop-blur"
                style={{ boxShadow: "rgba(163, 177, 138, 0.1) 0 4px 16px" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#a3b18a]/0 to-[#588157]/0 group-hover:from-[#a3b18a]/10 group-hover:to-[#588157]/10 transition-all duration-300 pointer-events-none"></div>

                {/* Media Container */}
                <div className="relative w-full aspect-video bg-[#344e41] overflow-hidden">
                  <MediaComponent project={project} />
                </div>

                {/* Content */}
                <div className="relative p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="text-4xl">{project.placeholder}</div>
                    <span className="text-xs px-3 py-1 bg-[#588157]/40 text-[#dad7cd] rounded-full border border-[#a3b18a]/40">
                      {project.status}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#dad7cd] group-hover:text-[#a3b18a] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[#a3b18a] text-sm mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-[#3a5a40]/70 text-[#a3b18a] rounded border border-[#588157]/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#a3b18a] hover:text-[#588157] transition-colors pt-4 font-semibold"
                    >
                      Learn More <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-bold text-[#dad7cd]">
              Skills & Expertise
            </h2>
            <p className="text-[#a3b18a] text-lg">
              Tools, techniques, and mindsets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-2xl font-bold text-[#a3b18a]">
                  {skillGroup.category}
                </h3>
                <div className="space-y-3">
                  {skillGroup.items.map((skill, i) => (
                    <div
                      key={i}
                      className="p-3 bg-[#3a5a40]/60 border border-[#588157]/40 rounded-lg hover:border-[#a3b18a]/60 hover:bg-[#3a5a40]/80 transition-all group cursor-default"
                    >
                      <p className="text-[#dad7cd] font-medium group-hover:text-[#a3b18a] transition-colors">
                        {skill}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-[#3a5a40]/30">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-bold text-[#dad7cd]">Experience</h2>
            <p className="text-[#a3b18a] text-lg">
              Professional journey in game development
            </p>
          </div>

          <div className="space-y-6">
            {experience.map((job, idx) => (
              <div
                key={idx}
                className="group relative bg-[#3a5a40]/50 border border-[#a3b18a]/30 rounded-xl p-6 hover:border-[#588157]/60 transition-all duration-300 hover:shadow-lg backdrop-blur"
                style={{ boxShadow: "rgba(163, 177, 138, 0.05) 0 4px 16px" }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-[#dad7cd]">
                      {job.role}
                    </h3>
                    <p className="text-[#588157] font-semibold">
                      {job.company}
                    </p>
                  </div>
                  <span className="text-sm text-[#a3b18a]">{job.period}</span>
                </div>
                <p className="text-[#a3b18a] leading-relaxed">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold text-[#dad7cd]">
              Let's Create Something
            </h2>
            <p className="text-xl text-[#a3b18a]">
              Always interested in game dev opportunities, collaboration, and
              pushing creative boundaries.
            </p>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="mailto:abbosjabborov12@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#588157] hover:bg-[#3a5a40] text-[#dad7cd] rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
            <a
              href="https://github.com"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#a3b18a] text-[#a3b18a] rounded-lg font-semibold hover:bg-[#a3b18a]/10 transition-all"
            >
              <Github className="w-5 h-5" />
              View GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-6 border-t border-[#588157]/30 bg-gradient-to-b from-transparent to-[#344e41]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-[#a3b18a] text-sm gap-4">
          <p>© 2025 Abbos Jabborov. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="https://telegram.me/your-username"
              className="hover:text-[#588157] transition-colors"
            >
              Telegram
            </a>
            <a
              href="https://github.com/your-username"
              className="hover:text-[#588157] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://itch.io/your-profile"
              className="hover:text-[#588157] transition-colors"
            >
              itch.io
            </a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap");

        * {
          font-family: "Plus Jakarta Sans", sans-serif;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
