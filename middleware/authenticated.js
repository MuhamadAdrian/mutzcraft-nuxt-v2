export default function ({ store, route, redirect }) {
  const user = store.state.users.user
  const authRoute = /\/auth\/*/g
  const adminRoute = /\/admin\/*/g

  if (user && user.emailVerified && route.path.match(authRoute)) {
    redirect('/')
  } else if (!user && route.path.match(adminRoute)) {
    redirect('/')
  } else if (route.path.match(adminRoute) && user && !user.emailVerified) {
    redirect('/')
  }
}
