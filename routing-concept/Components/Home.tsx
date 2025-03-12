import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/data");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <div>Home page</div>;
};

export default Home;
