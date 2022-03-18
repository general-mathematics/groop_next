type CardProps = {
    cardDetails: {
        title: string,
        text: string
    }
}

const Card = (props:CardProps) => {
    return ( 
        <>  
        <h2>{props.cardDetails.title}</h2>
        <p>{props.cardDetails.text}</p>
        </>
    );
}
 
export default Card ;