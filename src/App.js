import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';

function App() {
  const [myValue, setValue] = React.useState('<name>')
  return (
    <div>
      <AppBar color="primary" position="static">
        <Toolbar>
          <TypoGraphy variant="title"
            color="inherit"
          >
            Hello User
          </TypoGraphy>
        </Toolbar>
      </AppBar>
      <br></br>
      <TextField
        id="standard-helperText"
        label="Name"
        defaultValue="Text"
        helperText="Let's say hello!"
        style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)'
        }}
        onChange={(e) => setValue(e.target.value)}
      />
      <br></br>
      <h1
        style={{
          position: 'absolute', left: '50%', top: '60%',
          transform: 'translate(-50%, -50%)'
        }}>
        Hello {myValue}!
      </h1>
    </div>
  );
}

export default App;
