//call all components in index  

function randomSlots()
{
    return Math.floor(Math.random() * 3) + 1;
}

function intToEmoji(value)
{

    if(value == 1)
    {
        return "🌀";
    }
    else if(value == 2)
    {
        return "⚡";
    }
    else if(value == 3)
    {
        return "🔥";
    }
}

class App extends React.Component
{


    render(){
        return(
            <div class>

                
            <div class = "centered">
                <h1>
                    KONOHA SLOTS
                </h1>
                <SlotMachine    
                s1 = {intToEmoji(randomSlots())}
                s2 = {intToEmoji(randomSlots())}
                s3 = {intToEmoji(randomSlots())}
                />

                <Button class = "   "></Button> 
            
            </div>

        
        </div>
       
        );
    }
}
ReactDOM.render(<App/>, document.getElementById('root'))    
