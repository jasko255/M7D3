import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export default class MainSearch extends React.Component {

    state = {
        query: '',
        jobs: []
    }

        endpont = "https://remotive.io/api/remote-jobs?search="

    handleChange = (e) => {
        this.setState({query: e.target.value})
    }


    handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch("https://remotive.io/api/remote-jobs?search=" + this.state.query)
        const {jobs} = await response.json()

        this.setState({jobs})
    }
    
    render() { 
        return(
        <Container>
             <Row>
            <Col xs={10} className='mx-auto'>
            <Form onSubmit={this.handleSubmit}>
                <Form.Control type="search" value={this.state.query} onChange={this.handleChange} />
            </Form>
            </Col>
            <Col xs={10} className='mx-auto'>
            {
                this.state.jobs.map( job => <Job data={job} /> )
            }
            </Col>
            </Row>
            </Container>)
    }
}
 
