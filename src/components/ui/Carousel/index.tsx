import { Carousel as CarouselAntd } from 'antd'
import { Banner, ELanguage } from '../../../types'
import { MouseEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCurrentLanguage } from '../../../hooks/customHook'
interface CarouselProps {
  banner: Banner[]
}
const Carousel = (props: CarouselProps) => {
  const { banner } = props
  const [isDragging, setIsDragging] = useState(false)
  const navigate = useNavigate()
  const currentLanguage = useCurrentLanguage()
  const handleBeforeChange = () => {
    setIsDragging(true)
  }

  const handleAfterChange = () => {
    setIsDragging(false)
  }

  const handleClick = (e: MouseEvent, banner: Banner) => {
    if (isDragging) {
      e.preventDefault()
      console.log('dragging')
    } else {
      navigate(banner.BANNER_DIRECTIONAL_LINK as string)
    }
  }
  return (
    <CarouselAntd autoplay arrows draggable beforeChange={handleBeforeChange} afterChange={handleAfterChange}>
      {banner.map((item, index) => (
        <div key={index}>
          <img
            src={
              currentLanguage === ELanguage.VI
                ? (item.BANNER_IMAGE_LINK_MOBILE as string)
                : (item.BANNER_IMAGE_LINK_MOBILE_EN as string)
            }
            alt={item.BANNER_NAME as string}
            className='w-full cursor-pointer min-h-48 tablet:!hidden'
            onClick={(e) => handleClick(e, item)}
          />
          <img
            src={
              currentLanguage === ELanguage.VI
                ? (item.BANNER_IMAGE_LINK_TABLET as string)
                : (item.BANNER_IMAGE_LINK_TABLET_EN as string)
            }
            alt={item.BANNER_NAME as string}
            className='w-full cursor-pointer min-h-48 !hidden tablet:!block laptop:!hidden'
            onClick={(e) => handleClick(e, item)}
          />
          <img
            src={
              currentLanguage === ELanguage.VI
                ? (item.BANNER_IMAGE_LINK as string)
                : (item.BANNER_IMAGE_LINK_EN as string)
            }
            alt={item.BANNER_NAME as string}
            className='w-full cursor-pointer min-h-48 !hidden  laptop:!block'
            onClick={(e) => handleClick(e, item)}
          />
        </div>
      ))}
    </CarouselAntd>
  )
}

export default Carousel
