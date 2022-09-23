import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function UserPage(props) {
  const [user, setUser] = useState();
  const router = useRouter();
  const uid = router.query.uid;
  useEffect(() => {
    if (!uid) {
      return;
    }
    // getUser(uid).then((user) => {
    //   setUser(user);
    // });
  }, []);
  if (!uid) {
    // return <ErrorComponent />;
  }
  // if (!user) [
  //   return <Loading />
  // ]
  //   return <UserInfo user={user}>
}

// error ??
