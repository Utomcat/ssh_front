import axios from "axios";
import config from '@/api/config'
import {baseUrl} from "@/utils/global"


export function getCompanyAll(param) {
  return dealPromise({
    url: 'company/queryAllMember',
    method: 'post',
    data: param
  })
}

export function updateCompanyStatus(param){
  return dealPromise({
    url: 'company/updateMemberStatus',
    method: 'post',
    data: param
  })
}


export function updateCompanyInfo(param){
  return dealPromise({
    url: 'company/update',
    method: 'post',
    data: param
  })
}

export function checkQrInfo(param){
  return dealPromise({
    url: 'company/qrCode',
    method: 'post',
    data: param
  })
}


/**
 * 处理请求
 *
 * @param promise 请求参数, url、请求方式、请求参数等
 * @returns {Promise<unknown>} 返回封装的 Promise 对象
 */
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
