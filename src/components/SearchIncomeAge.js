import React from "react";
import axios from "axios";
import DisplayIncomeAge from "./DisplayIncomeAge.js";


class SearchIncomeAge extends React.Component{
	constructor(props){
		super(props);
			this.state ={
				input_val:"",
				sorted_arr:[]
		}
	}

	get_input_value = (e)=> {
		this.setState({
			input_val:e.target.value
		})
	}

	get_search_details = () =>{
		
		axios({
			method: 'get',
    		url: 'https://raw.githubusercontent.com/masai-school/assignments-data/master/data/dummy/json/employee_salaries.json',
		})

		.then((response) =>{
			 let sort = ""
			// let sort_age_dec = response.data.sort((a, b) => b.age - a.age);
			// let sort_inc_asc = response.data.sort((a, b) => a.income - b.income);
			// let sort_inc_dec = response.data.sort((a, b) => a.income - a.income);
			if(this.state.input_val === "Age_Ascending" ){
				sort = response.data.sort((a, b) => a.age - b.age);
			}
			if(this.state.input_val === "Age_Descending" ){
				sort = response.data.sort((a, b) => b.age - a.age);
			}
			if(this.state.input_val === "Income_Ascending" ){
				sort = response.data.sort((a, b) => a.income - b.income);
			}
			if(this.state.input_val === "Income_Descending" ){
				sort = response.data.sort((a, b) => a.income - a.income);
			}
			this.setState({
				sorted_arr : sort
			})
		})
		.catch((err) => alert(err))
		
	
	}

	render(){
		console.log(this.state.sorted_arr)
		return(
			<div>
			<form>
				<div className="form-row align-items-center">
					<div className="col-auto my-1">
						<label className="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
						<select onChange ={this.get_input_value} className="custom-select mr-sm-2" id="inlineFormCustomSelect">
							<option selected>Choose...</option>
							<option value="Age_Ascending">Age Ascending</option>
							<option value="Age_Descending">Age Descending</option>
							<option value="Income_Ascending">Income Ascending</option>
							<option value="Income_Descending">Income Descending</option>
						</select>
					</div>
					<div className="col-auto my-1">
						<button type="button" className="btn btn-primary" onClick ={this.get_search_details}>Search</button>
					</div>
				</div>
			</form>
			{this.state.sorted_arr.length !== 0 ? (<DisplayIncomeAge user_name = {this.state.sorted_arr} />):null}
			
		</div>
		)
	}
}

export default SearchIncomeAge

