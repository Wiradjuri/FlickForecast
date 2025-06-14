import { supabase } from '../supabase'
import { useEffect, useState } from 'react'

export default function AuthButton({ onAuth }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      const u = data?.session?.user ?? null
      setUser(u)
      onAuth?.(u)
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      const u = session?.user ?? null
      setUser(u)
      onAuth?.(u)
    })

    return () => listener?.subscription.unsubscribe()
  }, [])

  const login = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'google' })
  }

  const logout = async () => {
    await supabase.auth.signOut()
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
