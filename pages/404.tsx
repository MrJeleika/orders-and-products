import { useRouter } from "next/router";
import { useEffect } from "react";
import s from "./404.module.scss";

const Error = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/orders");
    }, 3000);
  }, [router]);

  return (
    <div className={s.body}>
      <h1>404 | Not found</h1>
      <h3>You will be redirected in 3 seconds</h3>
    </div>
  );
};

export default Error;
