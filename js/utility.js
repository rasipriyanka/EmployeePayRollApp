const stringifyDate=(date) =>{
    const options={day:'numeric',month:'short', year:'numeric'}
    const newData=!date ?"undefined":
     new Date(Date.parse(date)).toLocaleDateString('en-GB',options);
     return newData;
}