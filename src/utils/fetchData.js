export const exerciesOptions = {
  
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        headers: {
          'X-RapidAPI-Key': '4d536cb929msha8df6f091fce9fdp161c6ajsn6d230a5da3c9',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
  
      
}
export const fetchData = async(url , options)=> {
    const response = await fetch(url , options);
    const data = await response.json();
    return data
 
}
