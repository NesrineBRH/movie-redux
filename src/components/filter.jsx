import React,{ Component } from "react"
class Filter extends Component{
state={
values:0,
isRating:false,
valuesTitle:"",
isTitle:false,
};
render ()
{
return(
<div>
<h2>Find a Movie</h2>
<div className="Filtre">
<form onSubmit={this.props.filtername}>
<input type='text' onChange={this.props.onfiltername} placeholder="Search by Title" />
<button>Find the Movie by Title</button>
{this.state.isTitle ? <p> {this.state.valuesTitle} </p> :null }
</form>
<form onSubmit={this.props.filterrating}>
<input type='number' onChange={this.props.filterrating} placeholder="Search by Rating" />
<button>Find the Movie by Rating</button>
{this.state.isRating ? <h1> ok</h1> :null }
</form>
</div>
</div>
)

}

}

export default Filter;