import React from 'react'
import { 
  Squares2X2Icon,
  PaintBrushIcon,
  MegaphoneIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/outline'

const sections = [
  { id: 'all', icon: Squares2X2Icon, label: 'All' },
  { id: 'branding', icon: PaintBrushIcon, label: 'Branding' },
  { id: 'marketing', icon: MegaphoneIcon, label: 'Marketing' },
  { id: 'web-design', icon: ComputerDesktopIcon, label: 'Web design' }
]

export default function Navigation() {
  return (
    <nav className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-14">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <section.icon className="h-4 w-4 mr-2 text-gray-400" />
              <span>{section.label}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
} 