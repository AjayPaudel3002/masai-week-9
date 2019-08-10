import React from "react";
import SearchIncomeAge from "./SearchIncomeAge.js"
class DisplayGender extends React.Component{

	render(){
		return(
			<div>
			<SearchIncomeAge/>
			 <div className = "container">
			 	<div className = "row">    
				 {this.props.user_name.map((user_name,index) => {
				 	if(user_name.gender === "Female"){
	                    return (
	            			<div key={"user-"+index} className = "col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 my-2">
	                        	<div className="card" style= {{width: "18rem"}}>
	  								<img src="female1.png" className="card-img-top" alt="..."/>
	  								<div className="card-body">
	    								<h4 className="card-title">{user_name.first_name + " "+ user_name.last_name}</h4>
									   	<p>Age: {user_name.age}</p>
									   	<p>Salary: {user_name.income}</p>
									   	<p>Gender:{user_name.gender}</p>
									</div>
								</div>
							</div>
	                    );
                	}
                	if(user_name.gender === "Male"){
                		return (
	            			<div key={"user-"+index} className = "col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 my-2">
	                        	<div className="card" style= {{width: "18rem"}}>
	  								<img src="male2.png" className="card-img-top" alt="..."/>
	  								<div className="card-body">
	    								<h2 className="card-title">{user_name.first_name + " "+ user_name.last_name}</h2>
									   	<p>Age: {user_name.age}</p>
									   	<p>Salary: {user_name.income}</p>
									   	<p>Gender:{user_name.gender}</p>
									</div>
								</div>
							</div>
	                    );
                	}
                })}
			</div>

			</div>
			</div>

		)
	}
}

export default DisplayGender


