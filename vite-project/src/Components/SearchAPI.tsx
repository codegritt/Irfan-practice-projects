import { useState } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { data } from "./data";

const SearchAPI = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <div>
        <Container>
          <h1 className="text-center mt-4">Contacts</h1>
          <Form>
            <InputGroup className="my-3">
              <Form.Control
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search contacts"
              />
            </InputGroup>
          </Form>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.first_name.toLowerCase().includes(search);
                })
                .map((item, index) => (
                  <tr key={index}>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Container>
      </div>
      );
    </>
  );
};

export default SearchAPI;
