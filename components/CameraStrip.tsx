// components/CameraStrip.tsx
import { EllipsisVertical } from 'lucide-react'

export default function CameraStrip() {
  return (
    <div className="flex gap-4 mt-3">
      {/* Camera - 01 */}
      <div
        className="relative w-[120px] h-[67.2px] rounded-lg border"
        style={{
          borderWidth: '0.8px',
          borderColor: 'rgba(255, 255, 255, 0.25)',
        }}
      >
        {/* Camera Badge */}
        <div
          className="absolute top-0 left-0 right-1 z-10 flex justify-between items-center text-white text-[10px] px-[6.4px] py-[3.2px] w-full "
          style={{
            backgroundColor: '#0B0B0B',
            height: '16.4px',
            opacity: 1,
          }}
        >
          <span>Camera - 01</span>
          <EllipsisVertical size={10} />
        </div>

        {/* Thumbnail Image */}
        <img
          src="/thumbnails/unauthorized-access.png"
          className="w-full h-full object-cover "
        />
      </div>

      {/* Camera - 02 */}
      <div
        className="relative w-[120px] h-[67.2px] rounded-lg border"
        style={{
          borderWidth: '0.8px',
          borderColor: 'rgba(255, 255, 255, 0.25)',
        }}
      >
        {/* Camera Badge */}
        <div
          className="absolute top-0 left-0 right-1 z-10 flex justify-between items-center text-white text-[10px] px-[6.4px] py-[3.2px] w-full"
          style={{
            backgroundColor: '#0B0B0B',
            height: '16.4px',
            opacity: 1,
          }}
        >
          <span>Camera - 02</span>
          <EllipsisVertical size={10} />
        </div>

        {/* Thumbnail Image */}
        <img
          src="/thumbnails/gun-threat.jpg"
          className="w-full h-full object-cover "
        />
      </div>
    </div>
  )
}
