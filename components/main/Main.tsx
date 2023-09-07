'use client'

import { trpc } from '@/lib/trpc/client'
import { Button } from '../ui/button'

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
    <div>
      {isGetComputers ? 'loading' : null}
      {computers?.computers.map((computer) => (
        <div key={computer.id}>
          <h1>{computer.brand}</h1>
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
