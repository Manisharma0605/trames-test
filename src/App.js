import React,{useState, useEffect} from 'react';
import {addTodo, openModal} from './actions'
import { useDispatch, useSelector } from 'react-redux'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import AlertDialog from './EditComponent'
import './App.css';
import './main.css'

function App(props) {
  const [openDialogBox, setOpenDialogBox] = useState(false);
  const clickDisagree = () => {
    setOpenDialogBox(false);
  };


  const clickAgree = () => {
    setOpenDialogBox(false);
  };
  const[searchFil, setSearchFil] = useState()
  const dispatch = useDispatch()

  const testModal = (e) =>{
    setOpenDialogBox(true);
    dispatch(openModal(e))
  }
  const listNames = useSelector(
    state => state.listNames,
  );


  useEffect(()=>{
    dispatch(addTodo())
  }, [])
    const filterSearch = searchFil ? listNames.filter(item => item.title.includes(searchFil)) : listNames; 
    
    

  return (
    <div className="App">
      <input type="text" onChange={e => setSearchFil(e.target.value)} value = {searchFil}/>
         <ul>
      {
        <Table>
         <TableBody>
         {filterSearch.map(item => {
               return (
                 <TableRow key={item.id}>
                   <TableCell>{item.id}</TableCell>
                   <TableCell>{item.title}</TableCell>
                   <TableCell>{item.completed}</TableCell>
                   <TableCell><button onClick={() => testModal(item) }>Edit</button></TableCell>
                 </TableRow>
               );
             })}
       </TableBody>
     </Table>
      }
      </ul>
      <AlertDialog
              onAgree={clickAgree}
              onDisagree={clickDisagree}
              openDialog={openDialogBox}
              dialogHeading="Cancel"
            />
    </div>
  );
}



export default App;
