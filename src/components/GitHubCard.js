import { Card } from 'react-bootstrap'

function GitHubCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./images/yara.jpg" />
      <Card.Body>
        <Card.Title>Yara Alfaro-Sullivan</Card.Title>
        <Card.Text>
          My name is Yara Alfaro-Sullivan. I am currently a Software Development student at UNLV. 
          I am looking forward to an 
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default GitHubCard;