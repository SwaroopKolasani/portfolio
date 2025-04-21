export function Footer() {
  return (
    <footer className="bg-black py-8 border-t border-purple-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Gyanan Swaroop Kolasani. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Designed and built with <span className="text-purple-500">❤️</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
