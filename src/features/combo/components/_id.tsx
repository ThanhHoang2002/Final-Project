import { useState } from 'react'
import { useAppDispatch } from '../../../hooks/reduxHooks'
import { closeModal } from '../../../store/slices/ModalSlice'
import { Combo } from '../../../types'
import { formatCurrency } from '../../../utils/fomat'
import close from '../../../assets/images/icons/close.png'
import { Skeleton } from 'antd'
import { useTranslation } from 'react-i18next'
interface ComboDetailProps {
  combo: Combo
  handleAddCombo: () => void
}
const ComboDetail = (props: ComboDetailProps) => {
  const combo = props.combo
  const [isLoadingImage, setIsLoadingImage] = useState<boolean>(true)
  const handleAddCombo = props.handleAddCombo
  const dispatch = useAppDispatch()
  const { t } = useTranslation('order')
  const handleImageLoad = () => {
    setIsLoadingImage(() => false)
  }
  return (
    <>
      <div
        className={`relative bg-white h-[100vh] w-[100vw] laptop:h-[90vh] laptop:w-[70vw] rounded-[4px] laptop:pt-6 ${isLoadingImage ? 'hidden' : ''}`}
      >
        <div className='laptop:px-[10px] flex laptop:flex-row flex-col-reverse justify-between'>
          <div className='laptop:w-[50%] p-[6px]'>
            <p className='uppercase font-bold laptop:font-medium text-xl px-[10px] text-[rgba(0,0,0,0.54)]'>
              {combo.name}
            </p>
            <p className='text-[rgba(0,0,0,0.54)] laptop:px-[10px] pl-[10px]'>{combo.des}</p>
            <div className='mt-5'>
              <div className='flex justify-between'>
                <div className='text-[#231f20] px-[10px]'>{t('COMBO Price')}:</div>
                <div>{formatCurrency(combo.price)}</div>
              </div>
              <div className='flex justify-between'>
                <div className='text-[#231f20] px-[10px]'>{t('Shipping fee')}:</div>
                <div>{formatCurrency(22000)}</div>
              </div>
            </div>
          </div>
          <div className='w-full laptop:w-[40%] flex items-center'>
            <img src={combo.image} alt='combo' onLoad={handleImageLoad} />
          </div>
        </div>
        <div className='relative p-[10px]'>
          <div className='h-auto'>
            {combo.pizzaInCombos?.map((pizzaInCombo, index) => (
              <div key={index} className='flex justify-between border border-[#0A8020] rounded-[4px] p-[15px] mb-1'>
                <div className=''>
                  <p className='text-[#0A8020] '>
                    {pizzaInCombo.quantity}
                    {' x '}
                    {pizzaInCombo.pizza.name}
                  </p>
                  <p>
                    {'+ '}
                    {pizzaInCombo.base}({pizzaInCombo.pizza.size})
                  </p>
                </div>
                <div className='flex items-center'>
                  <p>{formatCurrency(pizzaInCombo.pizza.price)}</p>
                </div>
              </div>
            ))}
            {combo.foodInCombos?.map((foodInCombo, index) => (
              <div
                key={index}
                className='flex justify-between items-center border border-[#0A8020] rounded-[4px] p-[15px] mb-1'
              >
                <div className=''>
                  <p className='text-[#0A8020] '>
                    {foodInCombo.quantity}
                    {' x '}
                    {foodInCombo.food.name}
                  </p>
                </div>
                <div className='flex items-center'>
                  <p>{formatCurrency(foodInCombo.food.price)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='absolute bottom-[1%] w-[98%] left-[1%]'>
          <button className='uppercase w-full bg-[#0A8020] text-white rounded-[4px] h-[36px] ' onClick={handleAddCombo}>
            {t('Add to my basket')}
          </button>
        </div>
        <button
          className={`absolute laptop:top-[-10px] laptop:right-[-15px] top-1 right-1`}
          onClick={() => dispatch(closeModal())}
        >
          <img className='w-[30px]' src={close} alt='close'></img>
        </button>
      </div>
      <div
        className={`skeleton relative bg-white h-[100vh] w-[100vw] laptop:h-[90vh] laptop:w-[70vw] rounded-[4px] laptop:pt-6 ${isLoadingImage ? '' : 'hidden'}`}
      >
        <div className='laptop:px-[10px] flex laptop:flex-row flex-col-reverse justify-between'>
          <div className='laptop:w-[50%] p-[6px]'>
            <p className='uppercase font-bold laptop:font-medium text-xl px-[10px] text-[rgba(0,0,0,0.54)]'>
              <Skeleton.Input style={{ height: '20px', width: '100%' }} active />
            </p>
            <Skeleton.Input style={{ height: '20px', width: '100%' }} active />{' '}
            <div className='mt-5'>
              <Skeleton.Input style={{ height: '20px', width: '100%' }} active />
              <Skeleton.Input style={{ height: '20px', width: '100%' }} active />
            </div>
          </div>
          <div className='w-full laptop:w-[40%] flex items-center'>
            <Skeleton.Input style={{ height: '150px', width: '100%' }} active />
          </div>
        </div>
        <div className='relative p-[10px]'>
          <Skeleton.Input style={{ height: '120px', width: '100%' }} active />
        </div>
        <div className='absolute bottom-[1%] w-[98%] left-[1%]'>
          <Skeleton.Input style={{ height: '50px', width: '100%' }} active />
        </div>
      </div>
    </>
  )
}

export default ComboDetail
