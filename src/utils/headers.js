const sucyAppToken = localStorage.getItem('sucyAppToken')
const baseURL = 'https://api.sucy-app.com/api';
const header = {
  headers: {
    'Accept': 'application/json;charset=utf-8',
    'Authorization': 'Bearer ' + sucyAppToken
  }
}

export { header, baseURL };