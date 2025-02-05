import Image from 'react-bootstrap/Image';
import FetchImage from "../components/FetchImage.jsx"
import PhotoEditor from "../components/PhotoEditor.jsx"

function Photo() {
  return (
      <>
          <h1 className="container mt-5 pt-5 text-center text-2xl">Welcome to Photo Page</h1>
          <FetchImage />
          <PhotoEditor />
      </>
      );
}
export default Photo;