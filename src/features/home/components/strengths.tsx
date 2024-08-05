import { useEffect, useState } from 'react'
import background from '../../../assets/images/background/footer_top_bg.png'
import { Strength } from '../../../types'
import { getAllStrengths } from '../api/getAllStrengths'
import { useCurrentLanguage } from '../../../hooks/customHook'
const Strengths = () => {
  const [strengths, setStrengths] = useState<Strength[]>([])
  const languages = useCurrentLanguage()
  useEffect(() => {
    getAllStrengths().then((data) => {
      setStrengths(data)
    })
  }, [])
  return (
    <div
      className='py-[50px] desktop:px-40  grid grid-cols-1 tablet:grid-cols-4 bg-no-repeat bg-cover bg-center font-montserrat'
      style={{ backgroundImage: `url(${background})` }}
    >
      {strengths.map((strength) => (
        <div key={strength.id} className='flex flex-col items-center px-[15px]'>
          <img src={strength.img} alt='strength' className=' h-[64px] mb-[30px]' />
          <p className='mb-5 uppercase font-semibold text-[#c00a27] text-center text-lg'>
            {languages === 'vi' ? strength.title : strength.title_en}
          </p>
          <p className='text-center italic text-sm leading-[1.5em] text-slate-500'>
            {languages === 'vi' ? strength.des : strength.des_en}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Strengths
