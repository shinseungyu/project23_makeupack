/** 구조화 데이터를 HTML 에 바로 넣는다 (next/script 는 JS 실행 후에 생겨 네이버가 못 읽는다) */
export default function JsonLd({ data }: { data: object | object[] }) {
  const list = Array.isArray(data) ? data : [data];
  return (
    <>
      {list.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}
    </>
  );
}
