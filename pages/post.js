import Layout from '../components/Layout';
import { withRouter, Router } from 'next/router';

const Posts = ({router}) => (
  <Layout title={router.query.title}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet
        dignissim purus. Morbi fringilla ante nisl, ac placerat orci gravida sit
        amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        posuere cubilia Curae; Curabitur vulputate interdum accumsan. Integer ac
        commodo nisi, scelerisque suscipit libero. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam id magna sed
        urna molestie pharetra vitae at quam. Ut nec leo eros. In laoreet suscipit
        orci et vulputate. Sed id fringilla ex. 
        Cras vehicula augue at elementum
        condimentum. Pellentesque dapibus tortor quis tellus ultrices, et tempus
        ipsum efficitur. Fusce sed varius tellus, nec bibendum odio. Nam finibus
        nisi vitae felis porttitor, quis pretium arcu bibendum. Duis erat dui,
        aliquam a accumsan convallis, suscipit at ligula. Pellentesque egestas quam
        vel dapibus malesuada.
      </p>
  </Layout>
);

export default withRouter(Posts);
