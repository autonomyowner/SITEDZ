'use client'

import { useState } from 'react'

export default function PaymentTestPage() {
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const handleTestPayment = async () => {
    setLoading(true)
    setResult('')

    try {
      const testData = {
        plan_name: 'Site vitrine moderne',
        client_name: 'Test User',
        client_email: 'test@example.com',
        client_phone: '+213797339451',
        amount: 12500,
      }

      console.log('Sending test payment request:', testData)

      const response = await fetch('/api/payment/initiate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData),
      })

      const data = await response.json()

      console.log('Response:', data)
      console.log('Status:', response.status)

      setResult(JSON.stringify({ status: response.status, data }, null, 2))
    } catch (error) {
      console.error('Error:', error)
      setResult('Error: ' + (error instanceof Error ? error.message : String(error)))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold">Payment API Test</h1>
        
        <div className="mt-8">
          <button
            onClick={handleTestPayment}
            disabled={loading}
            className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Testing...' : 'Test Payment API'}
          </button>
        </div>

        {result && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold">Result:</h2>
            <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-100 p-4 text-sm">
              {result}
            </pre>
          </div>
        )}

        <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-4">
          <h3 className="font-semibold">Environment Check (Client-side):</h3>
          <ul className="mt-2 space-y-1 font-mono text-xs">
            <li>API Key: {process.env.NEXT_PUBLIC_EPAY_API_KEY ? `✓ ${process.env.NEXT_PUBLIC_EPAY_API_KEY}` : '✗ Missing'}</li>
            <li>API URL: {process.env.NEXT_PUBLIC_EPAY_API_URL || '✗ Missing'}</li>
            <li>Base URL: {process.env.NEXT_PUBLIC_BASE_URL || '✗ Missing'}</li>
          </ul>
        </div>

        <div className="mt-4 rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-sm">
          <p className="font-semibold text-yellow-900">Note:</p>
          <p className="mt-1 text-yellow-800">
            If environment variables are missing, make sure your <code>.env.local</code> file exists
            and restart the dev server with <code>npm run dev</code>
          </p>
        </div>
      </div>
    </div>
  )
}

