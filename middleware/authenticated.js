export default function ({ store, redirect }) {
  if (store.state.currentUser) {
    redirect('/')
  }
}
