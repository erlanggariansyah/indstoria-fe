import Header from "@/components/Header";
import HeaderSecondary from "@/components/HeaderSecondary";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
        <Layout>
            <Header showBackArrow label="Beranda" />
            <HeaderSecondary />
        </Layout>
    </>
  )
}
