import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-4 mt-8 text-center">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} BrandName. All rights reserved.</p>
      </div>
    </footer>
  )
}
