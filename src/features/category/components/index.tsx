/* eslint-disable react-hooks/exhaustive-deps */
import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../../../hooks/reduxHooks'
const Category = () => {
  const categories = useAppSelector((state) => state.catagoriesState.categories)
  return (
    <div className='w-full flex justify-between'>
      {categories.map((category) => {
        return (
          <NavLink
            to={'/order/' + category.CategoryCode}
            key={category.CategoryCode}
            className={({ isActive }) => (isActive ? 'bg-black' : '')}
          >
            {category.CategoryName_EN}
          </NavLink>
        )
      })}
    </div>
  )
}

export default Category
