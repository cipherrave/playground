import { useState } from 'react';

import { PageContainer } from './components/custom/PageContainer';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <PageContainer>
      <div>
        <h1>Hello World! mlo</h1>
      </div>
    </PageContainer>
  );
}

export default Home;
