import { createClientApi } from '@/shared/api/client-api'

type ParamsType = {
  numOfRows: number
  pageNo: number
  keyword?: string
  arrange: string
  contentTypeId?: number
}

export async function getData(params: ParamsType) {
  const api = createClientApi()
  const defaultParams = {
    ...params,
    keyword: params.keyword || '투어',
  }
  const response = await api.get('tourAPI/tour-searchKeyword', {
    params: defaultParams,
  })
  if (response.status === 200) {
    return response.data
  }
}
