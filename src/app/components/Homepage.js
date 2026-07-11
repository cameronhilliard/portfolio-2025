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
        Enterprise Systems{" "}
        <span className="text-[#C86A2A]"> ·</span>{" "}
        IT Operations
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

 
    <div className="mx-auto mt-5 h-px w-16 bg-[#C86A2A]/40" />
  </div>

  {/* body */}
  <p className="mt-8 mx-auto max-w-2xl text-center font-mont text-base sm:text-lg leading-relaxed dark:text-[#DADADA] text-accent">
   I’m an IT professional with enterprise systems experience supporting Nova Scotia Health’s province-wide Oracle Health implementation. My work involves incident triage, application and workflow troubleshooting, escalation management, documentation, and service operations within a regulated environment. I’m continuing to develop my skills across infrastructure, cloud, identity and access management, and automation.
  </p>
</section>


<section
  id="experiencepage"
  className="mx-auto lg:w-2/3 md:w-4/5 w-full px-6 py-20 text-[#EDEDED] font-mont"
>
  <div className="mx-auto mb-14 max-w-3xl">
    <div className="h-px w-full bg-[#EDEDED]/10" />
  </div>

  <div className="text-center">
    <h2 className="font-mont text-2xl sm:text-3xl tracking-wide font-medium">
      Professional Experience
    </h2>

    <div className="mx-auto mt-5 h-px w-16 bg-[#C86A2A]/40" />

    <p className="mt-8 mx-auto max-w-xl text-center font-mont text-base leading-relaxed">
      Experience supporting enterprise healthcare systems, IT operations,
      incident management, and technical service delivery.
    </p>
  </div>

  <div className="relative mt-16 mx-auto max-w-4xl">
  {/* Vertical timeline line */}
 {/* Job 1 */}
<div className="relative pb-14 pl-10 sm:pl-12">
  {/* Current timeline dot */}
  <div className="absolute left-0 top-2 z-10 h-4 w-4 rounded-full border-2 border-[#C86A2A] bg-background" />

  {/* Connector to next job */}
  <div className="absolute left-[7px] top-6 bottom-0 w-[2px] bg-white/40 sm:left-[8px]" />

  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
    <div>
      <h3 className="font-mont text-lg font-medium text-[#EDEDED] sm:text-xl">
        ATE Support Consultant
      </h3>

      <p className="mt-1 font-mont text-sm text-[#C86A2A] sm:text-base">
        Nova Scotia Health
      </p>
    </div>

    <p className="shrink-0 font-mont text-sm text-[#A5A5A5]">
      August 2025 – Present
    </p>
  </div>

  <p className="mt-5 max-w-3xl font-mont text-sm leading-7 text-[#DADADA] sm:text-base">
    Supporting Nova Scotia Health&apos;s province-wide Oracle Health
    implementation through virtual go-live assistance, incident triage,
    application troubleshooting, escalation management, and technical
    support across multiple facilities.
  </p>
</div>

{/* Job 2 */}
<div className="relative pb-14 pl-10 sm:pl-12">
  {/* Filled timeline dot */}
  <div className="absolute left-0 top-2 z-10 h-4 w-4 rounded-full bg-[#C86A2A] ring-4 ring-background sm:h-[18px] sm:w-[18px]" />

  {/* Connector to next job */}
  <div className="absolute left-[7px] top-6 bottom-0 w-[2px] bg-white/40 sm:left-[8px]" />

  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
    <div>
      <h3 className="font-mont text-lg font-medium text-[#EDEDED] sm:text-xl">
        Information Technology Intern
      </h3>

      <p className="mt-1 font-mont text-sm text-[#C86A2A] sm:text-base">
        Resolute Health
      </p>
    </div>

    <p className="shrink-0 font-mont text-sm text-[#A5A5A5]">
      May 2024 – August 2024
    </p>
  </div>

  <p className="mt-5 max-w-3xl font-mont text-sm leading-7 text-[#DADADA] sm:text-base">
    Supported internal IT operations through service request management,
    technical documentation, onboarding resources, and operational process
    improvements.
  </p>
</div>

{/* Job 3 */}
<div className="relative pl-10 sm:pl-12">
  {/* Final dot — no connector */}
  <div className="absolute left-0 top-2 z-10 h-4 w-4 rounded-full bg-[#C86A2A] ring-4 ring-background sm:h-[18px] sm:w-[18px]" />

  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
    <div>
      <h3 className="font-mont text-lg font-medium text-[#EDEDED] sm:text-xl">
        Technical Customer Service Representative
      </h3>

      <p className="mt-1 font-mont text-sm text-[#C86A2A] sm:text-base">
        Concentrix
      </p>
    </div>

    <p className="shrink-0 font-mont text-sm text-[#A5A5A5]">
      May 2022 – July 2023
    </p>
  </div>

  <p className="mt-5 max-w-3xl font-mont text-sm leading-7 text-[#DADADA] sm:text-base">
   Provided high-volume technical support for macOS and iOS environments, troubleshooting hardware, software, and configuration issues while coordinating repair escalations and delivering excellent customer service.
  </p>
</div>
</div>

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
      Enterprise IT Capabilities
    </h2>
    <p className="mt-4 mx-auto font-mont max-w-2xl text-accent dark:text-[#DADADA] leading-relaxed">
      Experience and developing capabilities across enterprise systems, infrastructure, identity, cloud, and automation.
    </p>
  </div>

  {/* capability cards */}
  <div className="mt-10 grid gap-4 sm:grid-cols-2">
    {[
      {
        title: "Enterprise Systems & Operations",
        desc: "Application support, incident triage, escalation workflows, and reliable service delivery in structured environments",
      },
      {
        title: "Infrastructure & Cloud Foundations",
        desc: "Windows, Linux, networking, Active Directory fundamentals, Microsoft 365, Azure, and Entra ID Learning",
      },
      {
        title: "Identity, Access & Security",
        desc: "Authentication, account access, role-based permissions, security-conscious operations, and identity concepts.",
      },
      {
        title: "Automation & Process Improvement",
        desc: "PowerShell, Python, Bash, documentation, repeatable workflows, and operational efficiency.",
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
  {/* <div className="mt-10 text-center">
    <p className="font-mont text-xs tracking-[0.35em] text-[#DADADA]/60">
      TOOLS I USE
    </p>
    <p className="mt-3 font-mont text-sm text-[#DADADA]">
      Windows · Linux · Microsoft 365 · Networking · Python · Bash
    </p>
  </div> */}
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