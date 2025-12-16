import { useRouter } from "next/router";
import { properties } from "../../data/properties";
import ImageCarousel from "../../components/ImageCarousel";

export default function Details() {
  const { query } = useRouter();
  const p = properties.find(x => x.id === query.id);
  if (!p) return null;

  return (
    <div style={{ padding: 20 }}>
      <h2>{p.title}</h2>
      <ImageCarousel images={p.images} />
      <p>{p.location}</p>
      <h3>{p.price}</h3>
      <p>{p.description}</p>

      <a href="https://wa.me/919209777061">
        Contact on WhatsApp
      </a>
    </div>
  );
}
