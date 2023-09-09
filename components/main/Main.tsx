'use client'

import { trpc } from '@/lib/trpc/client'
import { Button } from '../ui/button'
import { Loader2 } from 'lucide-react'

function Main() {
  const utils = trpc.useContext()
  const { data: computers, isLoading: isGetComputers } =
    trpc.computers.getComputers.useQuery()
  const { mutate: createComputer, isLoading: isMutation } =
    trpc.computers.createComputer.useMutation({
      onSuccess: () => {
        utils.computers.getComputers.invalidate()
      },
    })
  return (
    <div className="mx-auto">
      {isGetComputers ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : null}
      {computers?.computers.map((computer, index) => (
        <div key={computer.id}>
          <h1>
            {index + 1}: {computer.brand}
          </h1>
        </div>
      ))}
      <Button
        onClick={() =>
          createComputer({
            brand: 'test',
            cores: 4,
          })
        }
      >
        {isMutation ? 'loading' : null}
        asd
      </Button>
    </div>
  )
}

export default Main
