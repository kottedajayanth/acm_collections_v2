export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-black text-white px-6">
      <h1
        className="text-6xl md:text-7xl font-extrabold mb-4 tracking-wide"
        style={{
          color: '#39FF14',
          textShadow: '0 0 25px #39FF14, 0 0 50px #39FF14',
        }}
      >
        ACM COLLECTIONS
      </h1>
      <p className="text-lg md:text-2xl mb-10 text-gray-300 max-w-2xl">
        Wear What Drives You — Anime • Cars • Quotes • Uniqueness
      </p>
      <div className="flex gap-6">
        <button
          className="font-semibold px-8 py-3 rounded-2xl transition-all duration-300"
          style={{
            backgroundColor: '#39FF14',
            color: 'black',
            boxShadow: '0 0 20px #39FF14, 0 0 40px #39FF14',
          }}
        >
          Shop Now
        </button>
        <button
          className="border px-8 py-3 rounded-2xl transition-all duration-300"
          style={{
            borderColor: '#39FF14',
            color: '#39FF14',
            boxShadow: '0 0 15px #39FF14',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#39FF14';
            e.target.style.color = 'black';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#39FF14';
          }}
        >
          Explore
        </button>
      </div>
    </section>
  );
}
