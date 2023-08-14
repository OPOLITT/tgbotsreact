import './App.scss';

function App() {
  return (
    <div className="App">

      <div className="container">

          <span className="title">Создание подписки</span>

          <div className="block">

            <div className="block__left block-left">

              <div className="block-left__departure departure">
                  <span className="departure__title">Город вылета</span>
                  <input type="text" className="departure__input" />
              </div>

              <div className="block-left__month">
                <span className="month__title">Месяцы</span>

                <div className="month__blocks blocks-month">
                  
                <div className="blocks-month__block" style={{border:'1px #BFC3C4 solid', borderTopLeftRadius:'5px'}}>
                    <span className="blocks-month__title">Декабрь</span>
                    <span className="blocks-month__price">1522$</span>
                  </div>

                <div className="blocks-month__block" style={{borderRight:'1px #BFC3C4 solid', borderBottom:'1px #BFC3C4 solid', borderTop:'1px solid #BFC3C4'}}>
                    <span className="blocks-month__title">Январь</span>
                    <span className="blocks-month__price">1522$</span>
                  </div>

                  <div className="blocks-month__block" style={{borderRight:'1px #BFC3C4 solid', borderBottom:'1px #BFC3C4 solid', borderTop:'1px solid #BFC3C4', borderTopRightRadius:'5px'}}>
                    <span className="blocks-month__title">Февраль</span>
                    <span className="blocks-month__price">1522$</span>
                  </div>

                  <div className="blocks-month__block" style={{borderBottom:'1px solid #BFC3C4', borderLeft:'1px solid #BFC3C4', borderRight:'1px solid #BFC3C4'}}>
                    <span className="blocks-month__title">Март</span>
                    <span className="blocks-month__price">1522$</span>
                  </div>

                  <div className="blocks-month__block" style={{borderBottom:'1px solid #BFC3C4', borderRight:'1px solid #BFC3C4'}}>
                    <span className="blocks-month__title">Апрель</span>
                    <span className="blocks-month__price">1522$</span>
                  </div>

                  <div className="blocks-month__block" style={{borderBottom:'1px solid #BFC3C4', borderRight:'1px solid #BFC3C4'}}>
                    <span className="blocks-month__title">Май</span>
                    <span className="blocks-month__price">1522$</span>
                  </div>
                  
                  <div className="blocks-month__block" style={{borderBottom:'1px solid #BFC3C4', borderLeft:'1px solid #BFC3C4', borderRight:'1px solid #BFC3C4'}}>
                    <span className="blocks-month__title">Июнь</span>
                    <span className="blocks-month__price">1522$</span>
                  </div>
                  
                  <div className="blocks-month__block" style={{borderBottom:'1px solid #BFC3C4', borderRight:'1px solid #BFC3C4'}}>
                    <span className="blocks-month__title">Июль</span>
                    <span className="blocks-month__price">1522$</span>
                  </div>

                  <div className="blocks-month__block" style={{borderBottom:'1px solid #BFC3C4', borderRight:'1px solid #BFC3C4'}}>
                    <span className="blocks-month__title">Август</span>
                    <span className="blocks-month__price">1522$</span>
                  </div>

                  <div className="blocks-month__block" style={{borderBottom:'1px solid #BFC3C4', borderRight:'1px solid #BFC3C4', borderLeft:'1px solid #BFC3C4', borderBottomLeftRadius:'5px'}}>
                    <span className="blocks-month__title">Сентябрь</span>
                    <span className="blocks-month__price">1522$</span>
                  </div>

                  <div className="blocks-month__block" style={{borderBottom:'1px solid #BFC3C4', borderRight:'1px solid #BFC3C4'}}>
                    <span className="blocks-month__title">Октябрь</span>
                    <span className="blocks-month__price">1522$</span>
                  </div>

                  <div className="blocks-month__block" style={{borderBottom:'1px solid #BFC3C4', borderRight:'1px solid #BFC3C4', borderBottomRightRadius: '5px'}}>
                    <span className="blocks-month__title">Ноябрь</span>
                    <span className="blocks-month__price">1522$</span>
                  </div>

                </div>
                
              </div>

            </div>


            <div className="block__right">
              <div className="block-left__departure departure">
                    <span className="departure__title">Город прибытия</span>
                    <input type="text" className="departure__input" />
              </div>

              <div className="block-left__departure  maxprice">
                    <span className="departure__title maxprice__title">Максимальная цена</span>
                    <input type="text" className="departure__input maxprice__input" />
              </div>
            </div>

          </div>

      </div> 

    </div>
  );
}

export default App;
