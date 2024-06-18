import React, { useState } from 'react'
import * as XLSX from 'xlsx';


function Reader() {

  const [data,setData] = useState<string[][]>([]);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const arrayBuffer = event.target?.result as ArrayBuffer;
      if (!arrayBuffer) return;
      
      const data = new Uint8Array(arrayBuffer);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as string[][];
      const manipulatedData = jsonData.map(row => {
        for (let i = 0; i < jsonData[0].length; i++) {
          if (row[i] === undefined) {
            row[i]=""; 
          }
        }
        return row;
      });
      console.log(manipulatedData);
      setData(jsonData);
    };
    reader.readAsArrayBuffer(file);
  };

  console.log(data);

  return (
    <div>
        <input
            type='file'
            onChange={handleFile}
        />
    </div>
  )
}

export default Reader