import { useEffect, useState } from 'react'
import { Banner } from '../../../../types'
import MiddleBanner from './MiddleBanner'
import { fetchMiddleBanner } from '../../api/bannerApi'

const ListMiddleBanner = () => {
  const [banner, setBanner] = useState<Banner[]>([])
  useEffect(() => {
    fetchMiddleBanner().then((data) => {
      setBanner(data)
    })
  }, [])
  return (
    <div className='grid grid-cols-1 tablet:grid-cols-2 mx-auto my-0'>
      {banner.map((item, index) => {
        return <MiddleBanner key={index} banner={item} index={index} />
      })}
    </div>
  )
}

export default ListMiddleBanner
