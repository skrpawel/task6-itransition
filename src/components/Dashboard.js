import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const Dashboard = () => {

    const [error, setError] = useState(0);
    const [seed, setSeed] = useState(0);

    return (
        <Form className='m-3'>
            <Form.Select aria-label="Defarault select" >
                <option value="pl">Poland</option>
                <option value="usa">USA</option>
                <option value="ge">Rome</option>
            </Form.Select>
            <Form.Label className='m-3'>Error value: {error}</Form.Label>
            <Form.Range min="0" max="1" step="0.1" value={error} onChange={(e) => setError(e.target.value)} />
            <Form.Control
                type="number"
                placeholder="Seed"
                aria-label="Seed"
                value={seed}
                onChange={(e) => setSeed(e.target.value)}
                aria-describedby="basic-addon1"
            />
            <Button variant="primary" className='m-3'>Get random data</Button>{' '}
        </Form>
    );
}

export default Dashboard;