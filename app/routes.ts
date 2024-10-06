import { index, route } from '@react-router/dev/routes'

export const routes = [
  index('routes/home.tsx'),
  route('/download', 'routes/download.tsx'),
]
