export default async function Items({
  params,
}: {
  params: Promise<{ itemsId: string }>;
}) {
  const itemsId = (await params).itemsId;
  return <h1>Item Details {itemsId}</h1>;
}
 