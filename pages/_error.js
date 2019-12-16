import Layout from '../components/Layout';

export default ({ statusCode }) => (
    <Layout title="Error!!!">
        {
            statusCode ?
            `Sorry couldn't load data, Status Code: ${statusCode}` :
            `Couldn't find that page, Sorry!!!`
        }
    </Layout>
)