"use client"

export function ScrollingBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-50 to-green-100 overflow-hidden border-y border-green-200">
      <div className="relative">
        <div className="flex animate-scroll whitespace-nowrap">
          <div className="flex items-center space-x-24 text-green-700 text-4xl md:text-6xl lg:text-7xl font-light tracking-wider" style={{fontFamily: 'Georgia, serif'}}>
            <span>Believing Starts Here</span>
            <span>Believing Starts Here</span>
            <span>Believing Starts Here</span>
            <span>Believing Starts Here</span>
            <span>Believing Starts Here</span>
            <span>Believing Starts Here</span>
            <span>Believing Starts Here</span>
            <span>Believing Starts Here</span>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  )
}