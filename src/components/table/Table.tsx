import { Checkbox, FormControlLabel, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useState } from 'react'


function Tables({data}) {
  const [selectedIndex,setSelectedIndex] = useState<number[]>([]);

  const handleCheck = (index:number) =>{
    const isSelected = selectedIndex.includes(index);
    setSelectedIndex(isSelected ? selectedIndex.filter(i => i !== index) : [...selectedIndex, index]);
  }

  console.log(data);

  return (
    <div>
        <div>
        {data.length > 0 &&
          data[0].map((item, index) => (
            <FormControlLabel 
              key={index}
              control={<Checkbox 
                checked={selectedIndex.includes(index)}
                onChange={() => handleCheck(index)} />} 
              label={item} 
            />
          ))
        }
      </div>
      <br/>
      <hr/>
      <div>
        <TableContainer component={Paper} style={{width:"100%",height:"500px",overflow:"auto" }}>
            <Table>
                <TableHead>
                    <TableRow>
                    {data.length > 0 &&
                        data[0].map((item, index) => {
                            let x = selectedIndex.includes(index)
                            return(
                                x &&
                                (
                                    <TableCell style={{fontWeight:600}} key={index}>{item}</TableCell>
                                )
                            )
                        }
                    )}
                    </TableRow>
                </TableHead>
                <TableBody>
                {data.slice(1).map((row, rowIndex) => (
                    <TableRow key={rowIndex} >
                    {row.map((cell, cellIndex) => {
                        let x = selectedIndex.includes(cellIndex)
                        return(
                            x && (
                                <TableCell key={cellIndex}>
                                    {cell!=='' ? cell : "-"}
                                </TableCell>
                            )
                        )
                    })}
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
      </div>
      
    </div>
  )
}

export default Tables