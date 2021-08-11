import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

export default class CompanySearchResults extends React.Component {


    state = {
        jobs: []
    }


    componentDidMount() {
this.getJobs()

    }

    baseEndpoint = 'https://remotive.io/api/remote-jobs?company_name'

    getJobs = async () => {
        const response = await fetch(this.baseEndpoint + this.props.match.params.companyName)
        const  { jobs } = await response.json()

        this.setState({jobs})
    }

    render(){
        return <Container>
            <Row>
                <Col>
        {
            this.state.jobs.map(job => )
        }

                </Col>
            </Row>
        </Container>


    }

}