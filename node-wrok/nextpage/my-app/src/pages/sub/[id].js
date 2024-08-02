// [id].js
import { useRouter } from "next/router";

export default function Id() {
  const router = useRouter();
  const id = router.query.id;
  return (
    <div>
      <h1>page/sub/[id].js</h1>
      <p>param: {id}</p>
      <a href="/">home</a>
    </div>
  );
}
