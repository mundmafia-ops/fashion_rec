import { getFeaturedDeals, getProduct, trends } from "@/data/mock";

export default function Home() {
  const featured = getFeaturedDeals();

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
          Fashion · Deals · Trends · Price Tracking
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          The edit, before it sells out.
        </h1>
        <p className="mt-3 max-w-prose text-neutral-600">
          Scaffold ready. Below is mock data flowing through the data layer —
          UI to come.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="mb-4 text-sm font-medium uppercase tracking-wide text-neutral-500">
          Featured deals
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {featured.map((deal) => {
            const product = getProduct(deal.productId);
            if (!product) return null;
            return (
              <li
                key={deal.id}
                className="rounded-lg border border-neutral-200 p-4"
              >
                <p className="font-medium">{product.title}</p>
                <p className="text-sm text-neutral-500">{product.brand}</p>
                <p className="mt-2 text-sm">
                  <span className="font-semibold">${deal.nowPrice}</span>{" "}
                  <span className="text-neutral-400 line-through">
                    ${deal.wasPrice}
                  </span>{" "}
                  <span className="text-emerald-600">−{deal.discountPct}%</span>
                </p>
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-sm font-medium uppercase tracking-wide text-neutral-500">
          Trending now
        </h2>
        <ul className="flex flex-wrap gap-2">
          {trends.map((trend) => (
            <li
              key={trend.id}
              className="rounded-full border border-neutral-200 px-3 py-1 text-sm"
            >
              {trend.title}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
