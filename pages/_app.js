import { DefaultSeo } from "next-seo";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title="Besjan Hallaqi - Portfolio"
        description="Discover the portfolio of Besjan Hallaqi, showcasing skills in industry work."
        openGraph={{
          type: "website",
          url: "https://besjanhallaqi.com",
          title: "Besjan Hallaqi - Portfolio",
          description:
            "Discover the portfolio of Besjan Hallaqi, showcasing skills in industry work.",
          images: [
            {
              url: "/images/me.jpg",
              width: 600,
              height: 600,
              alt: "Besjan Hallaqi Portfolio",
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1",
          },
          {
            charSet: "UTF-8",
          },
          {
            httpEquiv: "Content-Language",
            content: "en",
          },
          {
            name: "keywords",
            content: "Besjan Hallaqi, Portfolio, Developer, Skills, Front-end",
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
