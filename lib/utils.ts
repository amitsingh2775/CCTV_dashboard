// lib/utils.ts

export function formatTimeRange(start: Date, end: Date) {
  const startTime = start.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
  })

  const endTime = end.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
  })

  const date = start.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })

  return `${startTime} – ${endTime} on ${date}`
}
