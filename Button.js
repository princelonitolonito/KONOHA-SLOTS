

class Button extends React.Component{
    
    handleRefreshClick = () => {
        window.location.reload(); // Reload the page
      }

    render(){
    return(
        <div>

        <button onClick={this.handleRefreshClick}>Spin</button>

           

        </div>
   
    );
    }
}