import { User } from 'firebase'
import { auth } from '@/service/firebase'
import { AuthServiceInterface } from '@/interfaces/services/auth/AuthServiceInterface'

export class AuthService implements AuthServiceInterface {
  public async login(email: string, password: string) {
    await auth.signInWithEmailAndPassword(email, password)
  }

  public async logout() {
    await auth.signOut()
  }

  public onAuthStateChanged(onStateChange: (user: User | null) => void) {
    auth.onAuthStateChanged((user) => {
      onStateChange(user)
    })
  }
}
