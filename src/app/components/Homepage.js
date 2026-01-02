"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Homepage = () => {
  
  return (
  <>
        <section
      id="homepage"
      className="text-white lg:pt-32 pt-20 dark:bg-background"
    >
      <div
        id="home-container"
        className="lg:w-2/3 md:w-4/5 w-full flex flex-col items-center mx-auto px-6"
      >
        {/* Hi I'm */}
        <p className="font-mont text-sm tracking-[0.35em] text-[#DADADA]/70">
          HI, I’M
        </p>

        {/* Name */}
        <div className="flex flex-row mt-6 tracking-[0.22em]">
          <h1 className="font-mont lg:text-5xl md:text-3xl text-2xl text-[#C86A2A] uppercase">
            Cameron
          </h1>
          <h1 className="font-mont lg:text-5xl md:text-3xl text-2xl ml-3 text-[#EDEDED] uppercase">
            Hilliard
          </h1>
        </div>

        {/* Role */}
        <p className="font-mont text-[#DADADA] mx-auto lg:text-lg text-base mt-6 text-center">
          IT Professional · Problem Solving
        </p>

        {/* Buttons */}
        <div className="flex mx-auto mt-10 gap-4">
          {/* Secondary */}
          <Link
            href="/Cameron_Hilliard_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl px-6 py-3 font-mont text-sm tracking-wide
                      text-[#EDEDED] border border-[#C86A2A]/40
                      hover:bg-[#C86A2A]/10 transition"
          >
            View Resume
          </Link>

          {/* Primary */}
          <Link
            href="#contactpage"
            className="rounded-xl px-6 py-3 font-mont text-sm tracking-wide
                      bg-[#C86A2A] text-[#0F0F10]
                      hover:opacity-90 transition"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>


    <section
  id="aboutpage"
  className="mx-auto lg:w-2/3 md:w-4/5 w-full px-6 py-16 text-[#EDEDED]"
>
  {/* subtle divider like the mock */}
  <div className="mx-auto mb-14 max-w-3xl">
    <div className="h-px w-full bg-[#EDEDED]/10" />
  </div>

  {/* heading */}
  <div className="text-center">
    <h2 className="font-mont text-2xl sm:text-3xl tracking-wide font-medium text-[#EDEDED]">
      Professional Summary
    </h2>

    {/* optional tiny accent line (very subtle) */}
    <div className="mx-auto mt-5 h-px w-16 bg-[#C86A2A]/40" />
  </div>

  {/* body */}
  <p className="mt-8 mx-auto max-w-2xl text-center font-mont text-base sm:text-lg leading-relaxed dark:text-[#DADADA] text-accent">
    I’m an IT professional with experience supporting users and systems in structured environments. I focus on troubleshooting, documentation, and clear communication to help technology work reliably for the people who depend on it. I enjoy solving practical problems and continuously developing my skills across IT operations and systems.
  </p>
</section>


  <section
  id="skillspage"
  className="mx-auto lg:w-2/3 md:w-4/5 w-full px-6 py-16 text-[#EDEDED]"
>
  {/* divider */}
  <div className="mx-auto mb-14 max-w-3xl">
    <div className="h-px w-full bg-[#EDEDED]/10" />
  </div>

  <div className="text-center">
    <h2 className="font-mont text-2xl sm:text-3xl tracking-wide font-medium text-accent dark:text-[#EDEDED]">
      Areas of Focus
    </h2>
    <p className="mt-4 mx-auto font-mont max-w-2xl text-accent dark:text-[#DADADA] leading-relaxed">
      Practical IT skills centered on reliability, clarity, and people-first support.
    </p>
  </div>

  {/* capability cards */}
  <div className="mt-10 grid gap-4 sm:grid-cols-2">
    {[
      {
        title: "IT Support & Troubleshooting",
        desc: "Professional communication, thoughtful diagnosis, and issue resolution.",
      },
      {
        title: "Systems & Account Management",
        desc: "User access, device readiness, and operational consistency.",
      },
      {
        title: "Documentation & Process",
        desc: "Clear documentation, repeatable workflows, and better handoffs.",
      },
      {
        title: "Automation Mindset",
        desc: "Reducing repetitive work through scripts, tooling, and iteration.",
      },
    ].map((item) => (
      <div
        key={item.title}
        className="rounded-2xl border border-[#EDEDED]/10 dark:bg-background bg-extra p-6"
      >
        <div className="flex items-start gap-3">
          <span className="mt-2 h-2 w-2 rounded-full bg-[#C86A2A]" />
          <div>
            <h3 className="font-mont text-lg font-medium tracking-wide text-accent dark:text-[#EDEDED]">
              {item.title}
            </h3>
            <p className="mt-2 font-mont text-sm leading-relaxed text-[#DADADA]">
              {item.desc}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* tools (small + optional) */}
  <div className="mt-10 text-center">
    <p className="font-mont text-xs tracking-[0.35em] text-[#DADADA]/60">
      TOOLS I USE
    </p>
    <p className="mt-3 font-mont text-sm text-[#DADADA]">
      Windows · Linux · Microsoft 365 · Networking · Python · Bash
    </p>
  </div>
</section>


      <section
  id="certspage"
  className="mx-auto lg:w-2/3 md:w-4/5 w-full px-6 py-16 text-[#EDEDED]"
>
  {/* divider */}
  <div className="mx-auto mb-14 max-w-3xl">
    <div className="h-px w-full bg-[#EDEDED]/10" />
  </div>

  {/* header */}
  <div className="text-center">
    <h2 className="font-mont text-2xl sm:text-3xl tracking-wide font-medium text-[#EDEDED]">
      Certifications
    </h2>
    <p className="mt-4 mx-auto max-w-2xl font-mont text-[#DADADA] leading-relaxed">
      Professional certifications that support service quality, clarity, and reliability.
    </p>
  </div>

  {/* certificate card */}
  <div className="mx-auto mt-10 max-w-xl">
    <a
      href="https://badges.peoplecert.org/Badge/en/18F150AB-BD34-4D43-8F2D-F285A5F656A4"
      target="_blank"
      rel="noreferrer"
      className="
        group block
        rounded-2xl border border-[#EDEDED]/10 bg-[#0F0F10]
        p-6 transition
        hover:border-[#C86A2A]/30 hover:bg-[#EDEDED]/5
      "
      title="ITIL 4 Foundation Certificate in IT Service Management"
    >
      <div className="flex items-center gap-6">
        <div className="shrink-0">
          <Image
            src="https://badges.peoplecert.org/Badges/Template/en/180/ec721fda-bb43-434e-8ef8-e99f8c748ee4"
            width={110}
            height={110}
            alt="ITIL Foundation Certificate in IT Service Management"
            className="rounded-xl"
          />
        </div>

        <div className="min-w-0">
          <p className="font-mont text-xs tracking-[0.35em] text-[#DADADA]/60">
            CERTIFICATE
          </p>

          <h3 className="mt-2 font-mont text-lg font-medium tracking-wide text-[#EDEDED]">
            ITIL® 4 Foundation
          </h3>

          <p className="mt-2 font-mont text-sm leading-relaxed text-[#DADADA]">
            IT Service Management fundamentals focused on reliable delivery and continual
            improvement.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 font-mont text-sm text-[#DADADA] group-hover:text-[#EDEDED] transition">
            View badge <span className="text-[#C86A2A]">↗</span>
          </div>
        </div>
      </div>
    </a>
  </div>
</section>

{/* projectspage  */}

<section
  id="contactpage"
  className="mx-auto lg:w-2/3 md:w-4/5 w-full px-6 py-16 text-[#EDEDED]"
>
  {/* divider */}
  <div className="mx-auto mb-14 max-w-3xl">
    <div className="h-px w-full bg-[#EDEDED]/10" />
  </div>

  {/* header */}
  <div className="text-center">
    <h2 className="font-mont text-2xl sm:text-3xl tracking-wide font-medium text-[#EDEDED]">
      Get in Touch
    </h2>
    <p className="mt-4 mx-auto max-w-2xl font-mont text-[#DADADA] leading-relaxed">
      The easiest way to reach me is email or LinkedIn.
    </p>
  </div>

  {/* contact links */}
  <div className="mx-auto mt-10 max-w-xl space-y-4">
    <Link
      href="mailto:cameronhilliard@outlook.com"
      className="
        group flex items-center justify-between
        rounded-2xl border border-[#EDEDED]/10 bg-[#0F0F10]
        px-6 py-4 transition
        hover:border-[#C86A2A]/30 hover:bg-[#EDEDED]/5
      "
    >
      <div className="text-left">
        <p className="font-mont text-xs tracking-[0.35em] text-[#DADADA]/60">
          EMAIL
        </p>
        <p className="mt-1 font-mont text-sm sm:text-base text-[#EDEDED]">
          cameronhilliard@outlook.com
        </p>
      </div>

      <span className="font-mont text-sm text-[#DADADA] group-hover:text-[#EDEDED] transition">
        →
      </span>
    </Link>

    <Link
      href="https://www.linkedin.com/in/camhilliard"
      className="
        group flex items-center justify-between
        rounded-2xl border border-[#EDEDED]/10 bg-[#0F0F10]
        px-6 py-4 transition
        hover:border-[#C86A2A]/30 hover:bg-[#EDEDED]/5
      "
      target="_blank"
      rel="noreferrer"
    >
      <div className="text-left">
        <p className="font-mont text-xs tracking-[0.35em] text-[#DADADA]/60">
          LINKEDIN
        </p>
        <p className="mt-1 font-mont text-sm sm:text-base text-[#EDEDED]">
          linkedin.com/in/camhilliard
        </p>
      </div>

      <span className="font-mont text-sm text-[#DADADA] group-hover:text-[#EDEDED] transition">
        ↗
      </span>
    </Link>
  </div>
</section>

   
    </>
  )
}

export default Homepage