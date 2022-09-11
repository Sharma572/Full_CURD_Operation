import React from 'react'

const Navbar = () => {
  return (
   <>
   <nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <h3 className='text-light'>CRUD</h3>
    <form class="d-flex">
     
      <button className="btn btn-success" type="submit"> <a className='text-decoration-none text-light' href='https://raunak-portfolio.netlify.app/'>Who I am </a></button>
      
    </form>
  </div>
</nav>
   </>
  )
}

export default Navbar