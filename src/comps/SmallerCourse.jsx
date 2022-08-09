


function SmallerCourse(props) {
  return (
    <div className='smallerCourse' style={{backgroundColor:`${props.color}`}}>
        <img className='courseSmallIcon' src={props.img} alt="" />
        <h2>{props.head}</h2>
        <div>{props.desc}</div>
        <a href="*">Детальніше</a>
    </div>
  )
}

export default SmallerCourse