import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { useHistory } from 'react-router-dom';

function Launcher()
{   
    const history = useHistory();

    const GoToDetails = (args) => {
                                    var movieid = args.target.id;
                                    history.push('/details/'+movieid)
                                    console.log(movieid);
                                  }

    debugger;
    return (<>
                <br /> 
             <div className="container marketing">
                <div className="row">

                    <div className="col-lg-4">
                        <img className="img-circle" src="http://localhost:3000/images/BD-mv1.jpg" 
                            alt="Bloody Daddy image" width="170" height="200" id="101" onClick={GoToDetails}/>
                        <h2>Bloody Daddy</h2>
                        <p>Details · Release date · June 9, 2023 (India) · Country of origin. India · Language. 
                            Hindi · Production companies · AAZ Films · Jio Studios · Offside Entertainment ...</p>
                        <p><a className="btn btn-default" href="#" role="button" id="101" onClick={GoToDetails}>
                            View details &raquo;</a></p>
                    </div>

                    <div className="col-lg-4">
                        <img className="img-circle" src="http://localhost:3000/images/asur2.jpg" 
                            alt="Asur 2 image" width="170" height="200" id="102" onClick={GoToDetails}/>
                        <h2>Asur 2</h2>
                        <p>The Asur Web Series is a special project made by Oni Sen, in collaboration with 
                            Gaurav Shukla and Vibhav Shikdar, the creators of the original Asur OTT series. 
                            Asur Season 2 will be produced by Ding Entertainment and Viacom 18 Studios and will
                            star Arshad Warsi, Barun Sobti, Anupriya Goenka, Ridhi Dogra, and Amey Wagh ...</p>
                        <p><a className="btn btn-default" href="#" role="button" id="102" onClick={GoToDetails}>
                            View details &raquo;</a></p>
                    </div>

                    <div className="col-lg-4">
                        <img className="img-circle" src="http://localhost:3000/images/Mumbaikar.jpg" 
                            alt="Mumbaikar image" width="170" height="200" id="103" onClick={GoToDetails}/>
                        <h2>Mumbaikar</h2>
                        <p>A Mumbai's don son has mistakenly abducted for ransom. Streaming exclusively on JioCinema. 
                            Watch the World Digital Premiere of Mumbaikar starring Vikrant Massey & Vijay Sethupathi. 
                            Stream in Full HD Quality. Stream online for Free. Watch Anytime, Anywhere ...</p>
                        <p><a className="btn btn-default" href="#" role="button" id="103" onClick={GoToDetails}>
                            View details &raquo;</a></p>
                    </div>

                </div>
             </div>
            </>);
}
export default Launcher;