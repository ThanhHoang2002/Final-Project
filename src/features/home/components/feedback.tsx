import { useEffect, useState } from 'react'
import background from '../../../assets/images/background/bg_nhanxet.jpg'
import { getAllFeedBack } from '../api/getAllFeedBack'
import { FeedBack } from '../../../types'
import { Carousel } from 'antd'
import { useTranslation } from 'react-i18next'
const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState<FeedBack[][]>([])
  const { t } = useTranslation('home')
  useEffect(() => {
    getAllFeedBack().then((data) => {
      setFeedbacks(data)
    })
  }, [])
  return (
    <div
      className='py-[60px] bg-no-repeat bg-cover bg-center bg-transparent'
      style={{ backgroundImage: `url(${background})` }}
    >
      <h2 className='text-center font-semibold uppercase mb-[30px]'>{t("Customer's feedback")}</h2>
      <div>
        <Carousel draggable dots autoplay>
          {feedbacks.map((feedback) => (
            <div key={feedback[0].id}>
              <div className='grid grid-cols-2 gap-8 px-[10%]'>
                {feedback.map((item) => (
                  <div key={item.id} className='flex p-5 bg-white rounded-md'>
                    <img src={item.img} alt='feedback' className=' h-[70px] mb-[30px]' />
                    <div className='pl-5'>
                      <p className='text-left italic text-sm leading-[1.5em] mb-3'>"{item.feedback}"</p>
                      <p className='font-semibold'>{item.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Feedback
