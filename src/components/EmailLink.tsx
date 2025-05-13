'use client';

import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

export interface EmailLinkHandle {
  openDropdown: () => void;
}

const EmailLink = forwardRef<EmailLinkHandle>((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 });
  const [copied, setCopied] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const email = 'camottimo@gmail.com';
  const subject = 'Hello - coming from your personal website';

  useImperativeHandle(ref, () => ({
    openDropdown: () => setIsOpen(true)
  }));

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleEmailClick = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  };

  useEffect(() => {
    setMounted(true);

    function handleScroll() {
      if (isOpen) {
        updateDropdownPosition();
      }
    }

    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      updateDropdownPosition();
    }
  }, [isOpen]);

  const updateDropdownPosition = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const dropdownWidth = Math.min(window.innerWidth * 0.9, 256);
      let left = rect.left + window.scrollX - (dropdownWidth - rect.width) / 2;
      left = Math.max(8, Math.min(left, window.innerWidth - dropdownWidth - 8));
      setDropdownPosition({
        top: rect.bottom + 2,
        left,
        width: dropdownWidth,
      });
    }
  };

  const openGmail = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}`;
    window.open(gmailUrl, '_blank');
    setIsOpen(false);
  };

  const openOutlook = () => {
    const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${encodeURIComponent(subject)}`;
    window.open(outlookUrl, '_blank');
    setIsOpen(false);
  };

  const openDefaultClient = () => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    setIsOpen(false);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        ref={buttonRef}
        onClick={handleEmailClick}
        className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center"
        aria-label="Email options"
      >
        <EnvelopeIcon className="h-4 w-4 mr-2 text-gray-400 dark:text-gray-500" />
        Email
      </button>

      {/* Checkmark popup animation */}
      {copied && (
        <div className="absolute left-1/2 -translate-x-1/2 -top-10 flex items-center bg-green-500 text-white px-4 py-2 rounded-full shadow-lg animate-fade-in-out z-[10000]">
          <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Copied!
        </div>
      )}

      {mounted && isOpen && createPortal(
        <div
          className="fixed z-[9999] bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 rounded-lg"
          style={{
            top: `${dropdownPosition.top}px`,
            left: `${dropdownPosition.left}px`,
            width: dropdownPosition.width,
            maxWidth: '90vw',
            minWidth: 200,
          }}
        >
          <div className="p-4 space-y-3">
            <p className="text-sm text-gray-700 dark:text-gray-300">{email}</p>
            <button
              onClick={copyEmail}
              className="w-full text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center"
            >
              <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              Copy to clipboard
            </button>
            <button
              onClick={openGmail}
              className="w-full text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center"
            >
              <Image
                src="/images/gmail-logo.svg"
                alt="Gmail logo"
                width={16}
                height={16}
                className="h-4 w-4 mr-2"
                style={{ objectFit: 'contain' }}
                priority={false}
              />
              Open in Gmail
            </button>
            <button
              onClick={openOutlook}
              className="w-full text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center"
            >
              <Image
                src="/images/outlook-logo.svg"
                alt="Outlook logo"
                width={16}
                height={16}
                className="h-4 w-4 mr-2"
                style={{ objectFit: 'contain' }}
                priority={false}
              />
              Open in Outlook
            </button>
            <button
              onClick={openDefaultClient}
              className="w-full text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center"
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
});

EmailLink.displayName = 'EmailLink';

export default EmailLink; 