import axios from 'axios';
axios.get('https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101')
  .then(result => console.log(result.data.boxOfficeResult))
  .catch(function (error) {
    // handle error
    console.log(error);
  });
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => console.log(response));