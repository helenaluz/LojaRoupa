export default function Casa(){
    return(
        <div>
            <h2 className="text-center">Só aqui você encontra as melhores roupas!</h2>
            <div id="carouselExampleIndicators" className="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://img.freepik.com/free-photo/beautiful-african-model-with-perfect-curly-hairs-elegant-orange-blouse-silk-pants-sitting-vintage-chair-beige-wall_273443-4089.jpg" className="d-block w-100 img-fluid" alt="..." style={{objectFit: 'cover', maxHeight: '400px'}} />
                </div>
                <div className="carousel-item">
                    <img src="https://www.themodelskit.co.uk/wp-content/uploads/2021/12/shutterstock_1855048690.jpg" className="d-block w-100 img-fluid" alt="..." style={{objectFit: 'cover', maxHeight: '400px'}} />
                </div>
                <div className="carousel-item">
                    <img src="https://img.freepik.com/free-photo/two-young-beautiful-brunette-girls-nice-trendy-summer-similar-suits-clothes_158538-15176.jpg" className="d-block w-100 img-fluid" alt="..." style={{objectFit: 'cover', maxHeight: '400px'}} />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>
    );
}