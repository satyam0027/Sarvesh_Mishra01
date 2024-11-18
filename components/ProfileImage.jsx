import Image from 'next/image'

export default function ProfileImage() {
  return (
    <div className="relative w-[300px] h-[300px] flex-shrink-0">
      <Image
        src="/FKYX5745.jpg"
        alt="Sarvesh Mishra"
        fill
        sizes="(max-width: 768px) 100vw, 300px"
        className="rounded-full object-cover"
        priority
      />
    </div>
  )
}