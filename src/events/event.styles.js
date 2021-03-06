import { StyleSheet } from 'aphrodite';

const screenSize = {
  desktop: '@media (min-width: 700px)',
};

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundImage: 'url("https://images.unsplash.com/photo-1454166155302-ef4863c27e70?ixlib=rb-0.3.5&s=2b95aca7a010caccf60a3c6431699e0e&auto=format&fit=crop&w=2850&q=80")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    overflow: 'auto',
    position: 'relative',
    height: '100vh',
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: '0 auto'
  },
  eventName: {
    backgroundColor: 'rgba(196, 132, 137, 0.80)',
    fontFamily: 'Permanent Marker, cursive',
    fontSize: '32',
    color: '#000000',
    padding: 10,
    textAlign: 'center',
    borderRadius: 10,
  },
  eventDetails: {
    backgroundColor: 'rgba(255, 255, 255, 0.80)',
    borderRadius: 10,
    padding: 20,
    [screenSize.desktop]: {
      width: '50%',
    }
  },
  guestList: {
    backgroundColor: 'rgba(255, 255, 255, 0.80)',
    borderRadius: 10,
    padding: 20,
    [screenSize.desktop]: {
      width: '50%',
    }
  },
  eventEditForm: {

  }
});

export default styles; 