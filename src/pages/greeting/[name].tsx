import { useRouter } from "next/router";

// export default function GreetingPage() {
//   const router = useRouter();
//   const { name } = router.query;
//   return <div>Hello {name}</div>;
// }

export const getServerSideProps = ({ query }) => {
  // ちらつきがより少ない？
  return {
    props: { name: query.name },
  };
};

export default function GreetingPage({ name }) {
  return <div>Hello {name}!!</div>;
}
