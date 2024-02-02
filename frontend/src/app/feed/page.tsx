import { cookies } from 'next/headers';

import { getLiveFeedonServer } from '@/services/feed';
import Feed from '@/containers/feed';

const FeedPage = async () => {
  const cookieStore = cookies();
  const refreshToken = cookieStore.get('refreshToken')?.value;
  const data = await getLiveFeedonServer(-1, refreshToken);

  return <Feed {...data} />;
};

export default FeedPage;
