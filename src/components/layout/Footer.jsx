import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#111E12] text-white py-12 px-6 md:px-12 border-t border-[#F5C518]/20">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-white/40">© 2026 EnergyOganla.</p>
        <div className="flex gap-8 text-sm text-white/40">
          <a href="https://www.instagram.com/energyoganla/" target="_blank" rel="noreferrer" className="hover:text-[#F5C518] transition-colors">Instagram</a>
          <a href="https://x.com/energyoganla" target="_blank" rel="noreferrer" className="hover:text-[#F5C518] transition-colors">X</a>
          <a href="mailto:allisonfav24@gmail.com" className="hover:text-[#F5C518] transition-colors">Email</a>
        </div>
      </div>
    </footer>
  )
}
