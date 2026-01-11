'use client'

import { useState, useEffect } from 'react'

// Simple hash function - not cryptographically secure but prevents casual inspection
function simpleHash(str: string): string {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  }
  return hash.toString(36)
}

// Hash of 'delightful'
const VALID_HASH = 'arp0yw'

interface PasswordGateProps {
  children: React.ReactNode
  projectId: string
}

export default function PasswordGate({ children, projectId }: PasswordGateProps) {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    const stored = sessionStorage.getItem(`unlocked-${projectId}`)
    if (stored === 'true') {
      setIsUnlocked(true)
    }
    setIsChecking(false)
  }, [projectId])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (simpleHash(password.toLowerCase().trim()) === VALID_HASH) {
      sessionStorage.setItem(`unlocked-${projectId}`, 'true')
      setIsUnlocked(true)
      setError(false)
    } else {
      setError(true)
    }
  }

  if (isChecking) {
    return null
  }

  if (isUnlocked) {
    return <>{children}</>
  }

  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="w-full max-w-[300px]">
        <h2 className="text-lg font-semibold text-light mb-2 text-center">
          Protected Project
        </h2>
        <p className="text-sm text-light/60 mb-6 text-center">
          Enter password to view this project
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              setError(false)
            }}
            placeholder="Password"
            className="w-full px-4 py-3 bg-light/10 border border-light/20 rounded-lg text-light placeholder:text-light/40 focus:outline-none focus:border-accent transition-colors"
            autoFocus
          />
          {error && (
            <p className="text-secondary text-sm text-center">
              Incorrect password
            </p>
          )}
          <button
            type="submit"
            className="px-4 py-3 bg-main text-light rounded-lg hover:bg-main/80 transition-colors font-medium"
          >
            Unlock
          </button>
        </form>
      </div>
    </div>
  )
}
