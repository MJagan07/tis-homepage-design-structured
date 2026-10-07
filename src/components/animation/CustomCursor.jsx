import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [active, setActive] = useState(false)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    if (!finePointer) return
    const move = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })
      setActive(true)
    }
    const reset = () => setActive(false)
    window.addEventListener('mousemove', move)
    window.addEventListener('blur', reset)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('blur', reset)
    }
  }, [])

  return (
    <div
      className={`custom-cursor ${active ? 'is-visible' : ''}`}
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      aria-hidden="true"
    />
  )
}
