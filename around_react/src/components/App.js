import Header from './Header';
import Main from './Main';
import ImagePopup from './ImagePopup';
import Footer from './Footer';
import '../index.css'
function App() {
  return (
    <body class="page">
    <Header />
    <Main />
    <Footer />
    <template id="template">
      <li class="photos__card">
        <button class="photos__remove" type="button"></button>
        <img class="photos__img" src="#" alt="picture in feed" />
        <div class="photos__interactive">
          <h2 class="photos__title"></h2>
          <div class="photos__likes-section">
            <button class="photos__like" type="button"></button>
            <p class="photos__like-counter"></p>
          </div>
        </div>
      </li>
    </template>
  </body>
  );
}

export default App;
