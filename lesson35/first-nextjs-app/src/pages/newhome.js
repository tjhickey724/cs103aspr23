import Head from 'next/head'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>CS103a NextJS Demo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Our First NextJS Demo!</h1>
        <ul>
            <li>
            <Link href="/">Visit the main page</Link>
            </li><li>
        <Link href="/test">Visit the test page</Link>
    </li><li>
        <Link href="https://www.brandeis.edu">Visit the Brandeis page</Link>


            </li>
        </ul>
        <Link href="/">Visit the main page</Link>
        <Link href="/test">Visit the test page</Link>
        <Link href="https://www.brandeis.edu">Visit the Brandeis page</Link>
      </main>
    </>
  )
}