import React from "react";
import Card from"./Component/MoviesCard";
import List from"./Component/Movielist";
import Filter from"./Component/filter";
class App extends React.Component
{
    state={
        movies:[
            {
                "Title": "Toy Story",
                "description":"Toy Story is about the 'secret life of toys' when people are not around ",
                "posterURL":"https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
                "Rating":5,
        },
        {
            "Title": "Lion King",
            "description":"One of Disney's most famous villains is Scar from The Lion King (1994). As Mufasa's dastardly younger brother and the aloof uncle of prince Simba, ",
            "posterURL":"https://cdn.pixabay.com/photo/2017/10/25/16/54/african-lion-2888519__340.jpg",
            "Rating":4,
    },
    {"Title":"Rapunzel",
"description":"Rapunzel is a spirited, smart, clever, kind, playful, and a very adventurous girl in her late teens, though a bit naive. However, she",
"posterURL":"https://media.istockphoto.com/id/489339112/photo/young-woman-in-costume-painting.webp?s=612x612&w=is&k=20&c=B8uyKevaBBC77YTohygReI8CJOHJFuD9e90XPVZJAHU=", 
"Rating":3,
},],
values:0,
isRating:false,
valuesTitle:"",
isTitle:false,
};
moviesCopie=this.state.movies.slice();
ajoutTitre=(e)=>{
    const value=e.currentTarget.value;
    this.setState({Titlev:value});
    }
ajoutDesc=(e)=>{
    const value=e.currentTarget.value;
    this.setState({Descv:value});
    }
ajoutURL=(e)=>{
    const value=e.currentTarget.value;
    this.setState({URLv:value});
        }
ajoutRating=(e)=>{
    const value=e.currentTarget.value;
    this.setState({Ratingv:value});
        }
handelSubmit=(e)=>{
    e.preventDefault();
    const moviesCopie=this.moviesCopie;
    const Title=this.state.Titlev;
    const description=this.state.Descv;
    const posterURL=this.state.URLv;
    const Rating=this.state.Ratingv;
const newMovie={Title:Title,description:description,posterURL:posterURL,Rating:Rating};
moviesCopie.push(newMovie);
this.setState({moviesCopie:moviesCopie});
}
filtername=(e)=>{
    e.preventDefault();
    const valeur=e.currentTarget.value;
    const Title=this.moviesCopie.map(title=>(title.Title));
    this.setState({valuesTitle:valeur});
    const val=Title.some(element=>element ===this.state.valuesTitle);
    this.setState({isTitle:val});
    //alert(val)
    console.log(this.state.valuesTitle);
    }   
    filterrating=(e)=>{
        const valeur=Number(e.currentTarget.value);
        const Rating=this.moviesCopie.map(rating=>(rating.Rating));
        this.setState({values:valeur});
        const val=Rating.some(element=>element ===this.state.values);
        this.setState({isRating:val});
        console.log(this.state.isRating);
        //const Title=this.moviesCopie.map(title=>(title.Title));
        //alert(this.state.isRating);
        //console.log(val);
        }
    render(){       

return (
<div>
<h1>Movies Platform</h1>
<h2>Movies Selection</h2>
<div className="blockfilm">
 {this.moviesCopie.map(movie=>(
<Card prop={movie}/>
))}  
</div>
<List prop={this.state} onSubmit={this.handelSubmit} onajoutTitre={this.ajoutTitre} onajoutDesc={this.ajoutDesc} onajoutURL={this.ajoutURL} onajoutRating={this.ajoutRating} />
<Filter onfiltername={this.filtername} onfilterrating={this.filterrating}/>
</div>
) }
}
export default App;