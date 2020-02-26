function retry(job: () => void, time = 0) {
  return (async function () {
    try {
      const resp = await job()
      return resp;
    } catch (e) {
      if (time === 3) {
        return e
      } else {
        return retry(job, time + 1)
      }
    }

  })()
}

function jop() {
  return new Promise((resolve, reject) => {
    if (this.data === 111) {
      resolve('成功')
    } else {
      reject('失败')
    }
  })
}

var data = 111;
retry(jop)

var data = 222;
retry(jop)

var data = 333;
retry(jop)


