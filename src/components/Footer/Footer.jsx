import React from 'react'
import { FaInstagram, FaTelegram, FaPhoneAlt } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-inherit border-t border-amber-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between text-amber-700">
        <div className="flex flex-col leading-tight">
          <span className="font-semibold text-base">Bozorcha.uz</span>
          <span className="text-sm text-amber-600">
            Qulay va ishonchli onlayn bozor
          </span>
        </div>

        <div className="hidden sm:flex flex-col items-center leading-tight">
          <div className="flex items-center gap-2 font-medium text-sm">
            <FaPhoneAlt size={16} />
            <a href="tel:+998996593030" className="hover:underline">
              +998 99 659 30 30
            </a>
          </div>
          <span className="text-sm text-amber-600 uppercase tracking-wide">
            Call center
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://t.me/doston1200"
            className="text-amber-600 hover:text-amber-900 transition"
          >
            <FaTelegram size={26} />
          </a>
          <a
             href="https://www.instagram.com/doston__dev/"
            className="text-amber-600 hover:text-amber-900 transition"
          >
            <FaInstagram size={26} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
