export type Banner = {
  BANNER_POSITION_ID: string | null
  BANNER_POSITION_NAME: string | null
  BANNER_NAME: string | null
  BANNER_IMAGE_LINK: string | null
  BANNER_IMAGE_LINK_EN: string | null
  BANNER_IMAGE_LINK_TABLET: string | null
  BANNER_IMAGE_LINK_TABLET_EN: string | null
  BANNER_IMAGE_LINK_MOBILE: string | null
  BANNER_IMAGE_LINK_MOBILE_EN: string | null
  BANNER_DIRECTIONAL_LINK: string | null
  OUTSIDE_LINK: string | null
}
export type Category = {
  CategoryCode: string
  CategoryName_VN: string
  CategoryName_EN: string
  PhotoLink: string
  PhotoLink_EN: string
  orderby: string
  ComboComponent: boolean
  Default_Cate: boolean
  HomepageMenu: boolean
}
export type Store = {
  address: string
  local: string
  name: string
  storeId: string
}
export enum ELanguage {
  VI = 'vi',
  EN = 'en',
  KO = 'ko'
}
