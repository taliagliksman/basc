import React from 'react'


const ScheduleTable =() => {

  const getCurrentWeek = () => {
    const currentDate = new Date();
    const startDate = new Date(currentDate.getFullYear(), 0, 1);
    var days = Math.floor((currentDate - startDate) /
        (24 * 60 * 60 * 1000));
          
    var weekNumber = Math.ceil(days / 7);
  
   return (weekNumber);

  }

  function dataForTable(weekNumber) {

   var d = new Date;
   var firstday = new Date(d.setDate(d.getDate() - d.getDay()));
    
   var arr = firstday.toString().split(" ");
   var dataToTable = `Week ${weekNumber}/${arr[3]}- starting ${arr[0]} ${arr[1]} ${arr[2]}`
    
    return (dataToTable);
  }

    const scheduleData = [
      
        [dataForTable(getCurrentWeek()), "Monday", "Tuesday","Wednesday", "Thursday","Friday", "Saturday"],    
        ["3 hours morning session -  facility is open from 8:15am for a 9am start", "Performance", "Competition", "Performance", "Competition", "Recreational", "Recreational"],    
        ["3.5 hour afternoon session - facility is open from 3:15pm for a 4pm start ", "Performance", "Performance", "Competition", "Competition", "Recreational", ""],
        ["2 hour late night session starts at 7:30pm - facility closes at 10pm sharp", "Competition", "", "Performance", "", "Competition", ""],    
      ];
    
    return (
            <table>      
              <thead style={{
                        borderBottom: 'solid 3px black',
                        color: 'white',
                        padding: '10px',                        
                        borderBlock: 'solid 1px white',
                        borderBlockStart: 'solid 1px white',
                        textAlign: 'left',
                        fontSize: '20px',
                        backgroundColor: 'rgb(0, 69, 90)',
                        }}>      
                <tr >      
                  {scheduleData[0].map((item, index) => {      
                  return <th style={{
                    padding: '10px',
                    border: 'solid 1px white',
                    textAlign: 'left',
                    fontSize: '14px',
                    backgroundColor: 'rgb(0, 69, 90, 0.7)',
                    color: 'white'
                    }}>{item}</th>;      
                  })}      
                </tr>      
              </thead>      
              <tbody style={{
                        borderBottom: 'solid 3px black',
                        color: 'white',
                        padding: '10px',                        
                        borderBlock: 'solid 1px white',
                        textAlign: 'left',
                        fontSize: '20px',
                        backgroundColor: 'rgb(0, 69, 90)',
                        }}>
      
                {scheduleData.slice(1, scheduleData.length).map((item, index) => {
      
                  return (      
                    <tr style={{
                      borderBottom: 'solid 3px black',
                      color: 'white',
                      padding: '10px',  
                      border: 'solid 1px white',                      
                      borderBlock: 'solid 1px white',
                      textAlign: 'left',
                      fontSize: '20px',
                      backgroundColor: 'rgb(0, 69, 90)',
                      }}>      
                      <td style={{
                            padding: '10px',
                            border: 'solid 1px white',
                            textAlign: 'left',
                            fontSize: '14px',
                            backgroundColor: 'rgb(0, 69, 90, 0.7)',
                            color: 'white'
                            }} >{item[0]}</td>      
                      <td style={{
                            padding: '10px',
                            border: 'solid 1px white',
                            textAlign: 'left',
                            fontSize: '14px',
                            backgroundColor: 'rgb(0, 69, 90, 0.7)',
                            color: 'white'
                            }}>{item[1]}</td>      
                      <td style={{
                            padding: '10px',
                            border: 'solid 1px white',
                            textAlign: 'left',
                            fontSize: '14px',
                            backgroundColor: 'rgb(0, 69, 90, 0.7)',
                            color: 'white'
                            }}>{item[2]}</td>
                      <td style={{
                            padding: '10px',
                            border: 'solid 1px white',
                            textAlign: 'left',
                            fontSize: '14px',
                            backgroundColor: 'rgb(0, 69, 90, 0.7)',
                            color: 'white'
                            }}>{item[3]}</td>      
                      <td style={{
                            padding: '10px',
                            border: 'solid 1px white',
                            textAlign: 'left',
                            fontSize: '14px',
                            backgroundColor: 'rgb(0, 69, 90, 0.7)',
                            color: 'white'
                            }}>{item[4]}</td>      
                      <td style={{
                            padding: '10px',
                            border: 'solid 1px white',
                            textAlign: 'left',
                            fontSize: '14px',
                            backgroundColor: 'rgb(0, 69, 90, 0.7)',
                            color: 'white'
                            }}>{item[5]}</td>
                      <td style={{
                            padding: '10px',
                            border: 'solid 1px white',
                            textAlign: 'left',
                            fontSize: '14px',
                            backgroundColor: 'rgb(0, 69, 90, 0.7)',
                            color: 'white'
                            }}>{item[6]}</td>      
                    </tr>      
                  );      
                })}
      
              </tbody>      
            </table>
        )
}
    
export default ScheduleTable