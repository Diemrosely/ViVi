import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ViviIcon from '../../../src/assets/images/logo.png';
import { Row, Col } from 'react-bootstrap'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" color='transparent' elevation={0}>
        <Toolbar className="app-toolbar">
            <Row>
                <Col>
          <IconButton edge="start" className='iconButton' color="transparent" aria-label="menu">
          <img src={ViviIcon} alt="First Image"/>
          </IconButton>
         </Col> <Col className="text-right">
          <Button color="inherit" className='loginButton' > <Link to="/login"> Login </Link> </Button>
        </Col>
        </Row>
        </Toolbar>
      </AppBar>
    </div>
  );
}