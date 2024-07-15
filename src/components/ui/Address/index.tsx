const Address = () => {
  const showAddress = true
  return (
    <button className={`${showAddress ? '' : 'hidden'}`}>
      {localStorage.getItem('store') !== null ? (
        <div>
          <img width='24' height='24' src='https://img.icons8.com/ios-filled/50/cb1c3b/marker.png' alt='marker' />
        </div>
      ) : localStorage.getItem('receiveMethod') === null ? (
        <div className='flex justify-center items-center'>
          <img width='24' height='24' src='https://cdn.pizzahut.vn/images/Web_V3/Homepage/delivery.gif' alt='marker' />
          <p className='text-sm w-[200px] truncate-1-lines-sm text-slate-500 hidden '>
            141 Quan nhân, Thanh Xuân, Hà Nội
          </p>
        </div>
      ) : (
        <div>
          <div className='flex justify-center items-center'>
            <img width='24' height='24' src='https://cdn.pizzahut.vn/images/Web_V3/Homepage/pickup.gif' alt='marker' />
            <p className='text-sm w-[200px] truncate-1-lines-sm text-slate-500 hidden '>Vincom Phạm Ngọc Thạch</p>
          </div>
        </div>
      )}
    </button>
  )
}

export default Address
