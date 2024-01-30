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
      className="self-center mt-8 md:absolute p-2 md:bottom-24 md:left-1/2 md:-translate-x-1/2 bg-green-300 rounded-sm font-semibold hover:bg-green-400"
      onClick = {handleClick}
    >
      New artwork
    </button>
  )
}