import { useAppSelector } from '../../../hooks/reduxHooks'
import delevery from '../../../assets/images/gifs/delivery.gif'
import pickup from '../../../assets/images/gifs/pickup.gif'
import marker from '../../../assets/images/icons/marker.png'
const Address = () => {
  const { receivingMethod, address, selectedStore } = useAppSelector((state) => state.receivingMethodState)
  return (
    <button>
      {selectedStore === null ? (
        <div>
          <img width='24' height='24' src={marker} alt='marker' />
        </div>
      ) : receivingMethod === 'delivery' ? (
        <div className='flex justify-center items-center'>
          <img width='24' height='24' src={delevery} alt='marker' />
          <p className='text-sm w-[200px] truncate-1-lines-sm text-slate-500 hidden '>{address}</p>
        </div>
      ) : (
        <div>
          <div className='flex justify-center items-center'>
            <img width='24' height='24' src={pickup} alt='marker' />
            <p className='text-sm w-[200px] truncate-1-lines-sm text-slate-500 hidden '>{selectedStore.address}</p>
          </div>
        </div>
      )}
    </button>
  )
}

export default Address
