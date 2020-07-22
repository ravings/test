
// data = {
//   name: 'name',
//   age: 'age'
// }
export function http(url, data, method, callback) {
  const http = new XMLHttpRequest();
  if (method == 'get') {
    if (data) {
      let params = []
      for (const key in data) {
        params.push(`${key}=${data[key]}`)
      }
      url = `?${params.join('&')}`;
    }
    http.open(method, url);
    http.send();
  }
  if (method == 'post') {
    http.open(method, url);
    http.setRequestHeader("Content-type", "x-www-form-urlencoded");
    if (data) {
      http.send(data)
    } else {
      http.send();
    }
  }

  http.onreadystatechange = () => {
    if (http.readyState == 4 && http.status == 200) {
      callback(http.responseText);
    }
  }

}
