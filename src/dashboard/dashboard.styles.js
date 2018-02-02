import { StyleSheet } from 'aphrodite';

const screenSize = {
  desktop: '@media (min-width: 700px)',
  mobile: '@media (max-width: 700px)',
};

const styles = StyleSheet.create({
  backgroundContainer: {
    // backgroundImage: 'url("https://images.unsplash.com/photo-1502691876148-a84978e59af8?ixlib=rb-0.3.5&s=93f1869fc4e287b8097c3435a413218c&auto=format&fit=crop&w=1650&q=80")',
    backgroundImage: 'url("https://images.unsplash.com/photo-1494228366869-07a7106eca9f?ixlib=rb-0.3.5&s=2d38f4907af6894b604534e2215a8eaf&auto=format&fit=crop&w=1650&q=80")',
    // backgroundSize: '100% auto',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    overflow: 'hidden',
    position: 'relative',
    height: '100vh',
  },
  flexContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    [screenSize.mobile]:{
      flexDirection: 'column',
    }
  },
  sectionHeader: {
    // color: '#FFFFFF',
    color: '#000000',
    textAlign: 'center',
    font: 40,
  },
  eventName: {
    // backgroundColor: 'rgba(030, 026, 084, 0.80)',
    backgroundColor: 'rgba(136, 160, 152, 0.90)',
    // color: '#FFFFFF',
    color: '#000000',
    padding: 5,
    textAlign: 'center',
  },
  date: {
    textAlign: 'center'
  },
  eventCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 7,
    margin: 7,
    padding: 10,
    flexBasis: '30%',
  }
})

export default styles;