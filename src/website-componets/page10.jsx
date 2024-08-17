export default function Page10(){

    return (
        <>
          <section className="page10" style={{backgroundColor:"#2a242e", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <h1 style={{color:"#fff", fontSize:"50px", margin:"1rem"}}>
              Videos
            </h1>
            <div>
              <span>
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/r5ozYzkNBKc?si=mKozj6Oczym05pE6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{margin: "3rem"}}></iframe>
              </span>
              <span>
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/KiIKpUDCrcI?si=K4AE5SzhaWWBK_vi" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{margin: "3rem"}}></iframe>
              </span>
            </div>
          </section>
        </>
    )
}