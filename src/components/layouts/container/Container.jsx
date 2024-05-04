export default function Container({ children }) {
  return (
    <div className="laptop:container tablet:container container">
      {children}
    </div>
  );
}
