import { Getdata } from './services/contact'
import { useEffect } from 'react'
function App() {

  useEffect(() => {
    datalist()
}, []
)

const datalist= async()=>{
try{
const datas = await Getdata
console.log(datas)
console.log(datas.data)
console.log(datas.data.products[0])
console.log(datas.data.products[0].title)
console.log(datas.data.products[0].price)
console.log(datas.data.products[1].title)
}catch(error){
console.log(error)
}
}
  return (
    <div>
  <h1>this is key{process.env.REACT_APP_DUMMY_GET_API}</h1>
    </div>
  );
} 

export default App
