import { useLoaderData } from "react-router-dom";


export async function githubInfoLoader() {
  const response = await fetch(
    "https://api.github.com/users/md-mustafa-hossain-create",
  );
  return response.json();
}

const Github = () => {
  // HOOK: useLoaderData
  // This hook retrieves the data returned by `githubInfoLoader` (assigned in main.jsx).
  // No extensive useEffect needed!
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Public repo: {data.public_repos}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
};

export default Github;
