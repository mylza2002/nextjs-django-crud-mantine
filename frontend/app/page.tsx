"use client"

import { useState, useEffect } from "react"
import FormTask from "./components/FormTask"
import ListTask from "./components/ListTask"

function Home() {
  const [tasks, setTasks] = useState([] as any[])

  // Función para recargar tasks desde la API
  const loadTasks = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/tasks/`)
    const data = await res.json()
    setTasks(data)
  }

  useEffect(() => {
    loadTasks()
  }, [])

  // Función que pasaremos a FormTask para agregar una task nueva
  const addTask = (task: any) => {
    if (!task) return
    setTasks(prev => [...prev, task])
  }

  return (
    <article className="container">
      <h1>Tasks App</h1>
      <section>
        <FormTask onAdd={addTask} />
        <ListTask tasks={tasks} />
      </section>
    </article>
  )
}

export default Home
