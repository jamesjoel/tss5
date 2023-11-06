import React from 'react'

const LatestBlog = () => {
  return (
    <section id="latest-blog">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="display-header d-flex flex-wrap justify-content-between pb-3">
            <h2 className="display-2 text-dark text-uppercase">Read Our Articles</h2>
            <a href="blog.html" className="btn btn-medium btn-arrow btn-normal position-relative">
              <span className="text-uppercase">See all articles</span>            
              <svg className="arrow-right position-absolute" style={{width:"18", height:"20"}}>
               
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="row g-3 post-grid">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
          <div className="card-item">
            <div className="card border-0 bg-transparent">
              <div className="card-image">
                <img src="/assets/images/post-item1.jpg" alt="" className="post-image img-fluid" />
              </div>
            </div>
            <div className="card-body p-0 mt-4">
              <h3 className="card-title text-uppercase">
                <a href="single-post.html">Best looking interior things for bedrooms</a>
              </h3>
              <p>Enim ut nunc, ultrices mauris felis viverra amet. Ante sed dictum nisi suscipit ac ut faucibus pretium interdum.</p>
              <a href="single-post.html" className="btn btn-normal text-uppercase p-0"><em>Read More</em></a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
          <div className="card-item">
            <div className="card border-0">
              <div className="card-image">
                <img src="/assets/images/post-item2.jpg" alt="" className="post-image img-fluid" />
              </div>
            </div>
            <div className="card-body p-0 mt-4">
              <h3 className="card-title text-uppercase">
                <a href="single-post.html">Trending modern furniture design in 2022</a>
              </h3>
              <p>Enim ut nunc, ultrices mauris felis viverra amet. Ante sed dictum nisi suscipit ac ut faucibus pretium interdum.</p>
              <a href="single-post.html" className="btn btn-normal text-uppercase p-0"><em>Read More</em></a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
          <div className="card-item">
            <div className="card border-0">
              <div className="card-image">
                <img src="/assets/images/post-item3.jpg" alt="" className="post-image img-fluid" />
              </div>
            </div>
            <div className="card-body p-0 mt-4">
              <h3 className="card-title text-uppercase">
                <a href="single-post.html">Why is simple firniture design looks fabulous</a>
              </h3>
              <p>Enim ut nunc, ultrices mauris felis viverra amet. Ante sed dictum nisi suscipit ac ut faucibus pretium interdum.</p>
              <a href="single-post.html" className="btn btn-normal text-uppercase p-0"><em>Read More</em></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default LatestBlog