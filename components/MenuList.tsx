import Image from "next/image";
import type { SignatureItem } from "@/lib/business";
import Reveal from "./Reveal";

export default function MenuList({ items }: { items: SignatureItem[] }) {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-line">
      {items.map((item, i) => (
        <Reveal key={item.name} delay={i * 80}>
          <div className="flex items-start gap-6 py-8">
            {item.photo && (
              <div className="relative h-20 w-20 shrink-0 overflow-hidden bg-cream sm:h-24 sm:w-24">
                <Image
                  src={item.photo}
                  alt={item.name}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <h3 className="font-display text-2xl">{item.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {item.description}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
