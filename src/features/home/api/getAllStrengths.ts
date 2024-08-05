import { Strength } from '../../../types'

const data: Strength[] = [
  {
    id: 1,
    img: 'https://www.pizzaexpress.vn/wp-content/uploads/2018/05/footer_01.png',
    title: 'Chất lượng dẫn đầu',
    title_en: 'Quality first',
    des: 'Chú trọng khâu tuyển chọn đội ngũ đầu bếp chuyên nghiệp, thực đơn của Pizzeria luôn được đổi mới, đa dạng với pizza nhiều hương vị, sandwich, mỳ ý và các món ăn nhanh khác.',
    des_en:
      "Focusing on selecting a team of professional chefs, Pizzeria's menu is always updated and diverse with many flavors of pizza, sandwiches, pasta and other fast food."
  },
  {
    id: 2,
    img: 'https://www.pizzaexpress.vn/wp-content/uploads/2018/05/footer_02.png',
    title: 'Giao hàng đúng giờ',
    title_en: 'On-time delivery',
    des: 'Để tăng cường sự tin tưởng và yên tâm với khách hàng, Pizzeria cam kết luôn giao hàng đúng giờ và chi phí giao hàng rẻ nhất để đảm bảo khách hàng có thể nhận bánh trong thời gian nhanh nhất.',
    des_en:
      'To enhance trust and peace of mind with customers, Pizzeria is committed to always delivering on time and the lowest delivery cost to ensure that customers can receive the cake in the fastest time.'
  },
  {
    id: 3,
    img: 'https://www.pizzaexpress.vn/wp-content/uploads/2018/05/footer_03.png',
    title: 'Pizza Take Away',
    title_en: 'Pizza Take Away',
    des: 'Lựa chọn cho mình một hướng đi mới để tạo nên sự khác biệt, mô hình Pizza take away - pizza mang đi giúp khách hàng tiết kiệm thời gian, đem đến sự tiện lợi tối ưu trong việc lựa chọn, thanh toán, đóng gói và nhận hàng.',
    des_en:
      'Choose for yourself a new direction to make a difference, the Pizza take away model - pizza to go helps customers save time, bring maximum convenience in choosing, paying, packaging and receiving goods.'
  },
  {
    id: 4,
    img: 'https://www.pizzaexpress.vn/wp-content/uploads/2018/05/footer_04.png',
    title: 'Phục vụ chuyên nghiệp',
    title_en: 'Professional service',
    des: 'Pizzeria cùng với đội ngũ nhân viên mang đầy sức trẻ và nhiệt huyết, chúng tôi luôn mong muốn đem lại cho khách hàng của mình chất lượng dịch vụ tốt nhất, luôn lắng nghe và chăm sóc những nhu cầu dù là nhỏ nhất của Quý khách.',
    des_en:
      'Pizzeria with a team of young and enthusiastic staff, we always want to bring the best quality of service to our customers, always listen and take care of the smallest needs of our customers.'
  }
]
export const getAllStrengths = async () => {
  return data
}
