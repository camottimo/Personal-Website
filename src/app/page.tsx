"use client";
import React, { useRef } from 'react'
import Image from 'next/image'
import { 
  AcademicCapIcon, 
  WrenchScrewdriverIcon,
  EnvelopeIcon,
  PhoneIcon,
  DocumentIcon,
  PencilIcon
} from '@heroicons/react/24/outline'
import WorkExperience from '@/components/WorkExperience'
import Projects from '@/components/Projects'
import EmailLink, { EmailLinkHandle } from '@/components/EmailLink'
import ThemeToggle from '@/components/ThemeToggle'

const skills = [
  {
    category: "Branding",
    icon: "🎨",
    items: [
      "Visual identity",
      "Creative direction for campaigns and product shoots",
      "Physical-to-digital brand translation"
    ]
  },
  {
    category: "Product Thinking",
    icon: "🧠",
    items: [
      "Wireframing and user flows with business goals in mind",
      "Customer research and insight driven MVPs",
      "Feature mapping",
      "Bridging design, dev, and marketing to ship ideas fast"
    ]
  },
  {
    category: "Web design",
    icon: "💻",
    items: [
      "E-commerce",
      "UI/UX",
      "Conversion-focused design and flows",
      "HTML/CSS/JS"
    ]
  }
]

const tools = [
  {
    level: "Learning",
    items: [
      {
        name: "Framer",
        icon: (
          <svg viewBox="0 0 24 24" className="w-4 h-4 mr-2">
            <path fill="#0055FF" d="M4 0h16v8h-8zm0 8h8l8 8H4zm0 8h8v8z"/>
          </svg>
        )
      },
      {
        name: "Figma",
        icon: (
          <svg viewBox="0 0 24 24" className="w-4 h-4 mr-2">
            <path fill="#F24E1E" d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z"/>
            <path fill="#FF7262" d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z"/>
            <path fill="#1ABCFE" d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z"/>
            <path fill="#0ACF83" d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z"/>
            <path fill="#A259FF" d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z"/>
          </svg>
        )
      },
      {
        name: "SQL",
        icon: (
          <Image
            src="/images/sql-logo.svg"
            alt="SQL logo"
            width={16}
            height={16}
            className="mr-2"
          />
        )
      }
    ]
  },
  {
    level: "Intermediate",
    items: [
      {
        name: "Cursor",
        icon: (
          <Image
            src="/images/cursor-logo.svg"
            alt="Cursor logo"
            width={16}
            height={16}
            className="mr-2"
          />
        )
      },
      {
        name: "Illustrator",
        icon: (
          <Image
            src="/images/illustrator-logo.svg"
            alt="Illustrator logo"
            width={16}
            height={16}
            className="mr-2"
          />
        )
      },
      {
        name: "Lightroom",
        icon: (
          <Image
            src="/images/lightroom-logo.svg"
            alt="Lightroom logo"
            width={16}
            height={16}
            className="mr-2"
          />
        )
      },
      {
        name: "Notion",
        icon: (
          <svg viewBox="0 0 24 24" className="w-4 h-4 mr-2">
            <path fill="#000000" d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-2.986-3.939C.326 18.532 0 17.853 0 17.06V2.667c0-.839.374-1.54 1.936-1.632z"/>
          </svg>
        )
      },
      {
        name: "Snowflake",
        icon: (
          <Image
            src="/images/snowflake.svg"
            alt="Snowflake logo"
            width={16}
            height={16}
            className="mr-2"
          />
        )
      },
      {
        name: "Jira",
        icon: (
          <svg viewBox="0 0 24 24" className="w-4 h-4 mr-2">
            <path fill="#2684FF" d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.762a1.005 1.005 0 0 0-1.001-1.005zM23.017 0H11.459a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.215 5.215 0 0 0 24 12.483V1.005A1.005 1.005 0 0 0 23.017 0z"/>
          </svg>
        )
      }
    ]
  },
  {
    level: "Advanced",
    items: [
      {
        name: "Python",
        icon: (
          <svg viewBox="0 0 24 24" className="w-4 h-4 mr-2">
            <path fill="#3776AB" d="M11.95 0C5.85 0 6.21 2.58 6.21 2.58l.01 2.67h5.84v.82H3.89s-3.89.44-3.89 5.7c0 5.25 3.4 5.07 3.4 5.07h2.03v-2.44s-.11-2.9 2.85-2.9h4.91s2.76.04 2.76-2.67V3.94S16.46 0 11.95 0zM8.86 1.86c.58 0 1.05.47 1.05 1.05s-.47 1.05-1.05 1.05-1.05-.47-1.05-1.05.47-1.05 1.05-1.05z"/>
            <path fill="#FDD835" d="M12.05 24c6.1 0 5.74-2.58 5.74-2.58l-.01-2.67h-5.84v-.82h8.17s3.89-.44 3.89-5.7c0-5.25-3.4-5.07-3.4-5.07h-2.03v2.44s.11 2.9-2.85 2.9h-4.91s-2.76-.04-2.76 2.67v4.89S7.54 24 12.05 24zm3.09-1.86c-.58 0-1.05-.47-1.05-1.05s.47-1.05 1.05-1.05 1.05.47 1.05 1.05-.47 1.05-1.05 1.05z"/>
          </svg>
        )
      },
      {
        name: "Canva",
        icon: (
          <Image
            src="/images/canva-logo.svg"
            alt="Canva logo"
            width={16}
            height={16}
            className="mr-2"
          />
        )
      },
      {
        name: "ChatGPT",
        icon: (
          <Image
            src="/images/chatgpt-logo.svg"
            alt="ChatGPT logo"
            width={16}
            height={16}
            className="mr-2"
          />
        )
      },
      {
        name: "Shopify",
        icon: (
          <Image
            src="/images/shopify-logo.svg"
            alt="Shopify logo"
            width={16}
            height={16}
            className="mr-2"
          />
        )
      },
      {
        name: "Jupyter",
        icon: (
          <Image
            src="/images/jupyter.svg"
            alt="Jupyter logo"
            width={16}
            height={16}
            className="mr-2"
          />
        )
      }
    ]
  }
]

export default function Home() {
  const emailLinkRef = useRef<EmailLinkHandle>(null);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-16">
          {/* Hero Section */}
          <section className="text-center space-y-6 pt-4">
            {/* Profile Photo */}
            <div className="mx-auto h-40 w-40 relative">
              <div className="rounded-full overflow-hidden h-40 w-40 border-4 border-gray-100 dark:border-gray-800 shadow-lg">
                <Image
                  src="/profile-photo.png"
                  alt="Profile photo"
                  width={160}
                  height={160}
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl dark:text-white">
              Hi, I'm Camryn 👋
            </h1>
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-sm space-y-4">
                <div className="space-y-3">
                  <p className="text-gray-600 dark:text-gray-300">data science meets product vision 🧠➡️📱</p>
                  <p className="text-gray-600 dark:text-gray-300">passionate about building meaningful products that people love 🔥</p>
                  <p className="text-gray-600 dark:text-gray-300">on a journey into product management — where strategy, creativity, and impact collide</p>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent"></div>
                <div className="space-y-3">
                  <p className="text-gray-600 dark:text-gray-300">golfer ⛳️ chess fanatic ♟️ fashion start-up 👕</p>
                  <p className="text-gray-600 dark:text-gray-300">building a clothing brand and always exploring what's next 🚀</p>
                </div>
              </div>
            </div>
            
            {/* Contact Links */}
            <div className="flex justify-center gap-6 pt-4">
              <EmailLink ref={emailLinkRef} />
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center">
                <DocumentIcon className="h-4 w-4 mr-2 text-gray-400 dark:text-gray-500" />
                Resume
              </a>
              <a href="https://github.com/camottimo" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center">
                <svg className="h-4 w-4 mr-2 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/camryn-ottimo/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center">
                <svg className="h-4 w-4 mr-2 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
                LinkedIn
              </a>
            </div>
          </section>

          {/* Creative Stack Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold flex items-center dark:text-white">
              <PencilIcon className="h-5 w-5 mr-2 text-gray-400 dark:text-gray-500" />
              My Creative Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skills.map((skill) => (
                <div key={skill.category} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4 transition-transform duration-200 hover:scale-105 hover:shadow-xl cursor-pointer">
                  <div className="flex items-center space-x-3 pb-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-2xl">{skill.icon}</span>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{skill.category}</h3>
                  </div>
                  <ul className="space-y-3 pt-2">
                    {skill.items.map((item) => (
                      <li key={item} className="flex items-start text-gray-700 dark:text-gray-300 text-sm">
                        <svg className="h-4 w-4 text-green-400 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Work Experience Section */}
          <WorkExperience />
          <Projects />

          {/* Tools Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center dark:text-white">
              <WrenchScrewdriverIcon className="h-5 w-5 mr-2 text-gray-400 dark:text-gray-500" />
              Tools I use
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {tools.map((category) => (
                <div key={category.level} className="space-y-2 flex flex-col items-center">
                  <h3 className={`inline-block px-3 py-1 rounded-full text-sm font-medium
                    ${category.level === 'Learning' ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200' :
                    category.level === 'Intermediate' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
                    'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'}`}>
                    {category.level}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    {category.items.map((tool) => (
                      <div key={tool.name} className="inline-flex items-center p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300">
                        {tool.icon}
                        {tool.name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Academic Background Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold flex items-center dark:text-white">
              <AcademicCapIcon className="h-5 w-5 mr-2 text-gray-400 dark:text-gray-500" />
              Academic Background
            </h2>
            <div className="space-y-6">
              {/* UW-Madison */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 relative rounded-full overflow-hidden border-4 border-gray-100 dark:border-gray-800 shadow-sm bg-white dark:bg-gray-800 flex items-center justify-center p-2">
                    <Image
                      src="/images/schools/uw-madison.svg"
                      alt="University of Wisconsin-Madison"
                      width={32}
                      height={32}
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium dark:text-white">University of Wisconsin - Madison</h3>
                      <p className="text-gray-500 dark:text-gray-400">Data Science B.S., Computer Science Certificate</p>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400">Expected December 2025</span>
                  </div>
                </div>
              </div>

              {/* University of Westminster */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 relative rounded-full overflow-hidden border-4 border-gray-100 dark:border-gray-800 shadow-sm">
                    <Image
                      src="/images/schools/westminster.jpg"
                      alt="University of Westminster"
                      width={64}
                      height={64}
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium dark:text-white">University of Westminster</h3>
                      <p className="text-gray-500 dark:text-gray-400">Study Abroad Program - London</p>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400">January 2024 - April 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold dark:text-white">Reach out ✍️</h2>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                If you're interested in my work, I'd love to hear from you.{' '}
                <span
                  className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                  onClick={() => {
                    const section = document.getElementById('email-link-section');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                    emailLinkRef.current?.openDropdown();
                  }}
                >
                  Email me
                </span>
                , and I'll get back to you asap!
              </p>
            </div>
          </section>
        </div>
      </main>
      <ThemeToggle />
    </div>
  )
} 