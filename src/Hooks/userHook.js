

import { useEffect, useState } from 'react';

const useHook = (email) => {
  console.log(email.length)
  const [userCheck, setUser] = useState(null)
  const [userLoading, setUserLoading] = useState(email.length > 0 ? true : false)

  useEffect(() => {

    console.warn(email)

    fetch(`https://hea-easy-server-devsobuj910.vercel.app/user/${email}`)
      .then(res => res.json())
      .then(data => {
        setUser(data.accountType)
        setUserLoading(false)

      })

  }, [email])

  return [userCheck, userLoading];
};

export default useHook;