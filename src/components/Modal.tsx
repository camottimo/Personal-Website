'use client';

import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center">
          <Dialog.Panel className="mx-auto w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl max-h-[90vh] overflow-y-auto animate-modal">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-grow">{children}</div>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 flex-shrink-0 ml-4"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
} 