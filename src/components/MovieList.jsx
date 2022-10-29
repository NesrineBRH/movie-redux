import React,{ Component } from "react"
class List extends Component{
state={        
Titlev:"",
Descv:"",
URLv:"",
Ratingv:0,
};
render ()
{
return(
<div>
<h2>Add Your Movie</h2>
<form onSubmit={this.props.onSubmit}>
<input type="text"placeholder="Enter a Title of your Favorite Movie"  onChange={this.props.onajoutTitre}/>
<input type="text"placeholder="Enter a description" onChange={this.props.onajoutDesc}/>
<input type="text"placeholder="Enter a URL poster"onChange={this.props.onajoutURL}/>
<input type="number" max="5" placeholder="Enter a Rating of your Favorite Movie" onChange={this.props.onajoutRating}/>
<button>Add the Movie</button>
</form>
</div>
)

}

}

export default List;