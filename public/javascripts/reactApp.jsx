class Button1 extends React.Component{
  render() {
    return <div>
        <button className={'btn'}>Title</button> the button is clicked X times
    </div>;
  }
}

class ReactApp extends React.Component{
  click1Handler(){
    alert('button1 is clicked');
  }
  click2Handler(){
    alert('button2 is clicked');
  }

  render() {
    return <div>
        <Button1 label={'Blue Button'} color={'blue'}/>
        <Button1 label={'Red Button'} color={'red'}/>
    </div>;
  }
}

ReactDOM.render(<ReactApp />, document.getElementById('reactcontainer'));
