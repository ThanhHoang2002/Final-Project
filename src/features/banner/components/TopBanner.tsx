import { useEffect, useState } from 'react'
import Carousel from '../../../components/ui/Carousel'
import { Banner } from '../../../types'
import { fetchTopBanner } from '../api/bannerApi'
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
