const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full h-screen overflow-hidden">{children}</section>
  );
};

export default Layout;
