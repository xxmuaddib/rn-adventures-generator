import qs from 'qs';

export class FetchApi {
  static getUrl() {
    return 'https://sky.am';
  }

  static async post(path, data, options = {}) {
    return await FetchApi.request(path, 'POST', data, options);
  }

  static async get(path, data, options = {}) {
    return await FetchApi.request(path, 'GET', data, options);
  }

  static async put(path, data, options = {}) {
    return await FetchApi.request(path, 'PUT', data, options);
  }

  static async patch(path, data, options = {}) {
    return await FetchApi.request(path, 'PATCH', data, options);
  }

  static async delete(path, data, options = {}) {
    return await FetchApi.request(path, 'DELETE', data, options);
  }

  static async request(path, method, data, options = {}) {
    let headers = new Headers({
      'Content-Type': 'application/json',
    });

    const myInit = {
      method,
      headers,
    };

    if (method === 'GET' || method === 'DELETE') {
      path = `${path}${qs.stringify(data, {
        addQueryPrefix: true,
        encode: true,
      })}`;
    } else {
      myInit.body = JSON.stringify(data);
    }
    return await fetch(`${FetchApi.getUrl()}${path}`, myInit)
      .then(res => {
        return res
          .json()
          .then(json => {
            if (res.status >= 200 && res.status < 300) {
              return Promise.resolve({ data: json });
            } else {
              return Promise.reject({ data: json });
            }
          })
          .catch(e => {
            return Promise.reject(e);
          });
      })
      .catch(e => {
        return Promise.reject(e);
      });
  }
}
