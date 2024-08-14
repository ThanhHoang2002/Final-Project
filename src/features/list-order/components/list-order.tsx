// /* eslint-disable react-hooks/exhaustive-deps */
// import TableOrder from './table-order'
// import axios from 'axios'
// import { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// const ListOrder = () => {
//   const [orders1, setOrders1] = useState([])
//   const [orders2, setOrders2] = useState([])
//   const navigate = useNavigate()
//   useEffect(() => {
//     const fetchConfirmedOrders = async () => {
//       try {
//         if (!localStorage.getItem('token')) {
//           navigate('/login-admin')
//         } else {
//           const token = localStorage.getItem('token')
//           const user = JSON.parse(localStorage.getItem('user') as string)
//           const response = await axios.get(
//             `http://localhost:8080/api/v1/order/getConfirmedOrder/${user.store.storeId}`,
//             {
//               headers: {
//                 Authorization: `Bearer ${token}`
//               }
//             }
//           )
//           setOrders1(response.data.result)
//         }
//       } catch (error) {
//         console.error('Error:', error)
//       }
//     }
//     const fetchUnconfirmOrder = async () => {
//       try {
//         if (!localStorage.getItem('token')) {
//           navigate('/login-admin')
//         } else {
//           const token = localStorage.getItem('token')
//           const user = JSON.parse(localStorage.getItem('user') as string)
//           const response = await axios.get(
//             `http://localhost:8080/api/v1/order/getUnconfirmOrder/${user.store.storeId}`,
//             {
//               headers: {
//                 Authorization: `Bearer ${token}`
//               }
//             }
//           )
//           setOrders2(response.data.result)
//         }
//       } catch (error) {
//         console.error('Error:', error)
//       }
//     }
//     fetchConfirmedOrders()
//     fetchUnconfirmOrder()
//   }, [])
//   return (
//     <div className='p-5 w-full grid grid-cols-2 gap-4'>
//       <TableOrder data={orders1} title={'Đơn hàng đã xác nhận'}/>
//       <TableOrder data={orders2} title={'Đơn hàng chưa xác nhận'}/>
//     </div>
//   )
// }

// export default ListOrder
