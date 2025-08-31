import { createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router'
import { LandingPage } from './pages/LandingPage'
import { PhotographerProfile } from './pages/PhotographerProfile'

const rootRoute = createRootRoute({
  component: () => <Outlet />,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: LandingPage,
})

const photographerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/photographer/$photographerId',
  component: PhotographerProfile,
})

const routeTree = rootRoute.addChildren([indexRoute, photographerRoute])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}