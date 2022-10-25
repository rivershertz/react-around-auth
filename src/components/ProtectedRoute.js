function ProtectedRoute({ children }) {
  return (
    <div>
      <h1 style={{ color: 'white' }}>ProtectedRoute</h1>
      {children}
    </div>
  );
}

export default ProtectedRoute;
