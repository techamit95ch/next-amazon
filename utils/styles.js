import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#203040',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
    },
  },
  main: {
    minHeight: '80vh',
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  grow: {
    flexGrow: 1,
  },
  footer: {
    marginTop: 10,
    textAlign: 'center',
    marginBottom: 10,
  },
  section: {
    marginTop: 20,
  },
});

export default useStyles;
