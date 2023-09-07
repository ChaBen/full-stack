import { z } from 'zod'
import { publicProcedure, router } from '../trpc'
import { getComputers } from '@/lib/api/computers/queries'
import { createComputer } from '@/lib/api/computers/mutations'
export const computersRouter = router({
  getComputers: publicProcedure.query(async () => {
    return getComputers()
  }),
  createComputer: publicProcedure
    .input(
      z.object({
        brand: z.string(),
        cores: z.number(),
      }),
    )
    .mutation(async ({ input }) => {
      return createComputer(input)
    }),
})
