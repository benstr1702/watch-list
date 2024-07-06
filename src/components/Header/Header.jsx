import React  , {useState , useContext} from 'react';
import { Modal, Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import WatchListContext from '../../contexts/WatchListContext';
import { v4 as uuidv4 } from 'uuid'; // Import the uuid function

const Header = () => {

  // const [showModal , setShowModal] = useState(false);
  const [newItemTitle , setNewItemTitle] = useState('');
  const [newItemType , setNewItemType] = useState('');
  const [newItemYear , setNewItemYear] = useState('');
  const [newItemEpisodes , setNewItemEpisodes] = useState('');
  const [newItemDuration , setNewItemDuration] = useState('');
  const { addWatchListItem  , handleShow , showModal , setShowModal} = useContext(WatchListContext);

  

  // function handleEdit(id) {
  //   const editedItem = watchList.find(item => item.id === id);
  //   setEditItemId(id);
  //   setNewItemTitle(editedItem.title);
  //   setNewItemType(editedItem.type);
  //   setNewItemYear(editedItem.year);
  //   setNewItemEpisodes(editedItem.episodes);
  //   setNewItemDuration(editedItem.duration);
  //   setShowModal(true); // Open the modal
  // }


  


  function handleHide() {
    setShowModal(false);
    // setEditItemId(null); // Clear edit mode when hiding modal
  }
  function handleAddNewItem(){
    if (newItemTitle.trim() && newItemYear && newItemType && newItemDuration) {
      addWatchListItem({
        id: uuidv4(),
        title: newItemTitle,
        year: newItemYear,
        type: newItemType,
        episodes: newItemEpisodes.trim() ? newItemEpisodes : 'No Info',
        duration: newItemDuration
      });
      // Clear the form
      setNewItemTitle('');
      setNewItemYear('');
      setNewItemType('');
      setNewItemDuration('');
      setNewItemEpisodes('');
      // Close the modal
      handleHide();
    }
  }
  
  
  return (<div className='mb-4'>
  
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">MyWatchList</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link onClick={handleShow}>Add Item</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    

    <Modal show={showModal} onHide={handleHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Item To The Watch List</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter item title" 
            value={newItemTitle}
            onChange={(e) => setNewItemTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Release Year</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Enter Show/Movie Relase Year" 
            value={newItemYear}
            onChange={(e) => setNewItemYear(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Number of Episodes</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Enter Show number of episodes" 
            value={newItemEpisodes}
            onChange={(e) => setNewItemEpisodes(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Duration</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Enter Average episode duration or Movie length ( in minutes )" 
            value={newItemDuration}
            onChange={(e) => setNewItemDuration(e.target.value)}
          />
        </Form.Group>
    
        <Form.Group className="mb-3">
          <Form.Label>Type</Form.Label>
          <Form.Control 
            as="select"
            value={newItemType}
            onChange={(e) => setNewItemType(e.target.value)}
          >
          <option value="">Select type</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          </Form.Control>
        </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleHide}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddNewItem}>
            Add Item
          </Button>
        </Modal.Footer>
    </Modal>
    </div>);
};

export default Header;