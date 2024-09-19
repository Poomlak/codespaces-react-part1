import './Hello.css'
export default function Hello({Firstname,Lastname="Jaidee",age="25"}){
    return(<><h1>Hello World{Firstname}{Lastname}{age}</h1></>);
}