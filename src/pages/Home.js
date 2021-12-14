import React from 'react';
import banner from "../images/carousel-1.jpg";

function Home() {
    return (
        <div>
            <img className="banner" src={banner} />
                <div className="home__container">
                    <h1>We do YAY things</h1>
                        <p>
                            Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, 
                            a rutrum justo eros pretium libero. 
                            Nullam vel enim id mauris eleifend finibus et ac orci. 
                            Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. 
                            Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. 
                            Donec mi orci, sollicitudin in luctus a, varius eget massa.
                        </p>
                        
                        <div className="carousel">
                            caousel
                        </div>
                </div>
        </div>
    )
}

export default Home;
