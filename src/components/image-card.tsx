import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faEuroSign, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function ImageCard({
  title,
  imageSrc,
  color,
  time,
  persons,
  price,
  description,
}) {
  return (
    <div className={"max-w-sm rounded-lg shadow " + color}>
      <Image
        className="rounded-t-lg"
        src={imageSrc}
        alt="test"
        height={300}
        width={400}
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 text-center">
          {title}
        </h5>

        {time && (
          <>
            <hr className="mb-4"></hr>
            <p className="mb-3 font-normal text-gray-500">
              <FontAwesomeIcon icon={faCalendar} className="text-xl mr-3" />
              {time}
            </p>
          </>
        )}
        {persons && (
          <p className="mb-3 font-normal text-gray-500">
            <FontAwesomeIcon icon={faPerson} className="text-2xl mr-4" />
            {persons}
          </p>
        )}
        {price && (
          <p className="mb-3 font-normal text-gray-500">
            <FontAwesomeIcon icon={faEuroSign} className="text-2xl mr-4" />
            {price}
          </p>
        )}
        {description && (
          <>
            <hr></hr>
            <p
              className="mt-3 font-normal text-gray-500"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
          </>
        )}
      </div>
    </div>
  );
}
