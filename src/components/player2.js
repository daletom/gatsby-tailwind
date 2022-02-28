import React, { useEffect, useRef, useState } from "react"
import { Player, Video } from '@vime/react';
import '@vime/core/themes/default.css'

const Player = ({ id }) => {
  return (
    <Player controls>
      <Video crossOrigin="" poster="https://tom.imgix.net/magento3.png?auto=format,compress&w=800">
        {/* These are passed directly to the underlying HTML5 `<video>` element. */}
        {/* Why `data-src`? Lazy loading, you can always use `src` if you prefer.  */}
        <source
          data-src="https://tom.imgix.video/HLSadvantages.mp4?fm=hls"
          type="application/x-mpegURL"
        />
      </Video>

      {/* ... */}
    </Player>
  )
}

export default VideoPlayerJS