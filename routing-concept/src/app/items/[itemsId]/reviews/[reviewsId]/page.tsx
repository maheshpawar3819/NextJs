export default async function ItemsReview({
  params,
}: {
  params: Promise<{ itemsId: string; reviewsId: string }>;
}) {
  const { itemsId, reviewsId } = await params;
  return (
    <>
      <h1>
        Reviews for {reviewsId} for item {itemsId}
      </h1>
    </>
  );
}
