import './globals.css'

export const metadata = {
  title: 'CMT Advocates - Under Maintenance',
  description: 'We are currently undergoing maintenance. Please check back soon.',
}

export default function RootLayout() {
  return (
    <html lang="en">
      <body className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Under Maintenance</h1>
          <p className="text-xl">We'll be back soon. Thank you for your patience.</p>
        </div>
      </body>
    </html>
  )
}