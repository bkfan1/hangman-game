export default function ErrorFigure({ error }) {
  return (
    <>
      <figure className="errorFigure">
        <p>{error}</p>
      </figure>
    </>
  );
}
