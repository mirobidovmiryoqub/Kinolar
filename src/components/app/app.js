import { Component } from 'react';
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";
import { v4 as uuidv4 } from 'uuid';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: "Empire of osman", viewers: 646, favourite: false, id: 1 },
                { name: "Ertugrul", viewers: 8906, favourite: false, id: 2 },
                { name: "Omar", viewers: 9565, favourite: true, id: 3 }
            ],
            term:'',
            filter:'',
        };
    }


    onDelete = (id) => {
        this.setState(({ data }) => ({
            data: data.filter(c => c.id !== id),
        }));
    };


    addForm = (item) => {
        this.setState(({ data }) => {
            const newArr = [...data, {...item, id: uuidv4()}]; // Yangi element qo'shiladi
            return {
                data: newArr
            };
        });
    };
    filterHandler = (arr, filter) => {
        switch (filter) {
            case 'popular':
                return arr.filter(c => c.like);
                return arr.filter(c => c.viewers >800);
            default:
                return arr;
        }
    }

    render() {
        const { data } = this.state;
        return (
            <div className='app font-monospace'>
                <div className="content">
                    <AppInfo />
                    <div className='search-panel'>
                        <SearchPanel />
                        <AppFilter />
                    </div>
                    <MovieList data={data} onDelete={this.onDelete} />
                    <MoviesAddForm addForm={this.addForm} />
                </div>
            </div>
        );
    }
}

export default App;
