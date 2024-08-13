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
export type Strength = {
  id: number
  img: string
  title: string
  title_en: string
  des: string
  des_en: string
}
export type FeedBack = {
  id: number
  img: string
  name: string
  feedback: string
}
export type Category = {
  CategoryCode: string
  CategoryName_VN: string
  CategoryName_EN: string
  PhotoLink: string
  PhotoLink_EN: string
  orderby: string
  ComboComponent: boolean | null
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
  EN = 'en'
  // KO = 'ko'
}

export type PizzaType = {
  pizzaTypeId: string
  name: string
  des: string
  category: string
  image: string
  pizzas: Pizza[]
}

export type Pizza = {
  pizzaId: string
  size: string
  price: number
  name: string
}

export enum ECrust {
  HAND_TOSSED = 'Đế kéo tay truyền thống',
  PAN = 'Đế giòn xốp'
}

export type Food = {
  foodId: string
  name: string
  price: number
  image: string
  des?: string
  foodCategory: string
}

export type Combo = {
  comboId: string
  name: string
  price: number
  dayStart: Date
  dayEnd: Date
  image: string
  category: string
  des: string
  foodInCombos: FoodInCombo[]
  pizzaInCombos: PizzaInCombo[]
}

export type FoodInCombo = {
  foodInComboId: number
  quantity: number
  food: Food
}

export type PizzaInCombo = {
  pizzaInComboId: number
  quantity: number
  base: string
  pizza: Pizza
}

export type Client = {
  clientId: number
  name: string
  dateOfBirth: Date
  gender: string
  phone: string
  email: string
  password: string
  point: number
  avatar: string
}

export type User = {
  userId: string
  username: string
  password: string
  name: string
}

export type Staff = User & {
  store: Store
}

export type PizzaInOrder = {
  quantity: number
  priceAtBill: number
  base: string
  pizza: Pizza
}

export type FoodInOrder = {
  quantity: number
  priceAtBill: number
  food: Food
}

export type ComboInOrder = {
  quantity: number
  priceAtBill: number
  combo: Combo
}
export type Order = {
  order_id?: number
  note: string
  paymentMethod: string
  dayOrder: Date
  address: string
  receiveMethod: string
  state: string
  store: Store
  name: string
  phone: string
  client: Client | null
  staff: Staff | null
  comboInOrders: ComboInOrder[]
  pizzaInOrders: PizzaInOrder[]
  foodInOrders: FoodInOrder[]
  total?: number
}
export enum ROLES {
  MANAGER = 'MANAGER',
  STAFF = 'STAFF'
}
export type Role = {
  name: ROLES
  description: string
}
