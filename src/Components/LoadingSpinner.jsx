function LoadingSpinner() {
  return (
    <>
      <div className="text-center">
        <div className="spinner-border" role="status" style={{ margin: "20%" }}>
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
}
export default LoadingSpinner;
