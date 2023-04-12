import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,   //The duration key is set to theme.transitions.duration.shortest, 
                                                       //which is a predefined duration in the Material-UI theme. This value is typically 150ms
    }),
  },
  expandOpen: {  //The expandOpen key is used to define the CSS styles for an element that needs to be rotated by 180 degrees,
                // usually indicating an open or expanded state. 
    transform: 'rotate(180deg)', 
  },
  cartContent: {  //define the CSS styles for the content of a cart.
    paddingTop: 0,  
  },
  divider: {
    margin: '20px 0',
  },
  //The divider key is used to define the CSS styles for a divider element. 
  //The margin property is set to 20px 0, which means that there will be a margin of 20 pixels at the top and bottom of the divider.
}));
