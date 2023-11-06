
const About = () => {
  return (
    <>
    <div style={{padding: '25px'}}>
    <br />
    <h3>Acerca de nosotros</h3>
    <br/>
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nihil explicabo molestias impedit sunt soluta veritatis repudiandae expedita facilis ducimus aspernatur repellendus est, hic, delectus omnis aliquam iusto, magni asperiores.</p>
    <hr />
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div className="card" style={{width: '25%', margin: '20px'}}>
        <img src="https://preview.redd.it/iogx5ag3imh61.png?width=3840&format=png&auto=webp&s=e243a2185122e343084e41841ca80fb2d6d1b693" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    <div className="card" style={{width: '25%', margin: '20px'}}>
        <img src="https://i.redd.it/t0j888dskis21.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    <div className="card" style={{width: '25%', margin: '20px'}}>
        <img src="https://i.pinimg.com/originals/2c/8e/7c/2c8e7c856120a9e4687caad46bf6ec49.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    </div>
    <br />
    </div>
    
    </>
  )
}

export default About