import React from "react";
import axios from "axios";
import DisplayGender from "./DisplayGender.js"


class SearchGender extends React.Component{
	constructor(props){
		super(props);
			this.state ={
				gender_list: [],
				gender_val:"",
				sorted_arr:[]
			}
		}

	get_gender_value =(e)=>{
		this.setState({
			gender_val:e.target.value
		})
	}

	get_gender_details =()=>{
		axios({
			method: 'get',
    		url: 'https://raw.githubusercontent.com/masai-school/assignments-data/master/data/dummy/json/employee_salaries.json',
		})

		.then((response) =>{
			console.log(response)
			this.setState({
				
				sorted_arr:response.data.filter((item)=> {
						return item.gender === this.state.gender_val;
					}).map((item)=>{
						return item
					})

					});	
			
			})

		.catch((err) => alert(err))
		//console.log(arr)
	}

	// get_array_list =()=>{
	// 	this.state.gender_list.map((item)=>{
	// 		if(this.state.gender_val === item.gender ){
	// 			return item
	// 		}
	// 	})
	// }

	render(){
		console.log(this.state.sorted_arr)

		return(
			<div>
				<div className="jumbotron">
					<h5 className="display-7 text-center">Employee Database</h5>
				</div>
				<form>
					<div className="form-row align-items-center">
						<div className="col-auto my-1">
							<label className="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
							<select onChange ={this.get_gender_value} className="custom-select mr-sm-2" id="inlineFormCustomSelect">
								<option selected>Choose...</option>
								<option value="Male">Male</option>
								<option value="Female">Female</option>
							</select>
						</div>
						<div className="col-auto my-1">
							<button type="button" className="btn btn-primary" onClick ={this.get_gender_details}>Search</button>
						</div>
					</div><br/>
				</form>
				
					<DisplayGender user_name = {this.state.sorted_arr} />

			</div>
		)
	}
}

export default SearchGender