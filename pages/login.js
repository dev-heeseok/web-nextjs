import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'
import { useRouter } from 'next/router';

export default function login() {
  const router = useRouter();
  function login() {
    axios.post('/api/login')
      .then(res => {
        if (res.status === 200) {
            // 로그인 성공
            console.log("로그인 성공");
            router.push("/admin");
        } 
      })
  }

  return (
    <div style={{ padding: "100px 0", textAlign: "center" }}>
      <Form>
        <Form.Field inline>
          <input placeholder='ID' />
        </Form.Field>
        <Form.Field inline>
          <input type="password" placeholder='PW' />
        </Form.Field>
        <Button color='blue' onClick={login}>Login</Button>
      </Form>
    </div>
  )
}
