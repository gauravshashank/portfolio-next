import Layout from "../components/Layout";
import { Component } from "react";
import Link from "next/link";

const PostLink = ({ title, slug }) => (
  <li>
    <Link as={`${slug}`} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

export default class Blog extends Component {
  render() {
    return (
      <Layout title=" My Blog">
        <ul>
            <PostLink slug="/react_post" title="React Post" />
            <PostLink slug="/angular_post" title="Angular Post" />
            <PostLink slug="/vue_post" title="Vue Post" />
        </ul>
      </Layout>
    );
  }
}
