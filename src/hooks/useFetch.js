export  async function useFetch(api) {
    let data = await fetch(api);
    return await data.json();
}