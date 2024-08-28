import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"], weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-nunitoSans'
});

export const metadata = {
  title: "Formulário Projeto Acadêmico",
  description: "Desenvolvemos soluções em banco de dados para empresas que buscam organizar informações essenciais como pedidos, estoque e clientes. Projeto Integrador (PI) do Centro Universitário FAM, focado em eficiência e gestão de dados.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={nunitoSans.variable}>{children}</body>
    </html>
  );
}
