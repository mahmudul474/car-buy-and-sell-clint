import { useEffect, useState } from 'react';

const useBuyer = (email) => {

  const [isBuyer, setBuyer] = useState(null)
  const [isBuyerLoading, setIsBuyerLoading] = useState(true)

  useEffect(() => {

    fetch(`http://localhost:5000/usersBuyer/${email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setBuyer(data)
        setIsBuyerLoading(false)

      })

  }, [email])

  return [isBuyer, isBuyerLoading]

};

export default useBuyer;