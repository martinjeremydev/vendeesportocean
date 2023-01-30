import Head from "next/head";
import Header from "@/components/header/header";
import Image from "next/image";
import Footer from "@/components/footer";

export default function Herbergement() {
  return (
    <>
      <Head>
        <title>Hébergement</title>
        <meta
          name="description"
          content="Notre école de kitesurf située à Brétignolles sur mer vous propose des stages avec des moniteurs diplômés depuis 2005."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="lg:container mx-auto">
        <Header></Header>
        <h2 className="text-3xl text-center my-10">Les gites de l’Ecours</h2>
        <p className="px-4 md:px-8 lg:px-10 text-l">
          Situé au calme dans le quartier de Saint Nicolas de Brem, nous vous
          proposons 2 logements pour accueillir 4 à 9 personnes. Les gites sont
          à 800 m du spot de kite.
        </p>
        <div className="text-center my-12">
          <a href="test" className="book-button rounded-lg">
            Réserver mon logement
          </a>
        </div>
        <div className="px-4 md:px-8 lg:px-30 grid grid-cols-1 md:grid-cols-3 md:gap-4 lg:gap-8 md:mb-2 lg:mb-8">
          <div>
            <Image
              src="/hebergement1.jpeg"
              width="400"
              height="300"
              alt=""
              className="rounded-md"
            ></Image>
          </div>
          <div>
            <Image
              src="/hebergement2.jpeg"
              width="400"
              height="300"
              className="rounded-md"
            ></Image>
          </div>
          <div>
            <Image
              src="/hebergement3.jpeg"
              width="400"
              height="300"
              className="rounded-md"
            ></Image>
          </div>
        </div>
        <div className="px-4 md:px-8 lg:px-30 grid grid-cols-1 md:grid-cols-3 md:gap-4 lg:gap-8 mb-8">
          <div>
            <Image
              src="/hebergement4.jpeg"
              width="400"
              height="300"
              alt=""
              className="rounded-md"
            ></Image>
          </div>
          <div>
            <Image
              src="/hebergement5.jpeg"
              width="400"
              height="300"
              className="rounded-md"
            ></Image>
          </div>
          <div>
            <Image
              src="/hebergement6.jpeg"
              width="400"
              height="300"
              className="rounded-md"
            ></Image>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
