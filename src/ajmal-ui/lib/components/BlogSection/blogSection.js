import React, { useEffect } from 'react';
import { useScrollLock } from '@magento/peregrine';
import globalCSS from './blogSection.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useQuery, gql } from "@apollo/client";
import format from "date-fns/format";

const blogPosts = gql`
    query GetBlogPosts {
        getBlogPosts (
                search: ""
                pageSize: 20
                currentPage:1
            ){
            items {
                content
                short_content
                creation_time
                image
                image_type
                image_video_id
                image_video_type
                like
                is_active
                post_id
                real_thumbnail_url
                store_ids
                title
                update_time
            }
        }
    }`;

const BlogSection = props => {
    const { isMasked } = props;
    const { data, loading, error } = useQuery(blogPosts);

    useEffect(() => {
        AOS.init();
    }, []);

    if (loading) {
        return <div>loading</div>;
    }
    if (error) {
        return <div>{error}</div>;
    }

    if(data){
        const blogs = data.getBlogPosts.items;
        console.log("Blog List",data);

        const blogsCode = blogs.map((blog,index) => {
            console.log("Blog List:",index,blog);
            return (<>
                <img src={blog.image} alt="blog-img" className="img-fluid"/>
                <div className="blogBox_txt" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                    <span>{ format(new Date(blog.creation_time), "MMMM d, Y / m")} min read</span>
                    <h3>{blog.title}</h3>
                    <p>{blog.short_content}</p>
                </div>
            </>)
        });
        return (
            <section className="blogSection desktop-only py-55">
                <div className="blogSection_bg">
                    <div className="container">
                        <div className="blogSection_top">
                            <div className="d-flex align-items-end justify-content-between">
                                <div className="blogSection_top-left">
                                    <div className="d-flex align-items-start justify-content-between flex-column">
                                        <div>
                                            <h3 className="sectionHeading my-30 mt-0">Read our latest blog posts</h3>
                                            <a href="#" className="discoverAllBtn">Read More</a>
                                        </div>
                                        <div className="blogBox blogBox-one" data-aos="fade-down" data-aos-mirror="true" data-aos-duration="1000">
                                            {blogsCode[0]}
                                        </div>
                                    </div>
                                </div>
                                <div className="blogSection_top-right">
                                    <div className="blogBox blogBox-two" data-aos="fade-down" data-aos-duration="1000">
                                        {blogsCode[1]}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blogSection_bottom">
                            <div className="d-flex align-items-top justify-content-between">
                                <div className="blogBox blogBox-three" data-aos="fade-down" data-aos-duration="1000">
                                    {blogsCode[2]}
                                </div>
                                <div className="blogBox blogBox-four" data-aos="fade-down" data-aos-duration="1000">
                                    {blogsCode[3]}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};

export default BlogSection;

BlogSection.propTypes = {};
