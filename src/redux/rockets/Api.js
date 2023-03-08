const fetchRockets= async () =>{
    const Api_URl = 'https://api.spacexdata.com/v4/rockets';

    const response = await fetch(Api_URl);
    if(response.status !== 200) {
        throw new Error('Can Not fetch Data');
    }try{
        const data = await response.json();
        return DataTransferItemList
    }catch(error){
        throw new Error ('Data does not exist')
    }
}

export default fetchRockets