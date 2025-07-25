// components/IncidentPlayer.tsx
import { CalendarDays } from 'lucide-react'
import CameraStrip from './CameraStrip'

type Props = {
  selectedIncidentThumbnail?: string
}

export default function IncidentPlayer({ selectedIncidentThumbnail }: Props) {
  return (
    <div
      className="bg-black shadow-md p-4 relative opacity-100"
      style={{
        width: '796px',
        height: '449px',
        top: '1px',
        transform: 'rotate(0deg)',
      }}
    >
      {/* Top-left Timestamp Badge */}
      <div
        className="absolute top-7 left-4 z-10 flex items-center gap-1 text-white text-xs rounded px-[6px] py-[2px]"
        style={{
          backgroundColor: '#1C1917',
          width: '141px',
          height: '20px',
          opacity: 1,
        }}
      >
        <CalendarDays size={12} className="text-white" />
        <span>11/7/2025 - 03:12:37</span>
      </div>

      {/* Video or Thumbnail */}
      <div className="w-[700px] h-[449px] bg-black flex items-center justify-center text-white text-lg font-semibold overflow-hidden rounded-xl">
        <img
          src={
            selectedIncidentThumbnail || '/thumbnails/unauthorized-access.png'
          }
          alt="Incident"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Bottom-left Camera Badge */}
      <div
        className="absolute bottom-2 left-7 flex items-center gap-1 text-xs text-white px-[10px] py-[2px] rounded border z-20"
        style={{
          backgroundColor: '#0B0B0B',
          borderColor: '#404040',
          width: '116px',
          height: '24px',
          opacity: 1,
        }}
      >
        {/* Red Dot Icon */}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1987_64)">
            <path
              d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
              stroke="#EF4444"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 7C6.55228 7 7 6.55228 7 6C7 5.44772 6.55228 5 6 5C5.44772 5 5 5.44772 5 6C5 6.55228 5.44772 7 6 7Z"
              stroke="#EF4444"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1987_64">
              <rect width="12" height="12" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <span>Camera - 01</span>
      </div>

      {/* Bottom-right Camera Strip */}
      <div className="absolute bottom-2 right-28 z-20">
        <CameraStrip />
      </div>
    </div>
  )
}
