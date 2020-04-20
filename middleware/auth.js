export default function ({ store, error }) {
  if (!store.state.auth.user.emailVerified) {
    error({
      message: 'You are not connected',
      statusCode: 403
    })
  }
}
