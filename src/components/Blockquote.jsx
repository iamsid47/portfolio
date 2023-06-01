import React, { useState, useEffect, useMemo } from "react";

const Blockquote = () => {
  const quotes = useMemo(
    () => [
      {
        quote:
          "Logic will get you from A to B. Imagination will take you everywhere.",
        author: "Albert Einstein",
        title: "Theoretical Physicist",
      },
      {
        quote: "Genius is 1% inspiration, and 99% perspiration.",
        author: "Thomas Edison",
        title: "American Inventor",
      },
      {
        quote:
          "If you cannot do great things, do small things in a great way..",
        author: "Napoleon Hill",
        title: "American Author",
      },
      {
        quote: "What is not started will never get finished.",
        author: "Johann Wolfgang von Goethe",
        title: "German Poet",
      },
      {
        quote:
          "One of the huge mistakes people make is that they try to force an interest on themselves. You don't choose your passions; your passions choose you.",
        author: "Jeff Bezos",
        title: "Executive Chairman of Amazon",
      },
      {
        quote:
          "My biggest motivation? Just to keep challenging myself. I see life almost like one long University education that I never had -- everyday I’m learning something new.",
        author: "Richard Branson",
        title: "British Business Magnate",
      },
      {
        quote: "The best way to predict the future is to create it.",
        author: "Peter Drucker",
        title: "Austrian-American Consultant",
      },
      {
        quote:
          "At some point you’ve got to decide for yourself who you gonna be. Can’t let nobody make that decision for you.",
        author: "Moonlight",
        title: "(2016)",
      },
      {
        quote:
          "Oh yes, the past can hurt. But you can either run from it, or learn from it.",
        author: "The Lion King",
        title: "(1994)",
      },
      {
        quote:
          "It’s only after we’ve lost everything that we’re free to do anything.",
        author: "Fight Club",
        title: "(1999)",
      },
    ],
    []
  );

  const [randomQuote, setRandomQuote] = useState({});

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  }, [quotes]);

  return (
    <section className="my-20 mx-4">
      <figure class="max-w-screen-md mx-auto text-center">
        <svg
          aria-hidden="true"
          class="w-12 h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
          />
        </svg>
        <blockquote>
          <p class="text-2xl italic font-medium text-gray-900 dark:text-white">
            "{randomQuote.quote}"
          </p>
        </blockquote>
        <figcaption class="flex items-center justify-center mt-6 space-x-3">
          <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <cite class="pr-3 font-medium text-gray-900 dark:text-white">
              {randomQuote.author}
            </cite>
            <cite class="pl-3 text-sm text-gray-500 dark:text-gray-400">
              {randomQuote.title}
            </cite>
          </div>
        </figcaption>
      </figure>
    </section>
  );
};

export default Blockquote;
