import React, { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

interface AdminLoginProps {
  onLogin: () => void
}

export function AdminLogin({ onLogin }: AdminLoginProps) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = () => {
    if (password === '2141') {
      onLogin()
      setError('')
    } else {
      setError('Incorrect password')
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <Card className="w-full max-w-md bg-gray-900 border-gray-800">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-white">Admin Panel</CardTitle>
          <CardDescription className="text-gray-400">
            Enter password to access Work Management.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Input
              type="password"
              placeholder="Enter the password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              className="bg-gray-800 border-gray-700 text-white"
            />
            {error && (
              <p className="text-red-400 text-sm mt-2">{error}</p>
            )}
          </div>
          <Button
            onClick={handleLogin}
            className="w-full bg-white text-black hover:bg-gray-200 hover:scale-105 hover:shadow-2xl hover:shadow-white/25 active:scale-95 relative overflow-hidden group before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-out"
          >
            <span className="relative z-10">Login</span>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}