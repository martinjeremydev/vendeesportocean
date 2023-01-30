import { faAt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();

  return (
    <footer>
      <div className="footer flex flex-col md:flex-row align-center md:divide-x pl-8 py-4 md:py-8">
        <div className="flex flex-col justify-center mb-2 mr-8">
          <div className="flex flex-row items-center">
            <FontAwesomeIcon
              icon={faAt}
              className="md:text-sm lg:text-l text-white mr-2"
            ></FontAwesomeIcon>
            <button
              type="button"
              onClick={() => router.push("contact@vendeesportsocean.com")}
            >
              <span className="text-l text-white">
                contact@vendeesportsocean.com
              </span>
            </button>
          </div>
          <div className="mt-2">
            <FontAwesomeIcon
              className="text-l text-white mr-2"
              icon={faPhone}
            ></FontAwesomeIcon>
            <span className="text-l text-white">0660994733</span>
          </div>
        </div>
        <div className="mt-4 md:mt-0 md:pl-8 lg:pl-28 flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
          <div>
            <Link href="/politique-de-confidentialite">
              Politique de confidentialite
            </Link>
          </div>
          <div>
            <Link href="/mentions-legales">Mentions Légales</Link>
          </div>
          <div>
            <Link href="/cgv">Conditions générales de vente</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
