import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Animations from "@/components/animations";
import { draftMode } from "next/headers";
import { DraftButton } from "@/components/draftButton";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isEnabled = draftMode().isEnabled;
  return (
    <>
      <DraftButton isEnabled={isEnabled} />
      <Animations />
      <Header />

      <main className="grow">{children}</main>

      <Footer />
    </>
  );
}
