import { NotMediaPermissionError } from '@/errors'

/**
 * mediaの権限を確保する
 */
export async function ensureMediaPermissions(): Promise<void | never> {
  const mediaDeviceInfos = await navigator.mediaDevices.enumerateDevices()
  const notPermission = mediaDeviceInfos.every(
    (device) => !(device.deviceId && device.label)
  )

  if (!notPermission) return

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    })
    stream.getTracks().forEach((track) => track.stop())
  } catch (e) {
    throw new NotMediaPermissionError()
  }
}
