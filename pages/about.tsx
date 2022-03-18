import Button from "../components/Button";
import Card from "../components/Card";
import Form from "../components/Form";
import Header from "../components/Header";
import Input from "../components/Input";

const About = () => {
        const cardStuff = {
            title: "Card Title",
            text: "Some text"
        }

const articles = [
        "Newest article", 
        "Some article", 
        "Old article"
]
    return ( 

        <div className="ecmain">
        <Header website="EC"/>
        <p>This is the about page.</p>
        <p>These are children. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus officia quis temporibus labore obcaecati non? Voluptatibus distinctio, amet eveniet rem ab sunt accusamus! Asperiores sit officia enim odio, voluptas porro.</p>
        <p>So are these!</p>
        <Button handleClick={() => {
            alert("You Clicked me, can we have some hash browns?")
        }}/>
        <Card cardDetails={cardStuff}/>
        <Form/>
        </div>

    );
}
 
export default About ;

