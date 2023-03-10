export default async function FetchRocketsData() {
  const rocketURL = 'https://api.spacexdata.com/v4/rockets';

  const res = await fetch(rocketURL);
  if (res.status !== 200) {
    throw new Error(
      'Can not fetch rocket data with the provided endpoint',
    );
  } try {
    const rocketData = await res.json();
    return rocketData;
  } catch (error) {
    throw new Error('Can not retrieve data from the response');
  }
}
