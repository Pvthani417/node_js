const {addDays,format}=require('date-fns');
const days=(val)=>{
    const date1=addDays(new Date(),val);
    const date2=format(date1,'dd-MM-yyyy');
    return date2;
}
module.exports=days;