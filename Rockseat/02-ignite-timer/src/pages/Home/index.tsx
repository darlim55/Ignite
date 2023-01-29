import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInt,
  Separator,
  StartCountDownButton,
  TaskInput,
} from './styles'
import { useState } from 'react'

const newcyleformvalidationschema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmonut: zod.number().min(5).max(60),
})

type NewCycleFormData = zod.infer<typeof newcyleformvalidationschema>

// guarda informoces do contador
interface Cycle {
  id: string
  task: string
  minutesAmonut: number
}

export function Home() {
  // estado usads para guardar informcoes do contador e
  // o id do ultimo startado

  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newcyleformvalidationschema),
    defaultValues: {
      task: '',
      minutesAmonut: 0,
    },
  })

  function handleCreateNewCycle(data: NewCycleFormData) {
    console.log(data)

    // pega a data atual em milissgundos
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmonut: data.minutesAmonut,
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)
    reset()
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)
  console.log(activeCycle)
  const isSubmitDisable = watch('task')

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            placeholder="Dê um nome para o seu projeto"
            id="task"
            {...register('task')}
          ></TaskInput>

          <label htmlFor="minutesAmonut">durante</label>
          <MinutesAmountInt
            placeholder="00"
            type="number"
            id="minutesAmonut"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmonut', { valueAsNumber: true })}
          ></MinutesAmountInt>

          <span>Minutos.</span>
        </FormContainer>
        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountDownButton disabled={!isSubmitDisable} type="submit">
          <Play size={24} />
          Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  )
}
