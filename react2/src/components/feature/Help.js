let Help = ()=>{

    let demo = ()=>{
        console.log("welcome");
    }
    let demo2 = ()=>{
        console.log("***************");
    }

    return(
        <>
            {/* <img onClick={demo2} src="/assets/img/1.gif" /> */}
            <h1 onContextMenu={demo2}>Help Page</h1>
            <button onContextMenu={demo} className="btn btn-primary">OK</button>
        </>
    )
}

export default Help;



