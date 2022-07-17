import { useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/router';

export default function Admin() {
  const router = useRouter();

  function checkLogin() {
    axios.get('/api/isLogin')
      .then(res => {
        if (res.status === 200 && res.data.name) {
          console.log("로그인 확인", res?.data?.name);
          // 로그인
        } else {
          // 로그인 안됨
          router.push("/login");
        }
      }); 
  }

  useEffect(() => {
    checkLogin();

  }, []);

  return (
    <div>admin</div>
  )
}
