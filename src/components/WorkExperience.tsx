'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { BriefcaseIcon } from '@heroicons/react/24/outline';
import Modal from './Modal';
import CompanyLogo from './CompanyLogo';
import { Dialog } from '@headlessui/react';

export default function WorkExperience() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold flex items-center dark:text-white">
          <BriefcaseIcon className="h-5 w-5 mr-2 text-gray-400 dark:text-gray-500" />
          Work Experience
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Click to learn more</p>
      </div>
      <div className="space-y-4">
        {/* Cardworks */}
        <div 
          onClick={() => setIsModalOpen(true)}
          className="flex items-start space-x-4 p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer bg-white dark:bg-gray-800"
        >
          <div className="flex-shrink-0">
            <div className="h-16 w-16 relative rounded-full overflow-hidden border-4 border-gray-100 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-800 flex items-center justify-center">
              <Image
                src="/images/companies/cardworks-logo.png"
                alt="Cardworks logo"
                width={56}
                height={56}
                className="object-contain scale-120"
              />
            </div>
          </div>
          <div className="flex-grow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium dark:text-white">Cardworks</h3>
                <p className="text-gray-500 dark:text-gray-400">Seasonal Associate, Data Visualization</p>
              </div>
              <span className="text-gray-500 dark:text-gray-400">May 2024 - August 2024</span>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Details Modal */}
      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center relative">
            <Dialog.Panel className="mx-auto w-full max-w-2xl rounded-lg bg-white dark:bg-gray-800 p-6 shadow-xl max-h-[90vh] overflow-y-auto animate-modal relative z-50">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 relative rounded-full overflow-hidden border-4 border-gray-100 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-800 flex items-center justify-center">
                      <Image
                        src="/images/companies/cardworks-logo.png"
                        alt="Cardworks logo"
                        width={56}
                        height={56}
                        className="object-contain scale-120"
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <div>
                        <Dialog.Title className="text-xl font-semibold dark:text-white">
                          Cardworks
                        </Dialog.Title>
                        <p className="text-gray-600 dark:text-gray-300">Seasonal Associate, Data Visualization</p>
                        <p className="text-gray-500 dark:text-gray-400">May 2024 - August 2024</p>
                      </div>
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                      >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Developed data visualization dashboards in Power BI to support decision-making processes, demonstrating analytical skills and attention to detail</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Collaborated with cross-functional teams to integrate chatbot solutions, showcasing teamwork and technical fluency</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Debugged and wrote Python scripts to extract and analyze service-level agreement (SLA) data, contributing to performance tracking and ensuring compliance with company standards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Reviewed SQL queries and developed an automated Excel report, utilizing custom formulas to dynamically track variables related to fraud claims, ensuring real-time data accuracy and improved decision-making</span>
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {['AWS', 'Snowflake', 'Jira', 'Oracle Database', 'Jupyter'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </section>
  );
} 