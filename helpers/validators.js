import { helpers } from 'vuelidate/lib/validators'

//ファイルの拡張子が正しいかをチェックする
export const supportedFileType = (value) => {

  if(!helpers.req(value)) return true

  const allowedFormats = ['jpg', 'png', 'jpeg']
  const extension = value.split('.').pop()

  return allowedFormats.includes(extension)



}





