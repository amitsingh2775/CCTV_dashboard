'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import IncidentPlayer from '@/components/IncidentPlayer'
import IncidentList from '@/components/IncidentList'

export default function HomePage() {
  const [selectedThumbnail, setSelectedThumbnail] = useState<string | undefined>(undefined)

  return (
    <main className="flex flex-col min-h-screen pt-[76px]">
      <Navbar />
      <section className="flex flex-col lg:flex-row flex-1 p-4 gap-4">
        {/* Left: Incident Player */}
        <div className="w-full lg:w-3/5">
          <IncidentPlayer selectedIncidentThumbnail={selectedThumbnail} />
        </div>

        {/* Right: Incident List */}
        <div className="w-full lg:w-2/5 h-[calc(100vh-76px)] overflow-hidden">
          <IncidentList onSelectIncident={setSelectedThumbnail} />
        </div>
      </section>
    </main>
  )
}
