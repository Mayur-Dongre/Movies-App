import { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Booking() 
{
    const history = useHistory();

    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
      };
    // useEffect( ()=>{
    //     // history.push('https://paytm.com/movies/pune');
    //     <a href="https://paytm.com/movies/pune" target="_blank" rel="noopener noreferrer"></a>
    // }, [])

    // window.location = 'https://paytm.com/movies/pune';

    return (<>
                {/* <h1>Welcome to Booking</h1> */}
                
                {/* <a href="https://paytm.com/movies/pune" target="_blank"></a> */}
                
                {/* <iframe src="https://www.w3schools.com" title="W3Schools Free Online Web Tutorials"></iframe> */}
                {/* <iframe src=
"https://ide.geeksforgeeks.org/index.php"
            height="200"
            width="400"></iframe> */}
                <div>
                <button
        role="link"
        onClick={() => openInNewTab("https://paytm.com/movies/pune")}
      >
        Visit
      </button>
                </div>

            </>);
}

export default Booking;