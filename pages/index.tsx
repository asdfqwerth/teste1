import { GetServerSideProps } from 'next';

export default function Home() {
  // Esta página nunca será renderizada devido ao redirecionamento
  return null;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: 'http://144.22.155.195/',
      permanent: false,
    },
  };
};
