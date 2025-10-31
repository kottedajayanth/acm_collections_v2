export default function Featured() {
  const items = [
    { title: "Anime Collection", img: "https://via.placeholder.com/300x300?text=Anime+Tee" },
    { title: "Car Edition", img: "https://via.placeholder.com/300x300?text=Car+Hoodie" },
    { title: "Quote Merch", img: "https://via.placeholder.com/300x300?text=Quote+Tee" },
  ];

  return (
    <section className="py-16 px-8 bg-black">
      <h3 className="text-3xl font-bold text-center mb-12 text-green-400">Featured Collections</h3>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <div key={i} className="bg-neutral-900 rounded-xl p-5 hover:scale-105 transition border border-green-500/30 shadow-[0_0_15px_#39FF14] hover:shadow-[0_0_25px_#39FF14]">
            <img src={item.img} alt={item.title} className="rounded-lg mb-4" />
            <h4 className="text-xl font-semibold text-green-300">{item.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
