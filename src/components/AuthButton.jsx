import { supabase } from '../supabase'
import { useEffect, useState } from 'react'

export default function AuthButton({ onAuth }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Get current session on load
    supabase.auth.getSession().then(({ data }) => {
      const u = data?.session?.user ?? null
      setUser(u)
      onAuth?.(u)
    })

    // Listen for auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      const u = session?.user ?? null
      setUser(u)
      onAuth?.(u)
    })

    return () => listener?.subscription.unsubscribe()
  }, [])

  const login = async () => {
    const isLocalhost = window.location.hostname === 'localhost'

    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: isLocalhost
          ? 'http://localhost:5173/'
          : 'https://wiradjuri.github.io/flickforecast/'
      }
    })

    if (error) {
      console.error('Google login failed:', error.message)
    }
  }

  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error('Logout failed:', error.message)
    }
  }

  return (
    <div>
      {user ? (
        <button onClick={logout} className="bg-red-600 text-white px-3 py-1 rounded">
          Logout ({user.email})
        </button>
      ) : (
        <button onClick={login} className="bg-blue-600 text-white px-3 py-1 rounded">
          Sign in with Google
        </button>
      )}
    </div>
  )
}
