// import React from 'react'

// const [input, setinput] = useState('');
// const [theme, setTheme] = useState(defaul);
// const [tec, setTec] = useState('');
// const [result, setResult] = useState('');
// const [func, setFunc] = useState('');

// const calculate = (value)=>{


//     setTec(`${tec}${value}`);

//     if(input){
//         if(value==='+' || value==='-' || value==='/' || value==='*'){
//             setFunc(value)
//         }
//         else if (value==='C'){
//             setinput('');
//             setFunc('');
//             setResult('')
//         }
//         else if (value==='='){
//             setResult(input); 
//             setTec('')   
//         }
//         else{
//             if(func){
//                 if(func==='+'){
//                     setinput(input+value);
//                     // setFunc('');
//                 }
//                 else if(func==='-'){
//                     setinput(input-value);
//                     // setFunc('');
//                 }
//                 else if(func==="/"){
//                     setinput(input/value)
//                     // setFunc('')
//                 }
//                 else {
//                     setinput(input*value)
//                     // setFunc('')
//                 }
//             }
//             else{
//                 setinput(input*10 + value)
//             }
//         }
        

//     }
//     else{
//     if(value==='C'){
//         setinput('');
//         setFunc('')
//         setTec('')

//     }
//     else if(value==='+' || value==='-' || value==='/' || value==='*'){
//         setFunc(value)
//     }
//     else if(value==='='){
//         setResult('');
//     }
//     else{
//         setinput(value)
//     }
// }
// }

// export default calculate