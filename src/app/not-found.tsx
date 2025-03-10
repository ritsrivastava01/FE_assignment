import { ArrowCircleRight } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

import { PageLayout } from '@/components/PageLayout';

export function generateMetadata() {
  return {
    title: '404 - Not Found',
    description: 'The page you are looking for does not exist.',
  };
}
const NotFound = () => {
  return (
    <PageLayout className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center flex-grow py-2">
        <h1 data-testid="not-found-title" className="text-6xl font-bold text-gray-800 mb-5">
          404 - Not Found
        </h1>
        <h2 data-testid="not-found-message" className="text-lg text-gray-600 mb-8">
          The page you are looking for does not exist.
        </h2>

        <Link
          href="/"
          data-testid="not-found-home-link"
          className="text-xl text-vibrant-blue hover:underline flex items-center gap-2"
        >
          Go back to home
          <ArrowCircleRight size={32} />
        </Link>
      </div>
    </PageLayout>
  );
};

export default NotFound;
