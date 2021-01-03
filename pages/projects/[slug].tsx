import React from 'react'
import { getFiles, getFileBySlug, MDXComponents } from '@/lib/postData';
import hydrate from 'next-mdx-remote/hydrate';
import {default as Page} from '@/components/pageData'
import { GetStaticProps, GetStaticPaths } from 'next'

export default function ProjectPage({mdxSource, frontMatter}) {
    const content = hydrate(mdxSource, {
      components: MDXComponents
    });
    return <Page frontMatter={frontMatter}>{content}</Page>
}

export const getStaticPaths: GetStaticPaths = async () =>  {
    const posts = await getFiles('projects');
    return {
      paths: posts.map((p) => ({
        params: {
          slug: p.replace(/\.mdx/, '')
        }
      })),
      fallback: false
    };
  }
  
export const getStaticProps: GetStaticProps = async ({params}) => {
    const post = await getFileBySlug('projects', params.slug);
    return { props: post };
}