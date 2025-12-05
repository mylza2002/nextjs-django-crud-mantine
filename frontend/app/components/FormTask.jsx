"use client"

import { useState } from "react"
import { Button, Input, Textarea } from "@mantine/core"

function FormTask({ onAdd }) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/tasks/`, {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: { "Content-Type": "application/json" }
    })
    const data = await res.json()
    
    // Limpiamos inputs
    setTitle("")
    setDescription("")

    // Actualizamos el listado en Home
    if (onAdd) onAdd(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Añadir Tarea</h1>

        <Input.Wrapper label="Title" required>
          <Input value={title} onChange={e => setTitle(e.target.value)} />
        </Input.Wrapper>

        <Textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          label="Description"
        />

        <Button fullWidth className="mt-4" type="submit">
          Save
        </Button>
      </form>
    </div>
  )
}

export default FormTask
