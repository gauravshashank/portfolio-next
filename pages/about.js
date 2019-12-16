import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import { Component } from 'react';
import Link from 'next/link';
import Error from './_error';

export default class About extends Component {

    //Needed for CSR
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         avatar_url: '',
    //         url: '',
    //         name: ''
    //     };
    // }

    //NextJS Server Side rendering of data.
    static async getInitialProps() {
        const res = await fetch('https://api.github.com/users/gauravshashank')
        const data = await res.json();
        const statusCode = res.status > 200 ? res.status : false;
        return {avatar_url: data.avatar_url, followAt: data.url, name: data.name, statusCode};
    }

    //Client Side Rendering
    // componentDidMount() {
    //     fetch('https://api.github.com/users/gauravshashank')
    //     .then( res => res.json())
    //     .then( data => this.setState({
    //         avatar_url: data.avatar_url,
    //         url: data.url,
    //         name: data.name
    //     }))
    // }

    render() {
        //Client Side Rendering
        // const {avatar_url, url, name} = this.state;
        const {avatar_url, followAt, name, statusCode} = this.props;
        if(statusCode) {
            return <Error statusCode = {statusCode} />
        }
        return (
            <Layout title="About">
                <img src={avatar_url} alt="me" height="200px"/>
                <p>This is the about page of {name}, a javascript developer.</p>
                <Link href={followAt}>
                    <p>Follow him at <a>{followAt}</a></p>
                </Link>
            </Layout>
        )
    }
}