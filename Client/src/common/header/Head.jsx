import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +01211690901</label>
            <i className='fa fa-envelope'></i>
            <label> Vêtements@gmail.com</label>
          </div>
          <div className='right row RText'>
            <label>Need Help?</label>
            <span>🏳️</span>
            <label>EN</label>
            <span>🏳️</span>
            <label>USD</label>
            <span>🏳️</span>
            <label>AR</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
