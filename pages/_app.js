import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Besjan Hallaqi - Portfolio</title>
        <meta
          name="description"
          content="Discover the portfolio of Besjan Hallaqi, showcasing your skills in industry through types of work."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Besjan Hallaqi - Portfolio" />
        <meta
          property="og:description"
          content="Discover the portfolio of Besjan Hallaqi, showcasing skills in industry work."
        />
        <meta property="og:image" content="/images/me.jpg" />
        <meta property="og:url" content="https://besjanhallaqi.com" />
        <meta property="og:type" content="website" />
        <meta charSet="UTF-8" />
        <meta http-equiv="Content-Language" content="en" />
        <meta
          name="keywords"
          content="Besjan Hallaqi, Portfolio, Developer, Skills, Front-end"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
