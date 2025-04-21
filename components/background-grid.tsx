export function BackgroundGrid() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]" />
    </div>
  )
}
