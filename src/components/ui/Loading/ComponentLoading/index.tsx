import loading from '../../../../assets/images/gifs/loader-bike.gif'
const ComponentLoading = () => {
  return (
    <div className='fixed top-0 right-0 w-screen h-screen flex justify-center items-center'>
      <img className='h-[55px] w-[55px]' src={loading} alt='loading' />
    </div>
  )
}

export default ComponentLoading
