import PaperReadingMapPage from '@/components/PaperReadingMapPage';
import { getAllPapers } from '@/lib/papers';

export const dynamic = 'force-static';

export default async function Page() {
  const papers = await getAllPapers();
  return <PaperReadingMapPage initialPapers={papers} />;
}
