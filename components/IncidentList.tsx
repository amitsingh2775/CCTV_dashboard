'use client'

import { useEffect, useState } from 'react'
import type { Incident, Camera } from '../app/generated/prisma'
import IncidentCard from './IncidentCard'
import Loader from './Loader'
import IncidentStatus from './IncidentStatus'
type IncidentWithCamera = Incident & { camera: Camera }

type Props = {
  onSelectIncident: (thumbnail: string) => void
}

export default function IncidentList({ onSelectIncident }: Props) {
  const [incidents, setIncidents] = useState<IncidentWithCamera[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/incidents?resolved=false')
      const data = await res.json()

      if (Array.isArray(data)) {
        setIncidents(data)
      }

      setLoading(false)
    }

    fetchData()
  }, [])

  const handleResolve = async (id: string) => {
    setIncidents(prev => prev.filter(i => i.id !== id))
    await fetch(`/api/incidents/${id}`, { method: 'PATCH' })
  }

  if (loading) return <Loader />

  return (
    <div
      className="bg-[#131313] p-4 rounded-xl shadow-md w-full h-full overflow-y-auto scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent"
      style={{
        opacity: 1,
        transform: 'rotate(0deg)',
      }}
    >
      <div className="flex justify-between items-center mb-3 text-white">
  <div className="flex items-center gap-2">
    <img src="/danger.png" alt="icon" className="w-10 h-10" />
    <h2 className="font-semibold text-lg w-full">
      {incidents.length} Unresolved 
    </h2>
  </div>

  <IncidentStatus />
</div>

      <div className="space-y-4">
        {incidents.map(incident => (
          <IncidentCard
            key={incident.id}
            incident={incident}
            onResolve={handleResolve}
            onSelect={() => onSelectIncident(incident.thumbnailUrl)}
          />
        ))}
      </div>
    </div>
  )
}
