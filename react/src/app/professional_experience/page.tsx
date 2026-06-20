"use client";

import { useState } from 'react';

export default function ProfessionalExperience() {
  // Track open state for each index. Defaulting index 0 (DevOps role) to true.
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({ 0: true });

  const toggleSection = (index: number) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const experiences = [
    {
      role: "SENIOR DEVOPS ENGINEER",
      company: "Enosis Solutions",
      location: "Dhaka, Bangladesh",
      period: "Aug. 2025 – Present",
      responsibilities: [
        "Automating Software Development Lifecycle through CI/CD pipelines",
        "Postmortem all the incidents in the infrastructure, prepare RCA docs, and devise mitigation plans for future occurrence",
        "Ensure SOC2 and PCI compliances are followed throughout the infrastructure",
        "Integrate DevSecOps tools throughout the deployment phases"
      ],
      contributions: [
        "Updated Jenkins CI/CD pipelines for deploying .NET backend and Next.JS frontend containers in an EC2 with the help of AWS ECR.",
        "Integrated and set up Incident.io with AWS alarms and Slack for prompt incident management, alongside creating AWS Lambda automations.",
        "Removed all hardcoded secrets from configuration files to AWS Secrets Manager using adaptive shell scripts.",
        "Ran OSCAP scanner on base AMIs and executed corrective updates using Packer.",
        "Provisioned infrastructure utilizing CloudFormation to host a SonarQube community edition with Postgres RDS and integrated automated code quality analysis gate blamers directly into team communication channels.",
        "Updated release workflows to automatically match Jira tickets, build Confluence release notes, and notify teams via email and Microsoft Teams."
      ]
    },
    {
      role: "SENIOR SOFTWARE ENGINEER",
      company: "Enosis Solutions",
      location: "Dhaka, Bangladesh",
      period: "Jun. 2023 – July 2025",
      responsibilities: [
        "Doing R&D intensive tasks for a plugin project",
        "Understanding Advanced Git version control features",
        "Conducting code review of teammates and providing ballpark estimation of projects",
        "Ensuring OWASP Top 10 security standards in development"
      ],
      contributions: [
        "Written backend APIs and corresponding front-end features at .NET Core and React for a web application scaling to millions of data records with highly optimized queries.",
        "Scaled up a tool implementing the Rebucket algorithm by 60% utilizing memoization techniques.",
        "Created a POC Python tool to scrape websites utilizing Llama LLM (Large Language Model).",
        "Created Jenkins CI/CD pipeline for 3 web apps utilizing PERN technology stacks, pushing Docker images to AWS ECR and deploying via AppRunner.",
        "Developed custom C++ MFC applications for hardware system testing compatibility and internal diagnostic migrations."
      ]
    },
    {
      role: "SOFTWARE ENGINEER",
      company: "Enosis Solutions",
      location: "Dhaka, Bangladesh",
      period: "Jun. 2021 – May 2023",
      responsibilities: [
        "Implementing project/task requirements independently and fixing codebase bugs.",
        "Communicating with clients and peers proactively and following Agile development processes.",
        "Writing code following proper design principles like YAGNI, KISS, and SOLID."
      ],
      contributions: [
        "Developed cross-platform gallery and multi-OS core audio recording architectures using the Qt Framework.",
        "Devised and implemented an infrastructure solution to add Authentication, Geofencing, and user session management via Auth0 into legacy environments.",
        "Resolved complex interaction workflows bridging Delphi desktop backends and .NET applications with the Hydra framework.",
        "Wrote robust testing suites utilizing NUnit, DUnit, and automated regression validations using TestComplete."
      ]
    }
  ];

  return (
    <main id="main" className="w-full flex flex-grow flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8" aria-label="Content">
      <div className="w-full max-w-4xl h-auto rounded-xl bg-[#161616] p-8 md:p-10 border border-gray-800 shadow-2xl">
        <header className="mb-8 border-b border-gray-800 pb-5">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Work Experience
          </h1>
        </header>

        {/* Timeline Flow */}
        <div className="flex flex-col gap-6 relative border-l-2 border-gray-800 pl-6 ml-2">
          {experiences.map((exp, index) => {
            const isOpen = !!openSections[index];
            
            return (
              <div key={index} className="relative group">
                
                {/* Timeline Bullet Indicator Node */}
                <div className={`absolute -left-[31px] top-2 rounded-full h-3 w-3 border-2 border-[#161616] transition-colors duration-200 ${isOpen ? 'bg-blue-500' : 'bg-gray-700 group-hover:bg-gray-500'}`} />
                
                {/* Clickable Header Region */}
                <button 
                  onClick={() => toggleSection(index)}
                  className="w-full text-left flex justify-between items-start focus:outline-none group/btn"
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-blue-500 uppercase tracking-widest">
                      {exp.period}
                    </span>
                    <h2 className="text-xl font-bold text-white tracking-wide mt-1 group-hover/btn:text-blue-400 transition-colors">
                      {exp.role}
                    </h2>
                    <div className="text-sm text-gray-400 font-medium mt-0.5">
                      {exp.company} <span className="text-gray-600 mx-1.5">•</span> {exp.location}
                    </div>
                  </div>
                  
                  {/* Interactive Toggle Chevron Indicator */}
                  <span className="text-gray-500 group-hover/btn:text-white transition-colors ml-4 mt-2">
                    <svg 
                      className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {/* Collapsible Section Container */}
                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-5' : 'grid-rows-[0fr] opacity-0 pointer-events-none'}`}>
                  <div className="overflow-hidden">
                    
                    {/* Responsibilities Subsection */}
                    <div className="mb-4">
                      <h3 className="text-xs uppercase font-bold text-gray-500 tracking-wider mb-2">Core Responsibilities</h3>
                      <ul className="list-none space-y-1.5 text-sm text-gray-400">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-gray-600 mr-2 select-none">—</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Contributions Subsection */}
                    <div>
                      <h3 className="text-xs uppercase font-bold text-gray-500 tracking-wider mb-2">Key Contributions</h3>
                      <ul className="list-none space-y-2 text-sm text-gray-400">
                        {exp.contributions.map((contrib, idx) => (
                          <li key={idx} className="flex items-start leading-relaxed">
                            <span className="text-blue-500/70 mr-2 mt-1 text-xs select-none">↳</span>
                            <span>{contrib}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}