import styles from './styles.module.scss';
import { useEffect } from 'react';
import { postVotes } from '@/services/api/votes';
import useAsyncWithRetry from '@/hooks/useAsyncWithRetry';

function TestPage() {
  const [isLoadingVote, errorVote, asyncVote] = useAsyncWithRetry(postVotes);

  const handleVote = async (idolId) => {
    const result = await asyncVote(idolId);
  };

  useEffect(() => {
    // //vote
    handleVote(686);
  }, []);

  return (
    <div className={styles['test-page']}>
      <header />
      <main>{/* <MonthlyChart /> */}</main>
      <footer />
    </div>
  );
}

export default TestPage;
