import { IUploaderBody } from './type'
import { UploadInstance } from 'api'

export const uploader = async (body: IUploaderBody) => {
  const formData = new FormData()
  formData.append('file', body.file)
  return UploadInstance.post('/api/upload/image', formData, {})
}
