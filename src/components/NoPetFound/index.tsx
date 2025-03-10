import { SmileySad } from '@phosphor-icons/react/dist/ssr';

import { PageLayout } from '@/components/PageLayout';

const NoPet = () => {
  return (
    <PageLayout className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center py-2">
        <h1 className="text-8xl font-bold text-gray-800 flex gap-4 mb-10">
          S<SmileySad />
          rry!
        </h1>
        <p className="text-3xl font-medium text-gray-600 mb-8">There is no pet to show.</p>
      </div>
    </PageLayout>
  );
};

export default NoPet;
