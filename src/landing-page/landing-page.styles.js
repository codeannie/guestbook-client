import { StyleSheet } from 'aphrodite';

const screenSize = {
  desktop: '@media (min-width: 700px)',
  mobile: '@media (max-width: 700px)',
};

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundImage: 'url("https://images.unsplash.com/photo-1493274409115-3f5143dd3d9a?ixlib=rb-0.3.5&s=a0f77042b42cca2bb290fa7423763873&auto=format&fit=crop&w=1622&q=80")',
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
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    backgroundColor: 'rgba(059, 145, 117, 0.95)',
  },
  header1: {
    textAlign: 'center',
    fontSize: 32,
  },
  centerText: {
    color: 'rgba(000, 000, 000, 0.90)',
    textAlign: 'center',
  },
  introSection: {
    backgroundColor: 'rgba(255, 255, 255, 0.90)',
    borderRadius: 20,
    width: '95%',
    padding: 10,
    alignSelf: 'center',
    [screenSize.desktop]: {
      width: '50%',
    }
  }
});

export default styles; 