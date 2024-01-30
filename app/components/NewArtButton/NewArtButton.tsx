'use client'

import { useRouter } from 'next/navigation'

export default function NewArtButton() {
  const router = useRouter()

  const handleClick = () => {
    //refresh router
    router.refresh()
  }

  return (
    <button 
      className="absolute p-2 bottom-24 left-1/2 -translate-x-1/2 bg-green-300 rounded-sm font-semibold hover:bg-green-400"
      onClick = {handleClick}
    >
      New painting
    </button>
  )
}