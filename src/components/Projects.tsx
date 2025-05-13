'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { XMarkIcon, LightBulbIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface Project {
  name: string;
  subtitle: string;
  website?: string;
  description: string[];
  achievements: string[];
  imageSrc: string;
  galleryImages?: string[];
}

const projects: Project[] = [
  {
    name: 'Understated',
    subtitle: 'Self-initiated clothing brand built from the ground up',
    website: 'https://www.understated.us',
    description: [
      'Founded and led the development of a streetwear brand from concept to market, demonstrating entrepreneurial initiative and product vision',
      'Developed comprehensive go-to-market strategy including brand positioning, target audience analysis, and competitive landscape evaluation',
      'Created and managed the product lifecycle from design ideation to manufacturing coordination and inventory management'
    ],
    achievements: [
      'Building and managing an e-commerce platform, resulting in successful direct-to-consumer sales and brand engagement',
      'Implemented data-driven decision making through customer feedback analysis and sales metrics to optimize product offerings',
      'Established relationships with U.S. and overseas manufacturers and managed fabric sourcing',
      'Utilized social media marketing and content creation to build a strong brand identity and community engagement',
      'Demonstrated financial acumen through budget management, pricing strategy, and profit margin optimization'
    ],
    imageSrc: '/images/projects/understated-logo.svg',
    galleryImages: [
      '/images/projects/understated-1.jpg',
      '/images/projects/understated-2.jpg',
      '/images/projects/understated-3.jpg',
      '/images/projects/understated-4.jpg'
    ]
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold flex items-center dark:text-white">
          <LightBulbIcon className="h-5 w-5 mr-2 text-gray-400 dark:text-gray-500" />
          My Projects
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Click to learn more</p>
      </div>
      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.name}
            onClick={() => setSelectedProject(project)}
            className="flex items-start space-x-4 p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer bg-white dark:bg-gray-800"
          >
            <div className="flex-shrink-0">
              <div className="h-16 w-16 relative rounded-full overflow-hidden border-4 border-gray-100 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-800 flex items-center justify-center">
                <Image
                  src={project.imageSrc}
                  alt={`${project.name} logo`}
                  width={56}
                  height={56}
                  className="object-contain scale-[1.75] translate-x-[2px]"
                />
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium dark:text-white">{project.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{project.subtitle}</p>
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 inline-flex items-center mt-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <GlobeAltIcon className="h-4 w-4 mr-1" />
                      Website
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog
        open={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center relative">
            {/* Floating images for Understated */}
            {selectedProject?.name === 'Understated' && selectedProject.galleryImages && (
              <>
                <img
                  src={selectedProject.galleryImages[0]}
                  alt="Understated 1"
                  className="hidden md:block absolute z-[100] w-40 h-60 object-cover rounded-xl border-[6px] border-white dark:border-gray-800 shadow-xl -left-40 top-0 pointer-events-none"
                  style={{ transform: 'rotate(-8deg)' }}
                />
                <img
                  src={selectedProject.galleryImages[1]}
                  alt="Understated 2"
                  className="hidden md:block absolute z-[100] w-40 h-60 object-cover rounded-xl border-[6px] border-white dark:border-gray-800 shadow-xl -right-32 top-0 pointer-events-none"
                  style={{ transform: 'rotate(6deg)' }}
                />
                <img
                  src={selectedProject.galleryImages[2]}
                  alt="Understated 3"
                  className="hidden md:block absolute z-[100] w-40 h-60 object-cover rounded-xl border-[6px] border-white dark:border-gray-800 shadow-xl -left-40 bottom-0 pointer-events-none"
                  style={{ transform: 'rotate(10deg)' }}
                />
                <img
                  src={selectedProject.galleryImages[3]}
                  alt="Understated 4"
                  className="hidden md:block absolute z-[100] w-40 h-60 object-cover rounded-xl border-[6px] border-white dark:border-gray-800 shadow-xl -right-32 bottom-0 pointer-events-none"
                  style={{ transform: 'rotate(-4deg)' }}
                />
              </>
            )}
            <Dialog.Panel className="mx-auto w-full max-w-2xl rounded-lg bg-white dark:bg-gray-800 p-6 shadow-xl max-h-[90vh] overflow-y-auto animate-modal relative z-50">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 relative rounded-full overflow-hidden border-4 border-gray-100 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-800 flex items-center justify-center">
                      <Image
                        src={selectedProject?.imageSrc || ''}
                        alt={`${selectedProject?.name} logo`}
                        width={56}
                        height={56}
                        className="object-contain scale-[1.75] translate-x-[2px]"
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <div>
                        <Dialog.Title className="text-xl font-semibold dark:text-white">
                          {selectedProject?.name}
                        </Dialog.Title>
                        <p className="text-gray-600 dark:text-gray-300">{selectedProject?.subtitle}</p>
                        {selectedProject?.website && (
                          <a
                            href={selectedProject.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 inline-flex items-center mt-1"
                          >
                            <GlobeAltIcon className="h-4 w-4 mr-1" />
                            Website
                          </a>
                        )}
                      </div>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                      >
                        <XMarkIcon className="h-6 w-6" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    {selectedProject?.description.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg dark:text-white">Key Achievements</h4>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      {selectedProject?.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {[
                      'Adobe Illustrator',
                      'Adobe Lightroom',
                      'Shopify',
                      'Product Development',
                      'UI/UX',
                      'Fulfillment/Logistics',
                      'Digital Marketing'
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Only show the grid gallery if not Understated */}
                  {selectedProject?.galleryImages && selectedProject.name !== 'Understated' && (
                    <div className="pt-6">
                      <div className="grid grid-cols-2 gap-4">
                        {selectedProject.galleryImages.map((image, index) => (
                          <div
                            key={index}
                            className="aspect-square relative rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
                          >
                            <Image
                              src={image}
                              alt={`${selectedProject.name} gallery image ${index + 1}`}
                              fill
                              className={`object-cover hover:scale-105 transition-transform duration-300 ${
                                index === 2 ? 'object-top' : 
                                index === 1 ? 'object-[center_25%]' : 
                                'object-center'
                              }`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </section>
  );
}