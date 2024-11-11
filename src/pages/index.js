import Layout from "@/components/Layout";
import { Provider } from 'react-redux';
import { store } from '@/app/store';

export default function Home() {
  return (
    <Provider store={store}>
      <Layout>
        <h1>安安你好</h1>
      </Layout>
    </Provider>
  );
}
