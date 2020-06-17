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
export function getBooks(genre: string, cutoff: number): Book[] {
  switch (genre) {
    case 'Fiction':
      return [
        {
          id: 1,
          genre: 'Fiction',
          title: 'Abc Def Ghi',
          author: 'Abc Def',
          rating: 5,
          price: 20.45,
        },

        {
          id: 2,
          genre: 'Fiction',
          title: 'Abc Def Ghi',
          author: 'Abc Def',
          rating: 4,
          price: 31.75,
        },

        {
          id: 3,
          genre: 'Fiction',
          title: 'Abc Def Ghi',
          author: 'Abc Def',
          rating: 3,
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
          title: 'The 7 Keys to Success: Awakening to Your Life Purpose',
          author: 'Abc Def',
          rating: 5,
          price: 35.55,
        },

        {
          id: 6,
          genre: 'Business & Economics',
          title: 'The Power of Your Subconscious Mind',
          author: 'Abc Def',
          rating: 3,
          price: 17.99,
        },
      ];
  }

  return [];
}
