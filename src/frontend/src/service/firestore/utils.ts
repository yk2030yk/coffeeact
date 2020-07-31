import { firestore } from 'firebase'
import { format } from 'date-fns'

export const formatTimestamp = (
  timestamp: firestore.Timestamp | undefined,
  formatString = 'yyyy/M/d(eee) hh:mm'
) => {
  if (!timestamp) return ''
  return format(timestamp.toDate(), formatString)
}
