export const useUser = () => {
  if (localStorage.getItem('user') == null) {
    return null
  } else {
    const user = JSON.parse(localStorage.getItem('user') as string)
    return user
  }
}
