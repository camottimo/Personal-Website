'use client';

import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function EmailLink() {
  const [showOptions, setShowOptions] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const email = 'camottimo@gmail.com';
  const subject = 'Hello - coming from your personal website';

  const updateDropdownPosition = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 2,
        left: rect.left - (256 - rect.width) / 2
      });
    }
  };

  useEffect(() => {
    setMounted(true);
    
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
          buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setShowOptions(false);
      }
    }

    function handleScroll() {
      if (showOptions) {
        updateDropdownPosition();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll, true);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [showOptions]);

  useEffect(() => {
    if (showOptions) {
      updateDropdownPosition();
    }
  }, [showOptions]);

  const openGmail = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}`;
    window.open(gmailUrl, '_blank');
    setShowOptions(false);
  };

  const openOutlook = () => {
    const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${encodeURIComponent(subject)}`;
    window.open(outlookUrl, '_blank');
    setShowOptions(false);
  };

  const openDefaultClient = () => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    setShowOptions(false);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setShowOptions(false);
  };

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setShowOptions(!showOptions)}
        className="text-gray-600 hover:text-gray-900 flex items-center"
      >
        <EnvelopeIcon className="h-4 w-4 mr-2 text-gray-400" />
        Email
      </button>

      {mounted && showOptions && createPortal(
        <div 
          ref={dropdownRef}
          className="fixed z-[9999] bg-white shadow-xl border border-gray-200 rounded-lg"
          style={{
            top: `${dropdownPosition.top}px`,
            left: `${dropdownPosition.left}px`,
            width: '16rem'
          }}
        >
          <div className="p-4 space-y-3">
            <p className="text-sm text-gray-600">{email}</p>
            <button
              onClick={copyEmail}
              className="w-full text-left text-sm text-gray-600 hover:text-gray-900 flex items-center"
            >
              <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              Copy to clipboard
            </button>
            <button
              onClick={openGmail}
              className="w-full text-left text-sm text-gray-600 hover:text-gray-900 flex items-center"
            >
              <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Open in Gmail
            </button>
            <button
              onClick={openOutlook}
              className="w-full text-left text-sm text-gray-600 hover:text-gray-900 flex items-center"
            >
              <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Open in Outlook
            </button>
            <button
              onClick={openDefaultClient}
              className="w-full text-left text-sm text-gray-600 hover:text-gray-900 flex items-center"
            >
              <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Open in Default Email App
            </button>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
} 