import { Banner } from '../types'

export const fetchBanner = async () => {
  const data: Banner[] = [
    {
      img: 'https://cdn.pizzahut.vn/images/Web_V3/Homepage/DESTKOP-VIE_M6265_131120231031.jpg',
      title: 'Slide1',
      linkTo: '/sign-up'
    },
    {
      img: '/pizza_project_image/banner/banner3.jpg',
      title: 'Slide2',
      linkTo: '/order'
    }
  ]
  return data
}
