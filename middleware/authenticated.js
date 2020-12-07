export default function ({ store, route, redirect }) {
  const user = store.state.users.user
  const authRoute = /\/auth\/*/g

  if (user && user.emailVerified && route.path.match(authRoute)) {
    redirect('/')
  }
}
