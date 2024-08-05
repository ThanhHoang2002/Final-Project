import { chunkArray } from './../../../utils/fomat'
import { FeedBack } from '../../../types'

const data: FeedBack[] = [
  {
    id: 1,
    img: 'https://www.pizzaexpress.vn/wp-content/uploads/2018/08/24.png',
    name: 'Phượng Nguyễn',
    feedback:
      'Thấy mọi người review khá tốt nên mình gọi thử. Đầu tiên là vô cùng hài lòng với khoản Ship. Mình gọi giờ cao điểm, hẹn 1 tiếng lấy mà mới 30ph đã có nv gọi lấy bánh. Bánh đến vẫn nóng hổi, ăn khá vừa miệng, chắc sẽ gọi ship dài dài'
  },
  {
    id: 2,
    img: 'https://www.pizzaexpress.vn/wp-content/uploads/2018/08/13.png',
    name: 'An Bình',
    feedback:
      'Nhà mình ngay Giảng Võ nên cũng rất ưa đặt pizza ở Pizza Express Ngọc Khánh gần nhà. Và quan trọng là chất lượng pizza ở đây mình thấy ngon lắm nhé. Giá tính ra cũng rẻ. Mình hay gọi size 24cm tính tiền cho dễ. 1 cái size 24 là 100k. 30cm là 140k.'
  },
  {
    id: 3,
    img: 'https://www.pizzaexpress.vn/wp-content/uploads/2018/08/19.png',
    name: 'Minh Hà',
    feedback: 'Pizzier làm bánh rất ngon, dịch vụ ship nhanh chóng. Mình sẽ tiếp tục ủng hộ.'
  },
  {
    id: 4,
    img: 'https://www.pizzaexpress.vn/wp-content/uploads/2018/08/15.png',
    name: 'Trung Hiếu',
    feedback: 'Đặt pizza buổi trưa, chưa tới 30 phút đã có. Bánh thơm ngon, đúng ý mình. Rất hài lòng!'
  },
  {
    id: 5,
    img: 'https://www.pizzaexpress.vn/wp-content/uploads/2018/08/9.png',
    name: 'Kim Anh',
    feedback: 'Pizza ngon, giao hàng nhanh. Mình sẽ tiếp tục ủng hộ Pizzier.'
  },
  {
    id: 6,
    img: 'https://www.pizzaexpress.vn/wp-content/uploads/2018/08/12.png',
    name: 'Hoàng Nam',
    feedback: 'Pizza ở đây thật sự ngon, dịch vụ ship rất tốt. Rất hài lòng!'
  },
  {
    id: 7,
    img: 'https://www.pizzaexpress.vn/wp-content/uploads/2018/08/9.png',
    name: 'Tú Anh',
    feedback: 'Pizza của Pizzier rất ngon, dịch vụ ship nhanh chóng. Mình sẽ tiếp tục ủng hộ.'
  },
  {
    id: 8,
    img: 'https://www.pizzaexpress.vn/wp-content/uploads/2018/08/5.png',
    name: 'Mai Phương',
    feedback: 'Đặt pizza buổi tối, chưa đầy 30 phút đã nhận được. Bánh nóng hổi và rất ngon. Cảm ơn Pizzier!'
  },
  {
    id: 9,
    img: 'https://www.pizzaexpress.vn/wp-content/uploads/2018/08/7.png',
    name: 'Quốc Bảo',
    feedback: 'Bánh pizza rất ngon, ship nhanh. Mình sẽ tiếp tục ủng hộ.'
  },
  {
    id: 10,
    img: 'https://www.pizzaexpress.vn/wp-content/uploads/2018/08/6.png',
    name: 'Hải Yến',
    feedback: 'Pizza của Pizzier rất ngon, dịch vụ ship tốt. Rất hài lòng!'
  },
  {
    id: 11,
    img: 'https://www.pizzaexpress.vn/wp-content/uploads/2018/08/24.png',
    name: 'Văn Thanh',
    feedback: 'Bánh pizza thơm ngon, giao hàng nhanh chóng. Sẽ ủng hộ Pizzier dài dài.'
  },
  {
    id: 12,
    img: 'https://www.pizzaexpress.vn/wp-content/uploads/2018/08/8.png',
    name: 'Thuỳ Linh',
    feedback: 'Mình rất thích pizza của Pizzier, dịch vụ ship rất nhanh và chuyên nghiệp. Rất hài lòng!'
  },
  {
    id: 13,
    img: 'https://www.pizzaexpress.vn/wp-content/uploads/2018/08/7.png',
    name: 'Đức Minh',
    feedback: 'Pizza ngon, giao hàng nhanh. Mình sẽ tiếp tục ủng hộ Pizzier.'
  },
  {
    id: 14,
    img: 'https://www.pizzaexpress.vn/wp-content/uploads/2018/08/9.png',
    name: 'Ngọc Trinh',
    feedback: 'Bánh pizza rất ngon, ship nhanh chóng. Rất hài lòng với dịch vụ của Pizzier!'
  },
  {
    id: 15,
    img: 'https://www.pizzaexpress.vn/wp-content/uploads/2018/08/10.png',
    name: 'Tuấn Anh',
    feedback: 'Đặt pizza buổi tối, giao hàng nhanh chóng và bánh rất ngon. Rất hài lòng!'
  },
  {
    id: 16,
    img: 'https://www.pizzaexpress.vn/wp-content/uploads/2018/08/13.png',
    name: 'Phương Thảo',
    feedback: 'Pizza ngon, dịch vụ ship rất tốt. Mình sẽ tiếp tục ủng hộ Pizzier.'
  },
  {
    id: 17,
    img: 'https://www.pizzaexpress.vn/wp-content/uploads/2018/08/12.png',
    name: 'Minh Tuấn',
    feedback: 'Bánh pizza rất ngon, giao hàng nhanh chóng. Rất hài lòng!'
  },
  {
    id: 18,
    img: 'https://www.pizzaexpress.vn/wp-content/uploads/2018/08/6.png',
    name: 'Ngọc Bích',
    feedback: 'Pizza của Pizzier rất ngon, dịch vụ ship tốt. Mình sẽ tiếp tục ủng hộ.'
  },
  {
    id: 19,
    img: 'https://www.pizzaexpress.vn/wp-content/uploads/2018/08/15.png',
    name: 'Anh Đức',
    feedback: 'Đặt pizza buổi trưa, giao hàng nhanh chóng và bánh rất ngon. Rất hài lòng!'
  },
  {
    id: 20,
    img: 'https://www.pizzaexpress.vn/wp-content/uploads/2018/08/5.png',
    name: 'Lan Hương',
    feedback: 'Pizza ngon, dịch vụ ship rất tốt. Mình sẽ tiếp tục ủng hộ Pizzier.'
  }
]

export const getAllFeedBack = async () => {
  return chunkArray(data, 4)
}
