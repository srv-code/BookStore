export interface Book {
  id: number;
  genre: string;
  title: string;
  author: string;
  rating: number;
  price: number;
}

// dummy implementaion
export function getBookGenres(): string[] {
  return [
    'Fiction',
    'Non-fiction',
    'Romantic',
    'Novel',
    'Business & Economics',
    'Narative',
    'Anthology',
    "Children's",
    'Classic',
    'Mystery',
    'Adventure',
  ];
}

// dummy implementaion
// sends an array of book of upto cutoff count in descending order of rating
export function getBooksByGenre(genre: string, cutoff: number): Book[] {
  switch (genre) {
    case 'Fiction':
      return [
        {
          id: 1,
          genre: 'Fiction',
          title: 'The Paying Guests',
          author: 'Waters, Sarah',
          rating: 5,
          price: 20.45,
        },

        {
          id: 2,
          genre: 'Fiction',
          title: 'A Tale Of Two Cities',
          author: 'Dickens, Charles',
          rating: 4.5,
          price: 31.75,
        },

        {
          id: 3,
          genre: 'Fiction',
          title: 'A Town Like Alice',
          author: 'Shute, Nevil',
          rating: 3.5,
          price: 17.82,
        },
      ];

    case 'Business & Economics':
      return [
        {
          id: 4,
          genre: 'Business & Economics',
          title: 'The art of war',
          author: 'Abc Def',
          rating: 5,
          price: 27.65,
        },

        {
          id: 5,
          genre: 'Business & Economics',
          title: 'Awakening to Your Life Purpose',
          author: 'Abc Def',
          rating: 4.5,
          price: 35.55,
        },

        {
          id: 6,
          genre: 'Business & Economics',
          title: 'Power of Your Subconscious Mind',
          author: 'Abc Def',
          rating: 2,
          price: 17.99,
        },
      ];
  }

  return [];
}
