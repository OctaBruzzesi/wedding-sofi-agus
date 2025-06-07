// Date formatting utilities for the wedding RSVP system

export function formatArgentinaTimestamp(date: Date = new Date()): string {
  return date.toLocaleString('es-AR', {
    timeZone: 'America/Argentina/Buenos_Aires',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })
}

export function formatWeddingDate(): string {
  const weddingDate = new Date('2024-08-30T18:00:00-03:00') // August 30, 2024, 6 PM Argentina time

  return weddingDate.toLocaleDateString('es-AR', {
    timeZone: 'America/Argentina/Buenos_Aires',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function getDaysUntilWedding(): number {
  const weddingDate = new Date('2024-08-30T18:00:00-03:00')
  const today = new Date()
  const diffTime = weddingDate.getTime() - today.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  return Math.max(0, diffDays) // Don't return negative days
}

export function isWeddingPassed(): boolean {
  const weddingDate = new Date('2024-08-30T18:00:00-03:00')
  const today = new Date()

  return today > weddingDate
}
