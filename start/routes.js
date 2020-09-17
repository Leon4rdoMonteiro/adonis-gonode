'use strict'

const Route = use('Route')

// Social Authentication

Route.get('facebook', async ({ ally }) => {
  await ally.driver('facebook').redirect()
})

Route.get('facebook/authenticated', async ({ ally }) => {
  const user = await ally.driver('facebook').getUser()

  return user
})

// Default Sessions

Route.post('sessions', 'SessionController.store')

// Password recovery

Route.post('passwords', 'ForgotPasswordController.store')
Route.put('passwords', 'ForgotPasswordController.update')

// Users

Route.post('users', 'UserController.store')

// Files

Route.post('files', 'FileController.store')
Route.get('files/:id', 'FileController.show')
