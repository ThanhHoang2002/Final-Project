const env = import.meta.env
export const paymentMethod = [
  {
    image: 'https://cdn.pizzahut.vn/images/Web_V3/Payment/cash.png',
    name: 'cash'
  },
  {
    image: 'https://cdn.pizzahut.vn/images/Web_V3/Payment/ZaloPay_vuong.png',
    name: 'ZaloPay'
  },
  {
    image: 'https://cdn.pizzahut.vn/images/Web_V3/Payment/momo.png',
    name: 'MoMo'
  },
  {
    image: 'https://cdn.pizzahut.vn/images/Web_V3/Payment/visa.png',
    name: 'ATM/VISA'
  },
  {
    image: 'https://cdn.pizzahut.vn/images/Web_V3/Payment/vnpay.png',
    name: 'Vnpay'
  }
]
export const BaseURLGoongAPI = env.VITE_GOONG_MAPS_BASE_URL
