import React from 'react'
import { DatePicker,Icon } from 'antd' 
import TopAct from './TopAct'
import Header from './Header'
import Swiper from './Swiper'
import Nav from './Nav'
import Ten from './Ten'


//import '../../assets/img/test.jpg'
import '../../assets/css/antd.css';
class Home extends React.Component{
	render(){
		return(
			<div id="home">
				<TopAct  show={true}/>
				<Header />
				<Swiper />
				<Nav />
				<Ten />
			</div>
		)
	}
}
export default Home