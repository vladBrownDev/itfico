import './SmallCourse.css';
import newIcon from "../img/newicon.png"


function newCourse() {
  return (
    <div className='smallCourse newCourse'>
        <img className='courseSmallIcon' src={newIcon} alt="" />
        <h2>Новий курс у розробці!</h2>
        <div>Підписуйся, щоб не пропустити</div>
        <a href="*">Підписатися</a>
    </div>
  )
}

export default newCourse