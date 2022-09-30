import Table from 'react-bootstrap/Table';

const DataTable = () => {
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Random ID</th>
                    <th>First Name</th>
                    <th>Middle Name</th>
                    <th>Last Name</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Street</th>
                    <th>House</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>#31231312213</td>
                    <td>Marcus</td>
                    <td>Aurelius</td>
                    <td>Antoninus</td>
                    <td>Italy</td>
                    <td>Rome</td>
                    <td>unknown</td>
                    <td>unknown</td>
                    <td>Didn't have one</td>
                </tr>
            </tbody>
        </Table>
    );
}




export default DataTable;