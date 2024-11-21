import Image from 'next/image'

import EmptyStar from '@/assets/icons/emptystar.svg'
import FullStar from '@/assets/icons/fullstar.svg'
import HalfStar from '@/assets/icons/halfstar.svg'

const Rating = ({ rating, maxRating = 5 }: { rating: number; maxRating?: number }) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  const emptyStars = maxRating - Math.ceil(rating)

  return (
    <div className="flex items-center">
      {/* Bintang penuh */}
      {[...Array(fullStars)].map((_, index) => (
        <Image key={index} src={FullStar} alt="" />
      ))}

      {/* Bintang setengah */}
      {hasHalfStar && <Image src={HalfStar} alt="" />}

      {[...Array(emptyStars)].map((_, index) => (
        <Image key={index} src={EmptyStar} alt="" />
      ))}
    </div>
  )
}

export default Rating
