import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Animations from "@/components/animations";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Animations />
      <Header />

      <main className="grow">{children}</main>

      <Footer />
    </>
  );
}
