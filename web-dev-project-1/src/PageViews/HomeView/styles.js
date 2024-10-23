const styles = {
  homeContainer: {
    position: 'relative',
    width: '100vw',
    minHeight: '100vh', 
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',
    overflowY: 'auto', 
    padding: '20px',
  },
  header: {
    fontSize: '2.5rem',
    margin: '20px 0',
    zIndex: 1,
  },
  profileSide: {
    width: '100%', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '20px',
    boxSizing: 'border-box',
  },
  profileContainer: {
    width: '200px',
    border: '2px solid black',
    padding: '10px',
  },
  profileImg: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
  chatSection: {
    width: '100%', 
    display: 'flex',
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '20px',
  },
  chatBubble: {
    backgroundColor: 'white',
    padding: '20px',
    fontSize: '1.5rem',
    maxWidth: '600px',
    textAlign: 'center',
    border: '2px solid black',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  linksContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '20px',
  },
  icon: {
    width: '40px',
    height: '40px',
  },
};

export default styles;
