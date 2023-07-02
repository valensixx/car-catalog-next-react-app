export async function fetchCars(){
    const headers = {
        'X-RapidAPI-Key': '423e6c9c62mshc38f4489013b8aap18d64djsn9f1085cb96d3',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response =  await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const result = await response.json();

    return result;
}