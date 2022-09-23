// /user/[uid].tsx
import { GetServerSideProps } from "next"; // 型情報はnextからimport可能

export const getServerSideProps: GetServerSideProps = async (context) => {
  const uid = context.params.uid;
  if (!uid) {
    // 例外を返したり、`context.req`を利用して通信を終了・リダイレクトするなどもありえる
    return { props: {} };
  }
  const userData = await getUser(context.params.uid);
  return { props: userData };
};

export default function (props) {
  //   return UserInfo {...props}
}

// error ??

// user/[uid].tsx

export async function getStaticPaths() {
  const users = await getAllUsers();
  return {
    paths: users.map((user) => `/user/${user.id}`),
    fallback: true,
  };
}
