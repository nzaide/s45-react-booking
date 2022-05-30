//Banner.js

//React bootstrap components
import { Button, Row, Col } from 'react-bootstrap';


export default function Banner(props) {
	return (
		<Row>
			<Col className="p-5">

				<h1>Hello, {props.name}! </h1>

				<h1 className="mb-3">Welcome to Somersault Academy</h1>
				<h3 className="mb-3">Opportunities for everyone, everywhere.</h3>
				{/*<p className="mb-3">Opportunities for everyone, everywhere.</p>*/}
				<Button variant="dark"><h1>{`𝔼𝕟𝕣𝕠𝕝𝕝 ℕ𝕠𝕨❕`}</h1></Button>
			</Col>
		</Row>
		)
}