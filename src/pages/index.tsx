import Head from 'next/head'
import { Input } from '@/components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <h1>MonthSub</h1> */}
        <Input label="아이디" validateMessage="형식이 맞지 않습니다."></Input>
        <Input label="비밀번호"></Input>
      </main>
    </div>
  )
}
