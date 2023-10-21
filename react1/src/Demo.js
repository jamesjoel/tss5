import React, {memo} from 'react'

const Demo = ({x, hello}) => {
    console.log("This is Demo Component");
    return(
        <>
            <h1>Hello World</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quidem, architecto assumenda asperiores similique facilis magni sit accusamus! Voluptatibus quo reprehenderit expedita distinctio quibusdam iusto blanditiis placeat commodi architecto quam!</p>
        </>
    )
}

export default memo(Demo);