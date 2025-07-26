
import { Camera, Incident } from '../app/generated/prisma'
import { Clock } from 'lucide-react'
import { JSX } from 'react'
import Image from 'next/image'

type Props = {
  incident: Incident & { camera: Camera }
  onResolve: (id: string) => void
  onSelect: () => void
}

export default function IncidentCard({ incident, onResolve, onSelect }: Props) {
  const colorMap: Record<string, string> = {
    'Gun Threat': 'bg-red-500',
    'Unauthorized Access': 'bg-orange-500',
    'Face Recognized': 'bg-blue-500',
  }

  const iconMap: Record<string, JSX.Element> = {
    'Gun Threat': (
      <img src="/mdi_gun.png" alt="Gun" className="w-4 h-4 object-contain" />
    ),
    'Unauthorized Access': (
      <img src="/windo.png" alt="Unauthorized" className="w-4 h-4 object-contain" />
    ),
    'Face Recognized': (
      <img src="/face.png" alt="Face" className="w-4 h-4 object-contain" />
    ),
  }

  const start = new Date(incident.tsStart).toLocaleTimeString()
  const end = new Date(incident.tsEnd).toLocaleTimeString()

  return (
    <div
      className="flex items-center gap-4 p-3 shadow-sm cursor-pointer"
      onClick={onSelect}
    >
      <Image
        src={incident.thumbnailUrl}
        alt="thumb"
        className="w-20 h-14 rounded-md object-cover"
      />

      <div className="flex-1 flex flex-col justify-between h-full">

        <div className="flex items-center gap-1 px-2 py-1 text-white font-bold text-[14px] leading-[100%] tracking-[0] font-inter">
          {iconMap[incident.type] || (
            <Image
              src="/default.png"
              alt="Default"
              className="w-4 h-4 object-contain"
            />
          )}
          {incident.type}
        </div>

        <div className="flex flex-col gap- mt-5 ml-3">
          <div className="flex items-center gap-2 text-xs text-white font-bold">
            <Image
              src="/cam.png"
              alt="Default"
              className="w-4 h-4 object-contain"
            />
            {incident.camera.name} | {incident.camera.location}
          </div>
          <div className="flex items-center text-sm text-white gap-4 font-bold">
            <Clock size={12}  color={'white'}/>
            {start} - {end}
          </div>
        </div>
      </div>

     <button
  className="text-xs px-3 py-1 rounded text-yellow-500 font-bold flex items-center gap-1"
  onClick={(e) => {
    e.stopPropagation()
    onResolve(incident.id)
  }}
>
  Resolve <span>&gt;</span>
</button>

    </div>
  )
}
