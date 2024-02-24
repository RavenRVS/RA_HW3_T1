type Film = {
    id: string;
    title: string;
    img: string;
    price: number;
    currency: string;
    count: number;
  };
  
  const films: Film[] = [{
    id: '1',
    title: 'Супермен',
    img: 'https://upload.wikimedia.org/wikipedia/en/b/b0/Superman_%281978_film_poster%29.jpg',
    price: 1299,
    currency: '₽',
    count: 3,
  }, {
    id: '2',
    title: 'Одинокий рейнджер',
    img: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Lone_ranger_silver_1965.JPG',
    price: 1399,
    currency: '₽',
    count: 2,
  }, {
    id: '3',
    title: 'Побег из Шоушенка',
    img: 'https://upload.wikimedia.org/wikipedia/ru/thumb/d/de/Movie_poster_the_shawshank_redemption.jpg/317px-Movie_poster_the_shawshank_redemption.jpg',
    price: 1899,
    currency: '₽',
    count: 99,
  }, {
    id: '4',
    title: 'Защитники',
    img: 'https://upload.wikimedia.org/wikipedia/ru/thumb/9/9e/%D0%97%D0%B0%D1%89%D0%B8%D1%82%D0%BD%D0%B8%D0%BA%D0%B8-%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg/315px-%D0%97%D0%B0%D1%89%D0%B8%D1%82%D0%BD%D0%B8%D0%BA%D0%B8-%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg',
    price: 1200,
    currency: '₽',
    count: 0,
  }];
  
  export default films;