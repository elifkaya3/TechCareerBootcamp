"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () { })); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var root = document.getElementById("root");
var PhoneApp = /*#__PURE__*/function (_React$Component) {
  _inherits(PhoneApp, _React$Component);
  var _super = _createSuper(PhoneApp);
  function PhoneApp(props) {
    var _this;
    _classCallCheck(this, PhoneApp);
    _this = _super.call(this, props);
    _this.brandChangeApple = _this.brandChangeApple.bind(_assertThisInitialized(_this));
    _this.brandChangeXiaomi = _this.brandChangeXiaomi.bind(_assertThisInitialized(_this));
    _this.brandChangeHuawei = _this.brandChangeHuawei.bind(_assertThisInitialized(_this));
    _this.brandChangeSamsung = _this.brandChangeSamsung.bind(_assertThisInitialized(_this));
    _this.state = {
      brand: "Telefon Markaları ve Ortalama Fiyatları",
      price: "12.000-30.000B",
      hafıza: "256GB",
      ram: "16GB RAM",
      productImage: ["https://samsung-akinon.b-cdn.net/products/2020/11/17/2889/86c6f4fa-7451-4e6e-b2bc-0038619b9aaf_size616x616.jpg",
        "https://samsung-akinon.b-cdn.net/products/2020/11/17/2889/3292d2f2-da58-42d0-972a-0406e649b26a_size616x616.jpg",
        "https://samsung-akinon.b-cdn.net/products/2020/11/17/2889/95137fb4-c0bf-4ac5-b905-cd06cdd7ddaf_size616x616.jpg"],
    };
    console.log(_this.state.productImage);
    return _this;
  }
  _createClass(PhoneApp, [{
    key: "brandChangeApple",
    value: function brandChangeApple() {
      this.setState({
        productImage: ["https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125078214/125078214_0_MC/1234.jpg",
          "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125078214/125078214_3_MC/1234.jpg",
          "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125078214/125078214_2_MC/1234.jpg"
        ],
      });
      console.log("Apple seçildi");
    }
  }, {
    key: "brandChangeXiaomi",
    value: function brandChangeXiaomi() {
      this.setState({
        productImage: ["https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125078557/125078557_0_MC/66435855.jpg",
          "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125078557/125078557_1_MC/66435856.jpg",
          "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125078557/125078557_2_MC/66435857.jpg"],
      });
      console.log("Xiaomi seçildi");
    }
  }, {
    key: "brandChangeHuawei",
    value: function brandChangeHuawei() {
      this.setState({
        productImage: ["https://productimages.hepsiburada.net/s/253/550/110000236200211.jpg/format:webp",
        "https://productimages.hepsiburada.net/s/253/550/110000236200212.jpg/format:webp",
        "https://productimages.hepsiburada.net/s/253/550/110000236178366.jpg/format:webp"],
     });
      console.log("Huawei seçildi");
    }
  }, {
    key: "brandChangeSamsung",
    value: function brandChangeSamsung() {
      this.setState({
        productImage: ["https://samsung-akinon.b-cdn.net/products/2020/11/17/2889/86c6f4fa-7451-4e6e-b2bc-0038619b9aaf_size616x616.jpg",
        "https://samsung-akinon.b-cdn.net/products/2020/11/17/2889/3292d2f2-da58-42d0-972a-0406e649b26a_size616x616.jpg",
        "https://samsung-akinon.b-cdn.net/products/2020/11/17/2889/95137fb4-c0bf-4ac5-b905-cd06cdd7ddaf_size616x616.jpg"],
   });
      console.log("Samsung seçildi");
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "container-fill py-5 ml-2 bg-warning"
      }, /*#__PURE__*/React.createElement("div", {
        className: "row bg-body  "
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-6 bg-warning "
      }, /*#__PURE__*/React.createElement("h1", {
        className: ""
      },  this.state.brand), /*#__PURE__*/React.createElement("h3", {
        className: ""
      }, "Fiyat: ", this.state.price), /*#__PURE__*/React.createElement("p", {
        className: ""
      }, "Hafiza: ", /*#__PURE__*/React.createElement("b", null, this.state.hafıza)), /*#__PURE__*/React.createElement("p", {
        className: ""
      }, "Ram: ", /*#__PURE__*/React.createElement("b", null, this.state.ram)), /*#__PURE__*/React.createElement("button", {
        className: "btn btn-secondary me-2",
        onClick: this.brandChangeSamsung
      }, "Samsung"), /*#__PURE__*/React.createElement("button", {
        className: "btn btn-secondary me-2",
        onClick: this.brandChangeApple
      }, "Apple"), /*#__PURE__*/React.createElement("button", {
        className: "btn btn-secondary me-2",
        onClick: this.brandChangeXiaomi
      }, "Xiamoi"), /*#__PURE__*/React.createElement("button", {
        className: "btn btn-secondary me-2",
        onClick: this.brandChangeHuawei
      }, "Huawei")), /*#__PURE__*/React.createElement("div", {
        className: "col-6 d-flex justify-content-center bg-warning"
      }, /*#__PURE__*/React.createElement("div", {
        id: "carouselExampleControls",
        className: "carousel slide bg-warning",
        "data-bs-ride": "carousel"
      }, /*#__PURE__*/React.createElement("div", {
        className: "carousel-inner"
      }, /*#__PURE__*/React.createElement("div", {
        className: "carousel-item active"
      }, /*#__PURE__*/React.createElement("img", {
        src: this.state.productImage[0],
        className: "d-block w-100",
        alt: "..."
      })), /*#__PURE__*/React.createElement("div", {
        className: "carousel-item "
      }, /*#__PURE__*/React.createElement("img", {
        src: this.state.productImage[1],
        className: "d-block w-100",
        alt: "..."
      })), /*#__PURE__*/React.createElement("div", {
        className: "carousel-item"
      }, /*#__PURE__*/React.createElement("img", {
        src: this.state.productImage[2],
        className: "d-block w-100",
        alt: "..."
      }))), /*#__PURE__*/React.createElement("button", {
        className: "carousel-control-prev",
        type: "button",
        "data-bs-target": "#carouselExampleControls",
        "data-bs-slide": "prev"
      }, /*#__PURE__*/React.createElement("span", {
        className: "carousel-control-prev-icon bg-danger",
        "aria-hidden": "true"
      }), /*#__PURE__*/React.createElement("span", {
        className: "visually-hidden"
      }, "Previous")), /*#__PURE__*/React.createElement("button", {
        className: "carousel-control-next",
        type: "button",
        "data-bs-target": "#carouselExampleControls",
        "data-bs-slide": "next"
      }, /*#__PURE__*/React.createElement("span", {
        className: "carousel-control-next-icon bg-danger",
        "aria-hidden": "true"
      }), /*#__PURE__*/React.createElement("span", {
        className: "visually-hidden"
      }, "Next"))))));
    }
  }]);
  return PhoneApp;
}(React.Component);
ReactDOM.render( /*#__PURE__*/React.createElement(PhoneApp, null), root);
