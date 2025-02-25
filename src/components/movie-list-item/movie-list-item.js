import './movie-list-item.css';
import { Component } from 'react';

class MovieListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favourite: false, like:true
        };
    }
    onFavorite = () => {
        this.setState(({ favourite }) => ({
            favourite: !favourite
        }));
    };

    onLike = () =>{
        this.setState(({like}) => ({
            like: !like
        }));
    }

    render() {
        const { name, viewers,onDelete } = this.props;
        const { favourite, like } = this.state;

        return (
            <li className={`list-group-item d-flex justify-content-between ${ favourite && "favourite"} ${like && "like"}`}>
                <span onClick={this.onLike} className="list-group-item-label">{name}</span>
                <input type="number" className="list-group-item-input" defaultValue={viewers} />
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button" className="btn-cookie btn-sm" onClick={this.onFavorite}>
                        <i className="fas fa-cookie"></i>
                    </button>
                    <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className={`fas fa-star ${favourite ? 'favourite' : ''}`}></i>
                </div>
            </li>
        );
    }
}
// const MovieListItem = ({name, viewers, favourite }) => {
//   return (
//       <li className='list-group-item d-flex justify-content-between'>
//         <span className='list-group-item-label'>{name}</span>
//           <input type='number' className='list-group-item-input' defaultChecked={viewers}/>
//           <div className='d-flex justify-content-center align-items-center'>
//               <button type='button' className='btn-cookie btn-sm'>
//                   <i className='fas fa-cookie'></i>
//               </button>
//               <button type='button' className='btn-cookie btn-sm'>
//                   <i className='fas fa-trash'></i>
//               </button>
//                   <i className='fas fa-star'></i>
//           </div>
//       </li>
//   )
// }
export default MovieListItem;