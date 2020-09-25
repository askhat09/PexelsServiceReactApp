import React from "react";

import "./imageGrid.css";

const ImageGrid = (props) => {
  const images = props.images.map((image) => {
    return (
      <div key={image.id} className="photo-wrap-column">
        <div className="photo-wrap-column-box">
          <img src={image.src.large} alt="suret"></img>
        </div>
      </div>
    );
  });
  return (
    <div className="result-wrap">
      <div className="photo-wrap">{images}</div>
    </div>
  );
};

export default ImageGrid;

// export default class ImageGrid extends Component {
//   render() {
//     const { url } = this.props.photos;
//     return (
//       <div className="result-wrap">
//         <div className="photo-wrap">
//           <div className="photo-wrap-column">
//             <div className="photo-wrap-column-box">
//               <img
//                 src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjkxODc3fQ"
//                 alt="suret"
//               ></img>
//             </div>
//           </div>

//         </div>
//       </div>
//     );
//   }
// }
