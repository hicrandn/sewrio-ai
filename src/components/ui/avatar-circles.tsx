"use client"

import { cn } from "@/lib/utils"

interface Avatar {
  imageUrl: string
}
interface AvatarCirclesProps {
  className?: string
  numPeople?: number
  avatarUrls: Avatar[]
}

export const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <div
          key={index}
          className="liquid-glass relative block h-10 w-10 overflow-hidden rounded-full ring-2 ring-black"
        >
          <img
            className="h-10 w-10 rounded-full object-cover"
            src={url.imageUrl}
            width={40}
            height={40}
            alt={`Avatar ${index + 1}`}
          />
        </div>
      ))}
      {(numPeople ?? 0) > 0 && (
        <div className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full text-center text-xs font-medium text-white ring-2 ring-black">
          +{numPeople}
        </div>
      )}
    </div>
  )
}
