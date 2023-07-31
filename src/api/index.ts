import { IResponse } from './type'

const request = (url: string, options?: any) => {
  // TODO: add request/response interceptors
  return fetch(url, options).then(async (response) => {
    const res = await response.json()

    return res
  })
}

const initSignature = () => {
  // return { address, signature }
  return {}
}

const instance = (baseuri: string) => ({
  get<TData = any>(url: string, params: any, headers?: any): Promise<IResponse<TData>> {
    return request(`${baseuri}${url}?${new URLSearchParams(params).toString()}`, {
      headers: {
        ...headers,
        ...initSignature(),
      },
    })
  },
  post<TData = any>(url: string, body: any, headers?: any): Promise<IResponse<TData>> {
    const _headers = headers || { 'Content-Type': 'application/json' }

    return request(`${baseuri}${url}`, {
      headers: {
        ..._headers,
        ...initSignature(),
      },
      method: 'POST',
      body: body instanceof FormData ? body : JSON.stringify(body),
    })
  },
})

export const ApiInstance = instance('')
export const UploadInstance = instance('')
