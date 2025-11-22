
function Button(){

    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }


    return(
        <>
        {/* <button className="button">Click Me</button> */}
        {/* <button className={styles.button}>Click Me</button> */}
        <button style={styles}>Click Me</button>
        </>
    );
}

export default Button