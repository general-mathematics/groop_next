const Header = (props:any) => {
    return ( 
        <>
        <h1>This is the {props.website} website</h1>
        {props.children}
        </>
     );
}
 
export default Header ;