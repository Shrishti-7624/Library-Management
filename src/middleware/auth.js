export default function auth() {
  if (!Object.keys(localStorage.getItem('currentUser')).length) {
    return false
  }
  return true
}