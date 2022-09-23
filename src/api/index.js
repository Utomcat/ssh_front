import axios from "axios";
import config from '@/api/config'
import {baseUrl} from "@/utils/global"


export function getCompanyAll() {
  return dealPromise({
    url: 'company/getCompanyAll',
    method: 'get'
  })
}

function dealPromise(promise) {

  return new Promise((resolve, reject) => {
    const request = axios.create({
      baseURL: config.baseUrl,
      headers: config.headers,
      timeout: config.timeout,
      withCredentials: config.withCredentials
    })

    // 请求处理
    request(promise).then(res => {
      resolve(res.data)
      return false
    }).catch(error => {
      reject(error)
    })
  })

}
