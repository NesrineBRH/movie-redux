import React,{ Component } from "react"
class Card extends Component{
render ()
{
return(
<div className="filme">
<h3>{this.props.prop.Title}</h3>
<p>{this.props.prop.description}</p>
<img alt={this.props.prop.Title} src={this.props.prop.posterURL}/>
<p>Rating: {this.props.prop.Rating}</p>
</div>
)

}

}

export default Card;