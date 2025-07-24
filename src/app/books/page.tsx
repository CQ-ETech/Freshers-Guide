import React from "react";
// Remove Image import and image imports

const books = [
  {
    title: "Evalué: The art of a Perfect Guess",
    image: "/images/Evalué.png",
    link: "https://drive.google.com/file/d/1IwHqnYSHCoiAbffrY0Ew5Nea6McQglti/view",
  },
  {
    title: "Playing it Soft: A Newcomer's Guide to Success",
    image: "/images/Playingitsoft.png",
    link: "https://drive.google.com/file/d/1w13G7zbCSCxk__oSMal7FIPdh7lIOsSa/view?usp=sharing",
  },
];

export default function BooksPage() {
  return (
    <main className="min-h-screen bg-transparent py-12 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#FFBB00]">Featured Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        {books.map((book, idx) => (
          <div
            key={idx}
            className="bg-black/70 rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-shadow"
          >
            <img
              src={book.image}
              alt={book.title}
              width={176}
              height={240}
              className="w-44 h-60 object-cover rounded-lg mb-5 border-2 border-blue-200 shadow-md"
            />
            <h2 className="text-2xl font-semibold mb-2">{book.title}</h2>
            <a
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-5 py-2 bg-[#FFBB00] text-white font-semibold rounded shadow hover:bg-yellow-500 transition-colors duration-200"
            >
              Read Book
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
