/* eslint-disable react-hooks/exhaustive-deps */
import { NavLink, useLocation } from 'react-router-dom'
import { useAppSelector } from '../../../hooks/reduxHooks'
import { useCurrentLanguage } from '../../../hooks/customHook'
import { ELanguage } from '../../../types'
import { useEffect, useRef } from 'react'
import iconNext from '../../../assets/images/icons/icons8-next-20.png'
import iconPrevious from '../../../assets/images/icons/icons8-previous-20.png'
const Category = () => {
  const categories = useAppSelector((state) => state.catagoriesState.categories)
  const currentLanguage = useCurrentLanguage() as ELanguage
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const buttonLeftRef = useRef<HTMLButtonElement>(null)
  const location = useLocation()

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -500, behavior: 'smooth' })
    }
  }
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 500, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const activeCategory = categories.find((category) => location.pathname === '/order/' + category.CategoryCode)
    if (activeCategory && scrollContainerRef.current) {
      const activeLink = scrollContainerRef.current.querySelector(
        `a[href='/order/${activeCategory.CategoryCode}']`
      ) as HTMLElement
      if (activeLink) {
        scrollContainerRef.current.scrollTo({
          left: activeLink.offsetLeft - scrollContainerRef.current.clientWidth / 2 + activeLink.clientWidth / 2,
          behavior: 'smooth'
        })
      }
    }
    scrollContainerRef.current?.addEventListener('click', (even: MouseEvent) => {
      const position = even.clientX - (buttonLeftRef.current?.clientWidth as number)
      const scrollContainerWidth = scrollContainerRef.current?.clientWidth as number
      scrollContainerRef.current?.scrollBy({
        left: -(scrollContainerWidth / 2 - position),
        behavior: 'smooth'
      })
    })
    return scrollContainerRef.current?.removeEventListener('click', () => {})
  }, [])

  return (
    <div className='w-full flex shadow-category pt-[6px] desktop:shadow-none desktop:pt-0 desktop:border-y bg-white'>
      <button ref={buttonLeftRef} onClick={scrollLeft} className='w-10 hidden tablet:flex justify-center items-center'>
        <img src={iconPrevious} alt='next' />
      </button>
      <div ref={scrollContainerRef} className='w-full flex overflow-x-scroll scrollbar-none bg-white'>
        {categories.map((category) => {
          return (
            <NavLink
              to={'/order/' + category.CategoryCode}
              key={category.CategoryCode}
              className={({ isActive }) =>
                `text-sm inline-flex justify-center items-center rounded-lg shrink-0 mx-[3px] px-3 py-[6px] 
                   min-h-9 max-h-9 min-w-[72px] max-w-[264px] font-bold
                   tablet:min-w-[160px] 
                   desktop:min-h-12 desktop:rounded-none desktop:min-w-[130px]
                ${isActive ? 'bg-[url(/src/assets/images/icons/backgroundCategory.png)] bg-cover text-white' : 'text-black hover:text-red desktop:opacity-60'}`
              }
            >
              {currentLanguage === ELanguage.VI ? category.CategoryName_VN : category.CategoryName_EN}
            </NavLink>
          )
        })}
      </div>
      <button onClick={scrollRight} className='w-10 hidden tablet:flex justify-center items-center'>
        <img src={iconNext} alt='next' />
      </button>
    </div>
  )
}

export default Category
