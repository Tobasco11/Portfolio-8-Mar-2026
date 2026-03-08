// app/page.tsx  ✅ UPDATED (more detailed + added achievement)
import Nav from "@/components/nav";
import { Page, Reveal, Hover } from "@/components/motion";
import Certificates from "@/components/certificates";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  Trophy,
  Wrench,
} from "lucide-react";

const skills = [
  "MBAL History Matching",
  "Reservoir Performance Prediction",
  "Muskat Method",
  "Landmark (Compass/StressCheck/CasingSeat/CasingWear/WellPlan)",
  "Techlog Interpretation",
  "Well Planning",
  "Casing Design Concepts",
  "Process Engineering Exposure (P&IDs, Utilities)",
  "Refining Exposure (Distillation Towers, Heat Exchangers)",
  "Excel Engineering Sheets",
];

export default function Home() {
  return (
    <>
      <Nav />
      <Page>
        <div className="container">
          {/* HERO */}
          <section className="hero">
            <Reveal>
              <p className="kicker">Portfolio</p>

              <div className="heroRow">
                <div className="avatarWrap">
                  <Image
                    src="/profile.jpg"
                    alt="Ahmed M. Othman"
                    width={110}
                    height={110}
                    priority
                    className="avatar"
                  />
                </div>

                <div>
                  <h1 className="h1">Ahmed M. Othman</h1>
                  <p className="sub">
                    Petroleum Engineering Student | Reservoir & Well Planning | SPE Vice President
                  </p>

                  <div className="row" style={{ marginTop: 10 }}>
                    <span className="tag">
                      <MapPin size={14} style={{ marginRight: 6 }} />
                      Cairo, Egypt
                    </span>
                    <span className="tag">
                      <GraduationCap size={14} style={{ marginRight: 6 }} />
                      Cairo University • Expected 2026
                    </span>
                  </div>
                </div>
              </div>

              <div className="row">
                <Hover>
                  <Link className="btn btnPrimary" href="/projects">
                    View Projects <ArrowRight size={18} />
                  </Link>
                </Hover>

                <Hover>
                  <a className="btn" href="/cv.pdf" target="_blank" rel="noreferrer">
                    View CV <ArrowRight size={18} />
                  </a>
                </Hover>

                <Hover>
                  <a className="btn" href="/cv.pdf" download>
                    Download CV <Download size={18} />
                  </a>
                </Hover>

                <Hover>
                  <a className="btn" href="#contact">
                    Contact <ArrowRight size={18} />
                  </a>
                </Hover>
              </div>
            </Reveal>
          </section>

          <div className="sep" />

          {/* ABOUT + KEY FOCUS */}
          <section className="grid grid2">
            <Reveal>
              <div className="card">
                <p className="kicker">About</p>
                <h2 className="h2">Reservoir-focused builder with practical tools + competitions</h2>
                <p className="p">
                  Senior Petroleum Engineering student at Cairo University (Expected 2026) with hands-on
                  experience across reservoir workflows and well planning. I contributed to building{" "}
                  <b>PetroCairo (MuskatPro)</b>, a reservoir performance prediction tool based on the
                  Muskat method, and delivered a real-case EOR project on polymer flooding (Pelican Lake &
                  Mooney Bluesky).
                </p>

                <div className="tagRow">
                  <span className="tag">Reservoir Engineering</span>
                  <span className="tag">Well Planning</span>
                  <span className="tag">Petrophysics (Techlog)</span>
                  <span className="tag">Process Exposure</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="card">
                <p className="kicker">Focus</p>
                <h2 className="h2">What I work on</h2>
                <div className="grid" style={{ gap: 10, marginTop: 10 }}>
                  <div className="card" style={{ padding: 12 }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <Trophy size={18} />
                      <div>
                        <div style={{ fontWeight: 800 }}>Competitions & Technical Delivery</div>
                        <div className="small">EOR workflows • presentation-ready results</div>
                      </div>
                    </div>
                  </div>

                  <div className="card" style={{ padding: 12 }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <Wrench size={18} />
                      <div>
                        <div style={{ fontWeight: 800 }}>Engineering Tools</div>
                        <div className="small">Automating workflows • clear outputs • clean UI</div>
                      </div>
                    </div>
                  </div>

                  <div className="card" style={{ padding: 12 }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <Briefcase size={18} />
                      <div>
                        <div style={{ fontWeight: 800 }}>Internship Experience</div>
                        <div className="small">Reservoir • Process • Refining exposure</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          <div className="sep" />

          {/* ACHIEVEMENTS */}
          <section>
            <Reveal>
              <div className="card">
                <p className="kicker">Achievements</p>
                <h2 className="h2">Highlights & Recognition</h2>
                <div className="grid grid2" style={{ marginTop: 12 }}>
                  <div className="card">
                    <p className="kicker">Feb 2026</p>
                    <div style={{ fontWeight: 900, marginBottom: 6 }}>
                      1st Place (Reservoir Teams) — PetroCamp
                    </div>
                    <p className="p">
                      Polymer flooding in high-permeability reservoir (Pelican Lake & Mooney Bluesky),
                      real-case workflow + recommendations (including ASP path).
                    </p>
                  </div>

                  <div className="card">
                    <p className="kicker">Oct 2025</p>
                    <div style={{ fontWeight: 900, marginBottom: 6 }}>
                      2nd Place — Reservoir & Well Planning (OPA Energy Internship)
                    </div>
                    <p className="p">
                      Well planning + MBAL history matching deliverables with strong technical performance
                      across the internship.
                    </p>
                    <div className="tagRow">
                      <span className="tag">Best Member of the Team</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          <div className="sep" />

          {/* SKILLS */}
          <section>
            <Reveal>
              <div className="card">
                <p className="kicker">Skills</p>
                <h2 className="h2">Tools & Technical Areas</h2>
                <div className="tagRow">
                  {skills.map((s) => (
                    <span className="tag" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>

          <div className="sep" />

          {/* CERTIFICATES */}
          <section>
            <Reveal>
              <Certificates />
            </Reveal>
          </section>

          <div className="sep" />

          {/* CONTACT */}
          <section id="contact">
            <Reveal>
              <div className="card">
                <p className="kicker">Contact</p>
                <h2 className="h2">Let’s connect</h2>

                <div className="row">
                  <a className="btn btnPrimary" href="mailto:walahmedothman2002@gmail.com">
                    <Mail size={18} /> Email
                  </a>

                  <a
                    className="btn"
                    href="https://www.linkedin.com/in/ahmed-othman-a31904284"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ArrowRight size={18} /> LinkedIn
                  </a>

                  <a className="btn" href="https://wa.me/201093042654" target="_blank" rel="noreferrer">
                    <Phone size={18} /> WhatsApp
                  </a>
                </div>

                <p className="small" style={{ marginTop: 10 }}>
                  Cairo, Egypt • Open to internships and project opportunities.
                </p>
              </div>
            </Reveal>
          </section>

          <footer className="footer">
            <p className="small">© {new Date().getFullYear()} Ahmed M. Othman</p>
          </footer>
        </div>
      </Page>
    </>
  );
}