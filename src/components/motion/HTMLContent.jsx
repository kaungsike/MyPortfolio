"use client"

import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"

export default function HTMLContent() {
  const count = useMotionValue(0)
  const rounded = useTransform(count, latest => `${Math.round(latest)}%`) // ← append %

  useEffect(() => {
    const controls = animate(count, 100, { duration: 4 })
    return () => controls.stop()
  }, [])

  return <motion.pre style={text}>{rounded}</motion.pre>
}

const text = {
  fontSize: 30,
  color: "#000000",
}
