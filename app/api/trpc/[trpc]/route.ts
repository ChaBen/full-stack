import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { appRouter } from '@/lib/server/routers/_app'
import { createContext } from '@/lib/trpc/context'

export const runtime = 'edge'

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext,
  })

export { handler as GET, handler as POST }
