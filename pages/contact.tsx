import Link from 'next/link'

import { MainLayout } from '../components/layouts/MainLayout';

export default function contact() {
    return (
        <MainLayout>
            <div className={'container'}>
                <main className={'main'}>
                    <h1 className={'title'}>
                        Ir al <Link href="/">
                            home
                        </Link>
                    </h1>
                    <p className={'description'}>
                        Get started by editing{' '}
                        <code className={'code'}>pages/contact.js</code>
                    </p>
                </main>
            </div>
        </MainLayout>
    );
}
