import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import axios from 'axios';
// import React from 'react';
// import ReactDOM from 'react-dom';


// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             error: null,
//             isLoaded: false,
//             items: []
//         };
//     }
//     componentDidMount() {
//         // response.then(json => { items: json }) - npm i axios
//         const response = axios.get("http://localhost:8585/api/Youtubes")
//             .then(json => {
//                 this.setState({
//                     isLoaded: true,
//                     items: json.data,
//                 });
//                 console.log(json);
//             })
//     }

//     render() {
//         const { items } = this.state;
//         return (
//             <div>
//                 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" />
//                 <div className='container'>
//                     <div className="row">
//                         <div className="col-12">
//                             <div className="my-3 p-3 bg-white rounded shadow-sm">
//                                 <h6 className="border-bottom border-gray pb-2 mb-0">Suggestions</h6>
//                                 {
//                                     items.map(item => (
//                                         <div className="media text-muted pt-3" key={item.id}>
//                                             <img className='bd-placeholder-img flex-shrink-0 me-2 rounded' src={item.imageUrl} alt="" width={50} height={50}  />
//                                             <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
//                                                 <div className="d-flex justify-content-between align-items-center w-100">
//                                                     <strong className="text-gray-dark">{item.title} - {item.channel}</strong>
//                                                     <strong href="#">{item.duration} Follow - {item.logo}</strong>
//                                                 </div>
//                                             </div>
//                                         </div>
                                        
//                                     ))
//                                 }
//                                 <small className="d-block text-right mt-3">
//                                     {/* <a href="#">All suggestions</a> */}
//                                 </small>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }


// }
// ReactDOM.render(<App />, document.getElementById('root'));
