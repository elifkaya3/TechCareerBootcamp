const root = document.getElementById("root");

class PhoneApp extends React.Component {
    constructor(props) {
        super(props);
        this.brandChangeApple = this.brandChangeApple.bind(this);
        this.brandChangeXiaomi = this.brandChangeXiaomi.bind(this);
        this.brandChangeHuawei = this.brandChangeHuawei.bind(this);
        this.brandChangeSamsung = this.brandChangeSamsung.bind(this);
        this.state = {
            brand: "Telefon Markaları",
            hafıza: "128GB",
            ram: "8GB RAM",
            productImage: ["https://samsung-akinon.b-cdn.net/products/2020/11/17/2889/86c6f4fa-7451-4e6e-b2bc-0038619b9aaf_size616x616.jpg",
            "https://samsung-akinon.b-cdn.net/products/2020/11/17/2889/3292d2f2-da58-42d0-972a-0406e649b26a_size616x616.jpg",
            "https://samsung-akinon.b-cdn.net/products/2020/11/17/2889/95137fb4-c0bf-4ac5-b905-cd06cdd7ddaf_size616x616.jpg"],

        }
        console.log(this.state.productImage)
    }
    brandChangeApple() {
        this.setState({
            productImage: ["https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125078214/125078214_0_MC/1234.jpg",
                "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125078214/125078214_3_MC/1234.jpg", 
                "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125078214/125078214_2_MC/1234.jpg"
            ],
        })
        console.log("Apple seçildi")
    }

    brandChangeXiaomi() {
        this.setState({
            productImage: ["https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125078557/125078557_0_MC/66435855.jpg", 
            "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125078557/125078557_1_MC/66435856.jpg",
                "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125078557/125078557_2_MC/66435857.jpg"],
        })
        console.log("Xiaomi seçildi")
    }
    brandChangeHuawei() {
        this.setState({
            productImage: ["https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_98071460/fee_325_225_png/HUAWEI-Nova-10-128-GB-Ak%C4%B1ll%C4%B1-Telefon-Y%C4%B1ld%C4%B1zl%C4%B1-G%C3%BCm%C3%BC%C5%9F",
                "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_98071468/wcs_overlay_prod_detail/HUAWEI-Nova-10-128-GB-Ak%C4%B1ll%C4%B1-Telefon-Y%C4%B1ld%C4%B1zl%C4%B1-G%C3%BCm%C3%BC%C5%9F",
                "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_98071462/wcs_overlay_prod_detail/HUAWEI-Nova-10-128-GB-Ak%C4%B1ll%C4%B1-Telefon-Y%C4%B1ld%C4%B1zl%C4%B1-G%C3%BCm%C3%BC%C5%9F"],
        })
        console.log("Huawei seçildi")
    }

    brandChangeSamsung() {
        this.setState({
            productImage: ["https://samsung-akinon.b-cdn.net/products/2020/11/17/2889/86c6f4fa-7451-4e6e-b2bc-0038619b9aaf_size616x616.jpg",
            "https://samsung-akinon.b-cdn.net/products/2020/11/17/2889/3292d2f2-da58-42d0-972a-0406e649b26a_size616x616.jpg",
            "https://samsung-akinon.b-cdn.net/products/2020/11/17/2889/95137fb4-c0bf-4ac5-b905-cd06cdd7ddaf_size616x616.jpg"],
        })
        console.log("Samsung seçildi")
    }

    render() {
        return (
            <div className="container pt-5">

                <div className="row p-3 border border-3 rounded-3 shadow-lg p-3 mb-5 bg-body rounded">
                    <div className="col-6 ">
                        <h1 className="">Marka: {this.state.brand}</h1>
                        <h3 className="">Fiyat: {this.state.price}</h3>
                        <p className="">Hafıza: <b>{this.state.hafıza}</b></p>
                        <p className="">Ram: <b>{this.state.ram}</b></p>

                        <button className="btn btn-primary me-2" onClick={this.changeBlue}>Mavi
                        </button>

                        <button className="btn btn-light me-2" onClick={this.changeWhite}>Beyaz
                        </button>

                        <button className="btn btn-warning me-2" onClick={this.changeOrange}>Turuncu
                        </button>

                        <button className="btn btn-dark" onClick={this.changeBlack}>Siyah
                        </button>

                        
                    </div>
                    <div className="col-6 d-flex justify-content-center">


                            {/* <li>
                                {
                                this.state.productImage.map((item,index)=>
                                    <img src={item} key={index} alt="" width={50} />
                                )
                            }
                            </li> */}

                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={this.state.productImage[0]} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={this.state.productImage[1]} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={this.state.productImage[2]} className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon bg-danger" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon bg-danger" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>

                        </div>


                </div>



            </div>


        );
    }
}



ReactDOM.render(<PhoneApp />, root);
