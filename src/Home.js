import {NavLink} from "react-router-dom";

export const Home = () =>{

    return(
        <div class='container' style={{ backgroundColor: "lightpink" }}>
            <div class='center'>
                <h2>Welcome to Computer Games</h2>
                <h5>Here you can pick from different puzzle games to play.</h5>
                <h5>Click one of the buttons below to get started, or use the nav bar</h5>
                <button class='btn black'><NavLink to='/puzzle'>15 Tiles Game</NavLink></button>
                <button class='btn black'><NavLink to='/tower'>Towers of Hanoi</NavLink></button>
            </div>
        </div>
    )
}