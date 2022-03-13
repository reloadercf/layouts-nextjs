import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      <main className={'main'}>
        <h1 className={'title'}>
          Ir al <Link href="/about">
            About Us
      </Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/index.js</code>
        </p>

      </main>
    </MainLayout>
  )
}
