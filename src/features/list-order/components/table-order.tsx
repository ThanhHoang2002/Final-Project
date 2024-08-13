import { Space, Table } from 'antd'
import { useState } from 'react'
import { format } from 'date-fns'
import { PencilIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-toastify'
import axios from 'axios'
const TableOrder = (props: any) => {
  const { title } = props
  const [orders, setOrders] = useState([])
  const handleStatusChange = (order_id, newState) => {
    setOrders(() => props.data.map((order) => (order.order_id === order_id ? { ...order, state: newState } : order)))
  }  
  const handleSave = async (order_id) => {
    const updatedOrder = orders.find((order) => order.order_id === order_id)
    const setStaffOrder = { ...updatedOrder, staff: JSON.parse(localStorage.getItem('user')) }
    try {
      const token = localStorage.getItem('token')
      const response = await axios.put(`http://localhost:8080/api/v1/order/update`, setStaffOrder, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      toast.success('Lưu thành công')
    } catch (error) {
      console.log(error)
      toast.error('Lưu thất bại')
    }
  }
  const columns = [
    {
      title: 'Mã đơn hàng',
      dataIndex: 'order_id',
      key: 'order_id',
      render: (text) => <a>{text}</a>
    },
    {
      title: 'Ngày đặt hàng',
      key: 'dayOrder',
      render: (_, record) => (
        <Space size='middle'>
          <p>{format(new Date(record.dayOrder), 'dd/MM/yyyy HH:mm')}</p>
        </Space>
      )
    },
    {
      title: 'Tổng tiền',
      dataIndex: 'total',
      key: 'total'
    },
    {
      title: 'Trạng thái',
      key: 'state',
      render: (_, record) => (
        <Space size='middle'>
          <select
            value={record.state.toLowerCase()}
            onChange={(e) => handleStatusChange(record.order_id, e.target.value)}
            className={`
                                ${
                                  record.state.toLowerCase() === 'Chờ xác nhận'.toLowerCase()
                                    ? 'text-[rgb(183,28,28)] bg-[rgb(244,67,54,0.2)] cursor-pointer'
                                    : record.state.toLowerCase() === 'Chờ nhận hàng'.toLowerCase() ||
                                        record.state.toLowerCase() === 'Đang giao hàng'.toLowerCase() ||
                                        record.state.toLowerCase() === 'Đang chuẩn bị'.toLowerCase()
                                      ? 'bg-[rgb(255,193,7,0.2)] text-yellow-900 cursor-pointer'
                                      : 'bg-[rgb(76,175,80,0.2)] text-[rgb(27,94,32)] pointer-events-none'
                                } rounded-md font-bold capitalize text-xs p-2 appearance-none`}
          >
            <option className='text-red-900' value='chờ xác nhận'>
              Chờ xác nhận
            </option>
            <option className='text-yellow-900' value='đang chuẩn bị'>
              Đang chuẩn bị
            </option>
            <option
              className='text-yellow-900'
              value={record.receiveMethod === 'Delivery' ? 'đang giao hàng' : 'chờ nhận hàng'}
            >
              {record.receiveMethod === 'Delivery' ? 'Đang giao hàng' : 'Chờ nhận hàng'}
            </option>
            <option className='text-green-900' value='hoàn thành'>
              Hoàn thành
            </option>
          </select>
        </Space>
      )
    },
    {
      title: 'Lưu',
      key: 'save',
      render: (_, record) => (
        <Space size='middle'>
          <button className='flex justify-center items-center' onClick={() => handleSave(record.order_id)}>
            <PencilIcon className='h-4 w-4 flex justify-center items-center' />
          </button>
        </Space>
      )
    }
  ]
  const [current, setCurrent] = useState<number>(1)
  const onChange = (page: number) => {
    setCurrent(page)
  }
  return (
    <Table
      bordered
      columns={columns}
      dataSource={props.data}
      title={() => title}
      pagination={{
        current: current,
        onChange: onChange,
        total: props.data.length,
        pageSize: 9,
        position: ['bottomCenter']
      }}
    />
  )
}

export default TableOrder
