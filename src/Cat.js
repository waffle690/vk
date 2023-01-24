
import './Cat.css';

function Categories() {
    let сat= ["Рекомендации", "Поиск" ],
        news = "Новости",
        inside_news = ["Фото", "Видео", "Музыка"];
    return (
        <div className="div_cat">
            <ul className="ul_cat">
                <li className="li_cat"><a href="#">{news}</a>
                    <ul className="ul_cat">
                        <li className="li_cat"><a href="#" style={{color: "grey"}}>{inside_news[0]}</a></li>
                        <li className="li_cat"><a href="#" style={{color: "grey"}}>{inside_news[1]}</a></li>
                        <li className="li_cat"><a href="#" style={{color: "grey"}}>{inside_news[2]}</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
  }
  
export default Categories;