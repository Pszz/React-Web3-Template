export const ICodeMaps = {
  0: 'Success',
}

export type IResponse<TData> = {
  code: keyof typeof ICodeMaps
  data: TData
  message: string
}

export type IPager<TData> = {
  data: TData[]
  total: number
}
