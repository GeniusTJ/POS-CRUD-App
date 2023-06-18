// import logo from './logo.svg';
import './App.css';
import FoodTileContainer from './components/FoodTypeTile/FoodTileContainer.js'
import ItemTileContainer from './components/ItemTiles/ItemTileContainer';
import SingleItem from './components/ItemTiles/SingleItem';
import UpperNavBar from './components/NavBar/UpperNavBar';
import RecentOrderContainer from './components/RecentOrders/RecentOrderContainer'
import Cartitem from './components/Cart/Cartitem';

import PriceViewerContainer from './components/Cart/Price/PriceViewerContainer';
import CartItemContainer from './components/Cart/CartItemContainer';
import DashboardContainer from './components/Dashboard/DashboardContainer'
import CustomerDetailsContainer from './components/Customer/CustomerDetailsContainer';
import CustomerDisplay from './components/Customer/CustomerDisplay';


function App() {
  return (
    <div className="App">
       < UpperNavBar />
       <CustomerDetailsContainer />
       <CustomerDisplay />
       <DashboardContainer />
       <div className="center">
       <RecentOrderContainer /> 
       <div className="innerCenter">
       <FoodTileContainer />
       <PriceViewerContainer />
       <ItemTileContainer />   
       </div>
       </div>    
       <CartItemContainer />
       
    </div>
  );
}

export default App;
