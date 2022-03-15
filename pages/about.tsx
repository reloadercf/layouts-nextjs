import Link from 'next/link'
import { DarkLayout } from '../components/layouts/DarkLayout';
import { MainLayout } from '../components/layouts/MainLayout';

const Algo = () => {
  return (
    <div className={'container'}>
      <main className={'main'}>
        <h1 className={'title'}>
          Hola jaja<Link href="/">
            regresar al Home
          </Link>
        </h1>
      </main>
    </div>
  )
}

Algo.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}


export default Algo;
