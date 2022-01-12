import Link from './components/Link'
import Button from './components/Button'
import Container from './components/Container'
import Input from './components/Input'

function App() {
  return (
    <div className="App">
      <Container>
        <Input placeholder="Test" />
        <Button>Submit</Button>
        <Link href="#">Info</Link>
      </Container>
    </div>
  );
}

export default App;
