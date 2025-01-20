import { createClientApi } from '@/shared/api/client-api'

type ParamsType = {
  numOfRows: 4
  pageNo: 1
  keyword: '서울'
  arrange: 'A'
}

export async function getData(params: ParamsType) {
  const api = createClientApi()
  const response = await api.get('tourAPI/tour-searchKeyword', {
    params: params,
  })
  return response
}
