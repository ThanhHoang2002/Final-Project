import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer h-auto bg-[#000000e6] flex tablet:justify-center tablet:p-0 p-[10px]'>
      <div className=' tablet:w-[70%] w-full'>
        <div className='grid tablet:grid-cols-5 grid-cols-2'>
          <div className=''>
            <Link to='/order'>
              <h3 className='mt-[20px] mb-[10px] text-[#fdd760] font-semibold uppercase leading-6 text-[13px]'>MENU</h3>
            </Link>
            <Link className='jss1416' to='/order/50percentoff'>
              <p className='text-white my-[9px] font-normal leading-5 cursor-pointer text-[12px] '>SIÊU DEAL</p>
            </Link>
            <Link className='jss1416' to='/order/mybox_2023'>
              <p className='text-white my-[9px] font-normal leading-5 cursor-pointer text-[12px]'>MY BOX</p>
            </Link>
            <Link className='jss1416' to='/order/combo'>
              <p className='text-white my-[9px] font-normal leading-5 cursor-pointer text-[12px]'>COMBO</p>
            </Link>
            <Link className='jss1416' to='/order/buy1get3'>
              <p className='text-white my-[9px] font-normal leading-5 cursor-pointer text-[12px]'>MUA 1 ĐƯỢC 3</p>
            </Link>
            <Link className='jss1416' to='/order/chicken_lover'>
              <p className='text-white my-[9px] font-normal leading-5 cursor-pointer text-[12px]'>GHIỀN GÀ</p>
            </Link>
            <Link className='jss1416' to='/order/pizza'>
              <p className='text-white my-[9px] font-normal leading-5 cursor-pointer text-[12px]'>PIZZA</p>
            </Link>
            <Link className='jss1416' to='/order/starter'>
              <p className='text-white my-[9px] font-normal leading-5 cursor-pointer text-[12px]'>MÓN KHAI VỊ</p>
            </Link>
            <Link className='jss1416' to='/order/drink'>
              <p className='text-white my-[9px] font-normal leading-5 cursor-pointer text-[12px]'>THỨC UỐNG</p>
            </Link>
          </div>
          <div className=''>
            <Link to='/order'>
              <h3 className='mt-[20px] mb-[10px] text-[#fdd760] font-semibold uppercase leading-6 text-[13px]'>
                VỀ CHÚNG TÔI
              </h3>
            </Link>
            <Link className='jss1416' to='/order/50percentoff'>
              <p className='text-white my-[9px] font-normal leading-5 cursor-pointer text-[12px]'>Giới Thiệu</p>
            </Link>
            <Link className='jss1416' to='/order/mybox_2023'>
              <p className='text-white my-[9px] font-normal leading-5 cursor-pointer text-[12px]'>
                Tầm nhìn của chúng tôi
              </p>
            </Link>
            <Link className='jss1416' to='/order/combo'>
              <p className='text-white my-[9px] font-normal leading-5 cursor-pointer text-[12px]'>Giá trị cốt lõi</p>
            </Link>
            <Link className='jss1416' to='/order/buy1get3'>
              <p className='text-white my-[9px] font-normal leading-5 cursor-pointer text-[12px]'>
                Vệ sinh an toàn thực phẩm
              </p>
            </Link>
          </div>
          <div className=''>
            <Link to='/order'>
              <h3 className='mt-[20px] mb-[10px] text-[#fdd760] font-semibold uppercase leading-6 text-[13px]'>
                Tìm cửa hàng
              </h3>
            </Link>
            <Link className='jss1416' to='/order/buy1get3'>
              <p className='text-white my-[9px] font-normal leading-5 cursor-pointer text-[12px]'>Miền bắc</p>
            </Link>
            <Link className='jss1416' to='/order/mybox_2023'>
              <p className='text-white my-[9px] font-normal leading-5 cursor-pointer text-[12px]'>Miền Trung</p>
            </Link>
            <Link className='jss1416' to='/order/combo'>
              <p className='text-white my-[9px] font-normal leading-5 cursor-pointer text-[12px]'>Miền Nam</p>
            </Link>
          </div>
          <div className=''>
            <Link to='/order'>
              <h3 className='mt-[20px] mb-[10px] text-[#fdd760] font-semibold uppercase leading-6 text-[13px]'>
                Thông tin tuyển dụng
              </h3>
            </Link>
            <Link className='jss1416' to='/order/buy1get3'>
              <p className='text-white my-[9px] font-normal leading-5 cursor-pointer text-[12px]'>Cơ hộ nghề nghiệp</p>
            </Link>
            <Link to='/order'>
              <h3 className='mt-[20px] mb-[10px] text-[#fdd760] font-semibold uppercase leading-6 text-[13px]'>
                Cần sự hỗ trợ?
              </h3>
            </Link>
            <p className='text-[#0A8020] my-[9px] font-normal leading-5 cursor-pointer text-[16px]'>1234 5678</p>
          </div>
          <div className=''>
            <Link to='/order'>
              <h3 className='mt-[20px] mb-[10px] text-[#fdd760] font-semibold uppercase leading-6 text-[13px]'>
                Liên hệ với pizzeria{' '}
              </h3>
            </Link>
            <div className='flex'>
              <img
                className='mr-[8px] cursor-pointer'
                src='https://cdn.pizzahut.vn/images/Web_V3/Homepage/fb.png'
                alt=':img'
              />
              <img
                className='mr-[8px] cursor-pointer'
                src='https://cdn.pizzahut.vn/images/Web_V3/Homepage/youtube.png'
                alt=':img'
              />
              <img
                className='mr-[8px] cursor-pointer'
                src='https://cdn.pizzahut.vn/images/Web_V3/Homepage/email.png'
                alt=':img'
              />
            </div>
            <Link to='/order'>
              <h3 className='mt-[20px] mb-[10px] text-[#fdd760] font-semibold uppercase leading-6 text-[13px]'>
                Tải ứng dụng trên điện thoại
              </h3>
            </Link>
            <div className='flex'>
              <img
                className='cursor-pointer h-[64px]'
                src='https://cdn.pizzahut.vn/images/Web_V3/Homepage/Footer/App-QR-CODE.png'
                alt=':img'
              />
              <div className='ml-1'>
                <img
                  className='cursor-pointer h-[30px]'
                  src='https://cdn.pizzahut.vn/images/Web_V3/Homepage/Footer/appstore.png'
                  alt=':img'
                />
                <img
                  className='cursor-pointer h-[30px]'
                  src='https://cdn.pizzahut.vn/images/Web_V3/Homepage/Footer/playstore.png'
                  alt=':img'
                />
              </div>
            </div>
          </div>
          <div className='h-auto tablet:hidden flex flex-col mt-5 '>
            <p className='text-white text-[12px] font-normal cursor-pointer block'>Điều khoản & Điều kiện</p>
            <img
              className='cursor-pointer max-w-[100px]'
              src='https://cdn.pizzahut.vn/images/Web_V3/Homepage/thongbaobocongthuong.png'
              alt=':img'
            />
          </div>
        </div>
        <div className='h-auto w-full mt-[10px] border-t py-[20px] border-white flex text-center tablet:text-left'>
          <div className='tablet:w-[85%] w-full'>
            <div className='flex justify-center tablet:justify-start'>
              <p className='pr-[4px] my-[2px] text-white text-[12px] font-normal border-r border-white'>
                Công ty TNHH Pizza Việt Nam
              </p>
              <p className='my-[2px] ml-[4px] text-white text-[12px] font-normal'>Số ĐKKD: 0303902751</p>
            </div>
            <div className='py-[4px] text-white text-[12px] font-normal'>
              Tầng 10, Tòa nhà Opal Office, số 92 Nguyễn Hữu Cảnh, Phường 22, Quận Bình Thạnh, TP.HCM, Việt Nam.
            </div>
          </div>
          <div className='w-[15%] h-auto hidden tablet:block'>
            <p className='text-white text-[12px] font-normal mb-[5px] cursor-pointer block text-right'>
              Điều khoản & Điều kiện
            </p>
            <img
              className='cursor-pointer w-[130px] h-[49px] translate-x-7 '
              src='https://cdn.pizzahut.vn/images/Web_V3/Homepage/thongbaobocongthuong.png'
              alt=':img'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
