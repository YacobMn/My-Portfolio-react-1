




export default function Nav(){

    const linkStyle = { border: '1px black', padding: '5px' };
    return(

    <>
         {/* <nav className="main-header-menu"> */}
        
      <section
         style={{
          display: 'flex',
          fontFamily: 'helvetica',
           flexDirection: 'row',
          alignItems: 'flex-start',
           justifyContent: 'flex-start',
         }}
        >
         <section
         style-1={{
          
         }}
        >
      </section>
        <h2>Yacob Menghistu </h2>
        <h3 style={linkStyle}>
          <a href="#">Project</a>
        </h3>
        <h3 style={linkStyle}>
          <a href="#">About </a>
        </h3>
        <h3 style={linkStyle}>
          <a href="#">Contact</a>
        </h3>
        <h3 style={linkStyle}>
          <a href="#">Resume</a>
        </h3>
      
      </section>
    </>
        
        
    );
}