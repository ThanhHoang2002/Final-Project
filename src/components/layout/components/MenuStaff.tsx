import { CircleStackIcon, ClipboardDocumentListIcon, PowerIcon } from '@heroicons/react/24/solid'
import { Menu } from 'antd'
import { ItemType } from 'antd/es/menu/interface'
import { useNavigate } from 'react-router-dom'
const MenuStaff = () => {
  const items: ItemType[] = [
    {
      key: 'sub1',
      icon: <ClipboardDocumentListIcon strokeWidth={3} className='h-6 w-6' />,
      label: 'Đặt hàng'
    },
    {
      key: 'sub2',
      icon: <CircleStackIcon strokeWidth={3} className='h-6 w-6' />,
      label: 'Đơn hàng'
    },
    {
      type: 'divider'
    },
    {
      key: 'sub3',
      icon: <PowerIcon className='h-5 w-5' />,
      label: 'Đăng xuất'
    }
  ]
  const navigate = useNavigate()
  const onClick = (e: ItemType) => {
    if (e && e.key === 'sub1') {
      navigate('/staff/order')
    } else if (e && e.key === 'sub2') {
      navigate('/staff/list-order')
    } else if (e && e.key === 'sub3') {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      navigate('/user-login')
    }
  }
  return (
    <div>
      <div className='h-[72px] w-full p-4'>
        <img
          className='h-12'
          src='https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Flogo%2Flogo.png?alt=media&token=16501ae5-ad8f-40da-86d4-0ebe1a4e9a0e'
          alt='logo'
        />
      </div>
      <div className='p-5 text-center font-bold text-xl'>Pizzeria Huỳnh Thúc Kháng</div>
      <Menu
        onClick={onClick}
        style={{
          width: 260
        }}
        defaultSelectedKeys={['sub1']}
        defaultOpenKeys={['sub1']}
        mode='inline'
        items={items}
      />
    </div>
  )
}

export default MenuStaff
