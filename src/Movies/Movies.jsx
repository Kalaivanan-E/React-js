let Movies = ()=>{
    let hero_Name= "Rajini Kanth";
    let heroin_Name = 'Shruthi Hasan'
    let war_Image ='https://www.siasat.com/wp-content/uploads/2025/08/Coolie-poster.jpg'

    return <div>
        <h3> Movies Components</h3>
        <h4> Actors:{hero_Name}</h4>
        <h4> Actress:{heroin_Name}</h4>
        <img src = {war_Image} alt="NewImage"/>

    </div>

}

export default Movies;