const getData = (URL, callBack) => {
  let request = new XMLHttpRequest();

  const onDone = () => {
    if (request.readyState === 4 && request5.status === 200) {
      let data = JSON.parse(request.responseText);
      callBack(data);
    } else if (request.readyState === 4) {
      console.log('Server nije u stanju da obradi zahtev');
    }
  };

  request.addEventListener('readystatechange', onDone);
  request.open('GET', URL);
  request.send();
};

const distinct = (array, type = 'array') => {
  // type = 'array', 'set', object

  switch (type) {
    case 'array':
      const temp = [];
      for (let i = 0; i < array.length; i++) {
        const city = array[i];
        if (!temp.includes(city)) {
          temp.push(city);
        }
      }
      return temp;

    case 'set':
      const result = new Set(array);
      return result;

    case 'object':
      const temp1 = {};
      for (let i = 0; i < array.length; i++) {
        const city = array[i];
        if (temp1[city] == null) temp1[city] = 1;
        temp1[city]++;
      }
      return temp1;

    default:
      break;
  }
  return 'error';
};

const parseData = data => {
  const cities = [];
  for (let i = 0; i < data.length; i++) {
    const companyData = data[i];
    cities.push(companyData.address.city);
  }
  const result = distinct(cities, 'object');
  console.log('result = ', result);
};

const arr = ['ni', 'bg', 'bg', 'ni', 'bg', 'ni', 'bg'];
const result1 = distinct(arr, 'object');
console.log('array', result1);

/* 
    const arr = [ 'ni', 'bg', 'ni', 'bg','ni', 'bg','ni', 'bg' ]

    const result1 = distinct ( arr, 'array' )
    console.log ( 'array', result1 )

    const result2 = distinct ( arr, 'set' )
    console.log ( result2 )

    const result3 = distinct ( arr, 'object' )
    console.log ( result3 ) 
    for (const [key, value] of Object.entries ( result3 )) {
    
        console.log ( key )
    }
*/

getData('https://jsonplaceholder.typicode.com/users', parseData);
