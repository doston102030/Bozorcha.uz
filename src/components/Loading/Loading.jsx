
import { useEffect, useState } from 'react'
import CircularProgressWithLabel from '../CircularProgressWithLabel'

function Loading() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(old => (old >= 100 ? 100 : old + 10))
    }, 300)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center gap-6 bg-white/90 backdrop-blur-md z-50">
      {/* Loader */}
    

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-amber-700 animate-pulse">
        Bozorcha.uz do‘koniga xush kelibsiz
      </h2>

      {/* Subtitle */}
      <p className="text-base sm:text-lg text-amber-600">
        Mahsulotlar yuklanmoqda...
      </p>
    </div>
  )
}

export default Loading
