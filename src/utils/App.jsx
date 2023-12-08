import './App.css'
import BookDisplay from './components/BookDisplay.jsx'
import AddBook from './components/AddBook.jsx'

const books = [
    {id: 0, cover: `https://m.media-amazon.com/images/I/71G2l098ksL._AC_UF1000,1000_QL80_.jpg`, title: `Edenbrooke`, author: `Julianne Donaldson`, rating: 5, genre: `Regency Romance`},
    {id: 1, cover: `https://m.media-amazon.com/images/I/81B9LhCS2AL._AC_UF1000,1000_QL80_.jpg`, title: `And Then There Were None`, author: `Agatha Christie`, rating: 5, genre: `Mystery`},
    {id: 2, cover: `https://m.media-amazon.com/images/I/71BNB5SNB6L._AC_UF1000,1000_QL80_.gif`, title: `Nowhere to Call Home`, author: `Cynthia DeFelice`, rating: 4, genre: `Historical Fiction`},
    {id: 3, cover: `https://prodimage.images-bn.com/pimages/9781419769856_p0_v1_s1200x630.jpg`, title: `Gnomes`, author: `Wil Huygen`, rating: 4, genre: `Fiction`},
    {id: 4, cover: `https://m.media-amazon.com/images/I/71epSyr4MeL._AC_UF1000,1000_QL80_.jpg`, title: `Heart-Shaped Box`, author: `Joe Hill`, rating: 3, genre: `Horror`},
    {id: 5, cover: `https://m.media-amazon.com/images/I/51Zd5my9pjL._AC_UF1000,1000_QL80_.jpg`, title: `The Kiss of a Stranger`, author: `Sarah M. Eden`, rating: 5, genre: `Regency Romance`}
  ]


function App() {
  return (
<body>
  <div>
    <AddBook addCard={addCard}/>
  </div>
  <div>
    <BookDisplay />
  </div>
    <AddBook addCard={addCard}/>
  </body>
  )
}

export default App
