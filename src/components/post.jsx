export default function Post() {
  return (
    <div className='post'>
        <div className='image'>
          <img src='https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='entry-img'></img>
        </div>
        <div className='texts'>
        <h2>Ut est ipsum eu officia cupidatat esse duis.</h2>
        <p className='info'>
          <a className='author' href='/'> Thanh Phat Lam</a>
          <time>2023-11-11</time>
        </p>
        <p className='summary'>Ea mollit elit id proident sit minim nulla anim. Elit amet incididunt aliquip dolor sit dolor fugiat adipisicing. Cillum qui officia laboris sint in excepteur magna exercitation.</p>
        </div>
      </div>
  )
}