function slotMachine(s1,s2,s3)
{
  
    if(s1 == s2 && s2 == s3 && s1 == s3)
    {
        return "Winner";
    }
    else if(s1 == s2 || s2 == s3 || s3 == s1)
    {
        return "Almost";
    }
    else
    {
        return "Loser";
    }

}

class SlotMachine extends React.Component{
    
    render()
    {
        const{s1,s2,s3} = this.props;   
        let result = slotMachine(s1,s2,s3);
       
        return(
            
            <div>
                <h1>{s1} {s2} {s3} </h1>
                <h2>Result:  {result} </h2>
            </div>

        );
    }


}