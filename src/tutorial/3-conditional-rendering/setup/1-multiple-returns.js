import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [loading, setLoading] = useState(false);
  const [fetchError, setError] = useState(false);
  const [data, getData] = useState("Random Data");

  const getUserInfo = async () => {
    setLoading(true);
    const res = await fetch(url);
    const user = await res.json();
    if (res.status == 200) {
      setLoading(false);
      getData(user.login);
    }
    if (res.status !== 200) {
      setError(true);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (fetchError) {
    return <h1>Error user not found</h1>;
  }

  return (
    <div>
      <h2>{data}</h2>
    </div>
  );
};

export default MultipleReturns;
