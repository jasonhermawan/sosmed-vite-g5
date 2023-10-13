import { useSelector } from "react-redux";

const Landpage = () => { 
    const dataUser = useSelector((reducer)=> reducer.accountReducer)
    console.log(dataUser);


    return <h1>Testttttttttt</h1>

}

export default Landpage;