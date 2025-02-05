import { useEffect, useState } from "react";

function FetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/data") // Calls Flask backend
      .then((response) => response.json())
      .then((data) => setData(data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>API Response:</h1>
      <p>{data || "Loading..."}</p>
    </div>
  );
}

export default FetchData;
