const SmallCard = ({ title, num, suffix }) => {
  return (
    <div className="border w-full border-zinc-800 rounded-2xl px-6 py-4 flex flex-col items-center gap-1 bg-zinc-900/40 backdrop-blur-sm">
      <span className="text-2xl font-extrabold" style={{ color: '#CAFF00' }}>
        {num}{suffix}
      </span>
      <span className="text-sm text-base-content/50 font-medium">{title}</span>
    </div>
  )
}

export default SmallCard
