function Reply({ id, title, writer }) {
  return (
    <>
      <span>{id}</span>
      <span>{title}</span>
      <span>{writer}</span>
    </>
  );
}

export default function Replys({ datas }) {
  const div = datas.map((reply) => {
    return (
      <div key={reply.id}>
        <Reply {...reply} />
      </div>
    );
  });
  return <>{div}</>;
}
