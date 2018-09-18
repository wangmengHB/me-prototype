import Vue from 'vue'
import Fingerprint2 from 'fingerprintjs2'

const vm = new Vue()

/**
 * getUserIPByRequest 获取ip函数
 * @param  {function} onNewIP callback
 */
function getUserIPByRequest (onNewIP) {
  const ts = new Date().getTime()
  vm.$http.get(`/rest/v1/action/heartbeat?ts=${ts}`).then((response) => {
    if (response.body['error_code'] === 0) {
      onNewIP(response.data.result.ip)
    }
  }, (err) => {
    console.log(err)
  })
}

/**
 * checkUuid uuid生成函数 使用Fingerprint2
 * @return {string} uuid
 */
function checkUuid (callback) {
  if (localStorage.getItem('uuid')) {
    callback()
  } else {
    new Fingerprint2().get(function(result, components){
      localStorage.setItem('uuid', result)
      callback()
    })
  }
}

/**
 * trackRequeest 埋点异步请求函数
 * @param  {object} info { userId, module, toPath, fromPath }
 * @param  {string} ip
 */
function trackRequest (info, ip) {
  // if (!uuidShared){
  //   uuidShared = true
  //   shareuuid()
  // }
  const time = new Date().getTime()
  const body = {
    'uuid': localStorage.getItem('uuid'),
    'developer_id': info.userId || 0,
    'event_time': time,
    'client_ip': ip,
    'content_url': info.toPath,
    'referer_url': info.fromPath,
    'event_type': 'pageview',
    'event_msg': {},
    'user_agent': navigator.userAgent
  }
  vm.$http.post(`/busw`, JSON.stringify(body)).then((response) => {
    if (response.body['error_code'] === 0) {
      console.log('埋点成功')
    }
  }, (err) => {
    console.log(err)
  })
}

// var uuidShared = false
/**
 * 埋点核心方法
 * @param  {Object} info: { userId, module, toPath, fromPath }
 */
export default function (info) {
  checkUuid(function () {
    if (localStorage.getItem('ip')) {
      trackRequest(info, localStorage.getItem('ip'))
    } else {
      getUserIPByRequest(function (ip) {
        localStorage.setItem('ip', ip)
        trackRequest(info, ip)
      })
    }
  })
}

// function shareuuid () {
//   var url = 'https://account.' + location.host + '/middle.html'
//   var iframe = document.createElement("iframe")
//   iframe.setAttribute("src", url)
//   iframe.style.display = "none"
//   document.body.appendChild(iframe)
//   iframe.onload = function () {
//     var message = JSON.stringify({
//       type:1001,
//       data:localStorage.getItem('uuid')
//     })
//     this.contentWindow.postMessage(message, url)
//   }
// }