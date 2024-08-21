import React from 'react'

export const VideoPreviewCard = ({ videoURL }: { videoURL: string}) => {
  return (
    <div className="relative w-full h-96 hover:cursor-pointer overflow-hidden rounded-lg hover:shadow-xl shadow-lg">
      <video
        className="w-full h-full object-cover"
        muted
        src={videoURL}
        loop
        preload="metadata"
        onMouseEnter={(e: any) => e.target.play()}
        onMouseLeave={(e: any) => e.target.pause()}
      >
        <source src="your-video-url.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
