
import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

function Details()
{
    var {id} = useParams();
    debugger;

    const history = useHistory();

    const [movieDetails, setMovieDetails] = useState({
                                                        ID: 0,
                                                        Title: "",
                                                        Description: "",
                                                        cast:  [],
                                                        genre: "",
                                                        url: ""
                                                    });

    useEffect(()=>{
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = ()=>{
            if(helper.readyState == 4 && 
               helper.status == 200)
            {
                var dataReceived = 
                        JSON.parse(helper.responseText);
                console.log(dataReceived);
                setMovieDetails(dataReceived);
            }
        };
      
        helper.open("GET", 
                  `http://localhost:3000/data/${id}.json`);
        helper.setRequestHeader("Content-Type", "application/json")
        helper.send();
    }, []);

    const GoToBook =(url)=>{
                            console.log("You are about to book the movie: ")
                            console.log(movieDetails.Title)
                            // history.push('/book')

                        }

    return  <div className='table-responsive'> 
              <table className='table table-bordered'>
                <tbody>
                    <tr>
                        <td>
                        <h3 className='alert alert-warning'>
                            {movieDetails.Title}
                        </h3>
                        </td>
                    </tr>
                    <tr>
                        <td className='text-justify'>
                            <p>
                            {movieDetails.Description}
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td className='text-justify'>
                           Genre:{movieDetails.genre} <br></br> <br></br> 
                           Actors: <ul>
                                        {movieDetails.cast.map((actor)=>{
                                              return <li>
                                                        {actor}
                                                     </li>  
                                        })}
                                   </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className='text-justify'>
                            <button onClick ={()=> {GoToBook("https://paytm.com/movies/pune")} } className='btn btn-warning'>
                                Book Tickets
                            </button>   
                            <br /><br />
                        <iframe width="500" height="300" 
                               src={movieDetails.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </td>
                    </tr>
                </tbody>
              </table>
            </div>
}

export default Details;