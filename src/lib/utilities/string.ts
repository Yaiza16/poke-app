export const capitalize = (text: string): string => {
  if (!text) return ''
  return text.charAt(0).toUpperCase() + text.slice(1)
}
export const formatGenerationName = (generation: string): string => {
  if (!generation) return ''
  const parts = generation.split('-')
  if (parts.length !== 2) return capitalize(generation)
  return `${capitalize(parts[0])} ${parts[1].toUpperCase()}`
}
