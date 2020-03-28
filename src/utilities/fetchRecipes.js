
/**
 * 
 * @param search search term
 * @param {*} params optional search parameters
 */
async function fetchRecipes(search, params) {
    const APP_ID = '8bc1f06b';
    const APP_KEY = 'da27e21f002589523c5103081c712b4c';
    const API_URL = new URL(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);

    if(params)
        Object.keys(params).forEach(key => API_URL.searchParams.append(key, params[key]));

    let response = await fetch(API_URL);
    let data = await response.json();
    return data;
}

export default fetchRecipes;