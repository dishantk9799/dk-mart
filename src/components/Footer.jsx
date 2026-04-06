const Footer = () => {
  return (
    <footer className="w-full bg-[#09090b] border-t border-zinc-900 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center space-y-2">
        
        {/* Name */}
        <h2 className="text-[#CAFF00] font-bold text-xl tracking-tight">
          DkMart
        </h2>

        {/* Info */}
        <p className="text-zinc-500 text-xs md:text-sm font-medium tracking-wide">
          © 2025 DKMart • Built with React + React Hook Form + React router
        </p>

      </div>
    </footer>
  )
}

export default Footer
