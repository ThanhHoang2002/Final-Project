import { fetchTopBanner } from '../../../api/backend/bannerApi'
import { useEffect, useState } from 'react'
import Carousel from '../../../components/ui/Carousel'
import { Banner } from '../../../types'
const TopBanner = () => {
  const [banner, setBanner] = useState<Banner[]>([])
  useEffect(() => {
    fetchTopBanner().then((data) => {
      setBanner(data)
    })
  }, [])
  return (
    <div>
      <Carousel banner={banner} />
    </div>
  )
}

export default TopBanner
