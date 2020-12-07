import Cookies from 'js-cookie'
let access_tok = Cookies.get('access_token')
export default () => ({
  message: null,
  success: null,
  hasRegistered: false,
  hasLogin: false,
  user: null,
  currentUser: false,
  timer: null,
  showCountdown: false,
  access_token: access_tok ? access_tok : null,
})
