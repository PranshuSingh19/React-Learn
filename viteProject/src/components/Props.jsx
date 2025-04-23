


function Props({name, image, about}){
    return(
        <>
    <div style={{
        color:'#000',
        textAlign: "left",
        borderTop: '10px solid #c04b26',
        borderLeft: '0',
        borderRight: '0',
        borderBottom: '0',
        borderRadius: '20px',
        margin: '10px',
        padding: '30px',
        width: '313px',
        backgroundColor: '#fff',
        boxShadow: 'rgb(210 210 210 / 20%) 0px 4px 8px',
    }}>
        <img src={image} alt={name} style={{width:"100%"}} />
        <h4 style={{
            padding: '10px 0px',
            fontWeight: '700',
        }}>{name}</h4>
        <p>{about}</p>

    </div>

        </>
    )
}
export default Props

// Display file code 
{/* <Props
name='Pranshu Singh'
about='He is Top React Developer in India'
image='https://avatars.githubusercontent.com/u/149379985?v=4'
/> */}
