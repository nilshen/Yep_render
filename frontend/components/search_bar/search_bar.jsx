import React from "react";
import { FiSearch } from "react-icons/fi"
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            input: ''
    }

    this.handleSearch = this.handleSearch.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSearch(e) {
        e.preventDefault();
        let searchInput = this.state.input
        if (searchInput === '') {
            searchInput = `/restaurants`
        } else {
            searchInput = `/restaurants/search/${searchInput}`
        }
        // const navTo = useNavigate();
        // navTo('/restaurants')
        this.props.history.push(`${searchInput}`)
        this.state.input = ""
        // location.reload();
        // const history = useHistory()
        // history.go(0)
    }

    componentDidMount() {
        // debugger    
        this.props.requestRestaurants()
    }


    render () {
        let {restaurants} = this.props
        return (
            <div className="searchbar-parent">
            <div className="searchbar-container">
                <div className="searchbar-container-bar">
                <p className="searchbar-restaurant">
                    <input 
                    type="text" 
                    className="searchbar-default"
                    placeholder="Restaurants..."
                    onChange={this.update('input')}
                    value={this.state.input}
                    />
                </p>
                <p className="searchbar-location">
                    <input 
                    type="text" 
                    className="searchbar-default"
                    readOnly placeholder="New York, NY"
                    />
                </p>
                    <FiSearch onClick={this.handleSearch} className="searchbar-icon"/>
                </div>
                
                <div className={this.state.input !== "" ? "searchbar-container-result" : "searchbar-container-result-hidden"}>
                    <ul>
                        
                        {restaurants.filter((restaurant)=>{
                            if (this.state.input === "") {
                                return  ""
                            } else if (restaurant.name.toLowerCase().includes(this.state.input.toLowerCase())){
                                return restaurant
                            } else if (restaurant.category.toLowerCase().includes(this.state.input.toLowerCase())){
                                return restaurant
                            }
                        }).map((restaurant) => (
        
                                <Link onClick={()=>this.state.input=""} to={`/restaurants/${restaurant.id}`}  className="index-item" style={{ textDecoration: 'none' }} key={restaurant.id}>
                                <div className='index-item-container-searchbar'>
                                    <img className='index-pic-searchbar' src={restaurant.photoUrls[0]} />
                                    <div className='index-item-individual'>
                                        <h3>{restaurant.name}</h3>
                                        <div className='index-item-individual-details'>
                                            <div className='index-item-individual-details-cat'>{restaurant.category}</div>
                                            <div>{restaurant.price}</div>
                                        </div>
                                        <div className="index-item-individual-hour">Hours: {restaurant.hours}</div>
                                    </div>
                                </div>
                                </Link> 
                        
                        ))}
                    </ul>
                </div>
                {/* </div> */}
            </div>
            </div>
        );
    }
}


export default SearchBar;
