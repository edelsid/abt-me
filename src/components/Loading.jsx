export default function Loading() {
  const loadingArr = Array.from(Array(4).keys());

  return (
    <div className='loading'>
      {loadingArr.map((item => 
      <div 
        key={item}
        style={{animationDelay: `${item > 0 ? (0.2 * item) : 0}s`}}>&#9672;
      </div>
      ))}
    </div>
  )
}