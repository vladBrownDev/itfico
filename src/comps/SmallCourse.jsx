import './SmallCourse.css';
import c from "../../src/img/csharp.png"


function SmallCourse() {
  return (
    <div className='smallCourse'>
        <img className='courseSmallIcon' src={c} alt="" />
        <h2>C# від нуля до героя</h2>
        <div>Навчаємо веб програмування, створення ігор та розробки ПЗ. Проходьте курси, вирішуйте завдання, переглядайте новини та ставайте справжніми майстрами програмування!</div>
        <a href="*">Детальніше</a>
    </div>
  )
}

export default SmallCourse