"use client"

import { Card, Text, Group, Badge } from "@mantine/core"

function ListTask({ tasks }) {
  return (
    <div>
      <h1>Lista de tareas</h1>
      {tasks.map(task => (
        <Card className="mt-4" padding="md" radius="md" withBorder key={task.id}>
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>{task.title}</Text>
            <Badge color={task.done ? "green" : "red"}>
              {task.done ? "Completa" : "Incompleta"}
            </Badge>
          </Group>
          <Text size="sm">{task.description}</Text>
        </Card>
      ))}
    </div>
  )
}

export default ListTask
