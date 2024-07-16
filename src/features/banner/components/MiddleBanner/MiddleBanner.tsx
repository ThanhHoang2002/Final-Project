import { useNavigate } from 'react-router-dom'
import { Banner, ELanguage } from '../../../../types'
import { useCurrentLanguage } from '../../../../hooks/customHook'

interface MiddleBannerProps {
  index: number
  banner: Banner
}
const MiddleBanner = (props: MiddleBannerProps) => {
  const { index, banner } = props
  const navigate = useNavigate()
  const currentLanguage = useCurrentLanguage() as ELanguage
  return (
    <div
      className={`mt-[10px] px-[6px] tablet:m-0 tablet:p-[10px] flex justify-center ${index % 2 === 0 ? 'tablet:justify-end' : 'tablet:justify-start'}`}
    >
      <img
        className='max-w-[540px] min-h-8 w-full cursor-pointer'
        src={
          currentLanguage === ELanguage.VI
            ? (banner.BANNER_IMAGE_LINK as string)
            : (banner.BANNER_IMAGE_LINK_EN as string)
        }
        loading='lazy'
        alt={banner.BANNER_NAME as string}
        onClick={() => navigate(banner.BANNER_DIRECTIONAL_LINK as string)}
      />
    </div>
  )
}

export default MiddleBanner
