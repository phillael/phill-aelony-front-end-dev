import React, { useEffect } from "react"

export default function Image({ src, alt, className }) {
  useEffect(() => {
    document.createElement("img").src = src
  }, [])
  return <img src={src} alt={alt} className={className} />
}
