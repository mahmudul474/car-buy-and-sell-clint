import { useEffect, useState } from 'react';

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(null)
  const [adminLoading, setAdminLoading] = useState(true)

  useEffect(() => {

    console.warn(email)

    fetch(`http://localhost:5000/adminState/${email}`)
      .then(res => res.json())
      .then(data => {
        console.warn('from admin hook', data)
        setIsAdmin(data)
        setAdminLoading(false)

      })
  }, [email])

  return [isAdmin, adminLoading];
};

export default useAdmin;